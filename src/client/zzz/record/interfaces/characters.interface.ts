export interface ZZZEquipment {
  id: number
  level: number
  rarity: number
  name: string
  icon: string
  properties: {
    property_name: string
    property_id: number
    base: string
  }[]
  main_properties: {
    property_name: string
    property_id: number
    base: string
  }[],
  equip_suit: {
    suit_id: number
    name: string
    own: number
    desc1: string
    desc2: string
  },
  equipment_type: number
}

export interface ZZZWeapon {
  id: number
  level: number
  star: number
  name: string
  icon: string
  rarity: string
  properties: {
    property_name: string
    property_id: number
    base: string
  }[]
  main_properties: {
    property_name: string
    property_id: number
    base: string
  }[]
  talent_title: string
  talent_content: string
  profession: number
}

export interface ZZZProperties {
  property_name: string
  property_id: number
  base: string
  add: string
  final: string
}

export interface ZZZRank {
  id: number
  pos: number
  name: string
  desc: string
  is_unlocked: boolean
}

export interface ZZZCharacterBase {
  id: number
  level: number
  name_mi18n: string
  full_name_mi18n: string
  element_type: number
  camp_name_mi18n: string
  avatar_profession: number
  rarity: string
  group_icon_path: string
  hollow_icon_path: string
  rank: number
}
export interface ZZZSkills {
  level: number
  skill_type: number
  items: {
    title: string
    text: string
  }[]
}

export interface ZZZAvatar {
  avatar: string
  avatarFull: string
}

export interface ZZZCharacterFull extends ZZZCharacterBase {
  image: string
  equip: ZZZEquipment[] | null
  weapon: ZZZWeapon | null
  properties: ZZZProperties[]
  ranks: ZZZRank[]
}
