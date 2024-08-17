import { NodeHoyoError } from '../../error'
import { ZZZRegion, ZZZRegionKeyType } from './zzz.interface'

/**
 * Get Server Region by UID
 *
 * @param uid number UID
 * @returns {string}
 */
export function getZzzRegion(uid: number): ZZZRegion {
  const server_region = Number(uid.toString().trim().slice(0, 2))
  let key: string

  switch (server_region) {
    case 10:
      key = 'USA'
      break
    case 15:
      key = 'EUROPE'
      break
    case 13:
      key = 'ASIA'
      break
    case 14:
      key = 'CHINA_TAIWAN'
      break
    default:
      throw new NodeHoyoError(`Given UID ${uid} is invalid !`)
  }

  return ZZZRegion[key as ZZZRegionKeyType]
}
