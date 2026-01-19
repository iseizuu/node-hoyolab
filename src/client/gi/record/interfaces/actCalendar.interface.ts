import { IGenshinDateTime } from './common.interface'

/**
 * Represents an avatar in a card pool.
 */
export interface IGenshinActCalendarAvatar {
  /**
   * The ID of the avatar.
   */
  item_id: number
  /**
   * The name of the avatar.
   */
  name: string
  /**
   * The icon URL of the avatar.
   */
  icon: string
  /**
   * The wiki URL of the avatar.
   */
  wiki_url: string
  /**
   * Whether the avatar is up (featured).
   */
  is_up: boolean
  /**
   * The order of the avatar.
   */
  order_value: number
}

/**
 * Represents a weapon in a card pool.
 */
export interface IGenshinActCalendarWeapon {
  /**
   * The ID of the weapon.
   */
  item_id: number
  /**
   * The name of the weapon.
   */
  name: string
  /**
   * The icon URL of the weapon.
   */
  icon: string
  /**
   * The wiki URL of the weapon.
   */
  wiki_url: string
  /**
   * Whether the weapon is up (featured).
   */
  is_up: boolean
  /**
   * The order of the weapon.
   */
  order_value: number
}

/**
 * Represents a card pool (banner) in the game.
 */
export interface IGenshinActCalendarCardPool {
  /**
   * The ID of the pool.
   */
  pool_id: number
  /**
   * The version name of the pool.
   */
  version_name: string
  /**
   * The name of the pool.
   */
  pool_name: string
  /**
   * The type of the pool.
   */
  pool_type: number
  /**
   * The avatars featured in the pool.
   */
  avatars: IGenshinActCalendarAvatar[]
  /**
   * The weapons featured in the pool.
   */
  weapon: IGenshinActCalendarWeapon[]
  /**
   * The start timestamp of the pool.
   */
  start_timestamp: string
  /**
   * The start time of the pool.
   */
  start_time: IGenshinDateTime
  /**
   * The end timestamp of the pool.
   */
  end_timestamp: string
  /**
   * The end time of the pool.
   */
  end_time: IGenshinDateTime
  /**
   * The URL to jump to for more information.
   */
  jump_url: string
  /**
   * The status of the pool.
   */
  pool_status: number
  /**
   * The countdown in seconds until the pool ends.
   */
  countdown_seconds: number
}

/**
 * Represents a reward item in an activity.
 */
export interface IGenshinActCalendarReward {
  /**
   * The ID of the item.
   */
  item_id: number
  /**
   * The name of the item.
   */
  name: string
  /**
   * The icon URL of the item.
   */
  icon: string
  /**
   * The wiki URL of the item.
   */
  wiki_url: string
  /**
   * The number of items.
   */
  num: number
  /**
   * The rarity of the item.
   */
  rarity: number
  /**
   * The homepage icon URL of the item.
   */
  homepage_icon: string
}

/**
 * Represents sign-in details for an activity.
 */
export interface IGenshinActCalendarSignInDetail {
  /**
   * The ID of the activity.
   */
  act_id: string
  /**
   * The URL of the activity.
   */
  act_url: string
  /**
   * Whether the user is signed in.
   */
  is_sign_in: boolean
}

/**
 * Represents explore details for an activity.
 */
export interface IGenshinActCalendarExploreDetail {
  /**
   * The ID of the activity.
   */
  act_id: number
  /**
   * The ID of the map.
   */
  map_id: number
  /**
   * The exploration percentage.
   */
  explore_percentage: number
}

/**
 * Represents hard challenge details for an activity.
 */
export interface IGenshinActCalendarHardChallengeDetail {
  /**
   * The schedule ID.
   */
  schedule_id: number
  /**
   * The total number of stars obtained.
   */
  total_star: number
  /**
   * The maximum total stars possible.
   */
  max_total_star: number
  /**
   * Whether the challenge is finished.
   */
  is_finished: boolean
}

/**
 * Represents double reward details for an activity.
 */
