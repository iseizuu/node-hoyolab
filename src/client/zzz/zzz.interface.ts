import { IHoyolabOptions } from '../hoyolab'

export enum ZZZRegion {
  USA = 'prod_gf_jp',
  EUROPE = 'prod_gf_eu',
  ASIA = 'prod_gf_jp',
  CHINA_TAIWAN = 'prod_gf_cht',
}

export type ZZZRegionKeyType = keyof typeof ZZZRegion

export interface ZZZOptions extends IHoyolabOptions {
  uid?: number
  region?: ZZZRegion
}
