/* =========================================================
   BUILDINGS.JS — Alle Gebäude, SVGs, Icons, Stats
   Original 1:1 + Halloween-Erweiterung
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
  crypt: `<svg viewBox="0 0 24 24" fill="none"><rect x="5" y="9" width="14" height="13" fill="#4a3a4a" stroke="#2a1a2a" stroke-width="1.3"/><polygon points="3,9 12,2 21,9" fill="#6a4a6a" stroke="#2a1a2a" stroke-width="1.2"/><rect x="10" y="14" width="4" height="8" fill="#1a0a1a"/><circle cx="12" cy="6" r="1.5" fill="#ffb347" opacity="0.8"/></svg>`
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
  pumpkinFarm: { name: "Pumpkin Farm", icon: "pumpkinFarm", category: "halloween", size: 2, cost: 0, candyCost: 100, maxLevel: 3, desc: "Produces Candy over time. Only upgradeable with Candy!", baseCost: 0, costMult: 1, produces: {}, candyPerLevel: [10, 25, 55], needs: { workers: 0 }, buildTime: 8, isHalloween: true, boost: "Generate Candy each minute", unlockLevel: 1 },
  witchTower: { name: "Witch Tower", icon: "witchTower", category: "halloween", size: 2, cost: 0, candyCost: 150, maxLevel: 3, desc: "Curses enemies with -HP aura. Also boosts your own witches.", baseCost: 0, costMult: 1, produces: {}, curseAura: [30, 70, 140], needs: { workers: 0 }, buildTime: 10, isHalloween: true, boost: "Enemy soldiers take damage near tower", unlockLevel: 1 },
  boneYard: { name: "Boneyard", icon: "boneYard", category: "halloween", size: 2, cost: 0, candyCost: 200, maxLevel: 3, desc: "Spawns skeletons that fight for you when attacked.", baseCost: 0, costMult: 1, produces: {}, skeletonSpawn: [1, 3, 6], needs: { workers: 0 }, buildTime: 12, isHalloween: true, boost: "Auto-summons skeletons during defense", unlockLevel: 1 },
  hauntedHouse: { name: "Haunted House", icon: "hauntedHouse", category: "halloween", size: 3, cost: 0, candyCost: 300, maxLevel: 3, desc: "Fears enemies in a radius — reduces their damage.", baseCost: 0, costMult: 1, produces: {}, fearAura: [0.15, 0.30, 0.50], needs: { workers: 0 }, buildTime: 15, isHalloween: true, boost: "Enemy damage reduced in radius", unlockLevel: 1 },
  cauldron: { name: "Witch Cauldron", icon: "cauldron", category: "halloween", size: 2, cost: 0, candyCost: 250, maxLevel: 3, desc: "Boosts Candy production of all Pumpkin Farms.", baseCost: 0, costMult: 1, produces: {}, candyBoost: [0.20, 0.50, 1.00], needs: { workers: 0 }, buildTime: 11, isHalloween: true, boost: "Boost all Pumpkin Farms' Candy output", unlockLevel: 1 },
  crypt: { name: "Ancient Crypt", icon: "crypt", category: "halloween", size: 3, cost: 0, candyCost: 500, maxLevel: 3, desc: "Legendary Halloween building. Grants all Halloween bonuses at once.", baseCost: 0, costMult: 1, produces: {}, allBoost: [0.10, 0.25, 0.50], needs: { workers: 0 }, buildTime: 20, isHalloween: true, boost: "Global boost to all Halloween effects", unlockLevel: 1 }
};

/* =========================================================
   BUILDING SVG RENDERER
   Original-SVGs 1:1 + Halloween-Buildings oben
   ========================================================= */
