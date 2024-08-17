export interface ZZZNote {
  energy: {
    progress: {
      max: number
      current: number
    }
    restore: number
    day_type: number
    hour: number
    minute: number
  }
  vitality: {
    max: number
    current: number
  }
  vhs_sale: { sale_state: string }
  card_sign: string
  bounty_commission: {
    num: number
    total: number
  }
  surveyPoints: {
    num: number;
    total: number;
    isMaxLevel: boolean;
  }
  abyss_refresh: number
}