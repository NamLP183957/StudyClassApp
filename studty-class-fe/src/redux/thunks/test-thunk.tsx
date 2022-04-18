import { Dispatch } from "redux";
import { PaginationRequest } from "../../types/pagination/PaginationRequest";
import { TestRequest } from "../../types/test/TestRequest";
import RequestService from "../../utils/RequestService";
import { testAddedFailure, testAddedSuccess, testLoading, testsFetchFailure, testsFetchSuccess } from "../actions/TestAction";

export const AddTest = (testRequest: Partial<TestRequest>) => async (dispatch: Dispatch) => {
    try {
        dispatch(testLoading());
        const response = await RequestService.post("/test", testRequest, true);
        dispatch(testAddedSuccess(response.data));
    } catch (error) {
        dispatch(testAddedFailure(error.response.data))
    }
}

export const FetchTests = (paginationRequest: PaginationRequest, classId: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(testLoading());
        const response = await RequestService.post(`/test/pagination?class-id=${classId}`, paginationRequest, true);
        dispatch(testsFetchSuccess(response.data));
    } catch (error) {
        console.log("Error: ", error);
        dispatch(testsFetchFailure(error.repsonse.data));
    }
}