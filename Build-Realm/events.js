/* =========================================================
   EVENTS.JS — Events-System (Halloween + zukünftige Events)
   Exportiert alle Event-Funktionen
   ========================================================= */

import {
  BUILDINGS,
  HALLOWEEN_BUILDINGS,
  ICONS,
  RARITIES,
  BASE_STATS,
  SOLDIER_TYPES,
  rarityPalette,
  getCardStats
} from './buildings.js';

/* ============ HALLOWEEN STATE ============ */
export const HALLOWEEN_STATE = {
  enabled: false,
  startedAt: 0,
  introSeen: false,
  loadedFromServer: false
};

/* ============ HALLOWEEN SOLDIER TYPES ============ */
export const HALLOWEEN_SOLDIER_TYPES = {
  witch:    { id: 'witch',    name: 'Witch',        desc: 'Heals nearby allies',     ability: 'heal',    abilityCooldown: 3.0, abilityRange: 200, abilityPower: 25 },
  pumpkin:  { id: 'pumpkin',  name: 'Pumpkin Brute',desc: 'Explodes on death',       ability: 'explode', abilityCooldown: 0,   abilityRange: 0,   abilityPower: 60 },
  ghost:    { id: 'ghost',    name: 'Ghost',        desc: 'Phases through walls',    ability: 'phase',   abilityCooldown: 5.0, abilityRange: 150, abilityPower: 0 },
  vampire:  { id: 'vampire',  name: 'Vampire',      desc: 'Drains HP on hit',        ability: 'drain',   abilityCooldown: 0,   abilityRange: 40,  abilityPower: 0.4 },
  skull:    { id: 'skull',    name: 'Necromancer',  desc: 'Summons skeleton minions',ability: 'summon',  abilityCooldown: 8.0, abilityRange: 300, abilityPower: 2 },
  skeleton: { id: 'skeleton', name: 'Skeleton Minion', desc: 'Summoned (temporary)', ability: 'none',    abilityCooldown: 0,   abilityRange: 0,   abilityPower: 0, temporary: true, lifetime: 30 }
};

export const HALLOWEEN_BASE_STATS = {
  witch:    { hp: 90,  damage: 10, speed: 1.0, range: 150, attackInterval: 1.3, behavior: 'ranged' },
  pumpkin:  { hp: 260, damage: 14, speed: 0.8, range: 35,  attackInterval: 1.2, behavior: 'melee' },
  ghost:    { hp: 80,  damage: 12, speed: 1.6, range: 40,  attackInterval: 0.9, behavior: 'melee' },
  vampire:  { hp: 150, damage: 16, speed: 1.3, range: 40,  attackInterval: 0.9, behavior: 'melee' },
  skull:    { hp: 110, damage: 6,  speed: 0.9, range: 200, attackInterval: 1.5, behavior: 'ranged' },
  skeleton: { hp: 40,  damage: 4,  speed: 1.2, range: 30,  attackInterval: 1.0, behavior: 'melee' }
};

/* ============ EXTENDED getCardStats (nutzt Halloween-Stats) ============ */
export function getCardStatsExtended(type, rarity, level) {
  const base = HALLOWEEN_BASE_STATS[type] || BASE_STATS[type] || BASE_STATS.soldier;
  const rMult = RARITIES[rarity]?.mult || 1.0;
  const lvlMult = level ? (1 + (level - 1) * 0.08) : 1.0;
  return {
    hp: Math.round(base.hp * rMult * lvlMult),
    damage: Math.round(base.damage * rMult * lvlMult),
    speed: base.speed,
    range: base.range,
    attackInterval: base.attackInterval,
    behavior: base.behavior
  };
}

/* ============ HALLOWEEN CANDY SYSTEM ============ */
let candyAccumulator = 0;
let mineGemAccumulator = 0;

export function getCandyBoostMultiplier(state) {
  let mult = 1;
  state.buildings.forEach(b => {
    if (b.construction) return;
    const def = BUILDINGS[b.type] || HALLOWEEN_BUILDINGS[b.type];
    if (!def) return;
    if (b.type === 'cauldron' && def.candyBoost) mult += def.candyBoost[b.level - 1] || 0;
    if (b.type === 'crypt' && def.allBoost) mult += def.allBoost[b.level - 1] || 0;
  });
  return mult;
}
export function getTotalCandyPerMinute(state) {
  let total = 0;
  const boost = getCandyBoostMultiplier(state);
  state.buildings.forEach(b => {
    if (b.construction) return;
    const def = HALLOWEEN_BUILDINGS[b.type];
    if (!def || !def.candyPerLevel) return;
    total += def.candyPerLevel[b.level - 1] || 0;
  });
  return Math.floor(total * boost);
}

