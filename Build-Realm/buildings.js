/* =========================================================
   BUILDINGS.JS — Alle Gebäude, SVGs, Icons, Stats
   v2 — Komplett überarbeitete Gebäude-Art (Shading, Detail,
        Level-Progression) + Halloween-Erweiterung
   ========================================================= */

export const RARITIES = {
  common:    { id: 'common',    name: 'Common',    color: '#8a9380', order: 1, mult: 1.0 },
  uncommon:  { id: 'uncommon',  name: 'Uncommon',  color: '#4ec9a0', order: 2, mult: 1.3 },
  rare:      { id: 'rare',      name: 'Rare',      color: '#4a9eff', order: 3, mult: 1.7 },
  epic:      { id: 'epic',      name: 'Epic',      color: '#b366ff', order: 4, mult: 2.3 },
  legendary: { id: 'legendary', name: 'Legendary', color: '#ffd700', order: 5, mult: 3.2 },
  mythic:    { id: 'mythic',    name: 'Mythic',    color: '#ff3a3a', order: 6, mult: 4.5 }
};

export const BASE_STATS = {
  soldier:  { hp: 100, damage: 8,  speed: 1.2, range: 30,  attackInterval: 1.0,  behavior: 'melee' },
  archer:   { hp: 70,  damage: 14, speed: 1.0, range: 350, attackInterval: 1.4,  behavior: 'ranged' },
  spearman: { hp: 90,  damage: 12, speed: 1.1, range: 180, attackInterval: 1.2,  behavior: 'ranged' },
  tank:     { hp: 300, damage: 10, speed: 0.7, range: 30,  attackInterval: 1.5,  behavior: 'melee' },
  elite:    { hp: 220, damage: 18, speed: 1.4, range: 35,  attackInterval: 0.8,  behavior: 'melee' }
};

export const SOLDIER_TYPES = {
  soldier:  { id: 'soldier',  name: 'Soldier',  desc: 'Standard melee' },
  archer:   { id: 'archer',   name: 'Archer',   desc: 'Ranged — keeps distance' },
  spearman: { id: 'spearman', name: 'Spearman', desc: 'Throws spears' },
  tank:     { id: 'tank',     name: 'Tank',     desc: 'Heavy armored' },
  elite:    { id: 'elite',    name: 'Elite',    desc: 'Elite knight' },
  witch:    { id: 'witch',    name: 'Witch',    desc: 'Heals allies' },
  pumpkin:  { id: 'pumpkin',  name: 'Pumpkin Brute', desc: 'Explodes on death' },
  ghost:    { id: 'ghost',    name: 'Ghost',    desc: 'Phases walls' },
  vampire:  { id: 'vampire',  name: 'Vampire',  desc: 'Drains HP' },
  skull:    { id: 'skull',    name: 'Necromancer', desc: 'Summons skeletons' },
  skeleton: { id: 'skeleton', name: 'Skeleton', desc: 'Temporary minion' }
};

export const ICONS = {
  money: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" fill="#ffd54f" stroke="#c99a00" stroke-width="1.5"/><text x="12" y="16.5" font-size="11" font-weight="900" text-anchor="middle" fill="#7a5c00">$</text></svg>`,
  gold: `<svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="18" rx="8" ry="3" fill="#ffca28" stroke="#b8860b" stroke-width="1.3"/><ellipse cx="12" cy="14" rx="8" ry="3" fill="#ffd54f" stroke="#b8860b" stroke-width="1.3"/><ellipse cx="12" cy="10" rx="8" ry="3" fill="#ffe082" stroke="#b8860b" stroke-width="1.3"/></svg>`,
  food: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 22 V8" stroke="#8d6e00" stroke-width="1.8"/><path d="M12 8 C8 8 6 5 6 2 C10 2 12 5 12 8 Z" fill="#ffd54f" stroke="#8d6e00" stroke-width="1.2"/><path d="M12 8 C16 8 18 5 18 2 C14 2 12 5 12 8 Z" fill="#ffecb3" stroke="#8d6e00" stroke-width="1.2"/></svg>`,
  wood: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="4" rx="2" fill="#a1887f" stroke="#4e342e" stroke-width="1.3"/><rect x="3" y="12" width="18" height="4" rx="2" fill="#8d6e63" stroke="#4e342e" stroke-width="1.3"/><rect x="3" y="17" width="18" height="4" rx="2" fill="#a1887f" stroke="#4e342e" stroke-width="1.3"/></svg>`,
  stone: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 20 L6 9 L12 6 L18 9 L20 20 Z" fill="#b0bec5" stroke="#455a64" stroke-width="1.3" stroke-linejoin="round"/></svg>`,
  pop: `<svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3.2" fill="#90caf9" stroke="#2f6fd0" stroke-width="1.3"/><path d="M3 20 C3 15 6 13 9 13 C12 13 15 15 15 20 Z" fill="#90caf9" stroke="#2f6fd0" stroke-width="1.3"/></svg>`,
  worker: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="6" r="3" fill="#ffb74d" stroke="#bf6a00" stroke-width="1.3"/><path d="M6 21 V14 C6 11 9 10 12 10 C15 10 18 11 18 14 V21 Z" fill="#ffcc80" stroke="#bf6a00" stroke-width="1.3"/></svg>`,
  soldier: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2 L14 5 L17 4 L18 7 L21 8 L19 11 L21 13 L18 14 L17 17 L14 16 L12 19 L10 16 L7 17 L6 14 L3 13 L5 11 L3 8 L6 7 L7 4 L10 5 Z" fill="#ef5350" stroke="#b71c1c" stroke-width="1.2" stroke-linejoin="round"/><circle cx="12" cy="10.5" r="1.6" fill="#fff"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2 L14.9 8.6 L22 9.3 L16.5 14 L18.2 21 L12 17.3 L5.8 21 L7.5 14 L2 9.3 L9.1 8.6 Z" fill="#ffd54f" stroke="#c99a00" stroke-width="1.3" stroke-linejoin="round"/></svg>`,
  main: `<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="10" width="16" height="11" fill="#c9a84c" stroke="#7a5c10" stroke-width="1.3"/><polygon points="2,10 12,3 22,10" fill="#8d3b2a" stroke="#5a1a1a" stroke-width="1.3" stroke-linejoin="round"/><rect x="10" y="15" width="4" height="6" fill="#4a2f10"/></svg>`,
  house: `<svg viewBox="0 0 24 24" fill="none"><rect x="5" y="12" width="14" height="9" fill="#d98e5a" stroke="#7a3b1a" stroke-width="1.3"/><polygon points="3,12 12,4 21,12" fill="#a83232" stroke="#5a1a1a" stroke-width="1.3" stroke-linejoin="round"/></svg>`,
  farm: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="14" width="18" height="7" fill="#8bc34a" stroke="#558b2f" stroke-width="1.3"/><rect x="14" y="7" width="7" height="7" fill="#a1887f" stroke="#5d4037" stroke-width="1.3"/></svg>`,
  lumber: `<svg viewBox="0 0 24 24" fill="none"><rect x="6" y="11" width="12" height="10" fill="#795548" stroke="#4e342e" stroke-width="1.3"/><polygon points="4,11 12,3 20,11" fill="#5d4037"/></svg>`,
  quarry: `<svg viewBox="0 0 24 24" fill="none"><path d="M2 21 L6 10 L11 13 L15 7 L22 21 Z" fill="#b0bec5" stroke="#546e7a" stroke-width="1.3"/></svg>`,
  market: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="10" width="18" height="11" fill="#ffe0b2" stroke="#bf8f5a" stroke-width="1.3"/><polygon points="2,10 4,5 8,5 10,10" fill="#e53935"/><polygon points="10,10 12,5 16,5 18,10" fill="#43a047"/></svg>`,
  mine: `<svg viewBox="0 0 24 24" fill="none"><path d="M2 22 Q12 4 22 22 Z" fill="#6d4c41" stroke="#3e2723" stroke-width="1.4"/><path d="M7 22 Q12 10 17 22 Z" fill="#1a1a1a"/></svg>`,
  gemMine: `<svg viewBox="0 0 24 24" fill="none"><path d="M2 22 Q12 4 22 22 Z" fill="#6d4c41" stroke="#3e2723" stroke-width="1.4"/><path d="M7 22 Q12 10 17 22 Z" fill="#1a1a1a"/><path d="M6 3 L18 3 L22 9 L12 22 L2 9 Z" fill="#a87ee0" stroke="#3a1a6a" stroke-width="1.5" stroke-linejoin="round" transform="translate(12 12) scale(0.4) translate(-12 -12)"/></svg>`,
  barracks: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="10" fill="#8d6e63" stroke="#4e342e" stroke-width="1.3"/><polygon points="2,11 12,4 22,11" fill="#5d4037"/></svg>`,
  tower: `<svg viewBox="0 0 24 24" fill="none"><rect x="9" y="7" width="6" height="15" fill="#78909c" stroke="#37474f" stroke-width="1.3"/><polygon points="7,5 9,1 12,4 15,1 17,5" fill="#b71c1c"/></svg>`,
  factory: `<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="10" width="20" height="12" fill="#546e7a" stroke="#37474f" stroke-width="1.3"/><rect x="5" y="4" width="2.5" height="6" fill="#37474f"/><rect x="10" y="2" width="2.5" height="8" fill="#37474f"/></svg>`,
  fortress: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="9" width="18" height="13" fill="#7a6a9a" stroke="#2a1d4a" stroke-width="1.3"/><rect x="2" y="7" width="3" height="15" fill="#8e7eae"/><rect x="19" y="7" width="3" height="15" fill="#8e7eae"/></svg>`,
  church: `<svg viewBox="0 0 24 24" fill="none"><rect x="6" y="10" width="12" height="12" fill="#e8dfc8" stroke="#8d7a4a" stroke-width="1.3"/><polygon points="4,10 12,3 20,10" fill="#8d6e63"/><rect x="11" y="0" width="2" height="5" fill="#c9a84c"/></svg>`,
  well: `<svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="19" rx="8" ry="3" fill="#90a4ae" stroke="#455a64" stroke-width="1.3"/><rect x="5" y="12" width="14" height="7" fill="#b0bec5"/><polygon points="5,5 12,2 19,5" fill="#8d3b2a"/></svg>`,
  bakery: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="10" width="18" height="12" fill="#f0c080" stroke="#8d5a20" stroke-width="1.3"/><polygon points="2,10 12,4 22,10" fill="#8d3b2a"/></svg>`,
  blacksmith: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" fill="#6d4c41" stroke="#3e2723" stroke-width="1.3"/><polygon points="2,11 12,5 22,11" fill="#4e342e"/></svg>`,
  university: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="12" width="18" height="10" fill="#e8dfc8" stroke="#8d7a4a" stroke-width="1.3"/><polygon points="2,12 12,4 22,12" fill="#8d6e63"/></svg>`,
  watchtower: `<svg viewBox="0 0 24 24" fill="none"><rect x="9" y="6" width="6" height="16" fill="#90a4ae" stroke="#37474f" stroke-width="1.3"/><path d="M7 4 L12 0 L17 4 Z" fill="#b71c1c"/></svg>`,
  wall: `<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="10" width="20" height="10" fill="#a8a8a8" stroke="#555" stroke-width="1.3"/></svg>`,
  shipyard: `<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="16" width="20" height="6" fill="#4fc3f7" stroke="#01579b" stroke-width="1.2"/><path d="M5 16 L12 8 L19 16 Z" fill="#8d6e63"/></svg>`,
  bank: `<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="10" width="20" height="11" fill="#e8dfc8" stroke="#8d7a4a" stroke-width="1.3"/><polygon points="1,10 12,3 23,10" fill="#c9a84c"/></svg>`,
  tavern: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" fill="#d7a86e" stroke="#8d5a20" stroke-width="1.3"/><polygon points="2,11 12,4 22,11" fill="#8d3b2a"/></svg>`,
  windmill: `<svg viewBox="0 0 24 24" fill="none"><rect x="9" y="12" width="6" height="10" fill="#e8dfc8" stroke="#8d7a4a" stroke-width="1.3"/><rect x="-1" y="-8" width="2" height="16" fill="#8d6e63" transform="translate(12 9)"/><rect x="-1" y="-8" width="2" height="16" fill="#8d6e63" transform="translate(12 9) rotate(90)"/></svg>`,
  fishing: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="14" width="18" height="8" fill="#4fc3f7" stroke="#01579b" stroke-width="1.2"/><path d="M6 14 Q12 8 18 14" stroke="#8d6e63" stroke-width="1.5" fill="none"/></svg>`,
  theater: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="10" width="18" height="12" fill="#e8dfc8" stroke="#8d7a4a" stroke-width="1.3"/><path d="M3 10 Q6 6 9 10 Q12 6 15 10 Q18 6 21 10" fill="#c9a84c"/></svg>`,
  library: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="16" fill="#a1887f" stroke="#4e342e" stroke-width="1.3"/></svg>`,
  harbor: `<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="17" width="20" height="5" fill="#4fc3f7" stroke="#01579b" stroke-width="1.2"/><rect x="4" y="12" width="4" height="6" fill="#8d6e63"/><rect x="16" y="12" width="4" height="6" fill="#8d6e63"/></svg>`,
  temple: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="12" width="18" height="10" fill="#e8dfc8" stroke="#8d7a4a" stroke-width="1.3"/><polygon points="2,12 12,3 22,12" fill="#c9a84c"/></svg>`,
  stable: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" fill="#a1887f" stroke="#4e342e" stroke-width="1.3"/><polygon points="2,11 12,5 22,11" fill="#8d3b2a"/></svg>`,
  arena: `<svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="15" rx="10" ry="7" fill="#a1887f" stroke="#4e342e" stroke-width="1.3"/><ellipse cx="12" cy="15" rx="7" ry="4.5" fill="#8d6e63"/></svg>`,
  workshop: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="10" width="18" height="12" fill="#78909c" stroke="#37474f" stroke-width="1.3"/><circle cx="12" cy="15" r="3" fill="#ffb74d"/></svg>`,
  cathedral: `<svg viewBox="0 0 24 24" fill="none"><rect x="6" y="10" width="12" height="12" fill="#e8dfc8" stroke="#8d7a4a" stroke-width="1.3"/><polygon points="4,10 12,3 20,10" fill="#8d6e63"/><rect x="11" y="0" width="2" height="5" fill="#c9a84c"/></svg>`,
  armory: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="10" width="18" height="12" fill="#78909c" stroke="#37474f" stroke-width="1.3"/><rect x="8" y="14" width="8" height="8" fill="#37474f"/><polygon points="12,6 14,10 10,10" fill="#ef9a9a"/></svg>`,
  monument: `<svg viewBox="0 0 24 24" fill="none"><rect x="8" y="8" width="8" height="14" fill="#e8dfc8" stroke="#8d7a4a" stroke-width="1.3"/><polygon points="12,2 16,8 8,8" fill="#c9a84c"/></svg>`,
  harbor2: `<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="15" width="20" height="7" fill="#4fc3f7" stroke="#01579b" stroke-width="1.2"/><rect x="4" y="10" width="4" height="6" fill="#8d6e63"/><rect x="16" y="10" width="4" height="6" fill="#8d6e63"/></svg>`,
  garrison: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" fill="#6d4c41" stroke="#3e2723" stroke-width="1.3"/><polygon points="2,11 12,4 22,11" fill="#4e342e"/></svg>`,
  buildersguild: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="10" fill="#ffb74d" stroke="#bf6a00" stroke-width="1.3"/><polygon points="2,11 12,4 22,11" fill="#e65100"/><rect x="10" y="14" width="4" height="7" fill="#5d4037"/><circle cx="12" cy="8" r="2" fill="#fff"/></svg>`,
  pumpkinFarm: `<svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="15" rx="8" ry="7" fill="#ff8c1a" stroke="#a04a00" stroke-width="1.3"/><ellipse cx="12" cy="15" rx="5" ry="7" fill="#ffb347" opacity="0.4"/><rect x="10" y="6" width="4" height="4" fill="#5a3a00" stroke="#3a1a00" stroke-width="0.8"/></svg>`,
  witchTower: `<svg viewBox="0 0 24 24" fill="none"><rect x="9" y="8" width="6" height="14" fill="#4a3a5a" stroke="#2a1a3a" stroke-width="1.3"/><polygon points="6,8 12,1 18,8" fill="#7a2a8a" stroke="#3a1a4a" stroke-width="1.2"/><circle cx="12" cy="5" r="1.5" fill="#ffb347"/><rect x="10" y="12" width="4" height="4" fill="#ffb347" opacity="0.7"/></svg>`,
  boneYard: `<svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="20" rx="10" ry="2" fill="#3a2a1a"/><path d="M6 18 L6 12 M6 12 A2 2 0 1 1 8 12" stroke="#e8dfc8" stroke-width="2" fill="none"/><path d="M18 18 L18 12 M18 12 A2 2 0 1 1 16 12" stroke="#e8dfc8" stroke-width="2" fill="none"/><ellipse cx="12" cy="16" rx="3" ry="4" fill="#e8dfc8" stroke="#8a7a5a" stroke-width="0.8"/><circle cx="11" cy="15" r="0.8" fill="#1a1a1a"/><circle cx="13" cy="15" r="0.8" fill="#1a1a1a"/></svg>`,
  hauntedHouse: `<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="10" width="16" height="12" fill="#3a2a4a" stroke="#1a0a2a" stroke-width="1.3"/><polygon points="2,10 12,3 22,10" fill="#5a2a4a" stroke="#2a0a1a" stroke-width="1.2"/><rect x="8" y="13" width="3" height="4" fill="#ffb347" opacity="0.8"/><rect x="13" y="13" width="3" height="4" fill="#ffb347" opacity="0.8"/><rect x="10" y="18" width="4" height="4" fill="#1a0a2a"/></svg>`,
  cauldron: `<svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="18" rx="9" ry="4" fill="#2a1a3a" stroke="#1a0a1a" stroke-width="1.3"/><path d="M3 14 Q3 8 12 8 Q21 8 21 14" fill="#3a2a4a" stroke="#1a0a1a" stroke-width="1.3"/><ellipse cx="12" cy="11" rx="8" ry="3" fill="#6aff6a" opacity="0.6"/><ellipse cx="12" cy="11" rx="5" ry="2" fill="#aaffaa"/></svg>`,
  crypt: `<svg viewBox="0 0 24 24" fill="none"><rect x="5" y="9" width="14" height="13" fill="#4a3a4a" stroke="#2a1a2a" stroke-width="1.3"/><polygon points="3,9 12,2 21,9" fill="#6a4a6a" stroke="#2a1a2a" stroke-width="1.2"/><rect x="10" y="14" width="4" height="8" fill="#1a0a1a"/><circle cx="12" cy="6" r="1.5" fill="#ffb347" opacity="0.8"/></svg>`,
  candyWorkshop: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="10" fill="#c98eb0" stroke="#6a2a4a" stroke-width="1.3"/><polygon points="2,11 12,5 22,11" fill="#8a3a6a"/><circle cx="8" cy="16" r="2" fill="#ffd6a5"/><circle cx="16" cy="16" r="2" fill="#aaffaa"/></svg>`,
  spiritGate: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 21 L4 9 Q12 1 20 9 L20 21" stroke="#7a5aa8" stroke-width="2" fill="none"/><path d="M8 21 L8 11 Q12 6 16 11 L16 21" fill="#2a1a3a" stroke="#a87ee0" stroke-width="1.2"/><circle cx="12" cy="13" r="2.4" fill="#aaffaa"/></svg>`
};

