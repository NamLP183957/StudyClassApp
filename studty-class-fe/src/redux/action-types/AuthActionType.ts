import { AuthenticationError } from "../../types/auth/AuthenticationError";
import { AuthenticationResponse } from "../../types/auth/AuthenticationResponse";
import { RegistrationError } from "../../types/registration/RegistrationError";

export const LOADING_DATA = 'LOADING_DATA'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const ACTIVE_ACCOUNT_SUCCESS = 'ACTIVE_ACCOUNT_SUCCESS';
export const ACTIVE_ACCOUNT_FAILURE = 'ACTIVE_ACCOUNT_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export type LoadingDataActionType = {
    type: typeof LOADING_DATA
}

export type LoginSuccessActionType = {
    type: typeof LOGIN_SUCCESS,
    payload: AuthenticationResponse
}

export type LoginFailureActionType = {
    type: typeof LOGIN_FAILURE,
    payload: AuthenticationError
}

export type RegisterSuccessActionType = {
    type: typeof REGISTER_SUCCESS,
    payload: string
}

export type RegisterFailureActionType = {
    type: typeof REGISTER_FAILURE,
    payload: RegistrationError
}

export type ActiveAccounSuccessActionType = {
    type: typeof ACTIVE_ACCOUNT_SUCCESS,
    payload: string
}

export type ActiveAccountFailureActionType = {
    type: typeof ACTIVE_ACCOUNT_FAILURE,
    payload: string
}

export type LogoutSuccessActionType = {
    type: typeof LOGOUT_SUCCESS
}

export type AuthenticationActionType =
    LoginSuccessActionType | LoginFailureActionType
    | RegisterSuccessActionType | RegisterFailureActionType
    | LoadingDataActionType | ActiveAccounSuccessActionType
    | ActiveAccountFailureActionType | LogoutSuccessActionType;