export function candyTick(dt, state, deps) {
  // Läuft IMMER wenn Halloween-Gebäude existieren — auch wenn Event aus ist
  const hasHalloweenBuildings = state.buildings.some(b => (HALLOWEEN_BUILDINGS[b.type]?.isHalloween));
  if (!HALLOWEEN_STATE.enabled && !hasHalloweenBuildings) return;
  candyAccumulator += dt;
  while (candyAccumulator >= 60) {
    candyAccumulator -= 60;
    // Passive base nur wenn Event aktiv
    const basePassive = HALLOWEEN_STATE.enabled ? 1 : 0;
    const farmGain = getTotalCandyPerMinute(state);
    const gain = basePassive + farmGain;
    if (gain > 0) {
      state.candy = (state.candy || 0) + gain;
      if (deps && deps.showCandyFloat) deps.showCandyFloat(gain);
      if (deps && deps.writeLocalCache) deps.writeLocalCache();
    }
  }
}

/* ============ HALLOWEEN AURAS / EFFECTS ============ */
export function halloweenBuildingTick(state, deps) {
  // Auren laufen weiter, auch wenn Event aus ist (Gebäude existieren ja)
  state.buildings.forEach(b => {
    if (b.construction) return;
    const def = HALLOWEEN_BUILDINGS[b.type];
    if (!def) return;

    // Witch Tower — Schaden an Feinden in Reichweite
    if (b.type === 'witchTower' && def.curseAura) {
      const dmg = def.curseAura[b.level - 1];
      const range = 250;
      const size = def.size * 48;
      const cx = b.x + size / 2, cy = b.y + size / 2;
      if (deps && deps.soldierUnits) {
        deps.soldierUnits.forEach(s => {
          if (s.side !== 'enemy') return;
          if (Math.hypot(s.x - cx, s.y - cy) <= range) {
            s.hp = Math.max(0, s.hp - Math.floor(dmg / 10));
            if (Math.random() < 0.3 && deps.showFloatText) deps.showFloatText(s.x, s.y - 25, '🌫', '#8a4a9a');
          }
        });
      }
    }

    // Haunted House — Furcht-Aura (reduziert Feindschaden)
    if (b.type === 'hauntedHouse' && def.fearAura) {
      const range = 300;
      const size = def.size * 48;
      const cx = b.x + size / 2, cy = b.y + size / 2;
      if (deps && deps.soldierUnits) {
        deps.soldierUnits.forEach(s => {
          if (s.side !== 'enemy') return;
          if (Math.hypot(s.x - cx, s.y - cy) <= range) s._feared = true;
          else s._feared = false;
        });
      }
    }

    // Boneyard — Skelette spawnen
    if (b.type === 'boneYard' && def.skeletonSpawn) {
      const size = def.size * 48;
      const cx = b.x + size / 2, cy = b.y + size / 2;
      if (deps && deps.soldierUnits && deps.spawnSoldierUnit) {
        const enemies = deps.soldierUnits.filter(s => s.side === 'enemy' && Math.hypot(s.x - cx, s.y - cy) <= 200);
        const skeletons = deps.soldierUnits.filter(s => s.side === 'friendly' && s.troopType === 'skeleton');
        if (enemies.length > 0 && skeletons.length < 5) {
          const count = def.skeletonSpawn[b.level - 1];
          for (let k = 0; k < Math.min(count, 5 - skeletons.length); k++) {
            const ang = Math.random() * Math.PI * 2;
            const sx = cx + Math.cos(ang) * 40;
            const sy = cy + Math.sin(ang) * 40;
            deps.spawnSoldierUnit(sx, sy, enemies[0].x, enemies[0].y, 'friendly', null, 'skeleton', 'common', 'Skeleton');
          }
        }
      }
    }
  });
}

/* ============ CANDY DROPS ON DEATH ============ */
export function tryCandyDropOnDeath(dead, state, deps) {
  if (!HALLOWEEN_STATE.enabled) return;
  if (dead.side === 'enemy') {
    const drop = 10 + Math.floor(Math.random() * 41); // 10-50
    state.candy = (state.candy || 0) + drop;
    if (deps && deps.showCandyFloat) deps.showCandyFloat(drop);
    if (deps && deps.writeLocalCache) deps.writeLocalCache();
  } else if (dead.side === 'friendly' && Math.random() < 0.1) {
    const drop = 5;
    state.candy = (state.candy || 0) + drop;
    if (deps && deps.showCandyFloat) deps.showCandyFloat(drop);
    if (deps && deps.writeLocalCache) deps.writeLocalCache();
  }
}

