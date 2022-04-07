import { Dispatch } from "redux";
import { AuthenticationRequest } from "../../types/auth/AuthenticationRequest";
import { RegistrationRequest } from "../../types/registration/RegistrationRequest";
import RequestService from "../../utils/RequestService";
import { ActiveAccountFailure, ActiveAccountSuccess, LoadingData, LoginFailure, LoginSuccess, LogoutSuccess, RegisterFailure, RegisterSuccess } from "../actions/AuthAction";

export const Login = (user: AuthenticationRequest, history: any) => async (dispatch: Dispatch) => {
    try {
        dispatch(LoadingData());
        const response = await RequestService.post("/auth/login", user);

        localStorage.setItem("isLogin", "true");
        localStorage.setItem("userRole", response.data.userRole);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", response.data.email);

        history.push("/homepage")
        dispatch(LoginSuccess(response.data));
    } catch (error) {
        dispatch(LoginFailure(error.response.data))
    }
}

export const Register = (user: Partial<RegistrationRequest>, history: any) => async (dispatch: Dispatch) => {
    try {
        dispatch(LoadingData())
        const response = await RequestService.post("/auth/register", user);
        dispatch(RegisterSuccess(response.data));
        history.push("/login")
    } catch (error) {
        console.log("errro: ", error.response.data);
        dispatch(RegisterFailure(error.response.data));
    }
}

export const ActiveAccount = (code: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(LoadingData());
        const response = await RequestService.get("/auth/active/" + code);
        dispatch(ActiveAccountSuccess(response.data));
    } catch (error) {
        dispatch(ActiveAccountFailure(error.response.data));
    }
}

export const Logout = () => async (dispatch: Dispatch) => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("email");
    localStorage.removeItem("userRole");
    localStorage.removeItem("token");
    dispatch(LogoutSuccess());
}