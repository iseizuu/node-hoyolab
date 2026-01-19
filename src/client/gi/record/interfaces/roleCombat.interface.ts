import { IGenshinDateTime } from './common.interface'

/**
 * Represents an avatar in role combat.
 */
export interface IGenshinRoleCombatAvatar {
  /**
   * The avatar ID.
   */
  avatar_id: number
  /**
   * The avatar type.
   */
  avatar_type: number
  /**
   * The name of the avatar.
   */
  name: string
  /**
   * The element of the avatar.
   */
  element: string
  /**
   * The image URL of the avatar.
   */
  image: string
  /**
   * The level of the avatar.
   */
  level: number
  /**
   * The rarity of the avatar.
   */
  rarity: number
}

/**
 * Represents a choice card in role combat.
 */
export interface IGenshinRoleCombatChoiceCard {
  /**
   * The ID of the choice card.
   */
  id: number
  /**
   * The name of the choice card.
   */
  name: string
  /**
   * The icon URL of the choice card.
   */
  icon: string
  /**
   * The description of the choice card.
   */
  desc: string
  /**
   * Whether the card is enhancer.
   */
  is_enhancer: boolean
}

/**
 * Represents a buff in role combat.
 */
export interface IGenshinRoleCombatBuff {
  /**
   * The name of the buff.
   */
  name: string
  /**
   * The icon URL of the buff.
   */
  icon: string
  /**
   * The description of the buff.
   */
  desc: string
  /**
   * Whether the buff is enhancer.
   */
  is_enhancer: boolean
}

/**
 * Represents an enemy in role combat.
 */
export interface IGenshinRoleCombatEnemy {
  /**
   * The name of the enemy.
   */
  name: string
  /**
   * The icon URL of the enemy.
   */
  icon: string
  /**
   * The level of the enemy.
   */
  level: number
}

/**
 * Represents a splendour buff in role combat.
 */
export interface IGenshinRoleCombatSplendourBuff {
  /**
   * The ID of the splendour buff.
   */
  id: number
  /**
   * The name of the splendour buff.
   */
  name: string
  /**
   * The icon URL of the splendour buff.
   */
  icon: string
  /**
   * The description of the splendour buff.
   */
  desc: string
  /**
   * The summary of the splendour buff.
   */
  summary: string
}

/**
 * Represents a round data in role combat.
 */
export interface IGenshinRoleCombatRoundData {
  /**
   * The avatars used in the round.
   */
  avatars: IGenshinRoleCombatAvatar[]
  /**
   * The choice cards used in the round.
   */
  choice_cards: IGenshinRoleCombatChoiceCard[]
  /**
   * The buffs active in the round.
   */
  buffs: IGenshinRoleCombatBuff[]
  /**
   * Whether a medal was obtained in this round.
   */
  is_get_medal: boolean
  /**
   * The round ID.
   */
  round_id: number
  /**
   * The finish time as a Unix timestamp string.
   */
  finish_time: string
  /**
   * The finish date and time object.
   */
  finish_date_time: IGenshinDateTime
  /**
   * The enemies in the round.
   */
  enemies: IGenshinRoleCombatEnemy[]
  /**
   * The splendour buff in the round.
   */
  splendour_buff: IGenshinRoleCombatSplendourBuff | Record<string, never>
  /**
   * Whether this is a tarot round.
   */
  is_tarot: boolean
  /**
   * The tarot serial number (-1 if not a tarot round).
   */
  tarot_serial_no: number
}

/**
 * Represents detailed statistics for role combat.
 */
export interface IGenshinRoleCombatDetailStat {
  /**
   * The difficulty ID.
   */
  difficulty_id: number
  /**
   * The maximum round ID reached.
   */
  max_round_id: number
  /**
   * The heraldry level.
   */
  heraldry: number
  /**
   * Array indicating which rounds got medals (1 = got medal, 0 = no medal).
   */
  get_medal_round_list: number[]
  /**
   * The total number of medals obtained.
   */
  medal_num: number
  /**
   * The number of coins obtained.
   */
  coin_num: number
  /**
   * The number of avatar bonuses.
   */
  avatar_bonus_num: number
  /**
   * The rental count.
   */
  rent_cnt: number
  /**
   * The number of tarot cards finished.
   */
  tarot_finished_cnt: number
}

/**
 * Represents a statistic avatar in fight statistics.
 */
export interface IGenshinRoleCombatStatAvatar {
  /**
   * The avatar ID.
   */
  avatar_id: number
  /**
   * The avatar icon URL.
   */
  avatar_icon: string
  /**
   * The statistic value as a string.
   */
  value: string
  /**
   * The rarity of the avatar.
   */
  rarity: number
}

/**
 * Represents fight statistics for role combat.
 */