/* ============ HALLOWEEN ABILITIES (pro Frame) ============ */
export function processHalloweenAbilities(dt, soldierUnits, spawnSoldierUnit, showFloatText) {
  for (let i = soldierUnits.length - 1; i >= 0; i--) {
    const s = soldierUnits[i];
    if (!s.ability || s.ability === 'none') continue;

    // Temporäre Einheiten (Skelette) altern
    if (s._lifetime !== undefined) {
      s._age = (s._age || 0) + dt;
      if (s._age >= s._lifetime) { soldierUnits.splice(i, 1); continue; }
    }

    s._abilityTimer = (s._abilityTimer || 0) + dt;

    // Heal (Hexe)
    if (s.ability === 'heal' && s._abilityTimer >= (s.abilityCooldown || 3)) {
      s._abilityTimer = 0;
      soldierUnits.forEach(o => {
        if (o.side !== s.side || o === s) return;
        if (Math.hypot(o.x - s.x, o.y - s.y) <= s.abilityRange) {
          const before = o.hp;
          o.hp = Math.min(o.maxHp, o.hp + s.abilityPower);
          if (o.hp > before && showFloatText) showFloatText(o.x, o.y - 30, `+${Math.round(o.hp - before)}`, '#4caf50');
        }
      });
    }

    // Phase (Geist — ignoriert Wände)
    if (s.ability === 'phase') s._ignoreWalls = true;

    // Summon (Necromancer)
    if (s.ability === 'summon' && s._abilityTimer >= (s.abilityCooldown || 8)) {
      s._abilityTimer = 0;
      for (let k = 0; k < s.abilityPower; k++) {
        const ang = Math.random() * Math.PI * 2;
        const rx = s.x + Math.cos(ang) * 30;
        const ry = s.y + Math.sin(ang) * 30;
        if (spawnSoldierUnit) {
          spawnSoldierUnit(rx, ry, rx + Math.random() * 100 - 50, ry + Math.random() * 100 - 50, s.side, s.targetBuilding, 'skeleton', s.rarity, 'Skeleton');
        }
      }
      if (showFloatText) showFloatText(s.x, s.y - 40, '💀 Summon!', '#8a4a9a');
    }
  }
}

export function prePassPumpkinExplode(soldierUnits, showFloatText) {
  for (let i = soldierUnits.length - 1; i >= 0; i--) {
    const s = soldierUnits[i];
    if (s.hp <= 0 && s.ability === 'explode') {
      const dmg = s.abilityPower || 60;
      soldierUnits.forEach(o => {
        if (o === s || o.side === s.side) return;
        if (Math.hypot(o.x - s.x, o.y - s.y) <= 80) {
          o.hp = Math.max(0, o.hp - dmg);
          if (showFloatText) showFloatText(o.x, o.y - 25, `-${dmg}`, '#ff6b00');
        }
      });
      if (showFloatText) showFloatText(s.x, s.y, '💥 BOOM!', '#ff6b00');
    }
  }
}

/* ============ STARTBONUS / DAILY BONUS ============ */
export function giveStartBonus(state, deps) {
  if (!HALLOWEEN_STATE.enabled) return 0;
  if (state.candy && state.candy >= 500) return 0;
  const bonus = 500;
  state.candy = (state.candy || 0) + bonus;
  if (deps && deps.notify) deps.notify(`🎁 Willkommensgeschenk: +${bonus} Candy!`, false, true);
  if (deps && deps.showCandyFloat) deps.showCandyFloat(bonus);
  return bonus;
}

export function checkDailyBonus(state, deps) {
  if (!HALLOWEEN_STATE.enabled) return 0;
  try {
    const now = Date.now();
    const lastDaily = Number(localStorage.getItem('br_last_daily_candy') || 0);
    const dayMs = 24 * 60 * 60 * 1000;
    if (now - lastDaily > dayMs) {
      const bonus = 200;
      state.candy = (state.candy || 0) + bonus;
      localStorage.setItem('br_last_daily_candy', String(now));
      if (deps && deps.notify) deps.notify(`🎁 Daily Login Bonus: +${bonus} Candy!`, false, true);
      if (deps && deps.showCandyFloat) deps.showCandyFloat(bonus);
      return bonus;
    }
  } catch(e) {}
  return 0;
}

