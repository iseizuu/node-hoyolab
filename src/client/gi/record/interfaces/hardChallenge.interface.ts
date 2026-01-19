import { IGenshinDateTime } from './common.interface'

/**
 * Represents a schedule for a hard challenge event.
 */
export interface IGenshinHardChallengeSchedule {
  /**
   * The schedule ID.
   */
  schedule_id: string
  /**
   * The start time as a Unix timestamp string.
   */
  start_time: string
  /**
   * The end time as a Unix timestamp string.
   */
  end_time: string
  /**
   * The start date and time object.
   */
  start_date_time: IGenshinDateTime
  /**
   * The end date and time object.
   */
  end_date_time: IGenshinDateTime
  /**
   * Whether the schedule is valid.
   */
  is_valid: boolean
  /**
   * The name of the challenge event.
   */
  name: string
}

/**
 * Represents a monster in the hard challenge.
 */
export interface IGenshinHardChallengeMonster {
  /**
   * The name of the monster.
   */
  name: string
  /**
   * The level of the monster.
   */
  level: number
  /**
   * The icon URL of the monster.
   */
  icon: string
  /**
   * The description array of the monster's mechanics.
   */
  desc: string[]
  /**
   * The tags associated with the monster.
   */
  tags: string[]
  /**
   * The monster ID.
   */
  monster_id: number
}

/**
 * Represents a best avatar in a challenge.
 */
export interface IGenshinHardChallengeBestAvatar {
  /**
   * The avatar ID.
   */
  avatar_id: number
  /**
   * The side icon URL of the avatar.
   */
  side_icon: string
  /**
   * The DPS (damage per second) as a string.
   */
  dps: string
  /**
   * The type of the avatar (1 = highest damage dealt, 2 = most damage taken).
   */
  type: number
}

/**
 * Represents a team member avatar in a challenge.
 */
export interface IGenshinHardChallengeTeamAvatar {
  /**
   * The avatar ID.
   */
  avatar_id: number
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
  /**
   * The constellation/refinement rank of the avatar.
   */
  rank: number
}

/**
 * Represents a challenge attempt.
 */
export interface IGenshinHardChallengeAttempt {
  /**
   * The name of the challenge.
   */
  name: string
  /**
   * The time taken in seconds.
   */
  second: number
  /**
   * The teams used in the challenge (populated when needDetail is true).
   */
  teams: IGenshinHardChallengeTeamAvatar[]
  /**
   * The best avatars in the challenge.
   */
  best_avatar: IGenshinHardChallengeBestAvatar[]
  /**
   * The monster details.
   */
  monster: IGenshinHardChallengeMonster
}

/**
 * Represents the best performance in a challenge.
 */
export interface IGenshinHardChallengeBest {
  /**
   * The difficulty level.
   */
  difficulty: number
  /**
   * The time taken in seconds.
   */
  second: number
  /**
   * The icon URL for the medal/achievement.
   */
  icon: string
}

/**
 * Represents challenge data (single player or multiplayer).
 */
export interface IGenshinHardChallengeData {
  /**
   * The best performance (null if no data).
   */
  best: IGenshinHardChallengeBest | null
  /**
   * The array of challenge attempts.
   */
  challenge: IGenshinHardChallengeAttempt[]
  /**
   * Whether the user has data.
   */
  has_data: boolean
}

/**
 * Represents a hard challenge event with schedule and data.
 */
export interface IGenshinHardChallengeEvent {
  /**
   * The schedule information for the challenge.
   */
  schedule: IGenshinHardChallengeSchedule
  /**
   * The single player challenge data.
   */
  single: IGenshinHardChallengeData
  /**
   * The multiplayer challenge data.
   */
  mp: IGenshinHardChallengeData
  /**
   * Additional bling/decoration data.
   */
  blings: any[]
}

/**
 * Represents links related to the hard challenge.
 */
export interface IGenshinHardChallengeLinks {
  /**
   * The URL to the lineup link.
   */
  lineup_link: string
  /**
   * The URL to the play link.
   */
  play_link: string
}

/**
 * Represents the hard challenge data for Genshin Impact.
 */
export interface IGenshinHardChallenge {
  /**
   * The array of challenge events.
   */
  data: IGenshinHardChallengeEvent[]
  /**
   * Whether the hard challenge is unlocked.
   */
  is_unlock: boolean
  /**
   * Links related to the hard challenge.
   */
  links: IGenshinHardChallengeLinks
}
