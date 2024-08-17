export type ZZZAbyssType = "WitheringGarden" | "InfernoReap" | "TopInfernoReap";

// Base interface for shared properties
interface BaseZZZAbyssDetails {
  avatar_list: {
    id: number;
    level: number;
    element_type: number;
    avatar_profession: number;
    rarity: string;
    rank: number;
  }[];
  buddy_list: {
    id: number;
    rarity: string;
    level: number;
  }[];
  buddy_collect_list: {
    id: number;
    icon: string;
  }[];
  time: number;
  collect: {
    group_name: string;
    group: {
      sort: number;
      rating: string;
      item_list: {
        name: string;
        icon: string;
        extra_type: number;
        sort: number;
      }[];
    }[];
    total: number;
  }[];
  erosion_list?: {
    id: number;
    desc: string;
    type: number;
    name: string;
  }[];
  quest_name: string;
  challenge_time: {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
  };
}

// Extending for ZZZWitheringDetails
export interface ZZZWitheringDetails extends BaseZZZAbyssDetails {
  pressure_total: number;
  coin_total: string;
}

// Extending for ZZZInfernoReap
export interface ZZZInfernoReap extends BaseZZZAbyssDetails {
  max_damage: string;
  damage: string;
}


/**
 * Interface for ZZZ Abyss.
 */
export interface ZZZAbyss {
  /**
   * The data for the Withering Garden
   */
  abyss_nest: ZZZWitheringDetails[];
  /**
   * The data for the Inferno Reap
   */
  abyss_throne: ZZZInfernoReap[];
  /**
   * The top result data from the Inferno Reap
   */
  abyss_throne_max: ZZZInfernoReap | null;
}