/* ============ APPLY HALLOWEEN STATE (Body-Class, Chip, Tab) ============ */
export function applyHalloweenState(state, deps) {
  const hasHalloweenBuildings = state.buildings.some(b => HALLOWEEN_BUILDINGS[b.type]?.isHalloween);
  const candyChip = document.getElementById('candyChip');
  const hwTab = document.getElementById('halloweenTab');

  if (HALLOWEEN_STATE.enabled) {
    document.body.classList.add('halloween-active');
    if (candyChip) candyChip.style.display = 'flex';
    if (hwTab) hwTab.style.display = '';
    buildHalloweenDecorations(deps && deps.worldEl);
  } else {
    document.body.classList.remove('halloween-active');
    // Candy-Chip bleibt sichtbar wenn Halloween-Gebäude existieren
    if (candyChip) candyChip.style.display = hasHalloweenBuildings ? 'flex' : 'none';
    if (hwTab) hwTab.style.display = 'none';
    if (state.activeTab === 'halloween') {
      state.activeTab = 'all';
      document.querySelectorAll('.tab-btn').forEach(b => {
        if (b.dataset.cat === 'all') b.classList.add('active');
        else b.classList.remove('active');
      });
    }
    document.querySelectorAll('.halloween-deco').forEach(el => el.remove());
  }
  if (deps && deps.updateUI) deps.updateUI();
  if (deps && deps.renderBuildingList) deps.renderBuildingList();
  markHalloweenBuildings(state);
}

/* ============ MARK HALLOWEEN BUILDINGS (Badge / Disabled Banner) ============ */
export function markHalloweenBuildings(state) {
  state.buildings.forEach(b => {
    if (!b.el) return;
    const isHW = HALLOWEEN_BUILDINGS[b.type]?.isHalloween;
    if (!isHW) return;
    let badge = b.el.querySelector('.halloween-badge');
    if (!badge) {
      badge = document.createElement('div');
      badge.className = 'halloween-badge';
      badge.textContent = '🎃';
      b.el.appendChild(badge);
    }
    let dis = b.el.querySelector('.halloween-disabled-banner');
    if (!HALLOWEEN_STATE.enabled) {
      if (!dis) {
        dis = document.createElement('div');
        dis.className = 'halloween-disabled-banner';
        dis.textContent = 'EVENT AUS';
        b.el.appendChild(dis);
      }
    } else {
      if (dis) dis.remove();
    }
  });
}

/* ============ HALLOWEEN WORLD DECORATIONS ============ */
export function buildHalloweenDecorations(worldEl) {
  if (!worldEl) return;
  document.querySelectorAll('.halloween-deco').forEach(el => el.remove());
  if (!HALLOWEEN_STATE.enabled) return;
  const WORLD_SIZE = 60000;

  // Kürbisse
  for (let i = 0; i < 400; i++) {
    const d = document.createElement('div');
    d.className = 'halloween-deco pumpkin-deco';
    const size = 14 + Math.random() * 12;
    const hue = 20 + Math.random() * 20;
    d.innerHTML = `<svg viewBox="0 0 30 30" width="${size}" height="${size}"><ellipse cx="15" cy="20" rx="11" ry="9" fill="hsl(${hue},90%,55%)" stroke="#a04a00" stroke-width="1"/><rect x="13" y="8" width="4" height="5" fill="#5a3a00"/></svg>`;
    d.style.left = Math.random() * WORLD_SIZE + 'px';
    d.style.top = Math.random() * WORLD_SIZE + 'px';
    worldEl.appendChild(d);
  }
  // Grabsteine
  for (let i = 0; i < 200; i++) {
    const d = document.createElement('div');
    d.className = 'halloween-deco tombstone';
    const size = 18 + Math.random() * 10;
    d.innerHTML = `<svg viewBox="0 0 30 40" width="${size}" height="${size*1.3}"><rect x="7" y="14" width="16" height="24" rx="6" fill="#7a7a85" stroke="#3a3a4a" stroke-width="1.2"/><text x="15" y="28" font-size="10" font-weight="900" text-anchor="middle" fill="#3a3a4a">RIP</text></svg>`;
    d.style.left = Math.random() * WORLD_SIZE + 'px';
    d.style.top = Math.random() * WORLD_SIZE + 'px';
    worldEl.appendChild(d);
  }
  // Spinnweben
  for (let i = 0; i < 100; i++) {
    const d = document.createElement('div');
    d.className = 'halloween-deco spider-web';
    const size = 40 + Math.random() * 60;
    d.innerHTML = `<svg viewBox="0 0 60 60" width="${size}" height="${size}" opacity="0.5"><path d="M30 5 L30 55 M5 30 L55 30 M10 10 L50 50 M50 10 L10 50" stroke="#d0d0d0" stroke-width="0.4"/></svg>`;
    d.style.left = Math.random() * WORLD_SIZE + 'px';
    d.style.top = Math.random() * WORLD_SIZE + 'px';
    worldEl.appendChild(d);
  }
  // Nebelflecken
  for (let i = 0; i < 300; i++) {
    const d = document.createElement('div');
    d.className = 'halloween-deco fog-patch';
    const sz = 200 + Math.random() * 500;
    d.style.width = sz + 'px';
    d.style.height = sz + 'px';
    d.style.left = Math.random() * WORLD_SIZE + 'px';
    d.style.top = Math.random() * WORLD_SIZE + 'px';
    worldEl.appendChild(d);
  }
}

