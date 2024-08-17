export interface ZZZHollowZero {
  abyss_level: {
    cur_level: number
    max_level: number
    icon: string
  }
  abyss_point: {
    cur_point: number
    max_point: number
  }
  abyss_duty: {
    cur_duty: number
    max_duty: number
  }
  abyss_talent: {
    cur_talent: number
    max_talent: number
  }
  refresh_time: number
  abyss_collect: {
    type: number
    cur_collect: number
    max_collect: number
  }[]
  abyss_nest: {
    is_nest: boolean
  }
  abyss_throne: {
    is_throne: boolean
    max_damage?: string
  }
  unlock: boolean
}
