import { ZZZCharacterBase } from './characters.interface'

export interface ZZZStats {
  active_days: number
  avatar_num: number
  world_level_name: string
  cur_period_zone_layer_count: number
  buddy_num: number
  commemorative_coins_list: {
    num: number
    name: string
    sort: number
  }[]
  achievement_count: number
}

export interface ZZZBangboo {
  id: number
  name: string
  rarity: string
  level: number
  star: number
}

export interface ZZZMewmewNotes {
  name: string
  icon: string
  num: number
  total: number
  isLock: boolean
  id: number
}

export interface ZZZRecord {
  stats: ZZZStats
  avatar_list: ZZZCharacterBase[]
  cur_head_icon_url: string
  buddy_list: ZZZBangboo[]
  cat_notes_list: ZZZMewmewNotes[]
  award_state: string
}