/* ============ HALLOWEEN LISTENER (Firebase) ============ */
export function startHalloweenListener(firebase, currentUser, deps) {
  if (!firebase) return;
  const { ref, onValue } = firebase;
  onValue(ref(firebase.db, 'config/halloween'), (snap) => {
    const data = snap.val() || {};
    const wasEnabled = HALLOWEEN_STATE.enabled;
    HALLOWEEN_STATE.enabled = data.enabled === true;
    HALLOWEEN_STATE.startedAt = data.startedAt || 0;
    HALLOWEEN_STATE.loadedFromServer = true;
    if (wasEnabled !== HALLOWEEN_STATE.enabled) {
      if (deps && deps.applyHalloweenState) deps.applyHalloweenState();
      if (HALLOWEEN_STATE.enabled && currentUser) {
        if (deps && deps.notify) deps.notify('🎃 Halloween Event aktiviert!', false, true);
      } else if (!HALLOWEEN_STATE.enabled && currentUser) {
        if (deps && deps.notify) deps.notify('Halloween Event beendet. Candy & Gebäude bleiben erhalten.', false, true);
      }
    }
    // Intro-Popup
    if (HALLOWEEN_STATE.enabled && currentUser && !HALLOWEEN_STATE.introSeen) {
      setTimeout(() => showHalloweenIntro(), 1200);
    }
  });
}

/* ============ HALLOWEEN INTRO POPUP ============ */
export function showHalloweenIntro() {
  if (HALLOWEEN_STATE.introSeen) return;
  const el = document.getElementById('halloweenIntro');
  if (!el) return;
  el.classList.add('show');
  if (navigator.vibrate) navigator.vibrate([80, 40, 80, 40, 200]);
}

export function setupHalloweenIntroButton(firebase, ACTIVE_HWID, state, deps) {
  const btn = document.getElementById('hiConfirm');
  if (!btn) return;
  btn.onclick = async () => {
    document.getElementById('halloweenIntro').classList.remove('show');
    HALLOWEEN_STATE.introSeen = true;
    // Startbonus
    giveStartBonus(state, deps);
    if (firebase && ACTIVE_HWID) {
      try {
        const { ref, update } = firebase;
        await update(ref(firebase.db, 'saves/' + ACTIVE_HWID), {
          halloweenSeen: true,
          candy: Math.floor(state.candy || 0)
        });
      } catch(e) {}
    }
    if (deps && deps.writeLocalCache) deps.writeLocalCache();
    if (deps && deps.updateUI) deps.updateUI();
    if (deps && deps.scheduleSave) deps.scheduleSave();
  };
}

/* ============ SAVE HELPER (Halloween-State in Save) ============ */
export function extendSaveData(data, state) {
  data.candy = Math.floor(state.candy || 0);
  data.halloweenSeen = HALLOWEEN_STATE.introSeen;
  return data;
}

/* ============ LOAD HELPER (Halloween-State aus Save) ============ */
export function extendLoadData(data, state) {
  state.candy = Number(data.candy) || 0;
  HALLOWEEN_STATE.introSeen = data.halloweenSeen === true;
}

/* ============ OFFLINE CANDY (beim Laden) ============ */
export function computeOfflineCandy(offlineSeconds, state) {
  if (!HALLOWEEN_STATE.enabled) return 0;
  const candyPerMin = getTotalCandyPerMinute(state);
  if (candyPerMin <= 0) return 0;
  const cappedMin = Math.min(offlineSeconds / 60, 60 * 8);
  return Math.floor(candyPerMin * cappedMin);
}