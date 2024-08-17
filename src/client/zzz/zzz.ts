import { Cookie, ICookie } from '../../cookie'
import { Language, LanguageEnum } from '../../language'
import { DailyModule } from '../../module/daily'
import { RedeemModule } from '../../module/redeem'
import { HTTPRequest } from '../../request'
import { ZZZOptions } from './zzz.interface'
import { DEFAULT_REFERER } from '../../routes'
import { getZzzRegion } from './zzz.helper'
import { GamesEnum, Hoyolab, IGame } from '../hoyolab'
import { ZZZRecordModule } from './record'

/**
 * Class representing the Zenless Zone Zero game.
 *
 * @public
 * @class
 * @category Main
 */
export class ZenlessZoneZero {
  /**
   * The Daily module for the Zenless Zone Zero game.
   *
   */
  readonly daily: DailyModule

  /**
   * The Redeem module for the Zenless Zone Zero game.
   *
   */
  readonly redeem: RedeemModule

  /**
   * The Record module for the Zenless Zone Zero game.
   *
   * This module provides methods to interact with the Record module endpoints.
   *
   */
  readonly record: ZZZRecordModule

  /**
   * The cookie used for authentication.
   *
   */
  readonly cookie: ICookie

  /**
   * The request object used to make HTTP requests.
   *
   */
  private request: HTTPRequest

  /**
   * HoyYolab account object
   *
   */
  private _account: IGame | null = null

  /**
   * The UID of the Zenless Zone Zero account.
   *
   */
  readonly uid: number | null

  /**
   * The region of the Zenless Zone Zero account.
   *
   */
  readonly region: string | null

  /**
   * The language of the Zenless Zone Zero account.
   *
   */
  private lang: LanguageEnum

  /**
   * Create a new instance of ZenlessZoneZero.
   *
   * @constructor
   * @param {ZzzOptions} options - The options for the ZenlessZoneZero instance.
   */
  constructor(options: ZZZOptions) {
    const cookie: ICookie =
      typeof options.cookie === 'string'
        ? Cookie.parseCookieString(options.cookie)
        : options.cookie

    this.cookie = cookie

    if (!options.lang) {
      options.lang = Language.parseLang(cookie.mi18nLang)
    }

    // Parse language to prevent language error
    options.lang = Language.parseLang(options.lang)

    this.request = new HTTPRequest(Cookie.parseCookie(this.cookie))
    this.request.setReferer(DEFAULT_REFERER)
    this.request.setLang(options.lang)

    this.uid = options.uid ?? null
    this.region = this.uid !== null ? getZzzRegion(this.uid) : null
    this.lang = options.lang

    this.daily = new DailyModule(
      this.request,
      this.lang,
      GamesEnum.ZENLESS_ZONE_ZERO,
      this.region,
    )
    this.redeem = new RedeemModule(
      this.request,
      this.lang,
      GamesEnum.ZENLESS_ZONE_ZERO,
      this.region,
      this.uid,
    )
    this.record = new ZZZRecordModule(
      this.request,
      this.lang,
      this.region,
      this.uid,
    )
  }

  /**
   * Create a new instance of ZenlessZoneZero using a Hoyolab account.
   * If `uid` is not provided in the `options`, the account with the highest level will be used.
   *
   * @param {ZzzOptions} options - The options for the ZenlessZoneZero instance.
   * @returns {Promise<ZenlessZoneZero>} - A promise that resolves with a new ZenlessZoneZero instance.
   *
   * @remarks
   * If an object is instantiated from this method but options.cookie.cookieTokenV2 is not set,
   * it will throw an error. This method will access an Endpoint that contains a list of game accounts,
   * which requires the cookieTokenV2 option.
   *
   * @remarks
   * Because CookieTokenV2 has a short expiration time and cannot be refreshed so far.
   * It is evident that every few days, when logging in, it always requests authentication first.
   * Therefore, this method that uses CookieTokenV2 is not suitable if filled statically.
   */
  static async create(options: ZZZOptions): Promise<ZenlessZoneZero> {
    let game: IGame | null = null
    if (typeof options.uid === 'undefined') {
      const hoyolab = new Hoyolab({
        cookie: options.cookie,
      })

      game = await hoyolab.gameAccount(GamesEnum.ZENLESS_ZONE_ZERO)
      options.uid = parseInt(game.game_uid)
      options.region = getZzzRegion(parseInt(game.game_uid))
    }
    const zzz = new ZenlessZoneZero(options)
    zzz.account = game
    return zzz
  }

  /**
   * Setter for the account property. Prevents from changing the value once set
   * @param game The game object to set as the account.
   */
  public set account(game: IGame | null) {
    if (this.account === null && game !== null) {
      this._account = game
    }
  }

  /**
   * Getter for the account property.
   * @returns {IGame | null} The current value of the account property.
   */
  public get account(): IGame | null {
    return this._account
  }

  /**
   * Retrieves daily information.
   *
   * @alias {@link DailyModule.info | DailyModule.info }
   * @deprecated Use through { @link ZenlessZoneZero.daily | ZenlessZoneZero.daily.info() } instead
   */
  dailyInfo() {
    /* c8 ignore next 3 */
    return this.daily.info()
  }

  /**
   *
   * @alias {@link DailyModule.rewards | DailyModule.rewards }
   * @deprecated Use through { @link ZenlessZoneZero.daily | ZenlessZoneZero.daily.rewards() } instead
   */
  dailyRewards() {
    /* c8 ignore next 3 */
    return this.daily.rewards()
  }

  /**
   * Fetch reward from daily login based on day
   *
   * @param day number | null
   * @alias {@link DailyModule.reward | DailyModule.reward }
   * @deprecated Use through { @link ZenlessZoneZero.daily | ZenlessZoneZero.daily.reward() } instead
   */
  dailyReward(day: number | null = null) {
    /* c8 ignore next 3 */
    return this.daily.reward(day)
  }

  /**
   * Claim current reward
   *
   * @alias {@link DailyModule.claim | DailyModule.claim }
   * @deprecated Use through { @link ZenlessZoneZero.daily | ZenlessZoneZero.daily.claim() } instead
   */
  dailyClaim() {
    /* c8 ignore next 3 */
    return this.daily.claim()
  }

  /**
   * Redeem Code
   *
   * @param code string
   * @alias {@link RedeemModule.claim | RedeemModule.claim }
   * @deprecated Use through { @link ZenlessZoneZero.redeem | ZenlessZoneZero.redeem.claim() } instead
   */
  redeemCode(code: string) {
    /* c8 ignore next 3 */
    return this.redeem.claim(code)
  }
}
