import { AuthenticationError } from "../../types/auth/AuthenticationError"
import { AuthenticationResponse } from "../../types/auth/AuthenticationResponse"
import { RegistrationError } from "../../types/registration/RegistrationError"
import { ACTIVE_ACCOUNT_FAILURE, ACTIVE_ACCOUNT_SUCCESS, AuthenticationActionType, LOADING_DATA, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS } from "../action-types/AuthActionType"

export type InitialStateType = {
    loading: boolean
    userData: Partial<AuthenticationResponse>
    loginError: Partial<AuthenticationError>
    registerError: Partial<RegistrationError>
    error: string
    success: string
    isLoggedIn: boolean
}

const initialState: InitialStateType = {
    loading: false,
    userData: {},
    loginError: {},
    registerError: {},
    error: '',
    success: '',
    isLoggedIn: false,
}

const reducer = (state: InitialStateType = initialState, action: AuthenticationActionType): InitialStateType => {
    switch (action.type) {
        case LOADING_DATA:
            return { ...state, loading: true }

        case LOGIN_SUCCESS:
            return { ...state, loading: false, userData: action.payload, isLoggedIn: true }

        case LOGIN_FAILURE:
            return { ...state, loading: false, loginError: action.payload }

        case REGISTER_SUCCESS:
            return { ...state, loading: false, success: action.payload }

        case REGISTER_FAILURE:
            return { ...state, loading: false, registerError: action.payload }

        case ACTIVE_ACCOUNT_SUCCESS:
            return { ...state, loading: false, success: action.payload }

        case ACTIVE_ACCOUNT_FAILURE:
            return { ...state, loading: false, error: action.payload }

        case LOGOUT_SUCCESS:
            return { ...state, loading: false, isLoggedIn: false };

        default:
            return state;
    }
}

export default reducer;