export const BUILDINGS = {
  main: { name: "Main Building", icon: "main", category: "core", size: 3, cost: 0, maxLevel: 10, desc: "Heart of your realm. Provides basic builders.", baseCost: 900, costMult: 2.4, produces: { money: 2 }, needs: { workers: 0 }, popBonus: [0,2,4,7,11,16,22,30,40,52], soldierBonus: [0,1,2,4,6,9,13,18,24,32], resourceCost: { wood: 0, stone: 0 }, buildTime: 5, isMain: true },
  house: { name: "House", icon: "house", category: "civic", size: 2, cost: 250, maxLevel: 10, desc: "Provides space for residents.", baseCost: 250, costMult: 1.95, produces: { money: 1 }, needs: { workers: 1 }, popPerLevel: [4, 9, 15, 24, 36, 52, 72, 96, 125, 160], buildTime: 8, resourceCost: { wood: 20, stone: 10 } },
  tavern: { name: "Tavern", icon: "tavern", category: "civic", size: 2, cost: 500, maxLevel: 8, desc: "Increases happiness.", baseCost: 500, costMult: 2.0, produces: { money: 3 }, needs: { workers: 2 }, happyBonus: [3, 6, 10, 14, 19, 25, 32, 40], buildTime: 10, resourceCost: { wood: 60, stone: 30 } },
  well: { name: "Well", icon: "well", category: "civic", size: 1, cost: 220, maxLevel: 6, desc: "Supplies water.", baseCost: 220, costMult: 1.9, produces: {}, needs: { workers: 1 }, happyBonus: [2, 4, 7, 10, 14, 19], buildTime: 5, resourceCost: { wood: 15, stone: 40 } },
  farm: { name: "Farm", icon: "farm", category: "production", size: 2, cost: 400, maxLevel: 10, desc: "Produces food.", baseCost: 400, costMult: 1.9, produces: { food: 5 }, needs: { workers: 3 }, factoryLevel: 5, buildTime: 9, resourceCost: { wood: 30, stone: 10 } },
  bakery: { name: "Bakery", icon: "bakery", category: "production", size: 2, cost: 700, maxLevel: 8, desc: "Processes grain.", baseCost: 700, costMult: 2.0, produces: { money: 4, food: 2 }, needs: { workers: 4 }, happyBonus: [2, 4, 7, 10, 14, 18, 23, 29], buildTime: 11, resourceCost: { wood: 50, stone: 60 } },
  lumber: { name: "Lumberjack", icon: "lumber", category: "production", size: 2, cost: 350, maxLevel: 10, desc: "Produces wood.", baseCost: 350, costMult: 1.9, produces: { wood: 4 }, needs: { workers: 3 }, buildTime: 8, resourceCost: { wood: 10, stone: 5 } },
  quarry: { name: "Quarry", icon: "quarry", category: "production", size: 2, cost: 500, maxLevel: 10, desc: "Produces stone.", baseCost: 500, costMult: 2.0, produces: { stone: 3 }, needs: { workers: 4 }, buildTime: 10, resourceCost: { wood: 30, stone: 10 } },
  blacksmith: { name: "Blacksmith", icon: "blacksmith", category: "production", size: 2, cost: 850, maxLevel: 8, desc: "Processes ore.", baseCost: 850, costMult: 2.1, produces: { money: 5, stone: 2 }, needs: { workers: 5 }, buildTime: 12, resourceCost: { wood: 40, stone: 80 } },
  windmill: { name: "Windmill", icon: "windmill", category: "production", size: 2, cost: 950, maxLevel: 8, desc: "Grinds grain.", baseCost: 950, costMult: 2.05, produces: { food: 8, wood: 2 }, needs: { workers: 4 }, buildTime: 13, resourceCost: { wood: 90, stone: 40 } },
  workshop: { name: "Workshop", icon: "workshop", category: "production", size: 2, cost: 1100, maxLevel: 8, desc: "Crafts tools.", baseCost: 1100, costMult: 2.1, produces: { money: 3, wood: 3 }, needs: { workers: 6 }, globalBonus: [0.03, 0.06, 0.10, 0.15, 0.21, 0.28, 0.36, 0.45], buildTime: 14, resourceCost: { wood: 100, stone: 80 } },
  market: { name: "Marketplace", icon: "market", category: "economy", size: 2, cost: 700, maxLevel: 10, desc: "Increases income.", baseCost: 700, costMult: 2.1, produces: { money: 6 }, needs: { workers: 4 }, buildTime: 11, resourceCost: { wood: 60, stone: 40 } },
  mine: { name: "Gold Mine", icon: "mine", category: "economy", size: 2, cost: 1200, maxLevel: 10, desc: "Extracts money! At Lv.4+ also 1% chance/sec for gems.", baseCost: 1200, costMult: 2.2, produces: { money: 11 }, needs: { workers: 6 }, buildTime: 14, resourceCost: { wood: 80, stone: 100 } },
  gemMine: { name: "Gem Mine", icon: "gemMine", category: "economy", size: 2, cost: 1500, maxLevel: 8, desc: "Produces 10 gems per hour — also offline!", baseCost: 1500, costMult: 2.2, produces: {}, needs: { workers: 6 }, gemsPerHour: 10, buildTime: 16, resourceCost: { wood: 100, stone: 120 }, unlockLevel: 3 },
  bank: { name: "Bank", icon: "bank", category: "economy", size: 3, cost: 2500, maxLevel: 8, desc: "Generates passive money.", baseCost: 2500, costMult: 2.25, produces: { money: 20 }, needs: { workers: 8 }, unlockLevel: 3, buildTime: 20, resourceCost: { wood: 150, stone: 200 } },
  university: { name: "University", icon: "university", category: "civic", size: 3, cost: 2800, maxLevel: 8, desc: "Trains specialists.", baseCost: 2800, costMult: 2.2, produces: { money: 8 }, needs: { workers: 10 }, globalBonus: [0.05, 0.10, 0.16, 0.22, 0.29, 0.37, 0.46, 0.56], unlockLevel: 4, buildTime: 22, resourceCost: { wood: 200, stone: 220 } },
  factory: { name: "Factory", icon: "factory", category: "production", size: 3, cost: 3500, maxLevel: 10, desc: "Industrial production.", baseCost: 3500, costMult: 2.3, produces: { money: 18, wood: 7, stone: 7, food: 5 }, needs: { workers: 12 }, unlockLevel: 4, buildTime: 25, resourceCost: { wood: 250, stone: 300 } },
  shipyard: { name: "Shipyard", icon: "shipyard", category: "economy", size: 3, cost: 4200, maxLevel: 8, desc: "Trade over water.", baseCost: 4200, costMult: 2.3, produces: { money: 28 }, needs: { workers: 14 }, unlockLevel: 5, buildTime: 28, resourceCost: { wood: 400, stone: 200 } },
  harbor: { name: "Harbor", icon: "harbor", category: "economy", size: 3, cost: 5200, maxLevel: 8, desc: "Trade port.", baseCost: 5200, costMult: 2.35, produces: { money: 38, food: 4 }, needs: { workers: 16 }, unlockLevel: 6, buildTime: 32, resourceCost: { wood: 500, stone: 350 } },
  library: { name: "Library", icon: "library", category: "civic", size: 2, cost: 1500, maxLevel: 8, desc: "Education.", baseCost: 1500, costMult: 2.05, produces: { money: 4 }, needs: { workers: 5 }, happyBonus: [4, 8, 13, 18, 24, 31, 39, 48], buildTime: 16, resourceCost: { wood: 120, stone: 140 } },
  theater: { name: "Theater", icon: "theater", category: "civic", size: 2, cost: 2200, maxLevel: 8, desc: "Cultural center.", baseCost: 2200, costMult: 2.2, produces: { money: 6 }, needs: { workers: 7 }, happyBonus: [6, 12, 19, 27, 36, 46, 57, 69], unlockLevel: 3, buildTime: 20, resourceCost: { wood: 180, stone: 200 } },
  temple: { name: "Temple", icon: "temple", category: "civic", size: 3, cost: 4000, maxLevel: 8, desc: "Sacred place.", baseCost: 4000, costMult: 2.3, produces: { money: 12 }, needs: { workers: 10 }, happyBonus: [8, 16, 25, 35, 46, 58, 71, 85], unlockLevel: 5, buildTime: 30, resourceCost: { wood: 250, stone: 500 } },
  stable: { name: "Stable", icon: "stable", category: "production", size: 2, cost: 1600, maxLevel: 8, desc: "Animal breeding.", baseCost: 1600, costMult: 2.1, produces: { food: 6, money: 3 }, needs: { workers: 5 }, soldierPerLevel: [0, 1, 2, 3, 5, 7, 9, 12], buildTime: 15, resourceCost: { wood: 200, stone: 80 } },
  barracks: { name: "Barracks", icon: "barracks", category: "military", size: 2, cost: 900, maxLevel: 10, desc: "Trains soldiers — equip a card to define troop.", baseCost: 900, costMult: 2.15, produces: {}, needs: { workers: 4 }, soldierPerLevel: [2, 5, 9, 14, 20, 28, 38, 50, 65, 84], buildTime: 14, spawnsSoldiers: true, resourceCost: { wood: 120, stone: 80 } },
  tower: { name: "Watchtower", icon: "watchtower", category: "military", size: 1, cost: 600, maxLevel: 8, desc: "Shoots arrows at enemies.", baseCost: 600, costMult: 1.95, produces: {}, needs: { workers: 2 }, soldierPerLevel: [1, 2, 4, 6, 9, 13, 18, 24], buildTime: 8, defenseBonus: [1, 2, 4, 7, 11, 16, 22, 30], resourceCost: { wood: 20, stone: 100 } },
  wall: { name: "City Wall", icon: "wall", category: "military", size: 1, cost: 800, maxLevel: 8, desc: "Blocks enemy soldiers.", baseCost: 800, costMult: 2.0, produces: {}, needs: { workers: 3 }, soldierPerLevel: [0, 1, 2, 4, 6, 9, 13, 18], buildTime: 7, defenseBonus: [2, 4, 8, 14, 22, 32, 45, 60], resourceCost: { wood: 10, stone: 150 } },
  arena: { name: "Arena", icon: "arena", category: "military", size: 3, cost: 3200, maxLevel: 8, desc: "Combat arena.", baseCost: 3200, costMult: 2.25, produces: { money: 8 }, needs: { workers: 9 }, soldierPerLevel: [3, 7, 12, 18, 25, 33, 42, 52], happyBonus: [3, 6, 10, 14, 19, 24, 30, 36], unlockLevel: 4, buildTime: 26, spawnsSoldiers: true, resourceCost: { wood: 200, stone: 350 } },
  fortress: { name: "Fortress", icon: "fortress", category: "military", size: 3, cost: 6000, maxLevel: 10, desc: "Mighty military base — equip a card.", baseCost: 6000, costMult: 2.4, produces: { money: 12 }, needs: { workers: 15 }, soldierPerLevel: [10, 20, 35, 55, 80, 110, 150, 200, 260, 335], unlockLevel: 6, buildTime: 35, spawnsSoldiers: true, defenseBonus: [5, 10, 18, 30, 45, 65, 90, 120], resourceCost: { wood: 500, stone: 800 } },
  church: { name: "Church", icon: "church", category: "special", size: 2, cost: 1800, maxLevel: 8, desc: "Place of worship.", baseCost: 1800, costMult: 2.1, produces: { money: 5 }, needs: { workers: 4 }, happyBonus: [5, 10, 16, 22, 29, 37, 46, 56], buildTime: 17, resourceCost: { wood: 150, stone: 250 } },
  fishing: { name: "Fishing Hut", icon: "fishing", category: "production", size: 1, cost: 380, maxLevel: 8, desc: "Fishes.", baseCost: 380, costMult: 1.95, produces: { food: 4, money: 1 }, needs: { workers: 2 }, buildTime: 7, resourceCost: { wood: 40, stone: 5 } },
  cathedral: { name: "Cathedral", icon: "cathedral", category: "special", size: 3, cost: 7500, maxLevel: 8, desc: "Grand cathedral.", baseCost: 7500, costMult: 2.35, produces: { money: 22 }, needs: { workers: 12 }, happyBonus: [10, 20, 32, 46, 62, 80, 100, 122], unlockLevel: 6, buildTime: 38, resourceCost: { wood: 400, stone: 800 } },
  armory: { name: "Armory", icon: "armory", category: "military", size: 2, cost: 2200, maxLevel: 8, desc: "Weapons forge.", baseCost: 2200, costMult: 2.2, produces: { money: 6 }, needs: { workers: 6 }, soldierPerLevel: [3, 6, 10, 15, 21, 28, 36, 45], buildTime: 18, spawnsSoldiers: true, resourceCost: { wood: 120, stone: 300 } },
  monument: { name: "Monument", icon: "monument", category: "special", size: 2, cost: 5000, maxLevel: 10, desc: "Glory monument.", baseCost: 5000, costMult: 2.4, produces: { money: 14 }, needs: { workers: 6 }, happyBonus: [6, 13, 21, 31, 43, 57, 73, 91, 111, 133], unlockLevel: 5, buildTime: 30, resourceCost: { wood: 200, stone: 600 } },
  harbor2: { name: "Grand Harbor", icon: "harbor2", category: "economy", size: 3, cost: 9000, maxLevel: 8, desc: "Massive trade.", baseCost: 9000, costMult: 2.4, produces: { money: 55, food: 8 }, needs: { workers: 18 }, unlockLevel: 7, buildTime: 42, resourceCost: { wood: 800, stone: 700 } },
  garrison: { name: "Garrison", icon: "garrison", category: "military", size: 2, cost: 2800, maxLevel: 8, desc: "Elite training — equip a card.", baseCost: 2800, costMult: 2.25, produces: { money: 4 }, needs: { workers: 8 }, soldierPerLevel: [5, 11, 19, 29, 42, 58, 77, 100], unlockLevel: 5, buildTime: 24, spawnsSoldiers: true, defenseBonus: [3, 6, 11, 18, 28, 40, 55, 75], resourceCost: { wood: 250, stone: 350 } },
  buildersguild: { name: "Builder's Guild", icon: "buildersguild", category: "civic", size: 2, cost: 800, maxLevel: 8, desc: "Increases builder capacity. Nearest guild supplies builders.", baseCost: 800, costMult: 2.1, produces: { money: 2 }, needs: { workers: 3 }, happyBonus: [1, 2, 3, 4, 5, 6, 7, 8], buildTime: 12, resourceCost: { wood: 80, stone: 60 } }
};

export const HALLOWEEN_BUILDINGS = {
  pumpkinFarm: { name: "Pumpkin Farm", icon: "pumpkinFarm", category: "halloween", size: 2, cost: 0, candyCost: 100, maxLevel: 3, desc: "Produces Candy over time. Only upgradeable with Candy!", baseCost: 0, costMult: 1, produces: {}, candyPerLevel: [14, 34, 70], needs: { workers: 0 }, buildTime: 8, isHalloween: true, boost: "Generate Candy each minute", unlockLevel: 1 },
  witchTower: { name: "Witch Tower", icon: "witchTower", category: "halloween", size: 2, cost: 0, candyCost: 150, maxLevel: 3, desc: "Curses enemies with -HP aura. Also boosts your own witches.", baseCost: 0, costMult: 1, produces: {}, curseAura: [30, 70, 140], needs: { workers: 0 }, buildTime: 10, isHalloween: true, boost: "Enemy soldiers take damage near tower", unlockLevel: 1 },
  boneYard: { name: "Boneyard", icon: "boneYard", category: "halloween", size: 2, cost: 0, candyCost: 200, maxLevel: 3, desc: "Spawns skeletons that fight for you when attacked.", baseCost: 0, costMult: 1, produces: {}, skeletonSpawn: [1, 3, 6], needs: { workers: 0 }, buildTime: 12, isHalloween: true, boost: "Auto-summons skeletons during defense", unlockLevel: 1 },
  hauntedHouse: { name: "Haunted House", icon: "hauntedHouse", category: "halloween", size: 3, cost: 0, candyCost: 300, maxLevel: 3, desc: "Fears enemies in a radius — reduces their damage.", baseCost: 0, costMult: 1, produces: {}, fearAura: [0.15, 0.30, 0.50], needs: { workers: 0 }, buildTime: 15, isHalloween: true, boost: "Enemy damage reduced in radius", unlockLevel: 1 },
  cauldron: { name: "Witch Cauldron", icon: "cauldron", category: "halloween", size: 2, cost: 0, candyCost: 250, maxLevel: 3, desc: "Boosts Candy production of all Pumpkin Farms.", baseCost: 0, costMult: 1, produces: {}, candyBoost: [0.20, 0.50, 1.00], needs: { workers: 0 }, buildTime: 11, isHalloween: true, boost: "Boost all Pumpkin Farms' Candy output", unlockLevel: 1 },
  candyWorkshop: { name: "Candy Workshop", icon: "candyWorkshop", category: "halloween", size: 2, cost: 0, candyCost: 400, maxLevel: 3, desc: "Converts your harvest into Candy AND money for the whole realm.", baseCost: 0, costMult: 1, produces: {}, needs: { workers: 0 }, candyPerLevel: [18, 44, 92], moneyPerLevel: [220, 620, 1400], buildTime: 14, isHalloween: true, boost: "+Candy/min and +Money/min for the realm", unlockLevel: 2 },
  spiritGate: { name: "Spirit Gate", icon: "spiritGate", category: "halloween", size: 2, cost: 0, candyCost: 600, maxLevel: 3, desc: "A portal to the spirit world. Speeds up ALL production and Candy.", baseCost: 0, costMult: 1, produces: {}, needs: { workers: 0 }, globalBonusPerLevel: [0.10, 0.25, 0.45], candyBoost: [0.15, 0.35, 0.65], buildTime: 18, isHalloween: true, boost: "+Global production & +Candy for everything", unlockLevel: 3 },
  crypt: { name: "Ancient Crypt", icon: "crypt", category: "halloween", size: 3, cost: 0, candyCost: 500, maxLevel: 3, desc: "Legendary Halloween building. Grants all Halloween bonuses at once.", baseCost: 0, costMult: 1, produces: {}, allBoost: [0.10, 0.25, 0.50], needs: { workers: 0 }, buildTime: 20, isHalloween: true, boost: "Global boost to all Halloween effects", unlockLevel: 1 }
};

/* =========================================================
   BUILDING SVG RENDERER  (v2)
   Einheitliches Shading, klare Silhouetten, Level-Details.
   viewBox ist immer 0 0 100 100, Boden bei y = 92.
   ========================================================= */

const F = 92; // Bodenlinie

/* ---------- kleine Helfer ---------- */
let _uid = 0;
function f(n) { return Math.round(n * 100) / 100; }
function n1(i, seed) { const s = Math.sin(i * 12.9898 + (seed || 1) * 78.233) * 43758.5453; return s - Math.floor(s); }
function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
function lighten(hex, amt) {
  const h = String(hex).replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  const r = clamp((n >> 16) + amt, 0, 255), g = clamp(((n >> 8) & 255) + amt, 0, 255), b = clamp((n & 255) + amt, 0, 255);
  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}
function darken(hex, amt) { return lighten(hex, -amt); }

/* ---------- Boden / Schatten ---------- */
function shadow(rx, ry) {
  return `<ellipse cx="50" cy="${F + 4}" rx="${rx}" ry="${ry || 4.5}" fill="url(#bsh)"/>`;
}

/* ---------- Mauerwerk (Ziegellagen) ---------- */
function bricks(x, y, w, h, fill, line, rows) {
  const r = rows || Math.max(2, Math.round(h / 6));
  const hh = h / r;
  let o = `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" fill="${fill}"/>`;
  for (let i = 1; i < r; i++) o += `<line x1="${f(x)}" y1="${f(y + i * hh)}" x2="${f(x + w)}" y2="${f(y + i * hh)}" stroke="${line}" stroke-width="0.45" opacity="0.55"/>`;
  const cols = Math.max(2, Math.round(w / 11));
  const cw = w / cols;
  for (let i = 0; i < r; i++) {
    const off = i % 2 ? cw / 2 : 0;
    for (let c = 0; c <= cols; c++) {
      const vx = x + c * cw + off;
      if (vx <= x + 0.5 || vx >= x + w - 0.5) continue;
      o += `<line x1="${f(vx)}" y1="${f(y + i * hh)}" x2="${f(vx)}" y2="${f(y + (i + 1) * hh)}" stroke="${line}" stroke-width="0.4" opacity="0.45"/>`;
    }
  }
  return o;
}

/* ---------- Steinquader (grober Block) ---------- */
function stoneBlocks(x, y, w, h, fill, line) {
  let o = `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" fill="${fill}"/>`;
  const rows = Math.max(2, Math.round(h / 9));
  for (let i = 1; i < rows; i++) {
    const yy = y + (h / rows) * i;
    o += `<path d="M${f(x)} ${f(yy)} H${f(x + w)}" stroke="${line}" stroke-width="0.5" opacity="0.5"/>`;
    const cols = 2 + Math.floor(n1(i, 7) * 2);
    for (let c = 1; c < cols; c++) {
      const xx = x + (w / cols) * c + n1(i * 3 + c, 11) * 4 - 2;
      o += `<path d="M${f(xx)} ${f(yy - h / rows)} V${f(yy)}" stroke="${line}" stroke-width="0.45" opacity="0.45"/>`;
    }
  }
  return o;
}

/* ---------- Dachschindeln ---------- */
function shingles(cx, ry, halfW, rows, fill, line, alpha) {
  let o = '';
  for (let i = 0; i < rows; i++) {
    const t = (i + 0.7) / (rows + 1);
    const y = ry + (F - 4 - ry) * t;
    const hw = halfW * t;
    const scallop = 3.2 * (1 - t * 0.35);
    let d = `M${f(cx - hw)} ${f(y)}`;
    for (let k = 0; k <= 10; k++) d += ` q${f(hw / 10)} ${f(scallop * 0.5)} ${f(hw / 5)} 0`;
    d += ` L${f(cx + hw)} ${f(y - 2)} L${f(cx - hw)} ${f(y - 2)} Z`;
    o += `<path d="${d}" fill="${fill}" stroke="${line}" stroke-width="0.35" opacity="${alpha != null ? alpha : 0.85}"/>`;
  }
  return o;
}

/* ---------- Fenster ---------- */
function win(x, y, w, h, o) {
  const opt = o || {};
  const fw = opt.frame || '#4a3520';
  const gl = opt.glass || '#ffdf9b';
  const cross = opt.cross === false ? '' : `<path d="M${f(x + w / 2)} ${f(y)} V${f(y + h)} M${f(x)} ${f(y + h / 2)} H${f(x + w)}" stroke="${fw}" stroke-width="0.7"/>`;
  let s = `<g>`;
  if (opt.warm !== false) s += `<rect x="${f(x - 1.5)}" y="${f(y - 1.5)}" width="${f(w + 3)}" height="${f(h + 3)}" fill="#ffcf70" opacity="0.22"/>`;
  s += `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" fill="${gl}" stroke="${fw}" stroke-width="1" rx="0.8"/>`;
  s += `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h * 0.45)}" fill="#ffffff" opacity="0.28"/>`;
  s += cross;
  if (opt.sill !== false) s += `<rect x="${f(x - 1.6)}" y="${f(y + h)}" width="${f(w + 3.2)}" height="1.5" fill="${fw}" rx="0.5"/>`;
  s += `</g>`;
  return s;
}

/* ---------- Tür ---------- */
function door(x, y, w, h, o) {
  const opt = o || {};
  const fill = opt.fill || '#5a3a1e';
  const arch = opt.arch !== false;
  const d = arch
    ? `M${f(x)} ${f(y + h)} V${f(y + w / 2)} A${f(w / 2)} ${f(w / 2)} 0 0 1 ${f(x + w)} ${f(y + w / 2)} V${f(y + h)} Z`
    : `M${f(x)} ${f(y + h)} V${f(y)} H${f(x + w)} V${f(y + h)} Z`;
  let s = `<path d="${d}" fill="${fill}" stroke="${opt.line || '#2a1a08'}" stroke-width="1"/>`;
  s += `<path d="${d}" fill="url(#doorLight)" opacity="0.35"/>`;
  if (opt.planks !== false) s += `<path d="M${f(x + w * 0.5)} ${f(y + w / 2)} V${f(y + h)}" stroke="#241505" stroke-width="0.5" opacity="0.7"/>`;
  if (opt.knob !== false) s += `<circle cx="${f(x + w - 2)}" cy="${f(y + h * 0.62)}" r="0.9" fill="#ffd54f"/>`;
  return s;
}

/* ---------- Schornstein ---------- */
function chimney(x, y, w, h, fill, line) {
  return `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" fill="${fill}" stroke="${line}" stroke-width="0.8"/>
          <rect x="${f(x - 1.2)}" y="${f(y - 1.6)}" width="${f(w + 2.4)}" height="2" fill="${line}" rx="0.7"/>`;
}

/* ---------- Turmspitze / Fahne ---------- */
function pennant(x, y, h, color) {
  return `<line x1="${f(x)}" y1="${f(y)}" x2="${f(x)}" y2="${f(y - h)}" stroke="#3a2a1a" stroke-width="1"/>
          <path d="M${f(x + 0.4)} ${f(y - h)} L${f(x + 7)} ${f(y - h + 2.6)} L${f(x + 0.4)} ${f(y - h + 5.2)} Z" fill="${color}" stroke="${darken(color, 40)}" stroke-width="0.5"/>`;
}

/* ---------- Zinnen ---------- */
function crenels(x, y, w, count, fill, line) {
  const cw = w / (count * 2 - 1);
  let o = '';
  for (let i = 0; i < count; i++) o += `<rect x="${f(x + i * cw * 2)}" y="${f(y)}" width="${f(cw)}" height="3.4" fill="${fill}" stroke="${line}" stroke-width="0.4"/>`;
  return o;
}

/* ---------- Bogen-Galerie ---------- */
function arcade(x, y, w, h, count, fill, line) {
  const cw = w / count;
  let o = '';
  for (let i = 0; i < count; i++) {
    const ax = x + i * cw + cw * 0.18;
    const aw = cw * 0.64;
    o += `<path d="M${f(ax)} ${f(y + h)} V${f(y + aw / 2)} A${f(aw / 2)} ${f(aw / 2)} 0 0 1 ${f(ax + aw)} ${f(y + aw / 2)} V${f(y + h)} Z" fill="${fill}" stroke="${line}" stroke-width="0.7"/>`;
  }
  return o;
}

/* ---------- generische Hausbasis (Körper + Giebeldach) ---------- */
function houseBody(o) {
  const x = o.x, w = o.w, roofH = o.roofH, bodyTop = o.bodyTop, bodyH = o.bodyH;
  const bodyFill = o.bodyFill, bodyLine = o.bodyLine || '#4a3220';
  const roofFill = o.roofFill || '#a83232', roofLine = o.roofLine || '#5a1a1a';
  const cx = x + w / 2, ry = bodyTop - roofH;
  let s = '';
  // Körper
  s += `<rect x="${f(x)}" y="${f(bodyTop)}" width="${f(w)}" height="${f(bodyH)}" fill="${bodyFill}" stroke="${bodyLine}" stroke-width="1.3" rx="0.8"/>`;
  // Material-Textur
  if (o.masonry === 'brick') { const cid = 'cl' + (o.id || 'x') + '_' + (_uid++); s += `<clipPath id="${cid}"><rect x="${f(x)}" y="${f(bodyTop)}" width="${f(w)}" height="${f(bodyH)}" rx="0.8"/></clipPath><g clip-path="url(#${cid})">${bricks(x, bodyTop, w, bodyH, 'transparent', bodyLine, Math.max(2, Math.round(bodyH / 7)))}</g>`; }
  else if (o.masonry === 'stone') s += `<g opacity="0.9">${stoneBlocks(x, bodyTop, w, bodyH, 'none', bodyLine).replace(/fill="none"/g, 'fill="none"')}</g>`;
  // Vertikale Holzständer (Fachwerk)
  if (o.timber) {
    const beams = o.timberCount || 4;
    for (let i = 1; i < beams; i++) { const bx = x + (w / beams) * i; s += `<rect x="${f(bx - 0.6)}" y="${f(bodyTop)}" width="1.2" height="${f(bodyH)}" fill="${o.timber}" opacity="0.85"/>`; }
    s += `<rect x="${f(x)}" y="${f(bodyTop + bodyH * 0.42)}" width="${f(w)}" height="1.2" fill="${o.timber}" opacity="0.8"/>`;
  }
  // Schattenkante rechts
  s += `<rect x="${f(x + w - w * 0.22)}" y="${f(bodyTop)}" width="${f(w * 0.22)}" height="${f(bodyH)}" fill="#000" opacity="0.10"/>`;
  // Sockel
  s += `<rect x="${f(x - 1.4)}" y="${f(F - 4)}" width="${f(w + 2.8)}" height="5" fill="${o.baseFill || '#8a8377'}" stroke="${o.baseLine || '#4a453c'}" stroke-width="0.8" rx="1"/>`;
  // Dach
  if (o.roofStyle === 'flat') {
    // Flachdach mit Attika: sitzt direkt auf dem Körper auf
    s += `<rect x="${f(x - 1.6)}" y="${f(bodyTop - 4)}" width="${f(w + 3.2)}" height="4" fill="${roofFill}" stroke="${roofLine}" stroke-width="1" rx="0.8"/>`;
    s += `<rect x="${f(x - 1.6)}" y="${f(bodyTop - 4)}" width="${f(w + 3.2)}" height="1.4" fill="#ffffff" opacity="0.16"/>`;
    s += `<path d="M${f(x + w * 0.55)} ${f(bodyTop - 4)} V${f(bodyTop)} M${f(x + w * 0.78)} ${f(bodyTop - 4)} V${f(bodyTop)}" stroke="${roofLine}" stroke-width="0.4" opacity="0.5"/>`;
  } else {
    s += `<polygon points="${f(x - 3)},${f(bodyTop + 1)} ${f(cx)},${f(ry)} ${f(x + w + 3)},${f(bodyTop + 1)}" fill="${roofFill}" stroke="${roofLine}" stroke-width="1.4" stroke-linejoin="round"/>`;
    s += shingles(cx, ry + 1, (w + 6) * 0.36, o.shingleRows || 4, lighten(roofFill, 12), darken(roofFill, 45), 0.8);
    s += `<polygon points="${f(cx)},${f(ry)} ${f(x + w + 3)},${f(bodyTop + 1)} ${f(cx)},${f(bodyTop + 1)}" fill="#000" opacity="0.16"/>`;
    s += `<path d="M${f(x - 3)} ${f(bodyTop + 1)} L${f(cx)} ${f(ry)} L${f(x + w + 3)} ${f(bodyTop + 1)}" fill="none" stroke="${lighten(roofFill, 30)}" stroke-width="0.7" opacity="0.7"/>`;
  }
  return s;
}

