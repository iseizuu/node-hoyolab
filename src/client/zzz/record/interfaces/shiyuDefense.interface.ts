export interface ZZZShyiuDefenseTime {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second: number
}

export interface ZZZFloorDetail {
  layerIndex: number
  rating: string
  layerId: number
  buffs: {
    title: string
    text: string
  }[]
  node_1: {
    avatars: {
      id: number
      level: number
      rarity: string
      elementType: number
      avatarProfession: number
      rank: number
    }[]
    buddy: {
      id: number
      rarity: string
      level: number
    }
    elementTypeList: number[]
    monsterInfo: {
      level: number
      list: {
        id: number
        name: string
        weakElementType: number
        iceWeakness: number
        fireWeakness: number
        elecWeakness: number
        etherWeakness: number
        physicsWeakness: number
      }[]
    }
  }
  node_2: {
    avatars: {
      id: number
      level: number
      rarity: string
      elementType: number
      avatarProfession: number
      rank: number
    }[]
    buddy: {
      id: number
      rarity: string
      level: number
    }
    elementTypeList: number[]
    monsterInfo: {
      level: number
      list: {
        id: number
        name: string
        weakElementType: number
        iceWeakness: number
        fireWeakness: number
        elecWeakness: number
        etherWeakness: number
        physicsWeakness: number
      }[]
    }
  }
  challengeTime: string
  zoneName: string
  floorChallengeTime: ZZZShyiuDefenseTime
  
}
export interface ZZZShiyuDefense {
  schedule_id: number
  begin_time: string
  end_time: string
  rating_list: {
    times: number
    rating: string
  }[]
  has_data: boolean
  all_floor_detail: ZZZFloorDetail[]
  fast_layer_time: number
  max_layer: number
  hadal_begin_time: ZZZShyiuDefenseTime
  hadal_end_time: ZZZShyiuDefenseTime
}