export interface IGenshinRoleCombatFightStatistic {
  /**
   * The avatar with the most defeats (null if no data).
   */
  max_defeat_avatar: IGenshinRoleCombatStatAvatar | null
  /**
   * The avatar with the highest damage (null if no data).
   */
  max_damage_avatar: IGenshinRoleCombatStatAvatar | null
  /**
   * The avatar that took the most damage (null if no data).
   */
  max_take_damage_avatar: IGenshinRoleCombatStatAvatar | null
  /**
   * The total coins consumed (null if no data).
   */
  total_coin_consumed: IGenshinRoleCombatStatAvatar | null
  /**
   * The list of avatars with the shortest completion times.
   */
  shortest_avatar_list: IGenshinRoleCombatStatAvatar[]
  /**
   * The total time used in seconds.
   */
  total_use_time: number
  /**
   * Whether to show battle statistics.
   */
  is_show_battle_stats: boolean
}

/**
 * Represents detailed role combat information.
 */
export interface IGenshinRoleCombatDetail {
  /**
   * The rounds data.
   */
  rounds_data: IGenshinRoleCombatRoundData[]
  /**
   * The detailed statistics.
   */
  detail_stat: IGenshinRoleCombatDetailStat
  /**
   * The lineup link.
   */
  lineup_link: string
  /**
   * The backup avatars available.
   */
  backup_avatars: IGenshinRoleCombatAvatar[]
  /**
   * The fight statistics.
   */
  fight_statisic: IGenshinRoleCombatFightStatistic
}

/**
 * Represents role combat statistics summary.
 */
export interface IGenshinRoleCombatStat {
  /**
   * The difficulty ID.
   */
  difficulty_id: number
  /**
   * The maximum round ID reached.
   */
  max_round_id: number
  /**
   * The heraldry level.
   */
  heraldry: number
  /**
   * Array indicating which rounds got medals (1 = got medal, 0 = no medal).
   */
  get_medal_round_list: number[]
  /**
   * The total number of medals obtained.
   */
  medal_num: number
  /**
   * The number of coins obtained.
   */
  coin_num: number
  /**
   * The number of avatar bonuses.
   */
  avatar_bonus_num: number
  /**
   * The rental count.
   */
  rent_cnt: number
  /**
   * The number of tarot cards finished.
   */
  tarot_finished_cnt: number
}

/**
 * Represents a role combat schedule.
 */
export interface IGenshinRoleCombatSchedule {
  /**
   * The start time as a Unix timestamp string.
   */
  start_time: string
  /**
   * The end time as a Unix timestamp string.
   */
  end_time: string
  /**
   * The schedule type (1 = current, 2 = previous).
   */
  schedule_type: number
  /**
   * The schedule ID.
   */
  schedule_id: number
  /**
   * The start date and time object.
   */
  start_date_time: IGenshinDateTime
  /**
   * The end date and time object.
   */
  end_date_time: IGenshinDateTime
}

/**
 * Represents a role combat period data.
 */
export interface IGenshinRoleCombatData {
  /**
   * The detailed role combat information (null if details not requested).
   */
  detail: IGenshinRoleCombatDetail | null
  /**
   * The statistics summary.
   */
  stat: IGenshinRoleCombatStat
  /**
   * The schedule information.
   */
  schedule: IGenshinRoleCombatSchedule
  /**
   * Whether the user has data for this period.
   */
  has_data: boolean
  /**
   * Whether the user has detailed data for this period.
   */
  has_detail_data: boolean
}

/**
 * Represents links related to role combat.
 */
export interface IGenshinRoleCombatLinks {
  /**
   * The lineup link for mobile.
   */
  lineup_link: string
  /**
   * The lineup link for PC.
   */
  lineup_link_pc: string
  /**
   * The strategy link.
   */
  strategy_link: string
  /**
   * The lineup publish link for mobile.
   */
  lineup_publish_link: string
  /**
   * The lineup publish link for PC.
   */
  lineup_publish_link_pc: string
}

/**
 * Represents a tarot card in the collection.
 */
export interface IGenshinRoleCombatTarotCard {
  /**
   * The icon URL of the tarot card.
   */
  icon: string
  /**
   * The name of the tarot card.
   */
  name: string
  /**
   * Whether the tarot card is unlocked.
   */
  is_unlock: boolean
  /**
   * The unlock number/count.
   */
  unlock_num: number
}

/**
 * Represents the tarot card collection state.
 */
export interface IGenshinRoleCombatTarotCardState {
  /**
   * The total number of tarot cards.
   */
  total_num: number
  /**
   * The current number of unlocked tarot cards.
   */
  curr_num: number
  /**
   * The list of tarot cards.
   */
  list: IGenshinRoleCombatTarotCard[]
}

/**
 * Represents the role combat (Imaginarium Theater) data for Genshin Impact.
 */
export interface IGenshinRoleCombat {
  /**
   * The array of role combat period data.
   */
  data: IGenshinRoleCombatData[]
  /**
   * Whether the role combat is unlocked.
   */
  is_unlock: boolean
  /**
   * Links related to the role combat.
   */
  links: IGenshinRoleCombatLinks
  /**
   * The tarot card collection state.
   */
  tarot_card_state: IGenshinRoleCombatTarotCardState
}
