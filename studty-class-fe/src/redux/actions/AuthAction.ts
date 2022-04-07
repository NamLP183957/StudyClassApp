import { AuthenticationError } from "../../types/auth/AuthenticationError";
import { AuthenticationResponse } from "../../types/auth/AuthenticationResponse";
import { RegistrationError } from "../../types/registration/RegistrationError";
import { ActiveAccounSuccessActionType, ActiveAccountFailureActionType, ACTIVE_ACCOUNT_FAILURE, ACTIVE_ACCOUNT_SUCCESS, LoadingDataActionType, LOADING_DATA, LoginFailureActionType, LoginSuccessActionType, LOGIN_FAILURE, LOGIN_SUCCESS, LogoutSuccessActionType, LOGOUT_SUCCESS, RegisterFailureActionType, RegisterSuccessActionType, REGISTER_FAILURE, REGISTER_SUCCESS } from "../action-types/AuthActionType";

export const LoadingData = (): LoadingDataActionType => ({
    type: LOADING_DATA
})

export const LoginSuccess = (user: AuthenticationResponse): LoginSuccessActionType => ({
    type: LOGIN_SUCCESS,
    payload: user
})

export const LoginFailure = (error: AuthenticationError): LoginFailureActionType => ({
    type: LOGIN_FAILURE,
    payload: error
})

export const RegisterSuccess = (success: string): RegisterSuccessActionType => ({
    type: REGISTER_SUCCESS,
    payload: success
})

export const RegisterFailure = (error: RegistrationError): RegisterFailureActionType => ({
    type: REGISTER_FAILURE,
    payload: error
})

export const ActiveAccountSuccess = (success: string): ActiveAccounSuccessActionType => ({
    type: ACTIVE_ACCOUNT_SUCCESS,
    payload: success
})

export const ActiveAccountFailure = (error: string): ActiveAccountFailureActionType => ({
    type: ACTIVE_ACCOUNT_FAILURE,
    payload: error
})

export const LogoutSuccess = (): LogoutSuccessActionType => ({
    type: LOGOUT_SUCCESS
})