/* ---------- Hauptfunktion ---------- */
export function buildingSVG(type, level, w, h) {
  const lvl = Math.max(1, Math.min(10, Math.round(level || 1)));
  const p = Math.min(1, (lvl - 1) / 9);
  const defs = `<defs>
    <radialGradient id="bsh" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(20,30,10,0.42)"/><stop offset="70%" stop-color="rgba(20,30,10,0.18)"/><stop offset="100%" stop-color="rgba(20,30,10,0)"/></radialGradient>
    <linearGradient id="doorLight" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffe9a8" stop-opacity="0.9"/><stop offset="100%" stop-color="#ff9d3a" stop-opacity="0"/></linearGradient>
    <linearGradient id="stoneG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e6e4dd"/><stop offset="100%" stop-color="#a9a69c"/></linearGradient>
    <linearGradient id="lawnG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7fae55"/><stop offset="100%" stop-color="#5b8a3c"/></linearGradient>
    <linearGradient id="waterG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7fd4f0"/><stop offset="100%" stop-color="#3a8fbf"/></linearGradient>
  </defs>`;

  const svg = (inner, extra) => `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">${defs}${extra || ''}${inner}</svg>`;

  /* =====================================================
     HALLOWEEN
     ===================================================== */
  if (type === 'pumpkinFarm') {
    const rows = 2 + lvl;
    let field = `<rect x="3" y="66" width="94" height="26" rx="3" fill="#3b2a12" stroke="#20140a" stroke-width="1.2"/>`;
    for (let i = 0; i < rows; i++) {
      const yy = 70 + i * (20 / rows);
      field += `<path d="M5 ${f(yy)} H95" stroke="#5d4118" stroke-width="1.6" opacity="0.7"/>`;
      for (let k = 0; k < 9; k++) field += `<ellipse cx="${f(7 + k * 10.5)}" cy="${f(yy - 1)}" rx="3" ry="1.8" fill="#4d7a2a" opacity="0.85"/>`;
    }
    let fence = '';
    for (let i = 0; i < 7; i++) fence += `<rect x="${f(4 + i * 15.3)}" y="78" width="1.8" height="14" fill="#8a5a2a" stroke="#402008" stroke-width="0.4"/>`;
    fence += `<rect x="3" y="83" width="94" height="1.8" fill="#8a5a2a" stroke="#402008" stroke-width="0.4"/><rect x="3" y="89" width="94" height="1.8" fill="#8a5a2a" stroke="#402008" stroke-width="0.4"/>`;
    // Scheune
    const barn = houseBody({ id: 'pf', x: 26, w: 48, bodyTop: 44, bodyH: 24, roofH: 15, bodyFill: '#7a4a24', bodyLine: '#3a1c08', roofFill: '#8e3320', roofLine: '#4a1408', baseFill: '#6a5a44', baseLine: '#3a2f20', shingleRows: 3, timber: '#4a2c12', timberCount: 4 })
      + win(34, 50, 9, 8, { glass: lvl >= 2 ? '#ffcf70' : '#3a2a12' })
      + win(57, 50, 9, 8, { glass: lvl >= 2 ? '#ffcf70' : '#3a2a12' })
      + door(44, 58, 12, 10, { fill: '#2a1608' })
      + chimney(64, 30, 5, 12, '#5a3a20', '#2a1608');
    // Kürbisse (mehr + größer pro Level)
    const spots = [[14, 84, 7.5], [30, 88, 6.5], [46, 85, 8], [62, 88, 6.8], [78, 84, 7.6], [22, 78, 6], [70, 78, 6.4], [88, 88, 6]];
    const count = Math.min(spots.length, 3 + lvl * 2);
    let pumpkins = '';
    for (let i = 0; i < count; i++) {
      const [px, py, pr] = spots[i];
      const glow = lvl >= 2;
      pumpkins += `<ellipse cx="${px}" cy="${py + pr * 0.85}" rx="${pr}" ry="${pr * 0.28}" fill="rgba(0,0,0,0.28)"/>`;
      pumpkins += `<ellipse cx="${px}" cy="${py}" rx="${pr}" ry="${pr * 0.86}" fill="#f07d16" stroke="#8c3f00" stroke-width="0.8"/>`;
      pumpkins += `<ellipse cx="${px - pr * 0.34}" cy="${py - pr * 0.12}" rx="${pr * 0.3}" ry="${pr * 0.55}" fill="#ffab4d" opacity="0.75"/>`;
      pumpkins += `<path d="M${px} ${py - pr} q${pr * 0.7} ${pr * 0.35} 0 ${pr * 1.5}" stroke="#c25c08" stroke-width="0.5" fill="none" opacity="0.6"/>`;
      pumpkins += `<rect x="${f(px - 1)}" y="${f(py - pr - 3.2)}" width="2" height="3.6" fill="#4a3510" rx="0.6"/>`;
      pumpkins += `<path d="M${f(px - 2.6)} ${f(py - pr - 2.6)} q2.6 -2 5.2 0" stroke="#4c7a2a" stroke-width="1.1" fill="none" stroke-linecap="round"/>`;
      const face = glow ? '#ffe95c' : '#3a1a00';
      pumpkins += `<path d="M${f(px - pr * 0.55)} ${f(py - pr * 0.1)} L${f(px - pr * 0.18)} ${f(py - pr * 0.45)} L${f(px + pr * 0.16)} ${f(py - pr * 0.1)}" fill="none" stroke="${face}" stroke-width="1.1" stroke-linejoin="round"/>`;
      pumpkins += `<path d="M${f(px + pr * 0.16)} ${f(py - pr * 0.1)} L${f(px + pr * 0.5)} ${f(py - pr * 0.45)} L${f(px + pr * 0.72)} ${f(py - pr * 0.05)}" fill="none" stroke="${face}" stroke-width="1.1" stroke-linejoin="round"/>`;
      pumpkins += `<path d="M${f(px - pr * 0.6)} ${f(py + pr * 0.4)} l${pr * 0.3} ${pr * 0.14} l${pr * 0.3} -${pr * 0.2} l${pr * 0.3} ${pr * 0.2} l${pr * 0.3} -${pr * 0.14}" fill="none" stroke="${face}" stroke-width="1.1" stroke-linejoin="round"/>`;
      if (glow) pumpkins += `<ellipse cx="${px}" cy="${py}" rx="${pr * 1.6}" ry="${pr * 1.4}" fill="#ffb347" opacity="0.10"/>`;
    }
    const scarecrow = lvl >= 2 ? `<g transform="translate(88 62)">
      <rect x="-1" y="0" width="2" height="24" fill="#5a3a1a"/>
      <rect x="-8" y="6" width="16" height="2" fill="#5a3a1a"/>
      <ellipse cx="0" cy="4" rx="5" ry="5" fill="#d8a84a" stroke="#8a5a10" stroke-width="0.7"/>
      <circle cx="-1.8" cy="3" r="0.9" fill="#2a1a00"/><circle cx="1.8" cy="3" r="0.9" fill="#2a1a00"/>
      <path d="M-4 8 L0 6 L4 8 L0 10 Z" fill="#e87d18"/>
      <polygon points="-9,2 0,-5 9,2" fill="#3a2a12" stroke="#1a1008" stroke-width="0.6"/>
    </g>` : '';
    return svg(shadow(46) + field + fence + barn + pumpkins + scarecrow);
  }

  if (type === 'witchTower') {
    const towH = 40 + lvl * 7;
    const top = F - towH - 2;
    let rings = '';
    for (let i = 1; i <= 5; i++) rings += `<path d="M${34 + i * 0.5} ${f(top + (towH / 6) * i)} H${66 - i * 0.5}" stroke="#5b4a6e" stroke-width="0.6" opacity="0.6"/>`;
    let winRows = '';
    const wc = 1 + lvl;
    for (let i = 0; i < wc; i++) winRows += win(43, top + 8 + i * 11, 14, 6, { glass: '#ffb347', frame: '#2a1a3a', sill: false });
    let spikes = '';
    for (let i = 0; i < 5; i++) spikes += `<polygon points="${f(36 + i * 7)},${f(top + 2)} ${f(39.5 + i * 7)},${f(top - 6)} ${f(43 + i * 7)},${f(top + 2)}" fill="#6a2a7a" stroke="#2a0a3a" stroke-width="0.5"/>`;
    const orbY = top - 26 - lvl * 2;
    const orb = `<circle cx="50" cy="${f(orbY)}" r="${f(8 + lvl)}" fill="#d4a6ff" opacity="0.25"/>
      <circle cx="50" cy="${f(orbY)}" r="${f(4 + lvl * 0.6)}" fill="#e0c0ff" stroke="#7a3ab8" stroke-width="0.9"/>
      <circle cx="${f(48 - lvl * 0.3)}" cy="${f(orbY - 2)}" r="1.6" fill="#fff" opacity="0.95"/>
      <circle cx="${f(52.4 + lvl * 0.3)}" cy="${f(orbY + 2.4)}" r="1" fill="#fff" opacity="0.7"/>`;
    // Boden: Steinkreis zuerst, damit der Turm daraus wächst
    const ground = `<ellipse cx="50" cy="${F - 1}" rx="30" ry="7.4" fill="#5e4a72" stroke="#241338" stroke-width="1.1"/>
       <ellipse cx="50" cy="${F - 2.4}" rx="26" ry="5.6" fill="#4a3858"/>
       ${lvl >= 2 ? `<ellipse cx="50" cy="${F - 2.4}" rx="18" ry="3.4" fill="#6aff6a" opacity="0.35"/>` : ''}
       <rect x="46" y="${F - 14}" width="8" height="12" fill="#1a0a2a" rx="3.4 3.4 0 0" stroke="#3a0a5a" stroke-width="0.6"/>
       <circle cx="53" cy="${F - 7}" r="0.8" fill="#ffb347"/>`;
    // Strebepfeiler
    let buttress = '';
    if (lvl >= 2) {
      buttress += `<path d="M33 ${f(top + 16)} L25 ${F - 2} L33 ${F - 2} Z" fill="#3f2f52" stroke="#241338" stroke-width="0.8"/>`;
      buttress += `<path d="M67 ${f(top + 16)} L75 ${F - 2} L67 ${F - 2} Z" fill="#3f2f52" stroke="#241338" stroke-width="0.8"/>`;
    }
    return svg(shadow(34) + ground + buttress +
      `<rect x="33" y="${f(top + 2)}" width="34" height="${f(towH)}" fill="#4c3a5e" stroke="#241338" stroke-width="1.4"/>
       <rect x="${f(33)}" y="${f(top + 2)}" width="10" height="${f(towH)}" fill="#ffffff" opacity="0.06"/>
       <rect x="${f(59)}" y="${f(top + 2)}" width="8" height="${f(towH)}" fill="#000" opacity="0.16"/>` +
      bricks(33, top + 2, 34, towH, 'transparent', '#2a1a3a', 0) + rings + spikes + winRows +
      // Dach
      `<polygon points="30,${f(top + 2)} 50,${f(top - 30 - lvl * 2.5)} 70,${f(top + 2)}" fill="#7a2a8a" stroke="#3a0a4a" stroke-width="1.4" stroke-linejoin="round"/>
       <polygon points="50,${f(top - 30 - lvl * 2.5)} 70,${f(top + 2)} 50,${f(top + 2)}" fill="#3a0a4a" opacity="0.45"/>
       <path d="M50 ${f(top - 30 - lvl * 2.5)} q6 8 0 16 q-6 -8 0 -16" fill="#c98ef0" opacity="0.5"/>` + orb);
  }

  if (type === 'boneYard') {
    let bones = '';
    const count = 4 + lvl * 3;
    for (let i = 0; i < count; i++) {
      const bx = 8 + n1(i, 3) * 84;
      const by = 70 + n1(i, 9) * 18;
      const rot = (n1(i, 5) - 0.5) * 150;
      const s = 0.7 + n1(i, 13) * 0.6;
      bones += `<g transform="translate(${f(bx)} ${f(by)}) rotate(${f(rot)}) scale(${f(s)})" opacity="0.95">
        <rect x="-6" y="-1.1" width="12" height="2.2" rx="1.1" fill="#eae1c8" stroke="#8a7a5a" stroke-width="0.35"/>
        <circle cx="-6" cy="-1.2" r="1.5" fill="#eae1c8" stroke="#8a7a5a" stroke-width="0.3"/>
        <circle cx="-6" cy="1.2" r="1.5" fill="#eae1c8" stroke="#8a7a5a" stroke-width="0.3"/>
        <circle cx="6" cy="-1.2" r="1.5" fill="#eae1c8" stroke="#8a7a5a" stroke-width="0.3"/>
        <circle cx="6" cy="1.2" r="1.5" fill="#eae1c8" stroke="#8a7a5a" stroke-width="0.3"/>
      </g>`;
    }
    const skull = `<g transform="translate(50 70)">
      <ellipse cx="0" cy="0" rx="7" ry="8" fill="#eae1c8" stroke="#8a7a5a" stroke-width="0.7"/>
      <ellipse cx="0" cy="4.6" rx="4.4" ry="3.2" fill="#eae1c8" stroke="#8a7a5a" stroke-width="0.5"/>
      <circle cx="-2.6" cy="-1" r="1.9" fill="#12080a"/><circle cx="2.6" cy="-1" r="1.9" fill="#12080a"/>
      <circle cx="-2" cy="-1.6" r="0.6" fill="#fff" opacity="0.7"/><circle cx="3.2" cy="-1.6" r="0.6" fill="#fff" opacity="0.7"/>
      <path d="M-1.4 3.4 L1.4 3.4 L0 5.4 Z" fill="#12080a"/>
      <path d="M-4.4 6.4 V8.4 M-1.6 6.6 V8.8 M1.6 6.6 V8.8 M4.4 6.4 V8.4" stroke="#c9bfa4" stroke-width="0.7"/>
    </g>`;
    const fence = lvl >= 2 ? (() => {
      let o = '';
      for (let i = 0; i < 8; i++) {
        const fx = 6 + i * 12.6;
        o += `<rect x="${f(fx)}" y="62" width="2" height="18" fill="#8a6a44" stroke="#3a2410" stroke-width="0.4"/>`;
        o += `<polygon points="${f(fx)},62 ${f(fx + 1)},57 ${f(fx + 2)},62" fill="#8a6a44" stroke="#3a2410" stroke-width="0.3"/>`;
      }
      o += `<rect x="4" y="68" width="92" height="2" fill="#8a6a44" stroke="#3a2410" stroke-width="0.3"/>`;
      return o;
    })() : '';
    return svg(shadow(46) +
      `<ellipse cx="50" cy="80" rx="44" ry="14" fill="#3e2a16" stroke="#180d04" stroke-width="1.3"/>
       <ellipse cx="50" cy="78" rx="38" ry="11" fill="#31200f"/>
       <ellipse cx="50" cy="76.5" rx="31" ry="7.6" fill="#1e1206"/>` +
      fence + bones + skull +
      (lvl >= 2 ? `<path d="M50 44 q-8 6 -4 14 q4 -6 4 -14" fill="#9ad86a" opacity="0.35"/><path d="M62 40 q-7 7 -3 15 q4 -7 3 -15" fill="#9ad86a" opacity="0.25"/>` : '') +
      (lvl >= 3 ? `<circle cx="30" cy="66" r="3.4" fill="#c9f08a" opacity="0.5"/><circle cx="70" cy="64" r="2.8" fill="#c9f08a" opacity="0.45"/>` : ''));
  }

  if (type === 'hauntedHouse') {
    const roofH = 20 + lvl * 3;
    const x = 12, w = 76, top = 46, bH = F - 4 - top;
    let s = shadow(48);
    s += `<rect x="${x}" y="${top}" width="${w}" height="${bH}" fill="#3d2b52" stroke="#170a26" stroke-width="1.5"/>`;
    s += bricks(x, top, w, bH, 'transparent', '#241436', Math.max(3, Math.round(bH / 7)));
    s += `<rect x="${x + w * 0.62}" y="${top}" width="${w * 0.38}" height="${bH}" fill="#000" opacity="0.18"/>`;
    // Giebeldach
    s += `<polygon points="${x - 5},${top + 1} 50,${top - roofH} ${x + w + 5},${top + 1}" fill="#4e2a52" stroke="#1e0a24" stroke-width="1.5" stroke-linejoin="round"/>`;
    s += shingles(50, top - roofH + 3, w * 0.44, 4, '#5f3466', '#260c2e', 0.85);
    s += `<polygon points="50,${top - roofH} ${x + w + 5},${top + 1} 50,${top + 1}" fill="#000" opacity="0.18"/>`;
    // gebrochene Turmspitze
    s += `<rect x="66" y="${top - roofH - 12}" width="13" height="14" fill="#3d2b52" stroke="#170a26" stroke-width="1.1"/>`;
    s += `<polygon points="64,${top - roofH - 10} 72,${top - roofH - 24} 79,${top - roofH - 16} 82,${top - roofH - 10}" fill="#4e2a52" stroke="#1e0a24" stroke-width="1"/>`;
    // Fenster (unheimlich)
    s += win(20, top + 8, 11, 13, { glass: '#ffb347', frame: '#1e0a24' });
    s += win(38, top + 8, 11, 13, { glass: lvl >= 2 ? '#e8ff9a' : '#2a1a0a', frame: '#1e0a24' });
    s += win(56, top + 8, 11, 13, { glass: '#ffb347', frame: '#1e0a24' });
    s += win(72, top + 8, 10, 12, { glass: '#2a1a0a', frame: '#1e0a24' });
    // Tür
    s += door(43, 66, 15, 22, { fill: '#140a1e', arch: true, line: '#0a0410', plank: true });
    s += `<circle cx="54" cy="78" r="1" fill="#ffb347"/>`;
    // Spinnweben + Risse
    s += `<path d="M${x + 2} ${top + 2} q10 2 12 12 M${x + 2} ${top + 2} q2 10 12 12" stroke="#cfc6dd" stroke-width="0.4" fill="none" opacity="0.55"/>`;
    s += `<path d="M30 ${top + 4} l3 8 l-3 6 l3 8" stroke="#160a20" stroke-width="0.7" fill="none" opacity="0.7"/>`;
    // Deko je Level
    if (lvl >= 2) {
      s += `<g opacity="0.9"><path d="M24 34 q6 -6 0 -12 q-6 -6 0 -12" fill="#c9e8ff" opacity="0.35"/></g>`;
      s += `<circle cx="24" cy="30" r="5" fill="#dcefff" opacity="0.55"/><circle cx="22.5" cy="29" r="1.1" fill="#2a1a3a"/><circle cx="25.5" cy="29" r="1.1" fill="#2a1a3a"/>`;
      s += `<ellipse cx="50" cy="90" rx="40" ry="6" fill="#8a4a9a" opacity="0.14"/>`;
    }
    if (lvl >= 3) {
      s += `<g transform="translate(78 30)"><circle r="6" fill="#dcefff" opacity="0.5"/><circle cx="-2" cy="-1" r="1.2" fill="#2a1a3a"/><circle cx="2" cy="-1" r="1.2" fill="#2a1a3a"/><path d="M-3 3 q3 2 6 0" stroke="#2a1a3a" stroke-width="0.7" fill="none"/></g>`;
      s += `<path d="M8 70 q4 -5 0 -10 q-4 -5 0 -10" stroke="#a87ee0" stroke-width="0.8" fill="none" opacity="0.5"/>`;
      let bats = '';
      for (let i = 0; i < 3; i++) bats += `<g transform="translate(${16 + i * 30} ${18 + (i % 2) * 6}) scale(0.7)"><path d="M0 0 q-4 -3 -7 0 q3 0 4 3 q1 -2 3 -1 q2 -1 3 1 q1 -3 4 -3 q-3 -3 -7 0 Z" fill="#2a1030"/></g>`;
      s += bats;
    }
    return svg(s);
  }

  if (type === 'cauldron') {
    const bub = 0.4 + lvl * 0.2;
    const size = 1 + lvl * 0.12;
    let bubbles = '';
    const n = 3 + lvl * 2;
    for (let i = 0; i < n; i++) {
      const bx = 34 + n1(i, 21) * 32;
      const by = 44 + n1(i, 31) * 10;
      const r = 1.4 + n1(i, 41) * (1.6 + lvl * 0.5);
      bubbles += `<circle cx="${f(bx)}" cy="${f(by)}" r="${f(r)}" fill="#b6ffb6" opacity="${f(0.35 + n1(i, 5) * 0.4)}"/>`;
    }
    const steam = `<path d="M38 44 q-4 -8 0 -14 q4 -6 0 -12" stroke="#aaffaa" stroke-width="1.3" fill="none" opacity="${f(0.25 + bub * 0.3)}"/>
      <path d="M56 42 q5 -8 1 -14 q-4 -6 1 -12" stroke="#d6ffd6" stroke-width="1.1" fill="none" opacity="${f(0.2 + bub * 0.28)}"/>`;
    const fire = `<ellipse cx="50" cy="${F - 2}" rx="${f(20 * size)}" ry="5" fill="#ff7a1a" opacity="0.45"/>
      <path d="M42 ${F - 2} q-2 -8 4 -12 q0 6 3 8 q2 -5 5 -7 q3 5 0 11 Z" fill="#ffb347" opacity="0.85"/>
      <path d="M45 ${F - 3} q-1 -5 3 -8 q1 5 3 7 Z" fill="#fff3b0" opacity="0.9"/>`;
    return svg(shadow(34) + fire +
      `<ellipse cx="50" cy="58" rx="${f(27 * size)}" ry="${f(8.5 * size)}" fill="#33204a" stroke="#150a20" stroke-width="1.4"/>
       <path d="M${f(50 - 27 * size)} 58 Q${f(50 - 27 * size)} ${f(58 - 16 * size)} 50 ${f(58 - 16 * size)} Q${f(50 + 27 * size)} ${f(58 - 16 * size)} ${f(50 + 27 * size)} 58" fill="#463059" stroke="#150a20" stroke-width="1.5"/>
       <path d="M${f(50 - 20 * size)} 62 Q${f(50 - 19 * size)} 74 50 76 Q${f(50 + 19 * size)} 74 ${f(50 + 20 * size)} 62" fill="#2c1c3e" stroke="#150a20" stroke-width="1.2"/>
       <rect x="${f(50 - 22 * size)}" y="60" width="3" height="7" fill="#1a0a1a" rx="1.2"/>
       <rect x="${f(50 + 19 * size)}" y="60" width="3" height="7" fill="#1a0a1a" rx="1.2"/>
       <ellipse cx="50" cy="${f(58 - 16 * size)}" rx="${f(25 * size)}" ry="${f(7 * size)}" fill="#6dff6d" opacity="${f(0.35 + bub * 0.35)}"/>
       <ellipse cx="50" cy="${f(57 - 16 * size)}" rx="${f(19 * size)}" ry="${f(4.6 * size)}" fill="#b6ffb6" opacity="${f(0.5 + bub * 0.4)}"/>` +
      bubbles + steam +
      // Rührstab
      `<line x1="${f(50 + 16 * size)}" y1="${f(46 - 16 * size)}" x2="${f(50 + 26 * size)}" y2="${f(70)}" stroke="#6a4a2a" stroke-width="2" stroke-linecap="round"/>`);
  }

  if (type === 'candyWorkshop') {
    const top = 48, bH = F - 4 - top;
    let s = shadow(44);
    s += houseBody({ id: 'cw', x: 10, w: 80, bodyTop: top, bodyH: bH, roofH: 17, bodyFill: '#c98eb0', bodyLine: '#6a2a4a', roofFill: '#8a3a6a', roofLine: '#3a0a2a', baseFill: '#a87a94', baseLine: '#5a2a42', shingleRows: 4, timber: '#7a3a5a', timberCount: 5 });
    s += win(20, top + 7, 12, 11, { glass: '#ffd6f0', frame: '#4a1a32' });
    s += win(46, top + 7, 12, 11, { glass: '#ffd6f0', frame: '#4a1a32' });
    s += door(66, top + 12, 14, 18, { fill: '#4a1a32', line: '#2a0a1a' });
    // Zuckerstangen-Pfosten + Lollies
    s += `<g><rect x="6" y="52" width="5" height="34" fill="#fff" stroke="#c04070" stroke-width="0.7" rx="2"/>
      <path d="M6 56 l5 5 M6 64 l5 5 M6 72 l5 5" stroke="#e0508a" stroke-width="2.2"/></g>`;
    s += `<g><rect x="89" y="52" width="5" height="34" fill="#fff" stroke="#c04070" stroke-width="0.7" rx="2"/>
      <path d="M89 56 l5 5 M89 64 l5 5 M89 72 l5 5" stroke="#e0508a" stroke-width="2.2"/></g>`;
    const lollies = lvl >= 2 ? `<circle cx="22" cy="66" r="6" fill="#ffb3d9" stroke="#a02a5a" stroke-width="0.8"/><path d="M22 60 a6 6 0 0 1 0 12" stroke="#fff" stroke-width="1.6" fill="none"/><circle cx="78" cy="66" r="6" fill="#aaffaa" stroke="#2a7a2a" stroke-width="0.8"/><path d="M78 60 a6 6 0 0 1 0 12" stroke="#fff" stroke-width="1.6" fill="none"/>` : '';
    const gear = lvl >= 3 ? `<g transform="translate(50 38)"><circle r="7" fill="#ffd6a5" stroke="#a05a20" stroke-width="0.9"/>${[0, 45, 90, 135].map(a => `<rect x="-7.6" y="-1.1" width="15.2" height="2.2" fill="#c07a3a" transform="rotate(${a})"/>`).join('')}<circle r="2.4" fill="#6a3a10"/></g>` : '';
    return svg(s + lollies + gear);
  }

  if (type === 'spiritGate') {
    let s = shadow(38);
    const glow = 0.3 + lvl * 0.2;
    s += `<ellipse cx="50" cy="${F - 2}" rx="30" ry="7" fill="#2a1a3a" stroke="#0e0618" stroke-width="1.2"/>`;
    s += `<ellipse cx="50" cy="${F - 3}" rx="24" ry="5" fill="#1a0e28"/>`;
    // Steinbögen
    s += `<path d="M18 ${F - 4} V42 A32 30 0 0 1 82 42 V${F - 4}" fill="none" stroke="#4a3a5e" stroke-width="9" stroke-linecap="round"/>`;
    s += `<path d="M18 ${F - 4} V42 A32 30 0 0 1 82 42 V${F - 4}" fill="none" stroke="#6a5a82" stroke-width="5" stroke-linecap="round"/>`;
    s += `<path d="M18 ${F - 4} V42 A32 30 0 0 1 82 42 V${F - 4}" fill="none" stroke="#8a7aa2" stroke-width="1.4" stroke-linecap="round" opacity="0.8"/>`;
    // Portal
    s += `<path d="M27 ${F - 4} V44 A23 22 0 0 1 73 44 V${F - 4} Z" fill="url(#waterG)" opacity="${f(0.35 + glow * 0.3)}"/>`;
    s += `<path d="M27 ${F - 4} V44 A23 22 0 0 1 73 44 V${F - 4} Z" fill="#7a3ab8" opacity="${f(0.2 + glow * 0.35)}"/>`;
    const swirls = lvl >= 2 ? `<path d="M50 40 q-12 14 0 28 q12 -14 0 -28" stroke="#d6b6ff" stroke-width="1.4" fill="none" opacity="0.65"/><path d="M50 46 q-7 9 0 18 q7 -9 0 -18" stroke="#e8d6ff" stroke-width="1" fill="none" opacity="0.6"/>` : `<path d="M50 44 q-8 10 0 22" stroke="#d6b6ff" stroke-width="1.2" fill="none" opacity="0.5"/>`;
    s += swirls;
    // Runen
    s += `<circle cx="50" cy="20" r="5.4" fill="#2a1a3a" stroke="#a87ee0" stroke-width="0.9"/>`;
    s += `<path d="M50 17 v6 M47.4 18.6 l5.2 2.8 M52.6 18.6 l-5.2 2.8" stroke="#d6b6ff" stroke-width="0.9"/>`;
    // Kerzen
    s += `<g><rect x="20" y="${F - 12}" width="3" height="9" fill="#e8e0d0" rx="1"/><ellipse cx="21.5" cy="${F - 13}" rx="1.6" ry="2.4" fill="#ffd54f" opacity="0.95"/><ellipse cx="21.5" cy="${F - 14}" rx="4" ry="5" fill="#ffb347" opacity="0.18"/></g>`;
    s += `<g><rect x="77" y="${F - 12}" width="3" height="9" fill="#e8e0d0" rx="1"/><ellipse cx="78.5" cy="${F - 13}" rx="1.6" ry="2.4" fill="#ffd54f" opacity="0.95"/><ellipse cx="78.5" cy="${F - 14}" rx="4" ry="5" fill="#ffb347" opacity="0.18"/></g>`;
    if (lvl >= 3) s += `<circle cx="50" cy="52" r="26" fill="#a87ee0" opacity="0.12"/>`;
    return svg(s);
  }

  if (type === 'crypt') {
    const roofH = 24 + lvl * 4;
    const x = 8, w = 84, top = 44, bH = F - 4 - top;
    let s = shadow(48);
    // Seitentürmchen
    for (const tx of [x - 2, x + w - 10]) {
      s += `<rect x="${tx}" y="${top - 16}" width="12" height="${bH + 18}" fill="#5a4468" stroke="#231436" stroke-width="1.3"/>`;
      s += crenels(tx, top - 20, 12, 3, '#6e5480', '#231436');
      if (lvl >= 2) s += `<polygon points="${tx + 6},${top - 34} ${tx + 2},${top - 20} ${tx + 10},${top - 20}" fill="#2a1a3a" opacity="0.9"/>`;
    }
    // Hauptkörper
    s += `<rect x="${x}" y="${top}" width="${w}" height="${bH}" fill="#4a3a58" stroke="#1e1028" stroke-width="1.6"/>`;
    s += stoneBlocks(x, top, w, bH, 'transparent', '#241436');
    s += `<rect x="${x + w * 0.6}" y="${top}" width="${w * 0.4}" height="${bH}" fill="#000" opacity="0.16"/>`;
    // Dach
    s += `<polygon points="${x - 4},${top + 1} 50,${top - roofH} ${x + w + 4},${top + 1}" fill="#7a5a8a" stroke="#2a1538" stroke-width="1.5" stroke-linejoin="round"/>`;
    s += shingles(50, top - roofH + 3, w * 0.46, 4, '#8a6a9a', '#2e1840', 0.85);
    s += `<polygon points="50,${top - roofH} ${x + w + 4},${top + 1} 50,${top + 1}" fill="#000" opacity="0.2"/>`;
    s += `<circle cx="50" cy="${top - roofH - 5}" r="4" fill="#ffb347" opacity="0.9"/><circle cx="50" cy="${top - roofH - 5}" r="9" fill="#ffb347" opacity="0.22"/>`;
    // Krypta-Tor
    s += door(42, 62, 16, 26, { fill: '#0e0616', line: '#000', arch: true });
    s += `<rect x="44" y="70" width="12" height="2.4" fill="#8a7a9a" opacity="0.7"/>`;
    // Fenster
    s += win(20, top + 9, 10, 12, { glass: '#ffb347', frame: '#1a0e26' });
    s += win(70, top + 9, 10, 12, { glass: '#ffb347', frame: '#1a0e26' });
    // Statuen
    if (lvl >= 2) {
      s += `<g transform="translate(26 ${F - 4})"><rect x="-4" y="-10" width="8" height="10" fill="#6e5480" stroke="#231436" stroke-width="0.7"/><ellipse cy="-13" rx="3.4" ry="3.8" fill="#8a7a9a" stroke="#231436" stroke-width="0.6"/><circle cx="-1.2" cy="-13.6" r="0.7" fill="#1a0e26"/><circle cx="1.2" cy="-13.6" r="0.7" fill="#1a0e26"/></g>`;
      s += `<g transform="translate(74 ${F - 4})"><rect x="-4" y="-10" width="8" height="10" fill="#6e5480" stroke="#231436" stroke-width="0.7"/><ellipse cy="-13" rx="3.4" ry="3.8" fill="#8a7a9a" stroke="#231436" stroke-width="0.6"/><circle cx="-1.2" cy="-13.6" r="0.7" fill="#1a0e26"/><circle cx="1.2" cy="-13.6" r="0.7" fill="#1a0e26"/></g>`;
    }
    if (lvl >= 3) {
      s += `<ellipse cx="50" cy="${F - 2}" rx="44" ry="8" fill="#8a4a9a" opacity="0.16"/>`;
      s += `<g transform="translate(50 ${top - roofH - 18})"><ellipse rx="7" ry="8" fill="#cfe8ff" opacity="0.35"/><circle cx="-2.4" cy="-1" r="1.3" fill="#2a1a3a"/><circle cx="2.4" cy="-1" r="1.3" fill="#2a1a3a"/><path d="M-3.4 3.4 q3.4 2.6 6.8 0" stroke="#2a1a3a" stroke-width="0.8" fill="none"/></g>`;
    }
    return svg(s);
  }

  /* =====================================================
     CORE
     ===================================================== */
  if (type === 'main') {
    const keepH = 26 + p * 22;
    const keepTop = F - 4 - keepH;
    const hallH = 22 + p * 8;
    const hallTop = F - 4 - hallH;
    let s = shadow(46);
    // Seitentürme
    const towerH = 30 + p * 14;
    [[6, 3], [80, 2]].forEach(([tx, mult], idx) => {
      const tTop = F - 4 - towerH * (1 + idx * 0.03);
      s += `<rect x="${tx}" y="${f(tTop)}" width="14" height="${f(F - 4 - tTop)}" fill="#9a8b6d" stroke="#3d3323" stroke-width="1.3"/>`;
      s += stoneBlocks(tx, tTop, 14, F - 4 - tTop, 'transparent', '#3d3323');
      s += `<rect x="${f(tx + 9.6)}" y="${f(tTop)}" width="4.4" height="${f(F - 4 - tTop)}" fill="#000" opacity="0.14"/>`;
      s += crenels(tx - 1, tTop - 3.6, 16, 3, '#a89a7c', '#3d3323');
      if (lvl >= 3) s += `<polygon points="${f(tx + 7)},${f(tTop - 18)} ${f(tx - 1)},${f(tTop - 3.6)} ${f(tx + 15)},${f(tTop - 3.6)}" fill="#8d3b2a" stroke="#4a1a12" stroke-width="1"/>`;
      if (lvl >= 6) s += pennant(tx + 7, tTop - 17, 9, '#b71c1c');
      s += win(tx + 4, tTop + 8, 6, 8, { glass: '#ffdf9b', frame: '#3a2c18', cross: false });
    });
    // Halle
    s += `<rect x="20" y="${f(hallTop)}" width="60" height="${f(F - 4 - hallTop)}" fill="#c4a86a" stroke="#6d5520" stroke-width="1.5"/>`;
    s += bricks(20, hallTop, 60, F - 4 - hallTop, 'transparent', '#8a6f30', Math.max(3, Math.round((F - 4 - hallTop) / 6)));
    s += `<rect x="62" y="${f(hallTop)}" width="18" height="${f(F - 4 - hallTop)}" fill="#000" opacity="0.13"/>`;
    // Dächer der Halle
    s += `<polygon points="17,${f(hallTop + 1)} 50,${f(hallTop - 15)} 83,${f(hallTop + 1)}" fill="#a83232" stroke="#54120f" stroke-width="1.4" stroke-linejoin="round"/>`;
    s += shingles(50, hallTop - 12, 32, 3, '#bd4444', '#54120f', 0.85);
    // Zentraler Bergfried
    s += `<rect x="36" y="${f(keepTop)}" width="28" height="${f(F - 4 - keepTop)}" fill="#b9a67c" stroke="#5f4c26" stroke-width="1.5"/>`;
    s += stoneBlocks(36, keepTop, 28, F - 4 - keepTop, 'transparent', '#5f4c26');
    s += `<rect x="56" y="${f(keepTop)}" width="8" height="${f(F - 4 - keepTop)}" fill="#000" opacity="0.14"/>`;
    s += `<polygon points="32,${f(keepTop + 1)} 50,${f(keepTop - 20 - p * 8)} 68,${f(keepTop + 1)}" fill="#8d3b2a" stroke="#4a1410" stroke-width="1.5" stroke-linejoin="round"/>`;
    s += shingles(50, keepTop - 16 - p * 8, 15, 3, '#a84a34', '#4a1410', 0.8);
    if (lvl >= 4) s += `<rect x="58" y="${f(keepTop - 30 - p * 8)}" width="5" height="14" fill="#6a5a44" stroke="#3a2f20" stroke-width="0.8"/>`;
    if (lvl >= 5) s += pennant(50, keepTop - 20 - p * 8, 12, '#ffb300');
    if (lvl >= 7) s += pennant(41, keepTop - 16, 9, '#1565c0');
    // Fenster
    s += win(28, hallTop + 6, 9, 10, { glass: '#ffe08a', frame: '#4a3418' });
    s += win(44, hallTop + 6, 9, 10, { glass: '#ffe08a', frame: '#4a3418' });
    s += win(63, hallTop + 6, 9, 10, { glass: '#ffe08a', frame: '#4a3418' });
    s += win(42, keepTop + 6, 7, 9, { glass: '#fff0b0', frame: '#4a3418', cross: false });
    s += win(52, keepTop + 6, 7, 9, { glass: '#fff0b0', frame: '#4a3418', cross: false });
    if (lvl >= 4) s += win(47, keepTop + 20, 7, 9, { glass: '#fff0b0', frame: '#4a3418', cross: false });
    // Tor
    s += `<path d="M44 ${F + 1} V76 A6 6 0 0 1 56 76 V${F + 1} Z" fill="#3a2410" stroke="#1e1208" stroke-width="1.1"/>`;
    s += `<path d="M44 77 q6 -5 12 0" stroke="#1e1208" stroke-width="0.8" fill="none"/>`;
    s += `<circle cx="54.4" cy="84" r="0.9" fill="#ffd54f"/>`;
    // Treppe
    s += `<rect x="42" y="${F + 1}" width="16" height="3" fill="#a09274" stroke="#4a3f28" stroke-width="0.6"/>`;
    // Level 8+: Mauerring
    if (lvl >= 8) {
      s += `<rect x="2" y="${F - 8}" width="96" height="6" fill="#a89a7c" stroke="#4a3f28" stroke-width="0.9" rx="1"/>`;
      s += crenels(4, F - 11, 88, 9, '#b8aa8c', '#4a3f28');
    }
    return svg(s);
  }

  if (type === 'house') {
    const bH = 20 + p * 7;
    const top = F - 4 - bH;
    const w = 66, x = 17;
    let s = shadow(40);
    s += houseBody({ id: 'hs', x, w, bodyTop: top, bodyH: bH, roofH: 15 + p * 4, bodyFill: '#e0b184', bodyLine: '#6b4526', roofFill: '#b8402f', roofLine: '#5a1a12', baseFill: '#a89a86', baseLine: '#4a4038', shingleRows: 4, timber: '#7a4a24', timberCount: 4 });
    s += win(23, top + 4, 10, 9, { glass: '#ffe08a', frame: '#4a2c14' });
    if (lvl >= 2) s += win(48, top + 4, 10, 9, { glass: '#ffe08a', frame: '#4a2c14' });
    s += door(66, top + bH - 14, 11, 14, { fill: '#5a3a1e' });
    // Giebel-Dachfenster
    if (lvl >= 3) s += `<path d="M42 ${top - 8} h12 v8 h-12 z" fill="#8ed4f0" stroke="#3a2c18" stroke-width="0.8"/>`;
    s += chimney(62, top - 16, 5, 12, '#9a7a5a', '#4a3420');
    // Garten
    if (lvl >= 4) {
      s += `<rect x="6" y="${F - 3}" width="14" height="4" fill="#7a9a4a" stroke="#3f5a22" stroke-width="0.6" rx="1"/>`;
      s += `<circle cx="10" cy="${F - 5}" r="3" fill="#4c8a34"/><circle cx="16" cy="${F - 5}" r="2.6" fill="#5f9c40"/>`;
    }
    if (lvl >= 6) {
      s += `<rect x="82" y="${F - 3}" width="12" height="4" fill="#7a9a4a" stroke="#3f5a22" stroke-width="0.6" rx="1"/>`;
      s += `<path d="M84 ${F - 4} l4 -8 l4 8 Z" fill="#3f6a28"/>`;
    }
    if (lvl >= 8) s += `<rect x="78" y="${top + 10}" width="9" height="8" fill="#c9a84c" stroke="#6a4a10" stroke-width="0.7" rx="1"/>`;
    return svg(s);
  }

  if (type === 'buildersguild') {
    const top = 50, bH = F - 4 - top, x = 12, w = 76;
    let s = shadow(44);
    s += houseBody({ id: 'bg', x, w, bodyTop: top, bodyH: bH, roofH: 17, bodyFill: '#f0b45c', bodyLine: '#8a5010', roofFill: '#d9631a', roofLine: '#7a2a06', baseFill: '#b08a5a', baseLine: '#5a3a18', shingleRows: 4, timber: '#9a5a18', timberCount: 5 });
    s += win(22, top + 6, 11, 10, { glass: '#fff0b0', frame: '#5a3a10' });
    s += win(52, top + 6, 11, 10, { glass: '#fff0b0', frame: '#5a3a10' });
    s += door(42, top + 16, 16, 20, { fill: '#6a3a12', line: '#3a1a04' });
    // Gerüst
    s += `<rect x="6" y="${top + 4}" width="3" height="${bH + 4}" fill="#c9a060" stroke="#6a4418" stroke-width="0.6"/>`;
    s += `<rect x="91" y="${top + 4}" width="3" height="${bH + 4}" fill="#c9a060" stroke="#6a4418" stroke-width="0.6"/>`;
    s += `<rect x="6" y="${top + 14}" width="88" height="2.6" fill="#c9a060" stroke="#6a4418" stroke-width="0.5"/>`;
    // Kran-Rolle oben
    s += `<circle cx="50" cy="${top - 12}" r="4.6" fill="#f0c060" stroke="#7a4a10" stroke-width="0.8"/><circle cx="50" cy="${top - 12}" r="1.5" fill="#5a3410"/>`;
    s += `<path d="M50 ${top - 12} V${top - 3}" stroke="#7a4a10" stroke-width="0.8"/>`;
    // Ziegelstapel + Fässer
    s += `<g>${[0, 1].map(i => `<rect x="${70 + i * 11}" y="${F - 10 - i * 4}" width="10" height="4" fill="#d8863a" stroke="#7a4010" stroke-width="0.5" rx="0.8"/>`).join('')}</g>`;
    s += `<ellipse cx="20" cy="${F - 6}" rx="5" ry="4.4" fill="#a8763a" stroke="#5a3a12" stroke-width="0.7"/><path d="M15 ${F - 7} h10 M15 ${F - 4.6} h10" stroke="#5a3a12" stroke-width="0.6"/>`;
    if (lvl >= 4) s += `<rect x="34" y="${F - 12}" width="14" height="8" fill="#e8dcc0" stroke="#8a7a5a" stroke-width="0.7" rx="1"/><path d="M34 ${F - 9} h14" stroke="#8a7a5a" stroke-width="0.5"/>`;
    return svg(s);
  }

  if (type === 'well') {
    let s = shadow(28);
    s += `<ellipse cx="50" cy="${F - 3}" rx="24" ry="8" fill="#9a9186" stroke="#4a4438" stroke-width="1.3"/>`;
    s += `<rect x="26" y="${F - 10}" width="48" height="8" fill="#b0a89a" stroke="#4a4438" stroke-width="1.1"/>`;
    s += `<ellipse cx="50" cy="${F - 10}" rx="24" ry="8" fill="#cfc8bc" stroke="#4a4438" stroke-width="1.1"/>`;
    s += `<ellipse cx="50" cy="${F - 10}" rx="18" ry="5.6" fill="#2f6f8f"/>`;
    s += `<ellipse cx="50" cy="${F - 10.6}" rx="14" ry="4" fill="#5fb6d8" opacity="0.8"/>`;
    s += `<path d="M36 ${F - 11} q4 -3 8 0" stroke="#bfe9f8" stroke-width="0.8" fill="none" opacity="0.8"/>`;
    // Pfosten + Dach
    s += `<rect x="30" y="${F - 26}" width="3.4" height="16" fill="#8a6234" stroke="#4a3216" stroke-width="0.6"/>`;
    s += `<rect x="66.6" y="${F - 26}" width="3.4" height="16" fill="#8a6234" stroke="#4a3216" stroke-width="0.6"/>`;
    s += `<rect x="30" y="${F - 22}" width="40" height="2.6" fill="#a87a44" stroke="#4a3216" stroke-width="0.5"/>`;
    s += `<polygon points="24,${F - 25} 50,${F - 36} 76,${F - 25}" fill="#8d3b2a" stroke="#40140e" stroke-width="1.2" stroke-linejoin="round"/>`;
    s += shingles(50, F - 33, 18, 3, '#a84a34', '#40140e', 0.8);
    // Eimer
    s += `<line x1="50" y1="${F - 22}" x2="50" y2="${F - 16}" stroke="#5a4530" stroke-width="0.7"/>`;
    s += `<path d="M46 ${F - 16} h8 l-1.4 5 h-5.2 Z" fill="#7a5a34" stroke="#3a2a14" stroke-width="0.5"/>`;
    if (lvl >= 2) {
      s += `<ellipse cx="50" cy="${F - 12}" rx="26" ry="9" fill="#7fb8d8" opacity="0.25"/>`;
      s += `<path d="M22 ${F - 4} q6 -14 28 -16" stroke="#5a4530" stroke-width="0.8" fill="none"/>`;
      s += `<rect x="20" y="${F - 6}" width="6" height="6" rx="3" fill="#8a6234" stroke="#3a2a14" stroke-width="0.5"/>`;
    }
    if (lvl >= 4) {
      s += `<rect x="78" y="${F - 12}" width="9" height="8" fill="#8a6234" stroke="#4a3216" stroke-width="0.7" rx="1"/>`;
      s += `<circle cx="82.5" cy="${F - 13}" r="3" fill="#4c8a34"/>`;
    }
    return svg(s);
  }

  /* =====================================================
     PRODUKTION
     ===================================================== */
  if (type === 'farm') {
    const rows = 3 + Math.min(lvl, 5);
    let field = `<rect x="2" y="70" width="96" height="22" rx="3" fill="#7d5a2c" stroke="#3e2a10" stroke-width="1.1"/>`;
    for (let i = 0; i < rows; i++) {
      const yy = 72 + (18 / rows) * (i + 0.5);
      for (let k = 0; k < 14; k++) {
        const xx = 5 + k * 6.6;
        const sway = ((i + k) % 2 ? 1.2 : -1.2);
        field += `<line x1="${f(xx)}" y1="${f(yy)}" x2="${f(xx + sway)}" y2="${f(yy - 4.2)}" stroke="#5f8a2c" stroke-width="1.1" stroke-linecap="round"/>`;
        field += `<ellipse cx="${f(xx + sway)}" cy="${f(yy - 5)}" rx="1.7" ry="1.3" fill="#d8b44a"/>`;
      }
    }
    const barn = houseBody({ id: 'fm', x: 58, w: 36, bodyTop: 42, bodyH: 26, roofH: 14, bodyFill: '#b8482c', bodyLine: '#5a1a10', roofFill: '#8d3b2a', roofLine: '#40140e', baseFill: '#8a7a62', baseLine: '#453a28', shingleRows: 3 })
      + `<path d="M76 42 v26 M64 42 l12 10 l12 -10" stroke="#e8d0b0" stroke-width="1.6" fill="none"/>`
      + win(64, 48, 8, 7, { glass: '#ffe08a', frame: '#5a1a10', sill: false })
      + `<rect x="72" y="58" width="11" height="10" fill="#5a2a12" stroke="#2a1208" stroke-width="0.8"/>`
      + `<path d="M77.5 58 v10 M72 63 h11" stroke="#2a1208" stroke-width="0.6"/>`;
    const silo = lvl >= 4 ? `<rect x="46" y="44" width="11" height="24" fill="#d8d2c4" stroke="#6a6458" stroke-width="1"/><ellipse cx="51.5" cy="44" rx="5.5" ry="2.6" fill="#e8e2d4" stroke="#6a6458" stroke-width="0.8"/><path d="M46 54 h11 M46 62 h11" stroke="#a8a294" stroke-width="0.5"/>` : '';
    const windmill = lvl >= 7 ? `<g transform="translate(20 46)"><rect x="-0.9" y="0" width="1.8" height="44" fill="#8a6a3a" stroke="#3e2a12" stroke-width="0.4"/><path d="M-9 -1 l9 -7 l9 7 Z" fill="#c9a84c" stroke="#7a5a10" stroke-width="0.7"/><g><path d="M-1 -9 h2 v18 h-2 Z M-9 -1 h18 v2 h-18 Z" fill="#f2ead6" stroke="#8a6a3a" stroke-width="0.4" opacity="0.95"/></g></g>` : '';
    return svg(shadow(44) + field + silo + barn + windmill);
  }

  if (type === 'lumber') {
    const top = 48, bH = F - 4 - top, x = 10, w = 52;
    let s = shadow(42);
    s += houseBody({ id: 'lb', x, w, bodyTop: top, bodyH: bH, roofH: 14, bodyFill: '#8a6340', bodyLine: '#3e2412', roofFill: '#5d4037', roofLine: '#2a1a0e', baseFill: '#7a6a52', baseLine: '#3a2f22', shingleRows: 3, timber: '#5a3a1e', timberCount: 4 });
    s += win(18, top + 6, 10, 9, { glass: '#ffdf9b', frame: '#3a2412' });
    s += door(42, top + 12, 13, 18, { fill: '#3a2412', line: '#1a0e04' });
    // Holzlager
    let logs = '';
    for (let row = 0; row < 2 + lvl; row++) {
      for (let c = 0; c < 3; c++) {
        const lx = 64 + c * 9.4, ly = F - 8 - row * 5.6;
        logs += `<rect x="${f(lx)}" y="${f(ly)}" width="9.4" height="5.2" fill="${(row + c) % 2 ? '#b08d6a' : '#96755a'}" stroke="#4e342e" stroke-width="0.5" rx="1.6"/>`;
        if (c === 2) logs += `<ellipse cx="${f(lx + 9.4)}" cy="${f(ly + 2.6)}" rx="1.8" ry="2.4" fill="#d8c4a8" stroke="#4e342e" stroke-width="0.4"/>`;
      }
    }
    s += logs;
    // Axt im Stumpf
    s += `<ellipse cx="34" cy="${F - 2}" rx="8" ry="3" fill="#8a6340" stroke="#3e2412" stroke-width="0.8"/>`;
    s += `<path d="M34 ${F - 3} L42 ${F - 15}" stroke="#6a4a2a" stroke-width="1.7"/>`;
    s += `<path d="M40 ${F - 17} l5 -1.4 l1.4 5 l-5 1.4 Z" fill="#c0c8cc" stroke="#4a5258" stroke-width="0.6"/>`;
    if (lvl >= 5) s += `<g transform="translate(88 40)"><rect x="-1" y="0" width="2" height="8" fill="#5a3a1e"/><path d="M-5 0 l5 -7 l5 7 Z" fill="#3f6a28" stroke="#22400f" stroke-width="0.5"/></g>`;
    return svg(s);
  }

  if (type === 'quarry') {
    let s = shadow(46);
    s += `<ellipse cx="50" cy="78" rx="46" ry="16" fill="#a9a49a" stroke="#5a554c" stroke-width="1.2"/>`;
    s += `<ellipse cx="50" cy="76" rx="38" ry="12" fill="#8e8a80"/>`;
    s += `<ellipse cx="50" cy="74" rx="29" ry="8.4" fill="#6d6a62"/>`;
    s += `<ellipse cx="50" cy="73" rx="19" ry="5.2" fill="#4d4b45"/>`;
    // Stufen
    for (let i = 0; i < 3; i++) s += `<path d="M${f(14 + i * 8)} ${f(84 - i * 5)} H${f(86 - i * 8)}" stroke="#c0bbb0" stroke-width="1.6" opacity="0.6"/>`;
    // Quaderstapel
    let blocks = '';
    const nb = 2 + lvl;
    for (let i = 0; i < nb; i++) {
      const bx = 8 + (i % 4) * 12, by = F - 8 - Math.floor(i / 4) * 6;
      blocks += `<rect x="${bx}" y="${by}" width="11" height="5.6" fill="#c6c1b6" stroke="#5a554c" stroke-width="0.6" rx="0.6"/><path d="M${bx} ${by + 1.6} h11" stroke="#8a857a" stroke-width="0.4"/>`;
    }
    // Kran
    const crane = `<g><rect x="70" y="${F - 30}" width="3" height="30" fill="#8a6234" stroke="#4a3216" stroke-width="0.6"/>
      <path d="M73 ${F - 30} L92 ${F - 30}" stroke="#8a6234" stroke-width="2.4"/>
      <path d="M73 ${F - 30} L64 ${F - 22}" stroke="#8a6234" stroke-width="1.6"/>
      <line x1="86" y1="${F - 30}" x2="86" y2="${F - 18}" stroke="#5a4530" stroke-width="0.6"/>
      <rect x="82" y="${F - 18}" width="8" height="6" fill="#b0aa9e" stroke="#5a554c" stroke-width="0.6"/></g>`;
    s += blocks + crane;
    if (lvl >= 6) s += `<g transform="translate(28 ${F - 22})"><rect x="-4" y="0" width="8" height="10" fill="#9a958a" stroke="#4a453c" stroke-width="0.7"/><path d="M-4 0 l4 -4 l4 4" fill="#b0aa9e" stroke="#4a453c" stroke-width="0.6"/></g>`;
    return svg(s);
  }

  if (type === 'blacksmith') {
    const top = 48, bH = F - 4 - top, x = 10, w = 80;
    let s = shadow(44);
    s += houseBody({ id: 'bs', x, w, bodyTop: top, bodyH: bH, roofH: 15, bodyFill: '#6b5340', bodyLine: '#2e1d10', roofFill: '#4a382c', roofLine: '#22160c', baseFill: '#8a7f70', baseLine: '#403830', shingleRows: 4, timber: '#43301f', timberCount: 5 });
    // Esse + Feuer
    s += `<rect x="62" y="24" width="12" height="26" fill="#5a4a3e" stroke="#26180e" stroke-width="1.1"/>`;
    s += `<path d="M62 32 h12 M62 42 h12" stroke="#3a2c22" stroke-width="0.5"/>`;
    s += `<ellipse cx="68" cy="24" rx="6" ry="2" fill="#3a2c22" stroke="#26180e" stroke-width="0.6"/>`;
    if (lvl >= 2) s += `<ellipse cx="68" cy="20" rx="5" ry="3.4" fill="#ff7a1a" opacity="0.4"/>`;
    // Ofenöffnung
    s += `<path d="M40 78 V66 a10 10 0 0 1 20 0 V78 Z" fill="#1c1208" stroke="#0e0804" stroke-width="1"/>`;
    s += `<path d="M42 78 q8 -12 16 0 Z" fill="#ff6a1a" opacity="0.85"/>`;
    s += `<path d="M44 78 q6 -8 12 0 Z" fill="#ffe08a" opacity="0.9"/>`;
    s += `<ellipse cx="50" cy="70" rx="13" ry="10" fill="#ff8f00" opacity="0.14"/>`;
    // Fenster
    s += win(20, top + 6, 10, 9, { glass: '#ffe08a', frame: '#2e1d10' });
    // Amboss + Fässer
    s += `<g transform="translate(20 ${F - 4})"><rect x="-3" y="-3" width="6" height="3" fill="#3a3a3e"/><path d="M-7 -6 h14 l-3 3 h-8 Z" fill="#5a5a60" stroke="#2a2a30" stroke-width="0.6"/></g>`;
    s += `<ellipse cx="88" cy="${F - 6}" rx="5" ry="4.4" fill="#8a6a3a" stroke="#3e2a12" stroke-width="0.7"/>`;
    if (lvl >= 4) s += `<g transform="translate(78 ${F - 4})"><path d="M-4 0 v-8 M0 0 v-10 M4 0 v-8" stroke="#b0b8bc" stroke-width="1.6"/></g>`;
    if (lvl >= 6) s += `<path d="M34 44 l10 6 l-10 6" stroke="#ffb300" stroke-width="1.4" fill="none" opacity="0.8"/>`;
    return svg(s);
  }

  if (type === 'bakery') {
    const top = 50, bH = F - 4 - top, x = 12, w = 76;
    let s = shadow(42);
    s += houseBody({ id: 'bk', x, w, bodyTop: top, bodyH: bH, roofH: 15, bodyFill: '#f2cc94', bodyLine: '#8a5f24', roofFill: '#a8542f', roofLine: '#4a1c0e', baseFill: '#a89a80', baseLine: '#4a4034', shingleRows: 4, timber: '#8a5f24', timberCount: 4 });
    // Backofen-Kuppel
    s += `<path d="M58 ${F - 4} a13 13 0 0 1 26 0 Z" fill="#c98a5a" stroke="#5a3418" stroke-width="1.1"/>`;
    s += `<path d="M64 ${F - 4} a7 7 0 0 1 14 0 Z" fill="#2a1608"/>`;
    s += `<path d="M66 ${F - 4} q5 -5 10 0 Z" fill="#ff9a3a" opacity="0.8"/>`;
    s += `<ellipse cx="71" cy="${F - 12}" rx="16" ry="7" fill="#ffb347" opacity="0.14"/>`;
    s += chimney(62, 30, 6, 16, '#b06a44', '#4a2410');
    s += win(22, top + 6, 11, 10, { glass: '#ffe08a', frame: '#5a3a14' });
    s += door(36, top + 14, 13, 20, { fill: '#6a4218', line: '#341c06' });
    // Brotkörbe
    s += `<ellipse cx="18" cy="${F - 5}" rx="6" ry="3.4" fill="#c9a86a" stroke="#6a4a18" stroke-width="0.6"/>`;
    s += `<ellipse cx="18" cy="${F - 7}" rx="4" ry="2" fill="#e0c088"/>`;
    if (lvl >= 3) s += `<ellipse cx="26" cy="${F - 4.4}" rx="5" ry="3" fill="#c9a86a" stroke="#6a4a18" stroke-width="0.6"/>`;
    if (lvl >= 5) s += `<g transform="translate(88 ${top + 10})"><rect x="-6" y="-3" width="12" height="6" rx="3" fill="#e0b070" stroke="#7a4a18" stroke-width="0.6"/><path d="M-3 -1 h6" stroke="#a8703a" stroke-width="0.6"/></g>`;
    return svg(s);
  }

  if (type === 'windmill') {
    const top = 40, bH = F - 4 - top;
    const bodyFill = '#e8dcc0', line = '#6a5a38';
    let s = shadow(36);
    s += `<path d="M32 ${f(top)} L68 ${f(top)} L74 ${f(F - 4)} L26 ${f(F - 4)} Z" fill="${bodyFill}" stroke="${line}" stroke-width="1.5" stroke-linejoin="round"/>`;
    s += `<path d="M60 ${f(top)} L68 ${f(top)} L74 ${f(F - 4)} L60 ${f(F - 4)} Z" fill="#000" opacity="0.12"/>`;
    s += `<rect x="30" y="${f(top - 4)}" width="40" height="5" fill="#c9a84c" stroke="#7a5c10" stroke-width="0.9" rx="1"/>`;
    s += `<polygon points="26,${f(top)} 50,${f(top - 16)} 74,${f(top)}" fill="#8d3b2a" stroke="#40140e" stroke-width="1.3" stroke-linejoin="round"/>`;
    s += shingles(50, top - 13, 19, 3, '#a84a34', '#40140e', 0.8);
    s += win(38, top + 8, 9, 8, { glass: '#ffe08a', frame: '#5a4a28' });
    s += door(44, F - 18, 12, 14, { fill: '#6a4a2a', line: '#2a1a0a' });
    // Flügel
    const cx = 50, cy = top + 2, R = 27 + p * 5;
    let blades = '';
    for (let i = 0; i < 4; i++) {
      blades += `<g transform="rotate(${i * 90} ${cx} ${cy})">
        <rect x="${f(cx - 1.1)}" y="${f(cy - R)}" width="2.2" height="${f(R - 3)}" fill="#6a4a2a"/>
        <path d="M${f(cx - 1.1)} ${f(cy - R)} h${f(R * 0.42)} v${f(R * 0.5)} h-${f(R * 0.42)} Z" fill="#f2ead6" stroke="#8a7a54" stroke-width="0.5" opacity="0.95"/>
        <path d="M${f(cx - 1.1)} ${f(cy - R + 2)} h${f(R * 0.42)}" stroke="#c9b98a" stroke-width="0.4"/>
      </g>`;
    }
    s += blades;
    s += `<circle cx="${cx}" cy="${cy}" r="4" fill="#8a6a3a" stroke="#3e2a12" stroke-width="1"/><circle cx="${cx}" cy="${cy}" r="1.4" fill="#3e2a12"/>`;
    if (lvl >= 4) s += `<rect x="76" y="${F - 12}" width="12" height="10" fill="#c9a86a" stroke="#6a4a18" stroke-width="0.8" rx="1"/><path d="M76 ${F - 8} h12" stroke="#8a6a3a" stroke-width="0.5"/>`;
    if (lvl >= 6) s += `<rect x="10" y="${F - 10}" width="13" height="8" fill="#c9a86a" stroke="#6a4a18" stroke-width="0.8" rx="1"/>`;
    return svg(s);
  }

  if (type === 'workshop') {
    const top = 48, bH = F - 4 - top, x = 10, w = 80;
    let s = shadow(44);
    s += houseBody({ id: 'ws', x, w, bodyTop: top, bodyH: bH, roofH: 13, bodyFill: '#8496a2', bodyLine: '#33424d', roofFill: '#5c6f7c', roofLine: '#28343c', baseFill: '#8e969c', baseLine: '#39434a', shingleRows: 3, roofStyle: 'flat' });
    s += door(14, top + 10, 20, 24, { fill: '#3a2a1a', arch: false, line: '#1a1208' });
    s += `<path d="M14 ${top + 10} L34 ${top + 34} M34 ${top + 10} L14 ${top + 34}" stroke="#2a1e12" stroke-width="0.8" opacity="0.6"/>`;
    // Zahnrad
    const gear = (gx, gy, r, fill) => {
      let o = `<circle cx="${gx}" cy="${gy}" r="${r}" fill="${fill}" stroke="#2c3a42" stroke-width="0.9"/>`;
      for (let i = 0; i < 8; i++) o += `<rect x="${f(gx - 1.3)}" y="${f(gy - r - 1.8)}" width="2.6" height="3.6" fill="${fill}" stroke="#2c3a42" stroke-width="0.4" transform="rotate(${i * 45} ${gx} ${gy})"/>`;
      o += `<circle cx="${gx}" cy="${gy}" r="${f(r * 0.34)}" fill="#2c3a42"/>`;
      return o;
    };
    s += gear(62, 66, 9, '#c0a868');
    if (lvl >= 2) s += gear(77, 74, 6.4, '#a8b0b8');
    if (lvl >= 3) s += gear(48, 74, 6, '#c08068');
    // Werkbank + Werkzeug
    s += `<rect x="40" y="${F - 12}" width="30" height="3" fill="#8a6a3a" stroke="#3e2a12" stroke-width="0.6"/>`;
    s += `<path d="M43 ${F - 9} v9 M67 ${F - 9} v9" stroke="#6a4a22" stroke-width="1.4"/>`;
    s += win(62, top + 6, 10, 8, { glass: '#ffe08a', frame: '#33424d', sill: false });
    if (lvl >= 4) s += `<rect x="76" y="${top + 4}" width="11" height="8" fill="#ffb74d" stroke="#7a4a10" stroke-width="0.7" rx="1"/>`;
    if (lvl >= 5) s += `<path d="M20 ${top - 8} q4 -6 8 0 M32 ${top - 8} q4 -6 8 0" stroke="#c0c8d0" stroke-width="1" fill="none" opacity="0.8"/>`;
    return svg(s);
  }

  if (type === 'factory') {
    const top = 50, bH = F - 4 - top, x = 6, w = 88;
    let s = shadow(46);
    s += bricks(x, top, w, bH, '#8a7268', '#3d2c26', 5);
    s += `<rect x="${x}" y="${top}" width="${w}" height="${bH}" fill="none" stroke="#3d2c26" stroke-width="1.5"/>`;
    s += `<rect x="${x + w - 22}" y="${top}" width="22" height="${bH}" fill="#000" opacity="0.14"/>`;
    s += `<rect x="${x - 2}" y="${top - 4}" width="${w + 4}" height="5" fill="#4a3a34" stroke="#2a1e1a" stroke-width="0.9" rx="1"/>`;
    // Schornsteine
    const stacks = lvl >= 5 ? 3 : 2;
    for (let i = 0; i < stacks; i++) {
      const sx = 20 + i * 22;
      const sh = 20 + i * 4 + p * 6;
      s += `<rect x="${sx}" y="${f(top - 4 - sh)}" width="8" height="${f(sh + 6)}" fill="#7a6258" stroke="#33241e" stroke-width="1"/>`;
      s += `<rect x="${f(sx - 1.4)}" y="${f(top - 6 - sh)}" width="10.8" height="3" fill="#4a3a34" stroke="#2a1e1a" stroke-width="0.6" rx="0.8"/>`;
      s += `<path d="M${sx} ${f(top - 6 - sh)} h8 M${sx} ${f(top - 6 - sh + 5)} h8 M${sx} ${f(top - 6 - sh + 10)} h8" stroke="#5a453c" stroke-width="0.4" opacity="0.7"/>`;
      if (lvl >= 3) s += `<g opacity="0.35" class="b-smoke"><ellipse cx="${sx + 4}" cy="${f(top - 12 - sh)}" rx="4.4" ry="3" fill="#dcd6d0"/><ellipse cx="${sx + 6}" cy="${f(top - 19 - sh)}" rx="3.2" ry="2.4" fill="#dcd6d0"/></g>`;
    }
    // Industriefenster
    for (let i = 0; i < 3; i++) s += `<path d="M${f(14 + i * 22)} ${f(top + 8)} h16 v10 h-16 Z" fill="#7fb8d8" stroke="#2a2018" stroke-width="0.9" opacity="0.85"/>`;
    // Tor
    s += `<rect x="56" y="${top + 24}" width="24" height="14" fill="#3a2c26" stroke="#1e140e" stroke-width="1" rx="1"/>`;
    s += `<path d="M56 ${top + 31} h24" stroke="#1e140e" stroke-width="0.6"/>`;
    s += `<path d="M60 ${top + 24} l-8 14 M76 ${top + 24} l-8 14" stroke="#2a1e18" stroke-width="0.7" opacity="0.6"/>`;
    if (lvl >= 7) s += `<rect x="30" y="${top + 24}" width="22" height="14" fill="#3a2c26" stroke="#1e140e" stroke-width="1" rx="1"/>`;
    return svg(s);
  }

  if (type === 'market') {
    const top = 50, bH = F - 4 - top, x = 8, w = 84;
    let s = shadow(44);
    // Zeltdächer
    const stripes = (sx, sw, colorA, colorB) => {
      let o = `<polygon points="${sx},${top + 4} ${sx + sw / 2},${top - 12} ${sx + sw},${top + 4}" fill="${colorA}" stroke="#5a2a1a" stroke-width="0.9"/>`;
      for (let i = 0; i < 3; i++) o += `<polygon points="${f(sx + sw * (i / 3 + 0.06))},${top + 4} ${f(sx + sw * (i / 3 + 0.22))},${f(top - 5)} ${f(sx + sw * (i / 3 + 0.38))},${top + 4}" fill="${colorB}" opacity="0.9"/>`;
      o += `<path d="M${sx} ${top + 4} h${sw}" stroke="#5a2a1a" stroke-width="1"/>`;
      return o;
    };
    s += `<rect x="${x}" y="${top + 4}" width="${w}" height="${bH}" fill="#f0dcb4" stroke="#8a6a3a" stroke-width="1.3"/>`;
    s += `<rect x="${x}" y="${top + 4}" width="${w}" height="4" fill="#a8865a"/>`;
    s += stripes(8, 28, '#d8452f', '#f2e0c0');
    s += stripes(36, 28, '#2f9c58', '#f2e0c0');
    s += stripes(64, 28, '#e8a92c', '#f2e0c0');
    s += `<rect x="${x + w - 20}" y="${top}" width="20" height="${bH + 4}" fill="#000" opacity="0.08"/>`;
    // Auslage
    s += `<rect x="14" y="${top + 16}" width="52" height="3.4" fill="#9a7444" stroke="#4a3418" stroke-width="0.6"/>`;
    s += `<path d="M16 ${top + 19.4} v14 M64 ${top + 19.4} v14" stroke="#7a5a32" stroke-width="1.6"/>`;
    const fruits = ['#e53935', '#fbc02d', '#43a047', '#7c4dbb', '#ef6c00'];
    for (let i = 0; i < 3 + lvl; i++) s += `<circle cx="${f(20 + i * 7.6)}" cy="${f(top + 13.6)}" r="3" fill="${fruits[i % fruits.length]}" stroke="#4a2a10" stroke-width="0.4"/>`;
    s += door(30, F - 14, 12, 14, { fill: '#6a4a22', line: '#33200c', arch: false });
    // Kisten + Wagenrad
    s += `<rect x="70" y="${F - 12}" width="11" height="11" fill="#b08a52" stroke="#4a3418" stroke-width="0.8"/><path d="M70 ${F - 7} h11 M75.5 ${F - 12} v11" stroke="#7a5a32" stroke-width="0.5"/>`;
    s += `<circle cx="88" cy="${F - 6}" r="6" fill="none" stroke="#7a5a32" stroke-width="1.4"/><path d="M82 ${F - 6} h12 M88 ${F - 12} v12 M84 ${F - 10} l8 8 M92 ${F - 10} l-8 8" stroke="#9a7444" stroke-width="0.6"/>`;
    if (lvl >= 5) s += `<rect x="14" y="${F - 12}" width="12" height="11" fill="#b08a52" stroke="#4a3418" stroke-width="0.8"/>`;
    return svg(s);
  }

  if (type === 'fishing') {
    let s = shadow(30);
    // Wasser
    s += `<ellipse cx="50" cy="82" rx="44" ry="14" fill="url(#waterG)" stroke="#1e5f80" stroke-width="1.1"/>`;
    s += `<ellipse cx="50" cy="80" rx="36" ry="10" fill="#63c4e8" opacity="0.5"/>`;
    s += `<path d="M22 80 q6 -2 12 0 M60 84 q6 -2 12 0" stroke="#e8f6ff" stroke-width="0.7" fill="none" opacity="0.7"/>`;
    // Hütte auf Stelzen
    s += `<rect x="30" y="62" width="4" height="14" fill="#6a4a2a" stroke="#33200c" stroke-width="0.6"/>`;
    s += `<rect x="62" y="62" width="4" height="14" fill="#6a4a2a" stroke="#33200c" stroke-width="0.6"/>`;
    s += houseBody({ id: 'fh', x: 26, w: 44, bodyTop: 40, bodyH: 22, roofH: 13, bodyFill: '#a88258', bodyLine: '#4a2f16', roofFill: '#6a4a3a', roofLine: '#2e1c12', baseFill: 'none', baseLine: 'none', shingleRows: 3, timber: '#5a3a1c', timberCount: 3 });
    s += `<rect x="26" y="62" width="44" height="3" fill="#7a5a34" stroke="#3a2410" stroke-width="0.6"/>`;
    s += win(34, 46, 9, 8, { glass: '#ffe08a', frame: '#3a2412' });
    s += door(50, 50, 10, 12, { fill: '#4a2f16', line: '#241405' });
    // Netz + Ruten
    s += `<path d="M14 76 q10 -10 22 -4" stroke="#c9b98a" stroke-width="0.7" fill="none"/><path d="M14 76 q6 4 12 2 q6 -2 10 -6" stroke="#c9b98a" stroke-width="0.5" fill="none" opacity="0.8"/>`;
    s += `<line x1="14" y1="76" x2="10" y2="68" stroke="#6a4a22" stroke-width="1.2"/>`;
    s += `<line x1="80" y1="72" x2="88" y2="60" stroke="#6a4a22" stroke-width="1.2"/>`;
    // Boot
    s += `<path d="M66 84 q10 -3 20 -3 q-3 6 -12 6 q-6 0 -8 -3 Z" fill="#8a6234" stroke="#3a2410" stroke-width="0.7"/>`;
    if (lvl >= 3) s += `<path d="M30 86 q8 -4 16 -1" stroke="#e8f6ff" stroke-width="0.8" fill="none" opacity="0.6"/>`;
    if (lvl >= 5) s += `<path d="M40 88 q6 -3 12 0" stroke="#e8f6ff" stroke-width="0.8" fill="none" opacity="0.6"/>`;
    return svg(s);
  }

  if (type === 'mine' || type === 'gemMine') {
    const gem = type === 'gemMine';
    const rock = gem ? '#6a5578' : '#7a5f4a';
    const rockD = gem ? '#3a2a4a' : '#42301e';
    let s = shadow(44);
    // Berg
    s += `<path d="M2 ${F + 1} L18 46 Q28 30 40 40 L52 26 L66 44 L80 34 L98 ${F + 1} Z" fill="${rock}" stroke="${rockD}" stroke-width="1.4" stroke-linejoin="round"/>`;
    s += `<path d="M52 26 L66 44 L80 34 L98 ${F + 1} L56 ${F + 1} Z" fill="#000" opacity="0.18"/>`;
    s += `<path d="M18 46 Q28 30 40 40 L52 26" fill="none" stroke="${lighten(rock, 34)}" stroke-width="1" opacity="0.7"/>`;
    // Stolleneingang
    s += `<path d="M32 ${F + 1} V66 a14 14 0 0 1 28 0 V${F + 1} Z" fill="#140c06" stroke="#000" stroke-width="1.1"/>`;
    s += `<path d="M34 ${F + 1} V66 a12 12 0 0 1 24 0 V${F + 1} Z" fill="#241608" opacity="0.8"/>`;
    // Stützbalken
    s += `<rect x="30" y="60" width="4" height="32" fill="#8a6234" stroke="#3a2410" stroke-width="0.7"/>`;
    s += `<rect x="58" y="60" width="4" height="32" fill="#8a6234" stroke="#3a2410" stroke-width="0.7"/>`;
    s += `<rect x="28" y="56" width="36" height="5" fill="#a8763a" stroke="#3a2410" stroke-width="0.8" rx="1"/>`;
    // Lore + Schienen
    s += `<path d="M6 ${F - 2} h34 M6 ${F + 2} h34" stroke="#5a5a60" stroke-width="0.8"/>`;
    s += `<path d="M10 ${F - 6} h20 l-3 8 h-14 Z" fill="#6a6a70" stroke="#2a2a30" stroke-width="0.8"/>`;
    s += `<circle cx="14" cy="${F - 1}" r="2" fill="#2a2a30"/><circle cx="26" cy="${F - 1}" r="2" fill="#2a2a30"/>`;
    // Erz / Edelsteine
    if (gem) {
      const spots = [[20, 62], [76, 54], [86, 68], [64, 50], [34, 48]];
      const n = Math.min(spots.length, 2 + lvl);
      for (let i = 0; i < n; i++) {
        const [gx, gy] = spots[i];
        const gs = 4 + (i % 3);
        s += `<path d="M${gx} ${gy - gs} L${gx + gs * 0.72} ${gy} L${gx} ${gy + gs} L${gx - gs * 0.72} ${gy} Z" fill="#b48ae8" stroke="#4a1a8a" stroke-width="0.8"/>`;
        s += `<path d="M${gx} ${gy - gs} L${gx + gs * 0.72} ${gy} L${gx} ${gy} Z" fill="#e0c4ff" opacity="0.85"/>`;
        s += `<circle cx="${gx - 1}" cy="${gy - 1.4}" r="0.8" fill="#fff" opacity="0.9"/>`;
      }
      s += `<ellipse cx="50" cy="${F - 8}" rx="30" ry="8" fill="#a87ee0" opacity="0.12"/>`;
    } else {
      s += `<circle cx="50" cy="76" r="2.2" fill="#ffd54f"/><circle cx="24" cy="70" r="1.8" fill="#ffd54f" opacity="0.8"/><circle cx="70" cy="72" r="1.6" fill="#ffd54f" opacity="0.7"/>`;
      s += `<ellipse cx="50" cy="${F - 4}" rx="16" ry="4" fill="#ffd54f" opacity="0.14"/>`;
    }
    // Fördergerüst je Level
    if (lvl >= 3) {
      s += `<g><path d="M70 30 L74 10 L78 30" stroke="#8a6234" stroke-width="1.8" fill="none"/><path d="M66 30 h16" stroke="#8a6234" stroke-width="1.8"/><circle cx="74" cy="12" r="2.4" fill="#c9a060" stroke="#5a3a12" stroke-width="0.6"/></g>`;
    }
    if (lvl >= 6) s += `<path d="M74 12 L74 34" stroke="#5a4530" stroke-width="0.6"/>`;
    return svg(s);
  }

  if (type === 'stable') {
    const top = 46, bH = F - 4 - top, x = 8, w = 66;
    let s = shadow(46);
    s += houseBody({ id: 'st', x, w, bodyTop: top, bodyH: bH, roofH: 15, bodyFill: '#b08a62', bodyLine: '#4e3218', roofFill: '#8d3b2a', roofLine: '#40140e', baseFill: '#a89a80', baseLine: '#4a4034', shingleRows: 4, timber: '#6a4620', timberCount: 4 });
    s += `<path d="M${x + 8} ${top} l${(w - 16) / 2} ${-10} l${(w - 16) / 2} 10" fill="#e8d8b8" stroke="#4e3218" stroke-width="1" opacity="0.9"/>`;
    // Stalltüren
    s += `<path d="M18 ${F - 4} V64 a9 9 0 0 1 18 0 V${F - 4} Z" fill="#5a3a1e" stroke="#2a1808" stroke-width="0.9"/>`;
    s += `<path d="M18 ${F - 4} L36 64 M36 ${F - 4} L18 64" stroke="#2a1808" stroke-width="0.6" opacity="0.6"/>`;
    s += win(46, top + 8, 10, 9, { glass: '#ffe08a', frame: '#4e3218' });
    // Paddock
    s += `<path d="M78 ${F - 4} h20 v-16 h-20 Z" fill="#7fae55" stroke="#3f5a22" stroke-width="0.8" opacity="0.9"/>`;
    let fence = '';
    for (let i = 0; i < 5; i++) fence += `<rect x="${f(76 + i * 5)}" y="${F - 22}" width="1.6" height="20" fill="#8a6a44" stroke="#3a2410" stroke-width="0.4"/>`;
    fence += `<rect x="75" y="${F - 19}" width="25" height="1.6" fill="#8a6a44"/><rect x="75" y="${F - 12}" width="25" height="1.6" fill="#8a6a44"/>`;
    s += fence;
    // Pferd
    if (lvl >= 2) s += `<g transform="translate(87 ${F - 9})">
      <ellipse rx="6.4" ry="3.6" fill="#8a5a34" stroke="#3a2010" stroke-width="0.6"/>
      <path d="M5 -1.6 l4.4 -4.4 l1.4 3.4 l-3.6 1.6" fill="#8a5a34" stroke="#3a2010" stroke-width="0.5"/>
      <path d="M-4.6 -2 l-4 -4" stroke="#3a2010" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M-3 2.6 v4 M1 2.6 v4 M4 2.6 v4" stroke="#6a4424" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M-3 6.6 h1.6 M1 6.6 h1.6 M4 6.6 h1.6" stroke="#3a2010" stroke-width="1"/>
      <circle cx="6.6" cy="-4.4" r="0.8" fill="#2a1a08"/></g>`;
    if (lvl >= 4) s += `<g transform="translate(12 36)"><rect x="-1" y="0" width="2" height="8" fill="#5a3a1e"/><circle cy="-2" r="5" fill="#e8d8b8" stroke="#8a6a44" stroke-width="0.7"/></g>`;
    return svg(s);
  }

  /* =====================================================
     MILITÄR
     ===================================================== */
  if (type === 'barracks') {
    const top = 48, bH = F - 4 - top, x = 8, w = 84;
    let s = shadow(46);
    s += houseBody({ id: 'br', x, w, bodyTop: top, bodyH: bH, roofH: 16, bodyFill: '#9a8a7a', bodyLine: '#3f342a', roofFill: '#5d4037', roofLine: '#2a1a12', baseFill: '#a89a86', baseLine: '#4a4034', shingleRows: 4, timber: '#5a4634', timberCount: 5 });
    s += `<path d="M50 ${top - 16} l-4 6 h8 Z" fill="#c62828"/>`;
    s += win(20, top + 8, 10, 9, { glass: '#ffe08a', frame: '#3f342a' });
    s += win(70, top + 8, 10, 9, { glass: '#ffe08a', frame: '#3f342a' });
    s += door(42, top + 16, 16, 24, { fill: '#4a341f', line: '#241608' });
    s += `<path d="M42 ${top + 28} h16" stroke="#2a1a08" stroke-width="1"/>`;
    // Fahnen
    s += `<rect x="8" y="${top - 10}" width="2" height="20" fill="#3a2a1a"/><path d="M10 ${top - 10} l12 3 l-12 3 Z" fill="#b71c1c" stroke="#5a1010" stroke-width="0.5"/>`;
    s += `<rect x="90" y="${top - 10}" width="2" height="20" fill="#3a2a1a"/><path d="M90 ${top - 10} l-12 3 l12 3 Z" fill="#1565c0" stroke="#0a3a6a" stroke-width="0.5"/>`;
    // Schilde an der Wand
    for (let i = 0; i < 3 + p * 3; i++) {
      const sx = 22 + i * 9;
      s += `<ellipse cx="${f(sx)}" cy="${top + 6}" rx="3.4" ry="4.2" fill="#c9a84c" stroke="#6a4a10" stroke-width="0.6"/><circle cx="${f(sx)}" cy="${top + 6}" r="1.2" fill="#6a4a10"/>`;
    }
    // Trainingspuppe + Waffenständer
    s += `<g transform="translate(20 ${F - 4})"><rect x="-1" y="-14" width="2" height="14" fill="#5a3a1a"/><rect x="-6" y="-12" width="12" height="2" fill="#5a3a1a"/><ellipse cy="-16" rx="4" ry="4.4" fill="#c8a878" stroke="#5a3a1a" stroke-width="0.6"/></g>`;
    if (lvl >= 4) s += `<g transform="translate(84 ${F - 4})"><path d="M-8 0 v-14 M0 0 v-16 M8 0 v-14" stroke="#8a6234" stroke-width="1.8"/><path d="M-8 -14 l4 -4 l4 4 M0 -16 l3 -4 l3 4" fill="none" stroke="#b0b8bc" stroke-width="1.2"/></g>`;
    if (lvl >= 6) s += `<rect x="14" y="${F - 8}" width="10" height="6" fill="#8a7a5a" stroke="#3f342a" stroke-width="0.6"/>`;
    return svg(s);
  }

  if (type === 'tower' || type === 'watchtower') {
    const th = 52 + p * 30;
    const top = F - 4 - th;
    let s = shadow(28);
    // Steinsockel
    s += `<ellipse cx="50" cy="${F - 2}" rx="20" ry="5.6" fill="#9a9384" stroke="#4a453c" stroke-width="1"/>`;
    s += `<rect x="32" y="${F - 12}" width="36" height="8" fill="#b0aa9c" stroke="#494339" stroke-width="1.1"/>`;
    s += `<rect x="32" y="${F - 8}" width="36" height="4" fill="#8e8878"/>`;
    // Turmkörper
    s += `<rect x="38" y="${f(top)}" width="24" height="${f(th)}" fill="#a8a294" stroke="#494339" stroke-width="1.4"/>`;
    s += stoneBlocks(38, top, 24, th, 'transparent', '#494339');
    s += `<rect x="54" y="${f(top)}" width="8" height="${f(th)}" fill="#000" opacity="0.14"/>`;
    // Schießscharten
    for (let i = 0; i < 2 + Math.floor(p * 3); i++) s += `<rect x="48.6" y="${f(top + 10 + i * 12)}" width="3" height="7" fill="#241f18" rx="1.5"/>`;
    // Ausguck
    const deckY = top - 2;
    s += `<rect x="31" y="${f(deckY)}" width="38" height="5" fill="#b8b2a4" stroke="#494339" stroke-width="1.1"/>`;
    s += crenels(33, deckY - 3.6, 34, 5, '#c2bcae', '#494339');
    // Dach
    s += `<polygon points="32,${f(deckY)} 41,${f(deckY - 17 - p * 6)} 59,${f(deckY - 17 - p * 6)} 68,${f(deckY)}" fill="#8d3b2a" stroke="#40140e" stroke-width="1.2" stroke-linejoin="round"/>`;
    s += `<polygon points="41,${f(deckY - 17 - p * 6)} 59,${f(deckY - 17 - p * 6)} 65,${f(deckY - 4)} 35,${f(deckY - 4)}" fill="#000" opacity="0.12"/>`;
    s += pennant(50, deckY - 17 - p * 6, 10 + p * 4, '#b71c1c');
    // Bogenschütze
    s += `<g opacity="0.95"><circle cx="50" cy="${f(deckY - 8)}" r="3" fill="#e8c8a0" stroke="#5a3a1a" stroke-width="0.5"/><rect x="47.4" y="${f(deckY - 5)}" width="5.2" height="6" fill="#2f6fd0" rx="1"/><path d="M58 ${f(deckY - 9)} q5 5 0 10" stroke="#6a4a22" stroke-width="1.2" fill="none"/></g>`;
    // Wappen
    if (lvl >= 3) s += `<path d="M50 ${f(top + 14)} l7 4 v7 l-7 5 l-7 -5 v-7 Z" fill="#c62828" stroke="#5a1010" stroke-width="0.8"/><path d="M50 ${f(top + 17)} v10" stroke="#ffd54f" stroke-width="1.4"/>`;
    // Ölfässer / Vorrat
    if (lvl >= 5) s += `<ellipse cx="20" cy="${F - 6}" rx="5" ry="4.4" fill="#7a5a34" stroke="#33200c" stroke-width="0.7"/><ellipse cx="20" cy="${F - 9}" rx="5" ry="1.8" fill="#a8763a" stroke="#33200c" stroke-width="0.5"/>`;
    if (lvl >= 7) s += `<ellipse cx="80" cy="${F - 6}" rx="5" ry="4.4" fill="#7a5a34" stroke="#33200c" stroke-width="0.7"/><ellipse cx="80" cy="${F - 9}" rx="5" ry="1.8" fill="#a8763a" stroke="#33200c" stroke-width="0.5"/>`;
    return svg(s);
  }

  if (type === 'wall') {
    const wh = 26 + p * 14;
    const top = F - 4 - wh;
    let s = shadow(46);
    // Mauerblock
    s += bricks(0, top, 100, wh + 4, '#a8a8a8', '#4e4e4e', Math.max(3, Math.round((wh + 4) / 8)));
    s += `<rect x="0" y="${f(top)}" width="100" height="${f(wh + 4)}" fill="none" stroke="#454545" stroke-width="1.4"/>`;
    s += `<rect x="70" y="${f(top)}" width="30" height="${f(wh + 4)}" fill="#000" opacity="0.1"/>`;
    s += crenels(2, top - 4, 96, 7, '#b4b4b4', '#454545');
    // Tor
    s += `<path d="M42 ${F + 1} V${f(top + 14)} a8 8 0 0 1 16 0 V${F + 1} Z" fill="#3a3a3a" stroke="#1a1a1a" stroke-width="1"/>`;
    s += `<path d="M42 ${f(top + 16)} h16" stroke="#1a1a1a" stroke-width="0.6"/>`;
    s += `<path d="M44 ${f(top + 16)} v14 M50 ${f(top + 16)} v14 M56 ${f(top + 16)} v14" stroke="#2a2a2a" stroke-width="0.8" opacity="0.8"/>`;
    // Pfeiler
    for (const px of [0, 88]) {
      s += `<rect x="${px}" y="${f(top - 8)}" width="12" height="${f(wh + 12)}" fill="#bcbcbc" stroke="#454545" stroke-width="1.2"/>`;
      s += crenels(px, top - 12, 12, 2, '#c8c8c8', '#454545');
    }
    // Fackeln / Stacheln
    if (lvl >= 3) s += `<g transform="translate(62 ${f(top - 4)})"><rect x="-1" y="0" width="2" height="6" fill="#5a3a1a"/><ellipse cy="-2" rx="2.4" ry="3.4" fill="#ffb347" opacity="0.9"/><ellipse cy="-3" rx="5" ry="6" fill="#ff8f00" opacity="0.2"/></g>`;
    if (lvl >= 5) s += `<g transform="translate(30 ${f(top - 4)})"><rect x="-1" y="0" width="2" height="6" fill="#5a3a1a"/><ellipse cy="-2" rx="2.4" ry="3.4" fill="#ffb347" opacity="0.9"/></g>`;
    if (lvl >= 7) s += `<path d="M0 ${f(F - 1)} h12 v-8 h-12 Z" fill="#9a9a9a" stroke="#454545" stroke-width="0.7"/><path d="M88 ${f(F - 1)} h12 v-8 h-12 Z" fill="#9a9a9a" stroke="#454545" stroke-width="0.7"/>`;
    return svg(s);
  }

  if (type === 'arena') {
    let s = shadow(48);
    // Äußerer Ring
    s += `<ellipse cx="50" cy="${F - 12}" rx="48" ry="22" fill="#b0a58c" stroke="#4e4636" stroke-width="1.4"/>`;
    // Sitzreihen
    for (let i = 0; i < 3; i++) s += `<ellipse cx="50" cy="${f(F - 14 + i * 3)}" rx="${f(42 - i * 6)}" ry="${f(16 - i * 3)}" fill="none" stroke="#6d6350" stroke-width="2.2" opacity="0.85"/>`;
    // Sand
    s += `<ellipse cx="50" cy="${F - 12}" rx="26" ry="11" fill="#e0c08a" stroke="#8a6a3a" stroke-width="1.2"/>`;
    s += `<ellipse cx="50" cy="${F - 12}" rx="20" ry="7.6" fill="#eccb92"/>`;
    // Kämpfer
    s += `<g transform="translate(42 ${F - 15})"><circle cy="-6" r="2.6" fill="#e8c8a0" stroke="#5a3a1a" stroke-width="0.5"/><rect x="-2.6" y="-4" width="5.2" height="6" fill="#c62828" rx="1"/><path d="M2 -3 l6 -3" stroke="#b0b8bc" stroke-width="1.4"/></g>`;
    s += `<g transform="translate(58 ${F - 15})"><circle cy="-6" r="2.6" fill="#e8c8a0" stroke="#5a3a1a" stroke-width="0.5"/><rect x="-2.6" y="-4" width="5.2" height="6" fill="#1565c0" rx="1"/><path d="M-2 -3 l-6 -3" stroke="#b0b8bc" stroke-width="1.4"/></g>`;
    // Banner
    for (let i = 0; i < 4 + p * 4; i++) {
      const ang = -0.9 + i * 0.6;
      const bx = 50 + Math.cos(ang) * 44, by = F - 14 + Math.sin(ang) * 20;
      s += `<rect x="${f(bx)}" y="${f(by - 14)}" width="1.6" height="12" fill="#4a3428"/><path d="M${f(bx + 1.6)} ${f(by - 14)} l8 3 l-8 3 Z" fill="${i % 2 ? '#c62828' : '#e8a92c'}" stroke="#5a3a10" stroke-width="0.4"/>`;
    }
    if (lvl >= 5) s += `<path d="M8 ${F - 6} q10 -14 42 -14 q32 0 42 14" fill="none" stroke="#8a7a5a" stroke-width="1.6"/>`;
    return svg(s);
  }

  if (type === 'fortress') {
    const top = 44, bH = F - 4 - top;
    let s = shadow(48);
    // Seitentürme
    const towerH = 40 + p * 16;
    for (const tx of [2, 82]) {
      const tTop = F - 4 - towerH;
      s += `<rect x="${tx}" y="${f(tTop)}" width="16" height="${f(towerH)}" fill="#8a7aa8" stroke="#2a1d4a" stroke-width="1.4"/>`;
      s += stoneBlocks(tx, tTop, 16, towerH, 'transparent', '#2a1d4a');
      s += crenels(tx - 1, tTop - 3.6, 18, 3, '#9a8ab8', '#2a1d4a');
      if (lvl >= 3) s += pennant(tx + 8, tTop - 14, 10, tx < 50 ? '#b71c1c' : '#1565c0');
      s += `<rect x="${tx + 6}" y="${f(tTop + 10)}" width="4" height="8" fill="#241a3a" rx="1.6"/>`;
    }
    // Ringmauer
    s += `<rect x="16" y="${f(top)}" width="68" height="${f(bH)}" fill="#7a6a9a" stroke="#2a1d4a" stroke-width="1.6"/>`;
    s += stoneBlocks(16, top, 68, bH, 'transparent', '#2a1d4a');
    s += `<rect x="60" y="${f(top)}" width="24" height="${f(bH)}" fill="#000" opacity="0.16"/>`;
    s += crenels(17, top - 3.6, 66, 6, '#8a7aa8', '#2a1d4a');
    // Bergfried
    s += `<rect x="36" y="${f(top - 12)}" width="28" height="${f(bH + 12)}" fill="#9a8ab8" stroke="#2a1d4a" stroke-width="1.5"/>`;
    s += stoneBlocks(36, top - 12, 28, bH + 12, 'transparent', '#2a1d4a');
    s += `<polygon points="33,${f(top - 12)} 50,${f(top - 28)} 67,${f(top - 12)}" fill="#6a4a8a" stroke="#2a1d4a" stroke-width="1.3" stroke-linejoin="round"/>`;
    s += win(42, top - 4, 6, 8, { glass: '#ffe08a', frame: '#2a1d4a', cross: false });
    s += win(52, top - 4, 6, 8, { glass: '#ffe08a', frame: '#2a1d4a', cross: false });
    // Tor
    s += `<path d="M42 ${F + 1} V78 a8 8 0 0 1 16 0 V${F + 1} Z" fill="#241a34" stroke="#0e0818" stroke-width="1.1"/>`;
    s += `<path d="M42 80 h16" stroke="#0e0818" stroke-width="0.7"/>`;
    // Fenster in Mauern
    s += win(24, top + 10, 8, 9, { glass: '#ffe08a', frame: '#2a1d4a' });
    s += win(68, top + 10, 8, 9, { glass: '#ffe08a', frame: '#2a1d4a' });
    if (lvl >= 6) {
      s += `<path d="M18 ${F - 6} h12 v-10 h-12 Z" fill="#6a5a8a" stroke="#2a1d4a" stroke-width="0.8"/>`;
      s += `<path d="M70 ${F - 6} h12 v-10 h-12 Z" fill="#6a5a8a" stroke="#2a1d4a" stroke-width="0.8"/>`;
    }
    if (lvl >= 8) s += `<ellipse cx="50" cy="${F - 2}" rx="46" ry="6" fill="#ffd54f" opacity="0.10"/>`;
    return svg(s);
  }

  if (type === 'garrison') {
    const top = 50, bH = F - 4 - top, x = 10, w = 80;
    let s = shadow(44);
    s += houseBody({ id: 'ga', x, w, bodyTop: top, bodyH: bH, roofH: 16, bodyFill: '#8a7a68', bodyLine: '#3a2c1e', roofFill: '#4e342e', roofLine: '#22160e', baseFill: '#9a8e7c', baseLine: '#42382c', shingleRows: 4, timber: '#4a3624', timberCount: 5 });
    s += win(20, top + 8, 11, 10, { glass: '#ffe08a', frame: '#3a2c1e' });
    s += win(68, top + 8, 11, 10, { glass: '#ffe08a', frame: '#3a2c1e' });
    s += door(43, top + 16, 14, 22, { fill: '#3a2a18', line: '#1a1208' });
    // Waffenkammer-Deko
    s += `<path d="M30 ${top + 6} l6 3 v6 l-6 4 l-6 -4 v-6 Z" fill="#c9a84c" stroke="#6a4a10" stroke-width="0.7"/>`;
    s += `<path d="M70 ${top + 6} l6 3 v6 l-6 4 l-6 -4 v-6 Z" fill="#c9a84c" stroke="#6a4a10" stroke-width="0.7"/>`;
    // Trainingsplatz
    s += `<rect x="4" y="${F - 10}" width="18" height="9" fill="#b0a58c" stroke="#4e4636" stroke-width="0.7" rx="1"/>`;
    s += `<g transform="translate(13 ${F - 4})"><rect x="-1" y="-10" width="2" height="10" fill="#5a3a1a"/><rect x="-5" y="-9" width="10" height="2" fill="#5a3a1a"/><ellipse cy="-12" rx="3.4" ry="3.6" fill="#c8a878" stroke="#5a3a1a" stroke-width="0.6"/></g>`;
    s += `<g transform="translate(88 ${F - 6})"><path d="M-5 0 v-12 M5 0 v-12" stroke="#8a6234" stroke-width="1.6"/><path d="M-5 -12 l3 -3 l3 3 M5 -12 l3 -3 l3 3" fill="none" stroke="#b0b8bc" stroke-width="1.1"/></g>`;
    if (lvl >= 4) s += `<rect x="80" y="${F - 14}" width="14" height="8" fill="#8a7a5a" stroke="#3a2c1e" stroke-width="0.8" rx="1"/><path d="M80 ${F - 10} h14" stroke="#5a4a32" stroke-width="0.5"/>`;
    return svg(s);
  }

  if (type === 'armory') {
    const top = 48, bH = F - 4 - top, x = 12, w = 76;
    let s = shadow(44);
    s += houseBody({ id: 'ar', x, w, bodyTop: top, bodyH: bH, roofH: 14, bodyFill: '#8494a0', bodyLine: '#323f49', roofFill: '#54646e', roofLine: '#242f36', baseFill: '#98a2aa', baseLine: '#3a444a', shingleRows: 4, roofStyle: 'flat' });
    s += crenels(12, top - 8, 76, 6, '#94a4ae', '#242f36');
    // Rüstung + Waffen im Regal
    s += `<path d="M28 ${F - 4} v-16 a5 5 0 0 1 10 0 v16 Z" fill="#b0bcc4" stroke="#38424a" stroke-width="0.9"/>`;
    s += `<path d="M33 ${F - 20} a4 4 0 1 1 0 -8 a4 4 0 0 1 0 8 Z" fill="#c8d2d8" stroke="#38424a" stroke-width="0.8"/>`;
    s += `<path d="M24 ${F - 14} h18" stroke="#8a969e" stroke-width="1.2"/>`;
    // Waffenständer
    s += `<path d="M50 ${F - 4} v-18 M56 ${F - 4} v-18 M62 ${F - 4} v-18" stroke="#9a7444" stroke-width="2"/>`;
    s += `<path d="M50 ${F - 22} l3 -6 l3 6 M62 ${F - 22} l3 -6 l3 6" fill="none" stroke="#c8d2d8" stroke-width="1.4"/>`;
    s += `<path d="M52 ${F - 26} h4 v-4 h-4 Z" fill="#c62828"/>`;
    s += door(70, top + 14, 14, 22, { fill: '#3a2a1a', line: '#1a1208' });
    s += win(20, top + 8, 11, 10, { glass: '#8ec8e8', frame: '#38424a' });
    if (lvl >= 5) s += `<path d="M74 ${top + 6} l7 3 v7 l-7 4 l-7 -4 v-7 Z" fill="#c9a84c" stroke="#6a4a10" stroke-width="0.7"/>`;
    return svg(s);
  }

  /* =====================================================
     ZIVIL / WIRTSCHAFT / SPEZIAL
     ===================================================== */
  if (type === 'tavern') {
    const top = 46, bH = F - 4 - top, x = 10, w = 76;
    let s = shadow(44);
    s += houseBody({ id: 'tv', x, w, bodyTop: top, bodyH: bH, roofH: 16, bodyFill: '#e0b183', bodyLine: '#6b4526', roofFill: '#a83a2a', roofLine: '#4e150e', baseFill: '#a89a86', baseLine: '#4a4034', shingleRows: 4, timber: '#7a4a24', timberCount: 4 });
    s += win(20, top + 8, 11, 12, { glass: '#ffcf70', frame: '#4a2c14' });
    s += win(44, top + 8, 11, 12, { glass: '#ffcf70', frame: '#4a2c14' });
    s += door(66, top + 16, 13, 22, { fill: '#5a3a1e' });
    s += `<circle cx="76" cy="${top + 26}" r="1" fill="#ffd54f"/>`;
    // Schild
    s += `<rect x="58" y="${top - 6}" width="2" height="12" fill="#4a3420"/>`;
    s += `<rect x="60" y="${top - 6}" width="16" height="11" rx="2" fill="#e8c06a" stroke="#6a4a10" stroke-width="0.8"/>`;
    s += `<text x="68" y="${top + 2.4}" font-size="7" font-weight="900" text-anchor="middle" fill="#5a3a08" font-family="Georgia, serif">🍺</text>`;
    s += chimney(24, top - 18, 6, 14, '#9a7a5a', '#4a3420');
    s += `<g opacity="${lvl >= 2 ? 0.4 : 0}"><ellipse cx="27" cy="${top - 22}" rx="4" ry="3" fill="#dcd6d0"/></g>`;
    // Fässer
    let barrels = '';
    const nb = 2 + Math.min(lvl, 3);
    for (let i = 0; i < nb; i++) {
      const bx = 78 + (i % 2) * 9, by = F - 8 - Math.floor(i / 2) * 8;
      barrels += `<g><rect x="${bx - 4}" y="${by - 7}" width="8" height="7" rx="1.4" fill="#8a6234" stroke="#3a2410" stroke-width="0.6"/><path d="M${bx - 4} ${by - 4.6} h8 M${bx - 4} ${by - 2.4} h8" stroke="#4a3018" stroke-width="0.5"/></g>`;
    }
    s += barrels;
    if (lvl >= 4) s += `<g transform="translate(30 ${F - 4})"><rect x="-8" y="-1" width="16" height="2" fill="#7a5a32"/><path d="M-7 1 v3 M7 1 v3" stroke="#5a4020" stroke-width="1.2"/><rect x="-4" y="-5" width="8" height="4" rx="1" fill="#c9a86a" stroke="#6a4a18" stroke-width="0.4"/></g>`;
    if (lvl >= 6) s += `<rect x="8" y="${top + 10}" width="4" height="10" fill="#6a4a22"/><path d="M12 ${top + 10} q6 3 0 10 Z" fill="#c62828" stroke="#5a1010" stroke-width="0.4"/>`;
    return svg(s);
  }

  if (type === 'bakery' ) { /* handled above */ }

  if (type === 'library') {
    const top = 46, bH = F - 4 - top, x = 16, w = 68;
    let s = shadow(44);
    s += houseBody({ id: 'li', x, w, bodyTop: top, bodyH: bH, roofH: 12, bodyFill: '#a8927c', bodyLine: '#4e3a26', roofFill: '#7a5a44', roofLine: '#3a2416', baseFill: '#a89a86', baseLine: '#4a4034', shingleRows: 4, masonry: 'stone' });
    s += `<rect x="16" y="${top - 5}" width="68" height="6" fill="#c9a84c" stroke="#6a4a10" stroke-width="0.9" rx="1"/>`;
    s += arcade(20, top + 10, 60, 26, 4, '#ffe9b8', '#4e3a26');
    s += `<path d="M20 ${top + 10} h60" stroke="#4e3a26" stroke-width="0.8"/>`;
    s += door(44, 72, 12, 16, { fill: '#4a2f16', line: '#241405' });
    // Bücherstapel + Laterne
    s += `<g transform="translate(10 ${F - 4})"><rect x="-5" y="-12" width="10" height="3" fill="#8d3b2a"/><rect x="-5" y="-9" width="10" height="3" fill="#1565c0"/><rect x="-5" y="-6" width="10" height="3" fill="#2e7d32"/><rect x="-5" y="-3" width="10" height="3" fill="#ffb300"/></g>`;
    s += `<g transform="translate(94 ${F - 22})"><rect x="-2" y="0" width="4" height="14" fill="#4a3428"/><rect x="-4" y="-6" width="8" height="7" rx="1" fill="#ffe08a" stroke="#6a4a10" stroke-width="0.6"/><path d="M-4 -8 h8" stroke="#6a4a10" stroke-width="1"/></g>`;
    if (lvl >= 4) s += `<path d="M50 ${top - 12} l9 6 l-9 6 l-9 -6 Z" fill="#c9a84c" stroke="#6a4a10" stroke-width="0.8"/><circle cx="50" cy="${top - 6}" r="2" fill="#7a5a10"/>`;
    return svg(s);
  }

  if (type === 'theater') {
    const top = 48, bH = F - 4 - top, x = 10, w = 80;
    let s = shadow(46);
    s += houseBody({ id: 'th', x, w, bodyTop: top, bodyH: bH, roofH: 14, bodyFill: '#e8dcc0', bodyLine: '#7a6440', roofFill: '#a86a58', roofLine: '#4a2a20', baseFill: '#a89a86', baseLine: '#4a4034', shingleRows: 4, masonry: 'stone' });
    // Säulen
    s += arcade(16, top + 6, 68, 30, 5, '#c9a84c', '#7a6440');
    s += `<path d="M16 ${top + 4} h68" stroke="#7a6440" stroke-width="1.2"/>`;
    s += `<polygon points="10,${top + 4} 50,${top - 16} 90,${top + 4}" fill="#c9a84c" stroke="#7a5c10" stroke-width="1.2" stroke-linejoin="round"/>`;
    s += `<path d="M28 ${top - 6} q8 -6 16 0 q8 -6 16 0" stroke="#8d3b2a" stroke-width="1.4" fill="none"/>`;
    // Masken
    s += `<g transform="translate(38 ${top + 20})"><ellipse rx="5" ry="6" fill="#fff" stroke="#7a6440" stroke-width="0.7"/><circle cx="-1.8" cy="-1.6" r="1" fill="#2a1a08"/><circle cx="1.8" cy="-1.6" r="1" fill="#2a1a08"/><path d="M-2.4 2.4 q2.4 2.6 4.8 0" stroke="#2a1a08" stroke-width="0.7" fill="none"/></g>`;
    s += `<g transform="translate(62 ${top + 20})"><ellipse rx="5" ry="6" fill="#c62828" stroke="#5a1010" stroke-width="0.7"/><circle cx="-1.8" cy="-1.6" r="1" fill="#fff"/><circle cx="1.8" cy="-1.6" r="1" fill="#fff"/><path d="M-2.4 -2.4 q2.4 -2.6 4.8 0" stroke="#fff" stroke-width="0.7" fill="none"/></g>`;
    s += door(43, 74, 14, 14, { fill: '#6a4a22', line: '#33200c', arch: false });
    if (lvl >= 4) s += `<g transform="translate(50 ${top - 22})"><rect x="-1" y="0" width="2" height="8" fill="#4a3428"/><ellipse cy="-2" rx="3" ry="3" fill="#ffd54f" opacity="0.9"/></g>`;
    return svg(s);
  }

  if (type === 'temple') {
    const top = 44, x = 8, w = 84, bH = F - 4 - top;
    let s = shadow(48);
    s += `<rect x="${x}" y="${top}" width="${w}" height="${bH}" fill="#e8e0c8" stroke="#8a7a4a" stroke-width="1.5"/>`;
    s += stoneBlocks(x, top, w, bH, 'transparent', '#8a7a4a');
    s += `<rect x="${x + w * 0.68}" y="${top}" width="${w * 0.32}" height="${bH}" fill="#000" opacity="0.10"/>`;
    // Stufenfundament
    s += `<rect x="${x - 4}" y="${F - 6}" width="${w + 8}" height="7" fill="#d8cfb4" stroke="#7a6a3a" stroke-width="1"/>`;
    // Säulen
    let cols = '';
    for (let i = 0; i < 6; i++) {
      const cx = 15 + i * 14;
      cols += `<rect x="${cx - 1.6}" y="${top + 4}" width="3.2" height="${bH - 10}" fill="#f2ecdc" stroke="#8a7a4a" stroke-width="0.5"/>`;
      cols += `<rect x="${cx - 2}" y="${top + 10}" width="4" height="3" fill="#d8cfb4"/>`;
    }
    s += cols;
    // Architrav + Giebel
    s += `<rect x="${x - 2}" y="${top - 4}" width="${w + 4}" height="6" fill="#d8cfb4" stroke="#8a7a4a" stroke-width="1"/>`;
    s += `<polygon points="${x - 4},${top - 4} 50,${top - 24 - p * 4} ${x + w + 4},${top - 4}" fill="#e8dfc8" stroke="#8a7a4a" stroke-width="1.4" stroke-linejoin="round"/>`;
    s += `<polygon points="50,${top - 24 - p * 4} ${x + w + 4},${top - 4} 50,${top - 4}" fill="#000" opacity="0.10"/>`;
    s += `<path d="M${x - 4} ${top - 4} L50 ${top - 24 - p * 4} L${x + w + 4} ${top - 4}" fill="none" stroke="#a89a6a" stroke-width="0.8"/>`;
    s += `<circle cx="50" cy="${top - 10}" r="3.4" fill="#c9a84c" stroke="#7a5c10" stroke-width="0.7"/>`;
    // Statue im Giebel
    s += `<g transform="translate(50 ${top - 16})"><rect x="-3" y="-6" width="6" height="8" fill="#c9a84c" stroke="#7a5c10" stroke-width="0.5" opacity="0.9"/></g>`;
    // Altar / Feuer
    s += `<path d="M44 66 h12 l-2 6 h-8 Z" fill="#c9a84c" stroke="#7a5c10" stroke-width="0.7"/>`;
    s += `<ellipse cx="50" cy="62" rx="4" ry="5" fill="#ffb347" opacity="0.85"/><ellipse cx="50" cy="63" rx="2" ry="3" fill="#fff3b0"/>`;
    s += `<ellipse cx="50" cy="64" rx="10" ry="8" fill="#ffb347" opacity="0.12"/>`;
    if (lvl >= 4) s += `<g transform="translate(24 ${F - 6})"><rect x="-4" y="-10" width="8" height="10" fill="#c9a84c" stroke="#7a5c10" stroke-width="0.6"/><circle cy="-12" r="3" fill="#e8dfc8" stroke="#8a7a4a" stroke-width="0.5"/></g><g transform="translate(76 ${F - 6})"><rect x="-4" y="-10" width="8" height="10" fill="#c9a84c" stroke="#7a5c10" stroke-width="0.6"/><circle cy="-12" r="3" fill="#e8dfc8" stroke="#8a7a4a" stroke-width="0.5"/></g>`;
    if (lvl >= 7) s += `<path d="M22 ${top + 4} q-8 -10 0 -20 M78 ${top + 4} q8 -10 0 -20" stroke="#c9a84c" stroke-width="1" fill="none" opacity="0.7"/>`;
    return svg(s);
  }

  if (type === 'church') {
    const top = 48, x = 14, w = 72, bH = F - 4 - top;
    let s = shadow(44);
    s += houseBody({ id: 'ch', x, w, bodyTop: top, bodyH: bH, roofH: 16, bodyFill: '#efe6cb', bodyLine: '#8a7a4a', roofFill: '#8d6e63', roofLine: '#3f2f26', baseFill: '#c9bfa4', baseLine: '#7a6a3a', shingleRows: 4, masonry: 'stone' });
    // Glockenturm
    s += `<rect x="40" y="${top - 34}" width="20" height="34" fill="#f2ecdc" stroke="#8a7a4a" stroke-width="1.3"/>`;
    s += stoneBlocks(40, top - 34, 20, 34, 'transparent', '#8a7a4a');
    s += `<path d="M44 ${top - 22} h12 v10 h-12 Z" fill="#5a4530" stroke="#3a2a18" stroke-width="0.6"/>`;
    s += `<path d="M50 ${top - 20} v6 M46 ${top - 20} q4 6 8 0" stroke="#c9a84c" stroke-width="1.6" fill="none"/>`;
    s += `<polygon points="36,${top - 34} 50,${top - 52} 64,${top - 34}" fill="#7a6a5a" stroke="#3a2a18" stroke-width="1.2" stroke-linejoin="round"/>`;
    s += `<rect x="49" y="${top - 62}" width="2" height="10" fill="#c9a84c"/><rect x="46" y="${top - 59}" width="8" height="2" fill="#c9a84c"/>`;
    // Rosette + Fenster
    if (lvl >= 2) {
      s += `<circle cx="50" cy="${top + 14}" r="7" fill="#8ed4f0" stroke="#5a4530" stroke-width="1"/>`;
      for (let i = 0; i < 6; i++) s += `<line x1="50" y1="${top + 7}" x2="50" y2="${top + 21}" stroke="#5a4530" stroke-width="0.6" transform="rotate(${i * 30} 50 ${top + 14})"/>`;
    } else {
      s += `<path d="M44 ${top + 8} h12 v12 h-12 Z" fill="#8ed4f0" stroke="#5a4530" stroke-width="0.9"/>`;
    }
    s += `<path d="M26 ${top + 10} q4 -5 8 0 v10 h-8 Z" fill="#8ed4f0" stroke="#5a4530" stroke-width="0.8"/>`;
    s += `<path d="M66 ${top + 10} q4 -5 8 0 v10 h-8 Z" fill="#8ed4f0" stroke="#5a4530" stroke-width="0.8"/>`;
    s += door(44, 76, 12, 12, { fill: '#5a3a1e', line: '#2a1808' });
    if (lvl >= 4) s += `<rect x="6" y="${F - 12}" width="8" height="8" fill="#d8cfb4" stroke="#8a7a4a" stroke-width="0.7" rx="1"/><path d="M10 ${F - 12} v-6" stroke="#8a7a4a" stroke-width="1"/>`;
    if (lvl >= 6) s += `<rect x="86" y="${F - 12}" width="8" height="8" fill="#d8cfb4" stroke="#8a7a4a" stroke-width="0.7" rx="1"/><path d="M90 ${F - 12} v-6" stroke="#8a7a4a" stroke-width="1"/>`;
    return svg(s);
  }

  if (type === 'cathedral') {
    const top = 50, x = 6, w = 88, bH = F - 4 - top;
    let s = shadow(48);
    // Kirchenschiff
    s += `<rect x="${x + 14}" y="${top}" width="${w - 28}" height="${bH}" fill="#efe6cb" stroke="#8a7a4a" stroke-width="1.5"/>`;
    s += stoneBlocks(x + 14, top, w - 28, bH, 'transparent', '#8a7a4a');
    s += `<path d="M${x + 12} ${top} L50 ${top - 26 - p * 6} L${x + w - 12} ${top}" fill="#7a6a5a" stroke="#3f3328" stroke-width="1.4" stroke-linejoin="round"/>`;
    s += shingles(50, top - 22 - p * 6, 28, 3, '#8a7a68', '#3f3328', 0.85);
    // Zwei Türme
    for (const [tx, side] of [[4, -1], [78, 1]]) {
      const tH = 34 + p * 16;
      const tTop = F - 4 - tH;
      s += `<rect x="${tx}" y="${f(tTop)}" width="18" height="${f(tH)}" fill="#f2ecdc" stroke="#8a7a4a" stroke-width="1.3"/>`;
      s += stoneBlocks(tx, tTop, 18, tH, 'transparent', '#8a7a4a');
      s += `<polygon points="${tx - 3},${f(tTop)} ${tx + 9},${f(tTop - 22 - p * 6)} ${tx + 21},${f(tTop)}" fill="#6a5a4a" stroke="#332a1e" stroke-width="1.2" stroke-linejoin="round"/>`;
      s += `<rect x="${tx + 8}" y="${f(tTop - 32 - p * 6)}" width="2" height="11" fill="#c9a84c"/><rect x="${tx + 5}" y="${f(tTop - 29 - p * 6)}" width="8" height="2" fill="#c9a84c"/>`;
      s += `<path d="M${tx + 4} ${f(tTop + 14)} a5 5 0 0 1 10 0 v10 h-10 Z" fill="#5a4530" stroke="#3a2a18" stroke-width="0.6"/>`;
      if (lvl >= 3) s += `<path d="M${tx + 4} ${f(tTop + 32)} a5 5 0 0 1 10 0 v10 h-10 Z" fill="#5a4530" stroke="#3a2a18" stroke-width="0.6"/>`;
    }
    // Portal + Rosette
    s += `<path d="M40 ${F + 1} V74 a10 10 0 0 1 20 0 V${F + 1} Z" fill="#4a3420" stroke="#241608" stroke-width="1.1"/>`;
    s += `<path d="M40 76 h20" stroke="#241608" stroke-width="0.7"/>`;
    s += `<path d="M45 ${F + 1} V76 M50 ${F + 1} V74 M55 ${F + 1} V76" stroke="#2a1a08" stroke-width="0.6" opacity="0.7"/>`;
    s += `<circle cx="50" cy="${top + 12}" r="9" fill="#8ed4f0" stroke="#5a4530" stroke-width="1.1"/>`;
    for (let i = 0; i < 8; i++) s += `<line x1="50" y1="${top + 3}" x2="50" y2="${top + 21}" stroke="#5a4530" stroke-width="0.6" transform="rotate(${i * 22.5} 50 ${top + 12})"/>`;
    s += `<circle cx="50" cy="${top + 12}" r="3" fill="#e8dfc8" stroke="#5a4530" stroke-width="0.6"/>`;
    s += `<path d="M24 ${top + 10} q5 -6 10 0 v12 h-10 Z" fill="#8ed4f0" stroke="#5a4530" stroke-width="0.8"/>`;
    s += `<path d="M66 ${top + 10} q5 -6 10 0 v12 h-10 Z" fill="#8ed4f0" stroke="#5a4530" stroke-width="0.8"/>`;
    if (lvl >= 5) s += `<path d="M14 ${top + 4} q-6 10 0 20 M86 ${top + 4} q6 10 0 20" stroke="#c9a84c" stroke-width="1" fill="none" opacity="0.8"/>`;
    return svg(s);
  }

  if (type === 'monument') {
    let s = shadow(34);
    // Podest
    s += `<rect x="18" y="${F - 12}" width="64" height="8" fill="#d8cfb4" stroke="#7a6a3a" stroke-width="1.1" rx="1"/>`;
    s += `<rect x="24" y="${F - 18}" width="52" height="6" fill="#e8dfc8" stroke="#7a6a3a" stroke-width="0.9" rx="1"/>`;
    // Säule
    const colH = 34 + p * 14;
    const colTop = F - 18 - colH;
    s += `<rect x="40" y="${f(colTop)}" width="20" height="${f(colH)}" fill="#efe6cb" stroke="#8a7a4a" stroke-width="1.2"/>`;
    s += `<path d="M42 ${f(colTop + 4)} h16 M42 ${f(colTop + colH * 0.5)} h16" stroke="#c9bfa4" stroke-width="0.6"/>`;
    for (let i = 0; i < 4; i++) s += `<path d="M${42 + i * 5} ${f(colTop + 2)} V${f(colTop + colH - 2)}" stroke="#d8cfb4" stroke-width="0.6" opacity="0.8"/>`;
    // Kapitell
    s += `<rect x="36" y="${f(colTop - 5)}" width="28" height="5" fill="#c9a84c" stroke="#7a5c10" stroke-width="1" rx="1"/>`;
    // Statue / Obelisk
    if (lvl >= 4) {
      s += `<g transform="translate(50 ${f(colTop - 6)})"><rect x="-6" y="-14" width="12" height="14" fill="#c9a84c" stroke="#7a5c10" stroke-width="0.8"/><circle cy="-18" r="4.4" fill="#d8c9a0" stroke="#7a5c10" stroke-width="0.7"/><path d="M-9 -8 l-4 8 M9 -8 l4 8" stroke="#c9a84c" stroke-width="2"/></g>`;
    } else {
      s += `<polygon points="50,${f(colTop - 22)} 58,${f(colTop - 5)} 42,${f(colTop - 5)}" fill="#c9a84c" stroke="#7a5c10" stroke-width="0.9"/>`;
    }
    // Kränze
    s += `<path d="M30 ${F - 10} q6 -5 12 0" stroke="#4c8a34" stroke-width="2" fill="none"/>`;
    s += `<path d="M58 ${F - 10} q6 -5 12 0" stroke="#4c8a34" stroke-width="2" fill="none"/>`;
    // Laternen
    if (lvl >= 3) s += `<g transform="translate(14 ${F - 14})"><rect x="-1" y="0" width="2" height="8" fill="#4a3428"/><ellipse cy="-2" rx="2.6" ry="3.6" fill="#ffd54f" opacity="0.9"/><ellipse cy="-3" rx="6" ry="7" fill="#ffb347" opacity="0.16"/></g><g transform="translate(86 ${F - 14})"><rect x="-1" y="0" width="2" height="8" fill="#4a3428"/><ellipse cy="-2" rx="2.6" ry="3.6" fill="#ffd54f" opacity="0.9"/></g>`;
    if (lvl >= 7) s += `<ellipse cx="50" cy="${F - 4}" rx="34" ry="7" fill="#ffd54f" opacity="0.12"/><path d="M50 ${f(colTop - 22)} l3 -8 l3 8" fill="none" stroke="#ffd54f" stroke-width="1.2"/>`;
    return svg(s);
  }

  if (type === 'bank') {
    const top = 46, x = 6, w = 88, bH = F - 4 - top;
    let s = shadow(48);
    s += houseBody({ id: 'bn', x, w, bodyTop: top, bodyH: bH, roofH: 14, bodyFill: '#efe6cb', bodyLine: '#8a7a4a', roofFill: '#c9a84c', roofLine: '#7a5c10', baseFill: '#c9bfa4', baseLine: '#7a6a3a', shingleRows: 3, masonry: 'stone' });
    s += `<polygon points="${x - 4},${top + 1} 50,${top - 20 - p * 4} ${x + w + 4},${top + 1}" fill="#e8dfc8" stroke="#8a7a4a" stroke-width="1.3" stroke-linejoin="round"/>`;
    s += `<polygon points="50,${top - 20 - p * 4} ${x + w + 4},${top + 1} 50,${top + 1}" fill="#000" opacity="0.10"/>`;
    // Säulen
    s += arcade(14, top + 6, 72, 32, 5, '#f7f2e2', '#8a7a4a');
    s += `<path d="M14 ${top + 4} h72" stroke="#c9a84c" stroke-width="2"/>`;
    // Stufen
    s += `<rect x="10" y="${F - 6}" width="80" height="7" fill="#d8cfb4" stroke="#7a6a3a" stroke-width="1"/>`;
    // Gold-Deko
    s += `<g transform="translate(50 ${top + 16})"><circle r="8" fill="#f7e9b8" stroke="#c9a84c" stroke-width="1.2"/><text y="4" font-size="10" font-weight="900" text-anchor="middle" fill="#7a5c10" font-family="Georgia, serif">$</text></g>`;
    // Tresor
    s += `<g transform="translate(78 ${F - 10})"><rect x="-8" y="-14" width="16" height="14" fill="#6a6a70" stroke="#2a2a30" stroke-width="1" rx="1"/><circle r="4" fill="#9a9aa0" stroke="#3a3a40" stroke-width="0.8"/><path d="M0 -4 v8 M-4 0 h8" stroke="#3a3a40" stroke-width="0.8"/></g>`;
    if (lvl >= 5) s += `<g transform="translate(22 ${F - 8})"><rect x="-7" y="-5" width="14" height="5" fill="#e8c06a" stroke="#7a5c10" stroke-width="0.7"/><path d="M-7 -5 q7 -6 14 0" fill="#e8c06a" stroke="#7a5c10" stroke-width="0.7"/></g>`;
    if (lvl >= 7) s += `<g transform="translate(50 ${top - 14})"><rect x="-8" y="-2" width="16" height="4" fill="#c9a84c" stroke="#7a5c10" stroke-width="0.6" rx="1"/></g>`;
    return svg(s);
  }

  if (type === 'university') {
    const top = 46, x = 8, w = 84, bH = F - 4 - top;
    let s = shadow(48);
    s += houseBody({ id: 'un', x, w, bodyTop: top, bodyH: bH, roofH: 14, bodyFill: '#e8dcbe', bodyLine: '#8a7a4a', roofFill: '#8d6e63', roofLine: '#3f2f26', baseFill: '#c9bfa4', baseLine: '#7a6a3a', shingleRows: 4, masonry: 'stone' });
    // Uhrturm
    s += `<rect x="40" y="${top - 30}" width="20" height="30" fill="#f2ecdc" stroke="#8a7a4a" stroke-width="1.3"/>`;
    s += stoneBlocks(40, top - 30, 20, 30, 'transparent', '#8a7a4a');
    s += `<circle cx="50" cy="${top - 18}" r="7" fill="#fff8e0" stroke="#8a7a4a" stroke-width="1"/>`;
    s += `<path d="M50 ${top - 18} v-4.6 M50 ${top - 18} h3.4" stroke="#3a2a18" stroke-width="1.1" stroke-linecap="round"/>`;
    s += `<polygon points="36,${top - 30} 50,${top - 46} 64,${top - 30}" fill="#7a6a5a" stroke="#3a2a18" stroke-width="1.2" stroke-linejoin="round"/>`;
    s += `<rect x="49" y="${top - 54}" width="2" height="8" fill="#c9a84c"/>`;
    // Fensterreihen
    for (let i = 0; i < 4; i++) {
      s += `<path d="M${16 + i * 18} ${top + 8} a4 4 0 0 1 8 0 v10 h-8 Z" fill="#8ed4f0" stroke="#5a4530" stroke-width="0.7"/>`;
      if (lvl >= 3) s += `<path d="M${16 + i * 18} ${top + 24} a4 4 0 0 1 8 0 v8 h-8 Z" fill="#8ed4f0" stroke="#5a4530" stroke-width="0.7"/>`;
    }
    s += door(44, 74, 12, 14, { fill: '#5a3a1e', line: '#2a1808' });
    // Bücherstapel / Bank
    s += `<g transform="translate(72 ${F - 6})"><rect x="-8" y="-6" width="16" height="6" fill="#a8763a" stroke="#4a3018" stroke-width="0.7"/><rect x="-8" y="-12" width="16" height="6" fill="#8d3b2a" stroke="#4a1a12" stroke-width="0.7"/></g>`;
    if (lvl >= 6) s += `<path d="M14 ${top + 6} q-6 10 0 20 M86 ${top + 6} q6 10 0 20" stroke="#c9a84c" stroke-width="1" fill="none" opacity="0.7"/>`;
    return svg(s);
  }

  if (type === 'shipyard' || type === 'harbor' || type === 'harbor2') {
    const grand = type === 'harbor2';
    let s = shadow(48);
    // Wasser
    s += `<rect x="0" y="70" width="100" height="22" fill="url(#waterG)" opacity="0.95"/>`;
    for (let i = 0; i < 4; i++) s += `<path d="M${4 + i * 26} ${f(80 + (i % 2) * 6)} q5 -2 10 0" stroke="#e8f6ff" stroke-width="0.7" fill="none" opacity="0.55"/>`;
    // Kai
    s += `<rect x="4" y="62" width="92" height="9" fill="#a8865a" stroke="#4a3418" stroke-width="1.1"/>`;
    s += `<path d="M4 65 h92" stroke="#7a5f3a" stroke-width="0.6"/>`;
    for (let i = 0; i < 8; i++) s += `<rect x="${6 + i * 11.6}" y="71" width="3" height="7" fill="#6a4a26" stroke="#3a2410" stroke-width="0.4"/>`;
    // Lagerhalle
    const wh = grand ? 40 : 34;
    s += `<rect x="10" y="${62 - wh}" width="${grand ? 44 : 36}" height="${wh}" fill="#c9a86a" stroke="#6a4a18" stroke-width="1.3"/>`;
    s += `<polygon points="6,${62 - wh} ${10 + (grand ? 22 : 18)},${62 - wh - 13} ${(grand ? 54 : 46) + 4},${62 - wh}" fill="#8d3b2a" stroke="#40140e" stroke-width="1.1" stroke-linejoin="round"/>`;
    s += `<path d="M14 ${62 - wh + 8} h${grand ? 36 : 28} M14 ${62 - wh + 18} h${grand ? 36 : 28}" stroke="#8a6a3a" stroke-width="0.6"/>`;
    s += `<rect x="22" y="${62 - 16}" width="12" height="16" fill="#5a3a1a" stroke="#2a1808" stroke-width="0.8"/>`;
    // Kräne
    const craneX = grand ? 62 : 56;
    s += `<g><rect x="${craneX}" y="${62 - 44}" width="4" height="44" fill="#7a5f3a" stroke="#3a2410" stroke-width="0.7"/>
      <path d="M${craneX + 4} ${62 - 44} L${craneX + 34} ${62 - 44}" stroke="#7a5f3a" stroke-width="3"/>
      <path d="M${craneX + 4} ${62 - 44} L${craneX - 8} ${62 - 34}" stroke="#7a5f3a" stroke-width="2"/>
      <line x1="${craneX + 28}" y1="${62 - 44}" x2="${craneX + 28}" y2="${62 - 24}" stroke="#5a4530" stroke-width="0.7"/>
      <rect x="${craneX + 22}" y="${62 - 24}" width="12" height="9" fill="#b08a52" stroke="#3a2410" stroke-width="0.7"/></g>`;
    // Schiffe
    s += `<g transform="translate(24 84)"><path d="M-14 0 q14 -5 28 0 q-4 7 -14 7 q-10 0 -14 -7 Z" fill="#8a6234" stroke="#3a2410" stroke-width="0.9"/><rect x="-1" y="-20" width="2" height="20" fill="#5a4020"/><path d="M1 -20 L14 -12 L1 -6 Z" fill="#f2ead6" stroke="#8a7a54" stroke-width="0.5"/><path d="M-1 -18 L-12 -11 L-1 -6 Z" fill="#e0d6bc" stroke="#8a7a54" stroke-width="0.5"/></g>`;
    if (grand || lvl >= 3) s += `<g transform="translate(78 86)"><path d="M-11 0 q11 -4 22 0 q-3 6 -11 6 q-8 0 -11 -6 Z" fill="#a8763a" stroke="#3a2410" stroke-width="0.8"/><rect x="-0.8" y="-16" width="1.6" height="16" fill="#5a4020"/><path d="M0.8 -16 L11 -10 L0.8 -5 Z" fill="#e8dfc8" stroke="#8a7a54" stroke-width="0.4"/></g>`;
    // Kisten + Fässer
    s += `<rect x="4" y="${62 - 10}" width="9" height="9" fill="#b08a52" stroke="#4a3418" stroke-width="0.7"/><path d="M4 ${62 - 5.5} h9 M8.5 ${62 - 10} v9" stroke="#7a5a32" stroke-width="0.4"/>`;
    s += `<ellipse cx="90" cy="${F - 3}" rx="5" ry="4.4" fill="#8a6a3a" stroke="#3a2410" stroke-width="0.7"/>`;
    if (grand) s += `<g transform="translate(46 82)"><path d="M-10 0 q10 -4 20 0 q-3 6 -10 6 q-7 0 -10 -6 Z" fill="#8a6234" stroke="#3a2410" stroke-width="0.8"/></g>`;
    return svg(s);
  }

  if (type === 'factory' ) { /* handled above */ }

  /* =====================================================
     FALLBACK (generisch, aber sauber)
     ===================================================== */
  const bodyH = 22 + p * 8;
  const bodyTop = F - 4 - bodyH;
  let s = shadow(42);
  s += houseBody({ id: 'fb', x: 12, w: 76, bodyTop, bodyH, roofH: 15, bodyFill: '#c9a86a', bodyLine: '#5f4a24', roofFill: '#a83232', roofLine: '#4e150e', shingleRows: 4, timber: '#8a6a3a', timberCount: 4 });
  s += win(24, bodyTop + 6, 10, 9, { glass: '#ffe08a', frame: '#4a3418' });
  if (lvl >= 2) s += win(64, bodyTop + 6, 10, 9, { glass: '#ffe08a', frame: '#4a3418' });
  s += door(44, bodyTop + bodyH - 14, 12, 14, { fill: '#5a3a1e' });
  if (lvl >= 4) s += `<circle cx="50" cy="${bodyTop - 17}" r="3.4" fill="#ffd54f" stroke="#c99a00" stroke-width="0.7"/>`;
  return svg(s);
}