export interface IGenshinActCalendarDoubleDetail {
  /**
   * The ID of the activity.
   */
  act_id: number
  /**
   * The remaining count of double rewards.
   */
  remain_count: number
}

/**
 * Represents tower details for an activity.
 */
export interface IGenshinActCalendarTowerDetail {
  /**
   * The schedule ID.
   */
  schedule_id: number
  /**
   * The total number of stars obtained.
   */
  total_star: number
  /**
   * The maximum total stars possible.
   */
  max_total_star: number
  /**
   * Whether the tower is unlocked.
   */
  is_unlock: boolean
  /**
   * Whether the tower is finished.
   */
  is_finished: boolean
}

/**
 * Represents role combat details for an activity.
 */
export interface IGenshinActCalendarRoleCombatDetail {
  /**
   * Whether the user has data.
   */
  has_data: boolean
  /**
   * Whether the user has detail data.
   */
  has_detail_data: boolean
  /**
   * The URL to the data.
   */
  data_url: string
  /**
   * The maximum rounds achieved.
   */
  max_round_id: number
  /**
   * The user's level.
   */
  heraldry: number
}

/**
 * Represents an activity in the game.
 */
export interface IGenshinActCalendarAct {
  /**
   * The ID of the activity.
   */
  id: number
  /**
   * The name of the activity.
   */
  name: string
  /**
   * The type of the activity.
   */
  type: string
  /**
   * The start timestamp of the activity.
   */
  start_timestamp: string
  /**
   * The start time of the activity (null if not started).
   */
  start_time: IGenshinDateTime | null
  /**
   * The end timestamp of the activity.
   */
  end_timestamp: string
  /**
   * The end time of the activity (null if not started).
   */
  end_time: IGenshinDateTime | null
  /**
   * The description of the activity.
   */
  desc: string
  /**
   * The strategy information for the activity.
   */
  strategy: string
  /**
   * The countdown in seconds until the activity ends.
   */
  countdown_seconds: number
  /**
   * The status of the activity.
   */
  status: number
  /**
   * The list of rewards for the activity.
   */
  reward_list: IGenshinActCalendarReward[]
  /**
   * Whether the activity is finished.
   */
  is_finished: boolean
  /**
   * Sign-in details for the activity (optional).
   */
  sign_in_detail?: IGenshinActCalendarSignInDetail
  /**
   * Explore details for the activity (optional).
   */
  explore_detail?: IGenshinActCalendarExploreDetail
  /**
   * Hard challenge details for the activity (optional).
   */
  hard_challenge_detail?: IGenshinActCalendarHardChallengeDetail
  /**
   * Double reward details for the activity (optional).
   */
  double_detail?: IGenshinActCalendarDoubleDetail
  /**
   * Tower details for the activity (optional).
   */
  tower_detail?: IGenshinActCalendarTowerDetail
  /**
   * Role combat details for the activity (optional).
   */
  role_combat_detail?: IGenshinActCalendarRoleCombatDetail
}

/**
 * Represents the act calendar data for Genshin Impact.
 */
export interface IGenshinActCalendar {
  /**
   * The list of avatar card pools (character banners).
   */
  avatar_card_pool_list: IGenshinActCalendarCardPool[]
  /**
   * The list of weapon card pools (weapon banners).
   */
  weapon_card_pool_list: IGenshinActCalendarCardPool[]
  /**
   * The list of mixed card pools.
   */
  mixed_card_pool_list: IGenshinActCalendarCardPool[]
  /**
   * The list of selected avatar card pools.
   */
  selected_avatar_card_pool_list: IGenshinActCalendarCardPool[]
  /**
   * The list of selected mixed card pools.
   */
  selected_mixed_card_pool_list: IGenshinActCalendarCardPool[]
  /**
   * The list of activities.
   */
  act_list: IGenshinActCalendarAct[]
  /**
   * The list of fixed activities (permanent content).
   */
  fixed_act_list: IGenshinActCalendarAct[]
  /**
   * The list of selected activities.
   */
  selected_act_list: IGenshinActCalendarAct[]
}
