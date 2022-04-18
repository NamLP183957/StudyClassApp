import { Dispatch } from "redux"
import { ClassRequest } from "../../types/class/ClassRequest"
import RequestService from "../../utils/RequestService"
import { ClassAddedFailure, ClassAddedSuccess, ClassFetchFailure, ClassFetchSuccess, ClassLoading } from "../actions/ClassAction"

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