/* ============ GETTER FUNKTIONEN ============ */
export function getCost(type, level) {
  const def = BUILDINGS[type] || HALLOWEEN_BUILDINGS[type];
  if (!def) return 0;
  if (type === 'main' && level === 0) return 0;
  if (def.isHalloween) return def.candyCost || 0;
  if (level === 0) return Math.round(def.cost);
  return Math.round(def.baseCost * Math.pow(def.costMult, level));
}
export function getHalloweenUpgradeCost(b) {
  const def = HALLOWEEN_BUILDINGS[b.type];
  if (!def) return null;
  if (b.level >= def.maxLevel) return null;
  return Math.floor((def.candyCost || 100) * (b.level + 1) * 1.5);
}
export function getUpgradeCost(b) {
  const def = BUILDINGS[b.type] || HALLOWEEN_BUILDINGS[b.type];
  if (def && def.isHalloween) return getHalloweenUpgradeCost(b);
  return getCost(b.type, b.level);
}
export function getResourceCost(type, level) {
  const def = BUILDINGS[type] || HALLOWEEN_BUILDINGS[type];
  if (!def) return { wood: 0, stone: 0 };
  if (def.isHalloween) return { wood: 0, stone: 0 };
  if (type === 'main' && level === 0) return { wood: 0, stone: 0 };
  if (!def.resourceCost) return { wood: 0, stone: 0 };
  const mult = level === 0 ? 1 : Math.pow(1.6, level);
  return { wood: Math.round(def.resourceCost.wood * mult), stone: Math.round(def.resourceCost.stone * mult) };
}
export function getBuildTime(type, level) {
  const def = BUILDINGS[type] || HALLOWEEN_BUILDINGS[type];
  if (!def) return 8;
  const base = def.buildTime || 8;
  const sf = def.size === 3 ? 1.6 : def.size === 2 ? 1.2 : 1;
  if (level === 0) return Math.round(base * sf);
  return Math.round(base * sf * (0.8 + level * 0.4));
}
export function getMaxHp(type, level) {
  const def = BUILDINGS[type] || HALLOWEEN_BUILDINGS[type];
  const base = def.size === 3 ? 250 : def.size === 2 ? 150 : 100;
  if (type === 'main') return 200 + (level - 1) * 150;
  return base + (level - 1) * Math.round(base * 0.6);
}
export function getCardStats(type, rarity, level) {
  const base = BASE_STATS[type] || BASE_STATS.soldier;
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
export function rarityPalette(rarity) {
  return {
    common:    { main: '#8a9380', dark: '#4a5040', accent: '#a8b0a0' },
    uncommon:  { main: '#4ec9a0', dark: '#1e6a50', accent: '#7fefc4' },
    rare:      { main: '#4a9eff', dark: '#1e4a8a', accent: '#7dc0ff' },
    epic:      { main: '#b366ff', dark: '#5a2a8a', accent: '#d4a6ff' },
    legendary: { main: '#ffd700', dark: '#8a6a00', accent: '#fff0a0' },
    mythic:    { main: '#ff3a3a', dark: '#8a0000', accent: '#ff9999' }
  }[rarity] || { main: '#8a9380', dark: '#4a5040', accent: '#a8b0a0' };
}

/* ============ soldierIconSVG ============ */
export function soldierIconSVG(type, rarity) {
  const pal = rarityPalette(rarity);
  const r = rarity || 'common';
  const colorMain = pal.main, colorDark = pal.dark, colorAccent = pal.accent;
  const glow = (r === 'legendary' || r === 'mythic');
  if (type === 'witch') return `<svg viewBox="0 0 100 100">${glow?`<circle cx="50" cy="55" r="48" fill="${colorAccent}" opacity="0.3"/>`:''}<ellipse cx="50" cy="60" rx="22" ry="24" fill="${colorMain}" stroke="${colorDark}" stroke-width="2"/><polygon points="30,40 50,8 70,40" fill="#4a3a5a" stroke="#2a1a3a" stroke-width="2"/><circle cx="50" cy="30" r="4" fill="#ffb347"/><ellipse cx="50" cy="88" rx="30" ry="6" fill="#3a2a4a" stroke="#1a0a1a" stroke-width="1.5"/><ellipse cx="50" cy="88" rx="24" ry="4" fill="#6aff6a" opacity="0.6"/></svg>`;
  if (type === 'pumpkin') return `<svg viewBox="0 0 100 100"><ellipse cx="50" cy="58" rx="34" ry="30" fill="#ff8c1a" stroke="#a04a00" stroke-width="2.5"/><ellipse cx="35" cy="55" rx="10" ry="18" fill="#ffb347" opacity="0.4"/><rect x="44" y="20" width="12" height="12" fill="#5a3a00" stroke="#3a1a00" stroke-width="1.5"/><path d="M40 55 L45 55 M45 52 L45 58 M55 55 L60 55 M55 52 L55 58 M42 70 L58 70 L50 78 Z" stroke="#2a1a00" stroke-width="2" fill="#2a1a00"/></svg>`;
  if (type === 'ghost') return `<svg viewBox="0 0 100 100"><path d="M50 15 Q25 15 25 45 L25 80 Q30 72 35 80 Q40 72 45 80 Q50 72 55 80 Q60 72 65 80 Q70 72 75 80 L75 45 Q75 15 50 15 Z" fill="${colorMain}" stroke="${colorDark}" stroke-width="2" opacity="0.85"/><circle cx="42" cy="42" r="4" fill="#1a1a1a"/><circle cx="58" cy="42" r="4" fill="#1a1a1a"/><ellipse cx="50" cy="56" rx="6" ry="4" fill="#1a1a1a" opacity="0.8"/></svg>`;
  if (type === 'vampire') return `<svg viewBox="0 0 100 100"><path d="M35 30 L20 20 L25 35 L15 40 L30 45 L35 55 Q50 62 65 55 L70 45 L85 40 L75 35 L80 20 L65 30 Z" fill="#4a1a2a" stroke="#2a0a1a" stroke-width="1.5"/><ellipse cx="50" cy="45" rx="18" ry="22" fill="${colorMain}" stroke="${colorDark}" stroke-width="2"/><circle cx="44" cy="42" r="3" fill="#ff3a3a"/><circle cx="56" cy="42" r="3" fill="#ff3a3a"/><path d="M44 58 L46 62 L48 58 M52 58 L54 62 L56 58" fill="#fff" stroke="#fff" stroke-width="0.5"/></svg>`;
  if (type === 'skull') return `<svg viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="24" ry="28" fill="${colorMain}" stroke="${colorDark}" stroke-width="2"/><circle cx="40" cy="48" r="6" fill="#1a1a1a"/><circle cx="60" cy="48" r="6" fill="#1a1a1a"/><path d="M46 62 L54 62 L50 70 Z" fill="#1a1a1a"/><rect x="42" y="76" width="4" height="8" fill="#1a1a1a"/><rect x="50" y="76" width="4" height="8" fill="#1a1a1a"/><rect x="58" y="76" width="4" height="8" fill="#1a1a1a"/></svg>`;
  if (type === 'skeleton') return `<svg viewBox="0 0 100 100"><ellipse cx="50" cy="32" rx="16" ry="18" fill="#e8dfc8" stroke="#8a7a5a" stroke-width="2"/><circle cx="44" cy="30" r="3" fill="#1a1a1a"/><circle cx="56" cy="30" r="3" fill="#1a1a1a"/><path d="M44 40 L56 40 L50 46 Z" fill="#1a1a1a"/><rect x="34" y="52" width="32" height="20" fill="#e8dfc8" stroke="#8a7a5a" stroke-width="2"/><path d="M34 58 L26 70 M66 58 L74 70 M40 72 L40 88 M60 72 L60 88" stroke="#e8dfc8" stroke-width="4" stroke-linecap="round"/></svg>`;
  const svgContent = (() => {
    if (type === 'archer') return `<path d="M35 40 Q50 34 65 40 L65 72 Q50 76 35 72 Z" fill="${colorMain}" stroke="${colorDark}" stroke-width="2"/><circle cx="50" cy="30" r="12" fill="${colorMain}" stroke="${colorDark}" stroke-width="2"/><path d="M36 30 Q50 12 64 30 L64 26 Q50 8 36 26 Z" fill="${colorAccent}"/><path d="M75 30 Q92 55 75 80" stroke="${colorAccent}" stroke-width="3" fill="none"/>`;
    if (type === 'spearman') return `<path d="M35 40 Q50 34 65 40 L65 72 Q50 76 35 72 Z" fill="${colorMain}" stroke="${colorDark}" stroke-width="2"/><circle cx="50" cy="30" r="12" fill="${colorMain}" stroke="${colorDark}" stroke-width="2"/><rect x="72" y="10" width="4" height="82" fill="#8d6e63"/><path d="M74 2 L84 18 L74 22 L64 18 Z" fill="${colorAccent}"/>`;
    if (type === 'tank') return `<path d="M28 36 Q50 30 72 36 L72 72 Q50 78 28 72 Z" fill="${colorMain}" stroke="${colorDark}" stroke-width="2.5"/><rect x="38" y="16" width="24" height="22" rx="4" fill="${colorMain}" stroke="${colorDark}" stroke-width="2.5"/><ellipse cx="24" cy="42" rx="10" ry="8" fill="${colorDark}"/><ellipse cx="76" cy="42" rx="10" ry="8" fill="${colorDark}"/><circle cx="81.5" cy="52" r="7" fill="${colorAccent}"/>`;
    if (type === 'elite') return `<path d="M33 38 Q50 32 67 38 L67 74 Q50 78 33 74 Z" fill="${colorMain}" stroke="${colorDark}" stroke-width="2.5"/><circle cx="50" cy="28" r="11" fill="${colorMain}" stroke="${colorDark}" stroke-width="2"/><path d="M36 26 Q50 8 64 26 L64 20 Q50 2 36 20 Z" fill="${colorAccent}"/><rect x="72" y="30" width="3" height="55" fill="#e8e8e8"/><path d="M16 44 Q12 44 12 52 L12 70 Q16 76 22 74 L22 44 Z" fill="${colorAccent}"/>`;
    return `<path d="M35 40 Q50 34 65 40 L65 72 Q50 76 35 72 Z" fill="${colorMain}" stroke="${colorDark}" stroke-width="2"/><circle cx="50" cy="30" r="12" fill="${colorMain}" stroke="${colorDark}" stroke-width="2"/><path d="M36 28 Q50 14 64 28 L64 24 Q50 10 36 24 Z" fill="${colorAccent}"/><rect x="72" y="38" width="3" height="40" fill="#e8e8e8"/><path d="M18 46 Q14 46 14 54 L14 68 Q18 74 22 72 L22 46 Z" fill="${colorAccent}"/>`;
  })();
  return `<svg viewBox="0 0 100 100">${glow ? `<circle cx="50" cy="55" r="48" fill="${colorAccent}" opacity="0.3"/>` : ''}${svgContent}</svg>`;
}