export function buildingSVG(type, level, w, h) {
  const lvl = level;
  const defs = `<defs><linearGradient id="shadowGrad-${type}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(0,0,0,0.35)"/><stop offset="100%" stop-color="rgba(0,0,0,0)"/></linearGradient></defs>`;

  /* ========== HALLOWEEN BUILDINGS (neue saubere SVGs) ========== */
  if (type === 'pumpkinFarm') {
    const bodyTop = 30;
    const bodyH = 30;
    let pumpkins = '';
    const maxPumpkins = 2 + lvl;
    const positions = [
      { x: 24, y: 72, s: 10 },
      { x: 50, y: 78, s: 11 },
      { x: 76, y: 72, s: 10 },
      { x: 36, y: 88, s: 9 },
      { x: 64, y: 88, s: 9 }
    ];
    for (let i = 0; i < Math.min(maxPumpkins, positions.length); i++) {
      const p = positions[i];
      const px = p.x, py = p.y, sz = p.s;
      pumpkins += `<ellipse cx="${px}" cy="${py}" rx="${sz}" ry="${sz*0.85}" fill="#ff8c1a" stroke="#a04a00" stroke-width="1.1"/>`;
      pumpkins += `<ellipse cx="${px - sz*0.35}" cy="${py - sz*0.15}" rx="${sz*0.25}" ry="${sz*0.45}" fill="#ffb347" opacity="0.6"/>`;
      pumpkins += `<rect x="${px-1.5}" y="${py - sz - 3}" width="3" height="5" fill="#5a3a00" stroke="#3a1a00" stroke-width="0.4"/>`;
      pumpkins += `<path d="M${px - 4} ${py - sz - 2} Q${px} ${py - sz - 4} ${px + 4} ${py - sz - 2}" stroke="#5a8a3a" stroke-width="1.4" fill="none" stroke-linecap="round"/>`;
      const eyeColor = lvl >= 2 ? '#ffeb3b' : '#3a1a00';
      pumpkins += `<path d="M${px-4} ${py-2} L${px-2} ${py-4} L${px-1} ${py-2}" stroke="${eyeColor}" stroke-width="1.2" fill="none" stroke-linejoin="round"/>`;
      pumpkins += `<path d="M${px+1} ${py-2} L${px+2} ${py-4} L${px+4} ${py-2}" stroke="${eyeColor}" stroke-width="1.2" fill="none" stroke-linejoin="round"/>`;
      pumpkins += `<path d="M${px-4} ${py+3} L${px-2} ${py+4} L${px} ${py+2} L${px+2} ${py+4} L${px+4} ${py+3}" stroke="${eyeColor}" stroke-width="1.2" fill="none" stroke-linejoin="round"/>`;
    }
    const fieldBg = `<rect x="4" y="64" width="92" height="30" fill="#3a2a10" stroke="#1a0f00" stroke-width="1.2" rx="3"/>
                     <path d="M6 70 L94 70 M6 76 L94 76 M6 82 L94 82 M6 88 L94 88" stroke="#5a3a18" stroke-width="0.5" opacity="0.5"/>`;
    const house = `
      <rect x="30" y="${bodyTop}" width="40" height="${bodyH}" fill="#6a4a2a" stroke="#3a1a08" stroke-width="1.4" rx="1"/>
      <polygon points="26,${bodyTop} 50,${bodyTop - 14} 74,${bodyTop}" fill="#8a3020" stroke="#3a1a08" stroke-width="1.2" stroke-linejoin="round"/>
      <rect x="44" y="${bodyTop + 14}" width="12" height="16" fill="#2a1a08" stroke="#1a0a00" stroke-width="0.6"/>
      <rect x="34" y="${bodyTop + 6}" width="8" height="8" fill="#ffb347" opacity="0.9" stroke="#5a3a00" stroke-width="0.5"/>
      <rect x="58" y="${bodyTop + 6}" width="8" height="8" fill="#ffb347" opacity="0.9" stroke="#5a3a00" stroke-width="0.5"/>
      <rect x="47" y="${bodyTop - 4}" width="6" height="8" fill="#5a3a1a" stroke="#2a1a08" stroke-width="0.6"/>
    `;
    let fence = '';
    for (let i = 0; i < 6; i++) {
      const fx = 8 + i * 16;
      fence += `<rect x="${fx}" y="76" width="2" height="14" fill="#8a5a2a" stroke="#3a1a08" stroke-width="0.4"/>`;
    }
    fence += `<rect x="6" y="80" width="88" height="2" fill="#8a5a2a" stroke="#3a1a08" stroke-width="0.4"/>`;
    fence += `<rect x="6" y="86" width="88" height="2" fill="#8a5a2a" stroke="#3a1a08" stroke-width="0.4"/>`;
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">
      ${defs}
      <ellipse cx="50" cy="97" rx="46" ry="4" fill="url(#shadowGrad-${type})"/>
      ${fieldBg}
      ${fence}
      ${house}
      ${pumpkins}
    </svg>`;
  }
  if (type === 'witchTower') {
    const towH = 42 + lvl * 6;
    const towTop = 100 - towH - 6;
    let windows = '';
    for (let i = 0; i < Math.min(lvl + 1, 3); i++) {
      windows += `<rect x="42" y="${towTop + 10 + i*12}" width="16" height="6" fill="#ffb347" opacity="0.9" stroke="#3a1a08" stroke-width="0.5" rx="1"/>`;
    }
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">
      ${defs}
      <ellipse cx="50" cy="97" rx="40" ry="4" fill="url(#shadowGrad-${type})"/>
      <rect x="34" y="${towTop}" width="32" height="${towH}" fill="#4a3a5a" stroke="#2a1a3a" stroke-width="1.6"/>
      <path d="M36 ${towTop+6} L64 ${towTop+6} M36 ${towTop+18} L64 ${towTop+18} M36 ${towTop+30} L64 ${towTop+30}" stroke="#5a4a6a" stroke-width="0.6" opacity="0.7"/>
      <polygon points="26,${towTop} 50,${towTop-24-lvl*2} 74,${towTop}" fill="#7a2a8a" stroke="#3a1a4a" stroke-width="1.5" stroke-linejoin="round"/>
      <polygon points="50,${towTop-24-lvl*2} 74,${towTop} 50,${towTop}" fill="#5a1a6a" opacity="0.4"/>
      <circle cx="50" cy="${towTop - 28 - lvl*2}" r="5" fill="#d4a6ff" stroke="#6a3aa8" stroke-width="1"/>
      <circle cx="48" cy="${towTop - 30 - lvl*2}" r="2" fill="#fff" opacity="0.9"/>
      ${windows}
      <rect x="44" y="82" width="12" height="14" fill="#1a0a2a" stroke="#3a1a4a" stroke-width="0.8" rx="5 5 0 0"/>
      <circle cx="53" cy="90" r="0.8" fill="#ffb347"/>
    </svg>`;
  }
  if (type === 'boneYard') {
    let bones = '';
    const bonePositions = [
      { x: 18, y: 72, r: 15 }, { x: 42, y: 78, r: -20 },
      { x: 68, y: 74, r: 30 }, { x: 30, y: 88, r: 45 },
      { x: 58, y: 90, r: -35 }, { x: 82, y: 84, r: 10 }
    ];
    const count = Math.min(3 + lvl * 2, bonePositions.length);
    for (let i = 0; i < count; i++) {
      const bp = bonePositions[i];
      bones += `<g transform="rotate(${bp.r} ${bp.x} ${bp.y})">
        <rect x="${bp.x-5}" y="${bp.y-1.2}" width="10" height="2.4" fill="#e8dfc8" stroke="#8a7a5a" stroke-width="0.4" rx="1"/>
        <circle cx="${bp.x-5}" cy="${bp.y-1}" r="1.8" fill="#e8dfc8" stroke="#8a7a5a" stroke-width="0.4"/>
        <circle cx="${bp.x-5}" cy="${bp.y+1}" r="1.8" fill="#e8dfc8" stroke="#8a7a5a" stroke-width="0.4"/>
        <circle cx="${bp.x+5}" cy="${bp.y-1}" r="1.8" fill="#e8dfc8" stroke="#8a7a5a" stroke-width="0.4"/>
        <circle cx="${bp.x+5}" cy="${bp.y+1}" r="1.8" fill="#e8dfc8" stroke="#8a7a5a" stroke-width="0.4"/>
      </g>`;
    }
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">
      ${defs}
      <ellipse cx="50" cy="97" rx="46" ry="4" fill="url(#shadowGrad-${type})"/>
      <ellipse cx="50" cy="82" rx="44" ry="14" fill="#3a2a1a" stroke="#1a0a00" stroke-width="1.4"/>
      <ellipse cx="50" cy="80" rx="38" ry="11" fill="#2a1a0a"/>
      <ellipse cx="50" cy="78" rx="30" ry="7" fill="#1a0f00"/>
      ${bones}
      <g transform="translate(50 72)">
        <ellipse cx="0" cy="0" rx="6" ry="7" fill="#e8dfc8" stroke="#8a7a5a" stroke-width="0.7"/>
        <circle cx="-2" cy="-1" r="1.4" fill="#1a0a00"/>
        <circle cx="2" cy="-1" r="1.4" fill="#1a0a00"/>
        <path d="M-2 3 L2 3 L0 5 Z" fill="#1a0a00"/>
        <rect x="-2" y="6" width="1.5" height="3" fill="#e8dfc8" stroke="#8a7a5a" stroke-width="0.3"/>
        <rect x="0.5" y="6" width="1.5" height="3" fill="#e8dfc8" stroke="#8a7a5a" stroke-width="0.3"/>
      </g>
      ${lvl >= 2 ? `<ellipse cx="50" cy="72" rx="40" ry="8" fill="#8a4a9a" opacity="0.15"/>` : ''}
    </svg>`;
  }
  if (type === 'hauntedHouse') {
    const roofH = 22 + lvl * 3;
    const bodyTop = 100 - 40 - 6;
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">
      ${defs}
      <ellipse cx="50" cy="97" rx="46" ry="4" fill="url(#shadowGrad-${type})"/>
      <rect x="14" y="${bodyTop}" width="72" height="40" fill="#3a2a4a" stroke="#1a0a2a" stroke-width="1.6"/>
      <path d="M16 ${bodyTop+10} L84 ${bodyTop+10} M16 ${bodyTop+24} L84 ${bodyTop+24}" stroke="#4a3a5a" stroke-width="0.6" opacity="0.6"/>
      <polygon points="8,${bodyTop} 50,${bodyTop-roofH} 92,${bodyTop}" fill="#5a2a4a" stroke="#2a0a1a" stroke-width="1.5" stroke-linejoin="round"/>
      <polygon points="50,${bodyTop-roofH} 92,${bodyTop} 50,${bodyTop}" fill="#3a1a3a" opacity="0.4"/>
      <rect x="24" y="${bodyTop+8}" width="10" height="12" fill="#ffb347" opacity="0.9" stroke="#3a1a08" stroke-width="0.7" rx="1"/>
      <rect x="66" y="${bodyTop+8}" width="10" height="12" fill="#ffb347" opacity="0.9" stroke="#3a1a08" stroke-width="0.7" rx="1"/>
      <rect x="42" y="${bodyTop+18}" width="16" height="22" fill="#0a0010" stroke="#1a0a2a" stroke-width="0.9" rx="8 8 0 0"/>
      <circle cx="55" cy="${bodyTop+30}" r="0.8" fill="#ffb347"/>
      ${lvl >= 2 ? `
        <path d="M50 ${bodyTop-roofH-4} Q47 ${bodyTop-roofH-10} 50 ${bodyTop-roofH-14} Q53 ${bodyTop-roofH-10} 50 ${bodyTop-roofH-4} Z" fill="#d4a6ff" opacity="0.6"/>
        <circle cx="48.5" cy="${bodyTop-roofH-9}" r="0.8" fill="#fff"/>
        <circle cx="51.5" cy="${bodyTop-roofH-9}" r="0.8" fill="#fff"/>
      ` : ''}
    </svg>`;
  }
  if (type === 'cauldron') {
    const glow = 0.4 + lvl * 0.15;
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">
      ${defs}
      <ellipse cx="50" cy="97" rx="38" ry="4" fill="url(#shadowGrad-${type})"/>
      <ellipse cx="50" cy="88" rx="18" ry="4" fill="#ff6b00" opacity="0.7"/>
      <ellipse cx="50" cy="86" rx="12" ry="3" fill="#ffb347" opacity="0.9"/>
      <ellipse cx="50" cy="82" rx="28" ry="8" fill="#2a1a3a" stroke="#1a0a1a" stroke-width="1.4"/>
      <path d="M22 78 Q22 50 50 50 Q78 50 78 78" fill="#3a2a4a" stroke="#1a0a1a" stroke-width="1.6"/>
      <rect x="30" y="82" width="4" height="8" fill="#1a0a1a" rx="1"/>
      <rect x="66" y="82" width="4" height="8" fill="#1a0a1a" rx="1"/>
      <ellipse cx="50" cy="52" rx="26" ry="8" fill="#6aff6a" opacity="${glow}"/>
      <ellipse cx="50" cy="51" rx="20" ry="5" fill="#aaffaa" opacity="${glow+0.2}"/>
      <circle cx="42" cy="48" r="2" fill="#aaffaa" opacity="0.9"/>
      <circle cx="55" cy="46" r="1.5" fill="#aaffaa" opacity="0.8"/>
      <circle cx="60" cy="50" r="1.2" fill="#aaffaa" opacity="0.7"/>
      <circle cx="48" cy="45" r="1" fill="#aaffaa" opacity="0.6"/>
      <path d="M44 44 Q42 38 44 34 Q46 30 44 26" stroke="#aaffaa" stroke-width="1.2" fill="none" opacity="0.5"/>
      <path d="M56 44 Q58 38 56 34 Q54 30 56 26" stroke="#aaffaa" stroke-width="1.2" fill="none" opacity="0.5"/>
    </svg>`;
  }
  if (type === 'crypt') {
    const roofH = 26 + lvl * 4;
    const bodyTop = 100 - 44 - 6;
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">
      ${defs}
      <ellipse cx="50" cy="97" rx="48" ry="4" fill="url(#shadowGrad-${type})"/>
      <rect x="10" y="${bodyTop}" width="80" height="44" fill="#4a3a4a" stroke="#2a1a2a" stroke-width="1.8"/>
      <path d="M12 ${bodyTop+12} L88 ${bodyTop+12} M12 ${bodyTop+26} L88 ${bodyTop+26}" stroke="#6a5a6a" stroke-width="0.7" opacity="0.6"/>
      <polygon points="4,${bodyTop} 50,${bodyTop-roofH} 96,${bodyTop}" fill="#6a4a6a" stroke="#2a1a2a" stroke-width="1.5" stroke-linejoin="round"/>
      <polygon points="50,${bodyTop-roofH} 96,${bodyTop} 50,${bodyTop}" fill="#4a2a4a" opacity="0.4"/>
      <rect x="42" y="${bodyTop+16}" width="16" height="28" fill="#0a0010" stroke="#1a0a1a" stroke-width="0.9"/>
      <rect x="22" y="${bodyTop+8}" width="8" height="10" fill="#ffb347" opacity="0.85"/>
      <rect x="70" y="${bodyTop+8}" width="8" height="10" fill="#ffb347" opacity="0.85"/>
      <circle cx="50" cy="${bodyTop-6}" r="3" fill="#ffb347" opacity="0.9"/>
      <circle cx="50" cy="${bodyTop-6}" r="7" fill="#ffb347" opacity="0.3"/>
    </svg>`;
  }

  /* ========== ORIGINAL BUILDINGS (1:1 aus deiner alten Datei) ========== */
  if (type === 'buildersguild') {
    const bodyTop = 54;
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">${defs}<ellipse cx="50" cy="97" rx="42" ry="4" fill="url(#shadowGrad-${type})"/><rect x="14" y="${bodyTop}" width="72" height="${100 - bodyTop - 6}" fill="#ffb74d" stroke="#bf6a00" stroke-width="1.6"/><polygon points="8,${bodyTop} 50,${bodyTop-20} 92,${bodyTop}" fill="#e65100" stroke="#a03000" stroke-width="1.5" stroke-linejoin="round"/><rect x="38" y="68" width="24" height="24" fill="#5d4037" stroke="#3a1a08" stroke-width="0.8"/><rect x="24" y="${bodyTop+4}" width="10" height="10" fill="#ffe08a" stroke="#5a3a00" stroke-width="0.6"/><rect x="66" y="${bodyTop+4}" width="10" height="10" fill="#ffe08a" stroke="#5a3a00" stroke-width="0.6"/><circle cx="50" cy="${bodyTop-10}" r="5" fill="#fff8e1" stroke="#3a1a08" stroke-width="0.8"/><path d="M46 ${bodyTop-10} L54 ${bodyTop-10} M50 ${bodyTop-14} L50 ${bodyTop-6}" stroke="#5d4037" stroke-width="1"/></svg>`;
  }
  if (type === 'main') {
    const bodyTop = 100 - (28 + lvl * 4);
    const bodyH = 100 - bodyTop;
    let flags = '';
    let towers = `<rect x="6" y="${bodyTop-8}" width="12" height="${bodyH+8}" fill="#8d7355" stroke="#3a2a1a" stroke-width="1.5"/><rect x="82" y="${bodyTop-8}" width="12" height="${bodyH+8}" fill="#8d7355" stroke="#3a2a1a" stroke-width="1.5"/>`;
    if (lvl >= 2) towers += `<polygon points="4,${bodyTop-8} 12,${bodyTop-22} 20,${bodyTop-8}" fill="#8d3b2a" stroke="#5a1a1a" stroke-width="1"/><polygon points="80,${bodyTop-8} 88,${bodyTop-22} 96,${bodyTop-8}" fill="#8d3b2a" stroke="#5a1a1a" stroke-width="1"/>`;
    if (lvl >= 3) towers += `<polygon points="24,${bodyTop} 50,${bodyTop-22} 76,${bodyTop}" fill="#a83232" stroke="#5a1a1a" stroke-width="1.4"/>`;
    if (lvl >= 5) flags += `<rect x="11" y="${bodyTop-38}" width="2" height="14" fill="#3a2a1a"/><polygon points="13,${bodyTop-38} 22,${bodyTop-34} 13,${bodyTop-30}" fill="#b71c1c"/><rect x="87" y="${bodyTop-38}" width="2" height="14" fill="#3a2a1a"/><polygon points="89,${bodyTop-38} 98,${bodyTop-34} 89,${bodyTop-30}" fill="#b71c1c"/>`;
    if (lvl >= 7) flags += `<rect x="49" y="${bodyTop-44}" width="2" height="16" fill="#3a2a1a"/><polygon points="51,${bodyTop-44} 62,${bodyTop-39} 51,${bodyTop-34}" fill="#ffb300"/>`;
    const wc = lvl >= 5 ? 3 : 2;
    let windows = '';
    const wy = bodyTop + bodyH * 0.25;
    for (let i = 0; i < wc; i++) windows += `<rect x="${26 + i*18}" y="${wy}" width="8" height="12" fill="#ffe08a" stroke="#5a3a00" stroke-width="0.6" rx="1"/>`;
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">${defs}<ellipse cx="50" cy="97" rx="44" ry="4" fill="url(#shadowGrad-${type})"/>${towers}<rect x="16" y="${bodyTop}" width="68" height="${bodyH}" fill="#c9a84c" stroke="#7a5c10" stroke-width="1.8" rx="1"/><path d="M16 ${bodyTop+6} L84 ${bodyTop+6} M16 ${bodyTop+20} L84 ${bodyTop+20} M16 ${bodyTop+34} L84 ${bodyTop+34}" stroke="#8a6a2a" stroke-width="0.6" opacity="0.5"/>${flags}${windows}<rect x="44" y="82" width="12" height="18" fill="#4a2f10" stroke="#2a1a08" stroke-width="1" rx="1"/><circle cx="53" cy="91" r="1" fill="#ffd54f"/></svg>`;
  }
  if (type === 'house') {
    const bodyH = 22 + lvl * 2.8;
    const bodyTop = 100 - bodyH - 6;
    const roofH = 16 + lvl * 1.2;
    const winY = bodyTop + bodyH * 0.25;
    let windows = `<rect x="20" y="${winY}" width="10" height="9" fill="#ffe08a" stroke="#5a3a00" stroke-width="0.6" rx="1"/>`;
    if (lvl >= 2) windows += `<rect x="70" y="${winY}" width="10" height="9" fill="#ffe08a" stroke="#5a3a00" stroke-width="0.6" rx="1"/>`;
    let extras = `<rect x="58" y="${bodyTop - roofH + 4}" width="8" height="${roofH + 4}" fill="#8d3b2a" stroke="#3a1a1a" stroke-width="0.8"/><rect x="57" y="${bodyTop - roofH - 2}" width="10" height="3" fill="#5a1a1a"/>`;
    if (lvl >= 3) extras += `<rect x="44" y="${bodyTop - roofH * 0.55}" width="12" height="8" fill="#4fc3f7" stroke="#2a4a6a" stroke-width="0.6" rx="1"/>`;
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">${defs}<ellipse cx="50" cy="97" rx="42" ry="4" fill="url(#shadowGrad-${type})"/><rect x="12" y="${bodyTop}" width="76" height="${bodyH}" fill="#d98e5a" stroke="#7a3b1a" stroke-width="1.6" rx="1"/><rect x="12" y="${bodyTop+bodyH*0.6}" width="76" height="3" fill="#b86e3a" opacity="0.5"/><polygon points="6,${bodyTop+2} 50,${bodyTop - roofH} 94,${bodyTop+2}" fill="#a83232" stroke="#5a1a1a" stroke-width="1.6" stroke-linejoin="round"/><polygon points="6,${bodyTop+2} 50,${bodyTop - roofH} 50,${bodyTop+2}" fill="#8a2626" opacity="0.4"/>${windows}${extras}<rect x="44" y="80" width="12" height="20" fill="#4a2f10" stroke="#2a1a08" stroke-width="0.8"/><circle cx="53" cy="90" r="1" fill="#ffd54f"/></svg>`;
  }
  if (type === 'farm') {
    const fieldTop = 72;
    let crops = '';
    const rows = 3 + Math.min(lvl, 5);
    for (let i = 0; i < rows; i++) {
      const yy = fieldTop + i * (24/rows);
      const hue = 45 + (i * 4);
      crops += `<rect x="4" y="${yy}" width="92" height="${(24/rows)*0.5}" fill="hsl(${hue},70%,55%)" opacity="0.9"/>`;
      for (let k = 0; k < 20; k++) {
        const xx = 6 + k * 4.5;
        crops += `<line x1="${xx}" y1="${yy+3}" x2="${xx}" y2="${yy - 2}" stroke="hsl(${hue},80%,35%)" stroke-width="0.7"/>`;
      }
    }
    let barn = `<rect x="60" y="38" width="30" height="37" fill="#c9532f" stroke="#5a1a1a" stroke-width="1.4"/><polygon points="56,38 75,22 94,38" fill="#8d3b2a" stroke="#3a1a1a" stroke-width="1.2"/><rect x="70" y="58" width="10" height="17" fill="#4a2f10"/><line x1="75" y1="58" x2="75" y2="75" stroke="#2a1a08" stroke-width="0.6"/><line x1="70" y1="66" x2="80" y2="66" stroke="#2a1a08" stroke-width="0.6"/>`;
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">${defs}<ellipse cx="50" cy="97" rx="46" ry="4" fill="url(#shadowGrad-${type})"/><rect x="2" y="${fieldTop}" width="96" height="26" fill="#8d6b3a" stroke="#5d4020" stroke-width="1" rx="2"/>${crops}${barn}</svg>`;
  }
  if (type === 'lumber') {
    const bodyTop = 58;
    let logs = '';
    for (let i = 0; i < 4; i++) {
      logs += `<rect x="66" y="${70 + i*6}" width="28" height="5" fill="${i%2 ? '#a1887f' : '#8d6e63'}" stroke="#4e342e" stroke-width="0.8" rx="2"/><ellipse cx="94" cy="${72.5 + i*6}" rx="2" ry="2.5" fill="#d7ccc8" stroke="#4e342e" stroke-width="0.6"/>`;
    }
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">${defs}<ellipse cx="50" cy="97" rx="42" ry="4" fill="url(#shadowGrad-${type})"/><rect x="14" y="${bodyTop}" width="50" height="${100 - bodyTop - 6}" fill="#795548" stroke="#3e2723" stroke-width="1.5" rx="1"/><path d="M14 ${bodyTop+8} L64 ${bodyTop+8} M14 ${bodyTop+22} L64 ${bodyTop+22}" stroke="#4e342e" stroke-width="0.8" opacity="0.7"/><polygon points="10,${bodyTop} 39,${bodyTop-16} 68,${bodyTop}" fill="#5d4037" stroke="#3a1a08" stroke-width="1.3"/><rect x="30" y="78" width="12" height="16" fill="#3a2a1a"/><rect x="20" y="${bodyTop+4}" width="9" height="9" fill="#ffe08a" stroke="#5a3a00" stroke-width="0.6" rx="1"/>${logs}</svg>`;
  }
  if (type === 'quarry') {
    let rocks = '';
    for (let i = 0; i < 6; i++) {
      const rx = 10 + i * 12 + Math.random() * 4;
      const ry = 62 + Math.random() * 8;
      const rs = 8 + Math.random() * 6;
      const shade = 180 + Math.floor(Math.random() * 40);
      rocks += `<path d="M${rx-rs} ${ry+rs} L${rx-rs*0.6} ${ry-rs*0.3} L${rx} ${ry-rs} L${rx+rs*0.7} ${ry-rs*0.4} L${rx+rs} ${ry+rs} Z" fill="rgb(${shade},${shade+10},${shade+20})" stroke="#546e7a" stroke-width="0.8"/>`;
    }
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">${defs}<ellipse cx="50" cy="97" rx="46" ry="4" fill="url(#shadowGrad-${type})"/><ellipse cx="50" cy="80" rx="42" ry="14" fill="#8d8b82" stroke="#5a5850" stroke-width="1.2"/><ellipse cx="50" cy="79" rx="36" ry="10" fill="#6a6862"/><ellipse cx="50" cy="78" rx="28" ry="6" fill="#4a4842"/>${rocks}</svg>`;
  }
  if (type === 'gemMine') {
    let gems = '';
    for (let i = 0; i < 5; i++) {
      const gx = 14 + i * 18;
      const gy = 74 + Math.random() * 6;
      const gs = 5 + Math.random() * 4;
      gems += `<path d="M${gx} ${gy-gs} L${gx+gs*0.7} ${gy} L${gx} ${gy+gs} L${gx-gs*0.7} ${gy} Z" fill="#a87ee0" stroke="#5a2a9a" stroke-width="0.8"/><path d="M${gx} ${gy-gs} L${gx+gs*0.7} ${gy} L${gx} ${gy} Z" fill="#d4a6ff" opacity="0.7"/>`;
    }
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">${defs}<ellipse cx="50" cy="97" rx="44" ry="4" fill="url(#shadowGrad-${type})"/><path d="M4 96 Q20 42 34 55 Q44 62 50 48 Q60 30 72 52 Q84 68 96 96 Z" fill="#5a4a6a" stroke="#2a1a3a" stroke-width="1.5" stroke-linejoin="round"/><path d="M20 96 Q34 60 46 70 Q52 74 56 64 Q64 52 74 70 Q84 82 90 96 Z" fill="#3a2a4a" opacity="0.5"/><path d="M36 96 Q44 82 50 76 Q56 82 64 96 Z" fill="#1a0a2a" stroke="#000" stroke-width="1"/><rect x="42" y="74" width="16" height="4" fill="#6a5a7a"/><rect x="46" y="78" width="8" height="18" fill="#2a1a3a"/>${gems}</svg>`;
  }
  if (type === 'market') {
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">${defs}<ellipse cx="50" cy="97" rx="44" ry="4" fill="url(#shadowGrad-${type})"/><rect x="8" y="56" width="84" height="36" fill="#ffe0b2" stroke="#bf8f5a" stroke-width="1.4" rx="1"/><rect x="8" y="56" width="84" height="6" fill="#8d6e63"/><polygon points="4,56 20,40 36,56" fill="#e53935" stroke="#8a1a1a" stroke-width="1.2"/><polygon points="32,56 48,40 64,56" fill="#fbc02d" stroke="#a07a00" stroke-width="1.2"/><polygon points="60,56 76,40 92,56" fill="#43a047" stroke="#1b5e20" stroke-width="1.2"/><rect x="20" y="68" width="60" height="4" fill="#8d6e63"/><circle cx="30" cy="66" r="3" fill="#e53935"/><circle cx="45" cy="66" r="3" fill="#fbc02d"/><circle cx="60" cy="66" r="3" fill="#43a047"/><rect x="14" y="72" width="6" height="20" fill="#6d4c41"/><rect x="80" y="72" width="6" height="20" fill="#6d4c41"/><rect x="42" y="80" width="16" height="12" fill="#4a2f10"/></svg>`;
  }
  if (type === 'mine') {
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">${defs}<ellipse cx="50" cy="97" rx="44" ry="4" fill="url(#shadowGrad-${type})"/><path d="M4 96 Q20 42 34 55 Q44 62 50 48 Q60 30 72 52 Q84 68 96 96 Z" fill="#6d4c41" stroke="#3e2723" stroke-width="1.5" stroke-linejoin="round"/><path d="M20 96 Q34 60 46 70 Q52 74 56 64 Q64 52 74 70 Q84 82 90 96 Z" fill="#4e342e" opacity="0.5"/><path d="M36 96 Q44 82 50 76 Q56 82 64 96 Z" fill="#1a1a1a" stroke="#000" stroke-width="1"/><rect x="42" y="74" width="16" height="4" fill="#8d6e63"/><rect x="46" y="78" width="8" height="18" fill="#2a1a1a"/><circle cx="50" cy="86" r="2" fill="#ffd54f"/></svg>`;
  }
  if (type === 'barracks') {
    let shields = '';
    for (let i = 0; i < 3 + Math.min(lvl, 3); i++) {
      const sx = 20 + i * 12;
      shields += `<ellipse cx="${sx}" cy="86" rx="4" ry="5" fill="#c9a84c" stroke="#7a5c10" stroke-width="0.8"/><circle cx="${sx}" cy="86" r="1.5" fill="#7a5c10"/>`;
    }
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">${defs}<ellipse cx="50" cy="97" rx="44" ry="4" fill="url(#shadowGrad-${type})"/><rect x="10" y="56" width="80" height="36" fill="#8d6e63" stroke="#4e342e" stroke-width="1.5" rx="1"/><rect x="10" y="56" width="80" height="5" fill="#5d4037"/><polygon points="6,56 50,34 94,56" fill="#5d4037" stroke="#3a1a08" stroke-width="1.4" stroke-linejoin="round"/><polygon points="6,56 50,34 50,56" fill="#4a2f28" opacity="0.5"/><rect x="42" y="78" width="16" height="14" fill="#3a2a1a"/><line x1="50" y1="78" x2="50" y2="92" stroke="#1a1a08" stroke-width="0.8"/><rect x="18" y="60" width="9" height="9" fill="#ffe08a"/><rect x="73" y="60" width="9" height="9" fill="#ffe08a"/><rect x="26" y="42" width="4" height="14" fill="#3a2a1a"/><path d="M26 44 L22 40 L22 47 Z" fill="#c62828"/><rect x="70" y="42" width="4" height="14" fill="#3a2a1a"/><path d="M74 44 L78 40 L78 47 Z" fill="#c62828"/>${shields}</svg>`;
  }
  if (type === 'tower' || type === 'watchtower') {
    const towH = 40 + lvl * 3;
    const towTop = 100 - towH - 6;
    let windows = '';
    for (let i = 0; i < Math.min(4, Math.floor(lvl/2) + 1); i++) {
      windows += `<rect x="42" y="${towTop + 8 + i*12}" width="16" height="5" fill="#2a1a1a" stroke="#000" stroke-width="0.5"/>`;
    }
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">${defs}<ellipse cx="50" cy="97" rx="34" ry="4" fill="url(#shadowGrad-${type})"/><rect x="30" y="${towTop}" width="40" height="${towH}" fill="#b0b8b0" stroke="#4a5248" stroke-width="1.6"/><path d="M30 ${towTop + 8} L70 ${towTop + 8} M30 ${towTop + 20} L70 ${towTop + 20} M30 ${towTop + 34} L70 ${towTop + 34}" stroke="#7a8078" stroke-width="0.7" opacity="0.6"/>${windows}<polygon points="24,${towTop} 76,${towTop} 82,${towTop - 4} 82,${towTop - 8} 76,${towTop - 12} 24,${towTop - 12} 18,${towTop - 8} 18,${towTop - 4}" fill="#b71c1c" stroke="#5a1a1a" stroke-width="1.2"/><rect x="47" y="${towTop - 22}" width="6" height="14" fill="#b71c1c"/><polygon points="50,${towTop - 22} 62,${towTop - 18} 50,${towTop - 14}" fill="#c62828"/><rect x="42" y="92" width="16" height="6" fill="#3a2a1a"/></svg>`;
  }
  if (type === 'wall') {
    const wallH = 32 + lvl * 2.5;
    const wallTop = 100 - wallH - 6;
    let bricks = '';
    for (let row = 0; row < 5; row++) {
      const yy = wallTop + row * 8;
      const offset = row % 2 === 0 ? 0 : 6;
      for (let col = 0; col < 8; col++) {
        const xx = 4 + col * 12 + offset;
        if (xx > 92) break;
        bricks += `<rect x="${xx}" y="${yy}" width="11" height="7" fill="#a8a8a8" stroke="#5a5a5a" stroke-width="0.6"/>`;
      }
    }
    let crenels = '';
    for (let i = 0; i < 5; i++) crenels += `<rect x="${4 + i*19}" y="${wallTop - 6}" width="10" height="8" fill="#b0b0b0" stroke="#5a5a5a" stroke-width="0.8"/>`;
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">${defs}<ellipse cx="50" cy="97" rx="46" ry="3" fill="url(#shadowGrad-${type})"/><rect x="2" y="${wallTop}" width="96" height="${wallH + 6}" fill="#909090" stroke="#3a3a3a" stroke-width="1.6" rx="1"/>${bricks}${crenels}</svg>`;
  }
  if (type === 'fortress') {
    const bodyTop = 46;
    const bodyH = 100 - bodyTop - 6;
    let towers = '';
    const positions = [[2, 8], [82, 8], [2, 70], [82, 70]];
    positions.forEach(([tx, ty], idx) => {
      const tTop = ty - 12 - Math.min(lvl, 6) * 1.5;
      const tH = 100 - tTop - 6;
      towers += `<rect x="${tx}" y="${tTop}" width="16" height="${tH}" fill="#6a5a8a" stroke="#2a1d4a" stroke-width="1.4"/>`;
      for (let z = 0; z < 3; z++) towers += `<rect x="${tx + z*5}" y="${tTop - 4}" width="3" height="4" fill="#8e7eae" stroke="#2a1d4a" stroke-width="0.5"/>`;
      if (lvl >= 3) towers += `<rect x="${tx + 7}" y="${tTop - 14}" width="2" height="10" fill="#3a1a08"/><polygon points="${tx+9},${tTop-14} ${tx+17},${tTop-10} ${tx+9},${tTop-6}" fill="${idx < 2 ? '#b71c1c' : '#1565c0'}"/>`;
    });
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">${defs}<ellipse cx="50" cy="97" rx="48" ry="4" fill="url(#shadowGrad-${type})"/>${towers}<rect x="18" y="${bodyTop}" width="64" height="${bodyH}" fill="#7a6a9a" stroke="#2a1d4a" stroke-width="1.6"/><path d="M18 ${bodyTop + 12} L82 ${bodyTop + 12} M18 ${bodyTop + 28} L82 ${bodyTop + 28}" stroke="#4a3d6a" stroke-width="0.8" opacity="0.6"/><rect x="42" y="74" width="16" height="20" fill="#2a1a1a" stroke="#000" stroke-width="1"/><rect x="28" y="${bodyTop + 6}" width="8" height="10" fill="#ffe08a"/><rect x="64" y="${bodyTop + 6}" width="8" height="10" fill="#ffe08a"/></svg>`;
  }
  if (type === 'church') {
    const bodyTop = 52;
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">${defs}<ellipse cx="50" cy="97" rx="42" ry="4" fill="url(#shadowGrad-${type})"/><rect x="16" y="${bodyTop}" width="68" height="${100 - bodyTop - 6}" fill="#e8dfc8" stroke="#8d7a4a" stroke-width="1.5"/><polygon points="10,${bodyTop} 50,${bodyTop-22} 90,${bodyTop}" fill="#8d6e63" stroke="#4a3a2a" stroke-width="1.4" stroke-linejoin="round"/><rect x="47" y="${bodyTop - 40}" width="6" height="18" fill="#c9a84c" stroke="#7a5c10" stroke-width="0.8"/><rect x="44" y="${bodyTop - 34}" width="12" height="6" fill="#c9a84c" stroke="#7a5c10" stroke-width="0.8"/><path d="M44 64 L50 56 L56 64 L56 76 L44 76 Z" fill="#4fc3f7" stroke="#2a4a6a" stroke-width="0.8" opacity="0.75"/><rect x="30" y="70" width="8" height="12" fill="#ffe08a"/><rect x="62" y="70" width="8" height="12" fill="#ffe08a"/><rect x="44" y="84" width="12" height="10" fill="#5a3a1a" stroke="#3a1a08" stroke-width="0.6"/></svg>`;
  }
  if (type === 'well') {
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">${defs}<ellipse cx="50" cy="97" rx="30" ry="3" fill="url(#shadowGrad-${type})"/><ellipse cx="50" cy="88" rx="26" ry="8" fill="#6a6055" stroke="#3a3025" stroke-width="1.4"/><ellipse cx="50" cy="86" rx="22" ry="6" fill="#4fc3f7" opacity="0.7"/><ellipse cx="50" cy="85" rx="16" ry="4" fill="#2a7fa8" opacity="0.6"/><rect x="28" y="72" width="4" height="14" fill="#8d6e63" stroke="#4a3a28" stroke-width="0.6"/><rect x="68" y="72" width="4" height="14" fill="#8d6e63" stroke="#4a3a28" stroke-width="0.6"/><polygon points="24,72 50,54 76,72" fill="#8d3b2a" stroke="#3a1a08" stroke-width="1.4"/><rect x="46" y="66" width="8" height="6" fill="#4a2f10"/><rect x="48" y="60" width="4" height="8" fill="#5a3a1a"/></svg>`;
  }
  if (type === 'bakery') {
    const bodyTop = 54;
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">${defs}<ellipse cx="50" cy="97" rx="42" ry="4" fill="url(#shadowGrad-${type})"/><rect x="14" y="${bodyTop}" width="72" height="${100 - bodyTop - 6}" fill="#f0c080" stroke="#8d5a20" stroke-width="1.5"/><polygon points="8,${bodyTop} 50,${bodyTop-18} 92,${bodyTop}" fill="#8d3b2a" stroke="#3a1a08" stroke-width="1.4"/><rect x="58" y="${bodyTop - 24}" width="8" height="14" fill="#6a4a3a" stroke="#3a1a08" stroke-width="0.8"/><rect x="57" y="${bodyTop - 28}" width="10" height="4" fill="#3a1a08"/><rect x="28" y="68" width="22" height="14" fill="#5a3a1a" stroke="#3a1a08" stroke-width="0.8" rx="3"/><ellipse cx="39" cy="74" rx="8" ry="5" fill="#ffb84a" opacity="0.85"/><rect x="60" y="66" width="14" height="10" fill="#ffe08a" stroke="#5a3a00" stroke-width="0.6" rx="1"/><rect x="62" y="80" width="10" height="14" fill="#6a4a3a"/><circle cx="67" cy="87" r="1" fill="#ffd54f"/></svg>`;
  }
  if (type === 'blacksmith') {
    const bodyTop = 54;
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">${defs}<ellipse cx="50" cy="97" rx="42" ry="4" fill="url(#shadowGrad-${type})"/><rect x="14" y="${bodyTop}" width="72" height="${100 - bodyTop - 6}" fill="#4a3a2a" stroke="#1a0f08" stroke-width="1.5"/><polygon points="8,${bodyTop} 50,${bodyTop-16} 92,${bodyTop}" fill="#3a2a1a" stroke="#1a0f08" stroke-width="1.4"/><rect x="34" y="60" width="32" height="18" fill="#2a1a1a" stroke="#000" stroke-width="0.8" rx="2"/><ellipse cx="50" cy="69" rx="12" ry="6" fill="#ff5722" opacity="0.9"/><ellipse cx="50" cy="69" rx="7" ry="3" fill="#ffeb3b"/><rect x="20" y="${bodyTop - 18}" width="8" height="14" fill="#2a1a1a"/><path d="M20 ${bodyTop - 18} L28 ${bodyTop - 22} L28 ${bodyTop - 14} Z" fill="#ff8f00" opacity="0.8"/><rect x="70" y="62" width="6" height="8" fill="#8d6e63"/><rect x="74" y="58" width="8" height="4" fill="#607d8b"/></svg>`;
  }
  if (type === 'windmill') {
    const bodyTop = 42;
    const cx = 50, cy = bodyTop + 10;
    let blades = '';
    for (let i = 0; i < 4; i++) {
      const ang = (i * 90);
      blades += `<g transform="rotate(${ang} ${cx} ${cy})"><rect x="${cx-1}" y="${cy-28}" width="2" height="28" fill="#5d4037"/><rect x="${cx-6}" y="${cy-28}" width="12" height="18" fill="#e8dfc8" stroke="#3a2a1a" stroke-width="0.6" opacity="0.9"/></g>`;
    }
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">${defs}<ellipse cx="50" cy="97" rx="36" ry="4" fill="url(#shadowGrad-${type})"/><polygon points="30,${bodyTop} 70,${bodyTop} 74,94 26,94" fill="#e8dfc8" stroke="#8d7a4a" stroke-width="1.5"/><rect x="30" y="${bodyTop}" width="40" height="6" fill="#c9a84c" stroke="#7a5c10" stroke-width="0.8"/><path d="M36 60 L44 60 L44 70 L36 70 Z" fill="#ffe08a" stroke="#5a3a00" stroke-width="0.5"/><rect x="44" y="80" width="12" height="14" fill="#6a4a3a" stroke="#3a1a08" stroke-width="0.6"/><g>${blades}</g><circle cx="${cx}" cy="${cy}" r="3" fill="#5a3a1a"/></svg>`;
  }
  if (type === 'workshop') {
    const bodyTop = 54;
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">${defs}<ellipse cx="50" cy="97" rx="42" ry="4" fill="url(#shadowGrad-${type})"/><rect x="14" y="${bodyTop}" width="72" height="${100 - bodyTop - 6}" fill="#78909c" stroke="#37474f" stroke-width="1.5"/><polygon points="8,${bodyTop} 50,${bodyTop-16} 92,${bodyTop}" fill="#546e7a" stroke="#2a3a4a" stroke-width="1.4"/><circle cx="34" cy="68" r="10" fill="#546e7a" stroke="#1a2028" stroke-width="1"/><circle cx="34" cy="68" r="6" fill="#90a4ae"/><circle cx="34" cy="68" r="2" fill="#1a2028"/><rect x="58" y="76" width="3" height="16" fill="#8d6e63"/><rect x="54" y="72" width="10" height="5" fill="#607d8b"/><rect x="64" y="80" width="6" height="12" fill="#8d6e63"/></svg>`;
  }
  if (type === 'bank') {
    const bodyTop = 52;
    let columns = '';
    for (let i = 0; i < 4; i++) columns += `<rect x="${24 + i*15}" y="${bodyTop + 8}" width="5" height="30" fill="#e8dfc8" stroke="#8d7a4a" stroke-width="0.8"/><rect x="${22 + i*15}" y="${bodyTop + 4}" width="9" height="4" fill="#c9a84c"/>`;
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">${defs}<ellipse cx="50" cy="97" rx="46" ry="4" fill="url(#shadowGrad-${type})"/><rect x="14" y="${bodyTop}" width="72" height="8" fill="#c9a84c" stroke="#7a5c10" stroke-width="1"/><polygon points="8,${bodyTop} 50,${bodyTop-18} 92,${bodyTop}" fill="#e8dfc8" stroke="#8d7a4a" stroke-width="1.4" stroke-linejoin="round"/><rect x="26" y="${bodyTop + 4}" width="48" height="6" fill="#a89870"/><rect x="20" y="${bodyTop + 38}" width="60" height="8" fill="#e8dfc8" stroke="#8d7a4a" stroke-width="1"/>${columns}<rect x="42" y="82" width="16" height="14" fill="#5a3a1a" stroke="#3a1a08" stroke-width="0.8"/></svg>`;
  }
  if (type === 'tavern') {
    const bodyTop = 54;
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">${defs}<ellipse cx="50" cy="97" rx="42" ry="4" fill="url(#shadowGrad-${type})"/><rect x="12" y="${bodyTop}" width="76" height="${100 - bodyTop - 6}" fill="#d7a86e" stroke="#8d5a20" stroke-width="1.5"/><polygon points="6,${bodyTop} 50,${bodyTop-20} 94,${bodyTop}" fill="#8d3b2a" stroke="#3a1a08" stroke-width="1.4" stroke-linejoin="round"/><rect x="34" y="${bodyTop - 30}" width="4" height="12" fill="#3a1a08"/><rect x="36" y="${bodyTop - 30}" width="14" height="8" fill="#c9a84c" stroke="#7a5c10" stroke-width="0.6"/><rect x="28" y="66" width="12" height="16" fill="#ffe08a" stroke="#5a3a00" stroke-width="0.6" rx="1"/><rect x="60" y="66" width="12" height="16" fill="#ffe08a" stroke="#5a3a00" stroke-width="0.6" rx="1"/><rect x="44" y="80" width="12" height="14" fill="#5a3a1a" stroke="#3a1a08" stroke-width="0.6"/></svg>`;
  }
  const accents = {
    fishing: `<path d="M30 82 Q50 74 70 82 L70 90 L30 90 Z" fill="#4fc3f7" stroke="#01579b" stroke-width="0.8"/><path d="M50 68 Q52 72 50 76 Q48 72 50 68 Z" fill="#e53935"/>`,
    library: `<rect x="30" y="62" width="8" height="20" fill="#8d3b2a"/><rect x="40" y="60" width="8" height="22" fill="#1565c0"/><rect x="50" y="63" width="8" height="19" fill="#2e7d32"/><rect x="60" y="61" width="8" height="21" fill="#ffb300"/>`,
    theater: `<ellipse cx="50" cy="76" rx="22" ry="14" fill="#d7a86e" stroke="#8d5a20" stroke-width="1"/><path d="M32 76 Q50 62 68 76" stroke="#a8262a" stroke-width="0.8" fill="none"/>`,
    temple: `<rect x="42" y="60" width="16" height="30" fill="#e8dfc8" stroke="#8d7a4a" stroke-width="0.8"/><polygon points="42,60 50,42 58,60" fill="#c9a84c"/><circle cx="50" cy="70" r="3" fill="#ffd54f"/>`,
    stable: `<ellipse cx="38" cy="82" rx="10" ry="6" fill="#8d6e63"/><rect x="36" y="76" width="4" height="8" fill="#6d4c41"/><ellipse cx="62" cy="82" rx="10" ry="6" fill="#a1887f"/><rect x="60" y="76" width="4" height="8" fill="#7a5c3a"/>`,
    arena: `<ellipse cx="50" cy="78" rx="30" ry="12" fill="#e8dfc8" stroke="#8d7a4a" stroke-width="1"/><ellipse cx="50" cy="76" rx="24" ry="8" fill="#8d6e63"/>`,
    cathedral: `<path d="M50 42 L54 52 L60 50 L54 60 L60 66 L50 62 L40 66 L46 60 L40 50 L46 52 Z" fill="#c9a84c" stroke="#7a5c10" stroke-width="0.8"/>`,
    armory: `<rect x="30" y="66" width="8" height="14" fill="#607d8b"/><rect x="40" y="60" width="6" height="20" fill="#8d6e63"/><rect x="48" y="62" width="14" height="6" fill="#607d8b"/><polygon points="62,72 66,76 62,80 58,76" fill="#c62828"/>`,
    monument: `<rect x="42" y="46" width="16" height="48" fill="#e8dfc8" stroke="#8d7a4a" stroke-width="1"/><polygon points="38,46 50,26 62,46" fill="#c9a84c" stroke="#7a5c10" stroke-width="0.8"/><circle cx="50" cy="58" r="3" fill="#c9a84c"/>`,
    harbor: `<path d="M20 82 L80 82" stroke="#5d4037" stroke-width="3"/><path d="M36 82 L36 66 L64 66 L64 82" stroke="#8d6e63" stroke-width="2" fill="none"/><path d="M42 66 L50 56 L58 66" fill="#c62828" stroke="#5a1a1a" stroke-width="0.6"/>`,
    harbor2: `<path d="M16 84 L84 84" stroke="#5d4037" stroke-width="3"/><rect x="24" y="60" width="8" height="24" fill="#8d6e63"/><rect x="68" y="60" width="8" height="24" fill="#8d6e63"/><path d="M32 60 L50 46 L68 60" fill="#c62828" stroke="#5a1a1a" stroke-width="0.8"/>`,
    garrison: `<path d="M32 78 L36 68 L40 74 L44 66 L48 74 L52 66 L56 74 L60 68 L64 78 Z" fill="#c9a84c" stroke="#7a5c10" stroke-width="0.6"/><rect x="44" y="82" width="12" height="12" fill="#3a2a1a"/>`,
    shipyard: `<path d="M22 84 L28 70 L72 70 L78 84 Z" fill="#8d6e63" stroke="#3a1a08" stroke-width="0.8"/><rect x="46" y="54" width="8" height="16" fill="#5a3a1a"/><path d="M50 40 L50 56 M42 52 L58 52" stroke="#3a1a08" stroke-width="1"/>`
  };
  const colors = {
    lumber: '#795548', quarry: '#9e9e9e', market: '#ffe0b2', mine: '#6d4c41',
    blacksmith: '#6d4c41', bakery: '#f0c080', tavern: '#d7a86e',
    well: '#b0bec5', workshop: '#78909c', windmill: '#e8dfc8',
    fishing: '#a1887f', library: '#a1887f', theater: '#e8dfc8', temple: '#e8dfc8',
    stable: '#a1887f', barracks: '#8d6e63', watchtower: '#78909c', tower: '#78909c',
    wall: '#a8a8a8', shipyard: '#8d6e63', harbor: '#8d6e63', bank: '#e8dfc8',
    factory: '#546e7a', university: '#e8dfc8', arena: '#a1887f',
    fortress: '#7a6a9a', church: '#e8dfc8',
    cathedral: '#e8dfc8', armory: '#78909c', monument: '#e8dfc8',
    harbor2: '#8d6e63', garrison: '#6d4c41', gemMine: '#5a4a6a', buildersguild: '#ffb74d'
  };
  const baseColor = colors[type] || '#c9a84c';
  const bodyH = 22 + lvl * 2.4;
  const bodyTop = 100 - bodyH - 6;
  const roofH = 14;
  let roof = `<polygon points="6,${bodyTop} 50,${bodyTop-roofH} 94,${bodyTop}" fill="#8d3b2a" stroke="#3a1a08" stroke-width="1.2"/>`;
  if (type === 'factory' || type === 'university' || type === 'bank') roof = `<rect x="8" y="${bodyTop-4}" width="84" height="4" fill="#3a2a1a"/>`;
  let windows = `<rect x="24" y="${bodyTop + 6}" width="9" height="9" fill="#ffe08a" stroke="#5a3a00" stroke-width="0.5" rx="1"/>`;
  if (lvl >= 2) windows += `<rect x="67" y="${bodyTop + 6}" width="9" height="9" fill="#ffe08a" stroke="#5a3a00" stroke-width="0.5" rx="1"/>`;
  let extras = '';
  if (lvl >= 4) extras += `<circle cx="50" cy="${bodyTop - roofH - 4}" r="3" fill="#ffd54f"/>`;
  const accent = accents[type] || '';
  return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">${defs}<ellipse cx="50" cy="97" rx="44" ry="4" fill="url(#shadowGrad-${type})"/><rect x="10" y="${bodyTop}" width="80" height="${bodyH}" fill="${baseColor}" stroke="#3a2a1a" stroke-width="1.5" rx="1"/>${roof}${windows}${extras}${accent}<rect x="44" y="86" width="12" height="10" fill="#3a2a1a" stroke="#1a0a00" stroke-width="0.6"/></svg>`;
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
