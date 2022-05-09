import { Dispatch } from "redux"
import { ClassRequest } from "../../types/class/ClassRequest"
import { PaginationRequest } from "../../types/pagination/PaginationRequest"
import RequestService from "../../utils/RequestService"
import { ClassAddedFailure, ClassAddedSuccess, ClassesFetchFailure, ClassesFetchSuccess, ClassFetchFailure, ClassFetchStudentFailure, ClassFetchSuccess, ClassJoinCodeFailure, ClassLoading, ClassSearchFailure, ClassSearchSuccess } from "../actions/ClassAction"

export const AddClass = (classRequest: ClassRequest, history: any, setAddModalActive: React.Dispatch<React.SetStateAction<boolean>>) => async (dispatch: Dispatch) => {
    try {
        dispatch(ClassLoading());
        const response = await RequestService.post("/class", classRequest, true);
        dispatch(ClassAddedSuccess(response.data));
        history.push("/class/" + response.data.id);
        setAddModalActive(false);
    } catch (error) {
        dispatch(ClassAddedFailure(error.response.data))
    }
}

export const FetchClass = (id: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(ClassLoading());
        const response = await RequestService.get("/class/" + id, true);
        console.log("response: ", response.data);
        dispatch(ClassFetchSuccess(response.data));
    } catch (error) {
        dispatch(ClassFetchFailure(error.response.data));
    }
}

export const fetchClasses = (paginationRequest: PaginationRequest) => async (dispatch: Dispatch) => {
    try {
        dispatch(ClassLoading());
        const response = await RequestService.post("/class/pagination", paginationRequest, true);
        dispatch(ClassesFetchSuccess(response.data))
    } catch (error) {
        dispatch(ClassesFetchFailure(error.response.data));
    }
}

export const searchClass = (key: string, scope: string, paginationRequest: PaginationRequest) => async (dispatch: Dispatch) => {
    try {
        dispatch(ClassLoading());
        const response = await RequestService.post(`/class/search?key=${key}&scope=${scope}`, paginationRequest, true);
        dispatch(ClassSearchSuccess(response.data));
    } catch (error) {
        dispatch(ClassSearchFailure(error.response.data));
    }
}

export const joinClass = (code: string, history: any) => async (dispatch: Dispatch) => {
    try {
        dispatch(ClassLoading());
        const response = await RequestService.get(`/class/join-code?code=${code}`, true);
        const classId = response.data.id;
        history.push(`/class/${classId}`);
    } catch (error) {
        dispatch(ClassJoinCodeFailure(error.response.data))
    }
}

export const fetchStudentsInClass = (classId: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(ClassLoading())
        const response = await RequestService.get(`/class/get-student?class-id=${classId}`, true)
        dispatch(ClassFetchSuccess(response.data))
    } catch (error) {
        dispatch(ClassFetchStudentFailure(error.repsonse.data))
    }
}