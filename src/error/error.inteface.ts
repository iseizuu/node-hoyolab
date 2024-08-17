import {
  HTTPBody,
  HTTPHeaders,
  HTTPQueryParams,
  HTTPResponse,
} from '../request'

/**
 * Represents an error that can be thrown during interactions with the Hoyolab API.
 *
 * @interface
 * @category Main
 * @property {HTTPResponse|string} [response] - The response that caused the error.
 * @property {{body: HTTPBody, params: HTTPQueryParams, headers: HTTPHeaders}} [request] - The request that caused the error.
 */
export interface IHTTPError {
  response?: HTTPResponse | string
  request?: {
    body: HTTPBody
    params: HTTPQueryParams
    headers: HTTPHeaders
  }
}
