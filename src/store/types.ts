interface ItemBonus {
  points: number;
  itemsRequired: number;
}

interface ItemSpecs {
  points: number;
  bonus?: ItemBonus;
}

interface ItemsSpecsBase {
  [key: string]: ItemSpecs;
}

export const ItemsSpecs: ItemsSpecsBase  = {
  A: {
    points: 50,
    bonus: {
      points: 200,
      itemsRequired: 3,
    },
  },
  B: {
    points: 30,
    bonus: {
      points: 90,
      itemsRequired: 2,
    },
  },
  C: {
    points: 20,
  },
  D: {
    points: 15,
  },
};

export const ItemTypes = Object.keys(ItemsSpecs);

export interface GameItem {
  id: number;
  type: string;
}

export interface ItemSummary {
  type: string;
  quantity: number;
  bonus: number;
  points: number;
}

export interface AppState {
  gameItems: GameItem[];
  player: PlayerSummary;
}

export interface ReducerMethods {
  [key: string]: any;
}

export interface PlayerSummary {
  items: GameItem[];
  itemsSummary: Map<string, ItemSummary>;
  bonuses: number;
  total: number;
}

export interface ActionBase {
  type: string;
  payload?: any;
}
