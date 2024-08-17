import { Abyss, ShiyuDefense } from './record.enum';
import { NodeHoyoError } from '../../../error'
import { LanguageEnum } from '../../../language'
import { HTTPRequest } from '../../../request'
import {
  ZZZ_RECORD_CHARACTER_API, ZZZ_RECORD_NOTE_API, ZZZ_RECORD_INDEX_API, ZZZ_RECORD_SHIYU_DEFENSE, ZZZ_RECORD_ABYSS
} from '../../../routes'
import { ZZZCharacterFull, ZZZNote, ZZZRecord } from './interfaces'
import { ZZZShiyuDefense } from './interfaces/shiyuDefense.interface';
import { ZZZAbyss, ZZZAbyssType } from './interfaces/abyss.interface';

/**
 * HSRRecordModule class provides methods to interact with Honkai Star Rail record module endpoints.
 *
 * @class
 * @internal
 * @category Module
 */
export class ZZZRecordModule {
  /**
   * Creates an instance of HSRRecordModule.
   *
   * @param request The HTTPRequest object used for making API requests.
   * @param lang The language enum value.
   * @param region The region string or null if not provided.
   * @param uid The UID number or null if not provided.
   */
  constructor(
    private request: HTTPRequest,
    private lang: LanguageEnum,
    private region: string | null,
    private uid: number | null,
  ) { }

  /**
   * Retrieves the records associated with the provided region and UID.
   *
   * @returns {Promise<ZZZRecord>} A Promise that resolves to the ZZZ record object.
   * @throws {NodeHoyoError} if the region or UID parameters are missing or failed to be filled.
   * @throws {NodeHoyoError} if failed to retrieve data, please double-check the provided UID.
   */
  async records(): Promise<ZZZRecord> {
    if (!this.region || !this.uid) {
      throw new NodeHoyoError('UID parameter is missing or failed to be filled')
    }

    this.request
      .setQueryParams({
        server: this.region,
        role_id: this.uid,
        lang: this.lang,
      })
      .setDs(true)

    const {
      response: res,
      body,
      params,
      headers,
    } = await this.request.send(ZZZ_RECORD_INDEX_API)

    if (res.retcode !== 0) {
      throw new NodeHoyoError(
        res.message ??
        'Failed to retrieve data, please double-check the provided UID.',
        res.retcode,
        {
          response: res,
          request: {
            body,
            headers,
            params,
          },
        },
      )
    }
    return res.data as ZZZRecord
  }

  async characters(): Promise<ZZZCharacterFull[]> {
    if (!this.region || !this.uid) {
      throw new NodeHoyoError('UID parameter is missing or failed to be filled')
    }

    this.request
      .setQueryParams({
        server: this.region,
        role_id: this.uid,
        lang: this.lang,
      })
      .setDs(true)
    const {
      response: res,
      body,
      params,
      headers,
    } = await this.request.send(ZZZ_RECORD_CHARACTER_API)

    if (res.retcode !== 0) {
      throw new NodeHoyoError(
        res.message ??
        'Failed to retrieve data, please double-check the provided UID.',
        res.retcode,
        {
          response: res,
          request: {
            body,
            headers,
            params,
          },
        },
      )
    }

    const data = res.data as any
    return data.avatar_list as ZZZCharacterFull[]
  }

  async note(): Promise<ZZZNote> {
    if (!this.region || !this.uid) {
      throw new NodeHoyoError('UID parameter is missing or failed to be filled')
    }

    this.request
      .setQueryParams({
        server: this.region,
        role_id: this.uid,
        lang: this.lang,
      })
      .setDs(true)

    const {
      response: res,
      body,
      params,
      headers,
    } = await this.request.send(ZZZ_RECORD_NOTE_API)

    if (res.retcode !== 0) {
      throw new NodeHoyoError(
        res.message ??
        'Failed to retrieve data, please double-check the provided UID.',
        res.retcode,
        {
          response: res,
          request: {
            body,
            headers,
            params,
          },
        },
      )
    }

    return res.data as ZZZNote
  }

  async shyiyuDefense(
    scheduleType: ShiyuDefense = ShiyuDefense.CURRENT,
  ): Promise<ZZZShiyuDefense> {
    if (!this.region || !this.uid) {
      throw new NodeHoyoError('UID parameter is missing or failed to be filled')
    }

    if (
      Object.values(ShiyuDefense).includes(scheduleType) === false
    ) {
      throw new NodeHoyoError('The given scheduleType parameter is invalid !')
    }

    this.request
      .setQueryParams({
        server: this.region,
        role_id: this.uid,
        schedule_type: scheduleType,
        lang: this.lang,
        need_all: 'true',
      })
      .setDs()

    const {
      response: res,
      body,
      params,
      headers,
    } = await this.request.send(ZZZ_RECORD_SHIYU_DEFENSE)

    if (res.retcode !== 0) {
      throw new NodeHoyoError(
        res.message ??
        'Failed to retrieve data, please double-check the provided UID.',
        res.retcode,
        {
          response: res,
          request: {
            body,
            headers,
            params,
          },
        },
      )
    }

    return res.data as ZZZShiyuDefense
  }

/**
 * Retrieves information about the player's performance in the specified abyss type.
 *
 * @param {ZZZAbyssType} abyssType - The type of abyss to retrieve information for. Defaults to 'WitheringGarden'.
 * @return {Promise<ZZZAbyss>} A Promise that resolves with an object containing the player's abyss data.
 * @throws {NodeHoyoError} if UID parameter is missing or failed to be filled, or if the given abyss type parameter is invalid.
 * @throws {NodeHoyoError} if failed to retrieve data, please double-check the provided UID.
 */
  async abyss(abyssType: ZZZAbyssType = 'WitheringGarden'): Promise<ZZZAbyss> {
    if (!this.region || !this.uid) {
      throw new NodeHoyoError('UID parameter is missing or failed to be filled')
    }
    if (
      Object.values(Abyss).includes(abyssType) === false
    ) {
      throw new NodeHoyoError('The given abyss type parameter is invalid !')
    }

    this.request
      .setQueryParams({
        server: this.region,
        role_id: this.uid,
        type: Abyss[abyssType],
        lang: this.lang,
      })
      .setDs()

    const {
      response: res,
      body,
      params,
      headers,
    } = await this.request.send(ZZZ_RECORD_ABYSS)

    if (res.retcode !== 0) {
      throw new NodeHoyoError(
        res.message ??
        'Failed to retrieve data, please double-check the provided UID.',
        res.retcode,
        {
          response: res,
          request: {
            body,
            headers,
            params,
          },
        },
      )
    }

    return res.data as ZZZAbyss
  }
}

