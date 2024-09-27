export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_START = 'LOGOUT_START'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

//TYPES
export type loginStartAction = { type: typeof LOGIN_START }
export type loginSuccessAction = { type: typeof LOGIN_SUCCESS; payload: string }
export type loginFailureAction = { type: typeof LOGIN_FAILURE; payload: string }
export type logoutStartAction = { type: typeof LOGOUT_START }
export type logoutSuccessAction = { type: typeof LOGOUT_SUCCESS }
export type logoutFailureAction = { type: typeof LOGOUT_FAILURE }

export type AuthActionTypes =
  | loginStartAction
  | loginSuccessAction
  | loginFailureAction
  | logoutStartAction
  | logoutSuccessAction
  | logoutFailureAction
