import { Dispatch } from "redux";
import { PaginationRequest } from "../../types/pagination/PaginationRequest";
import { TestRequest } from "../../types/test/TestRequest";
import RequestService from "../../utils/RequestService";
import { testAddedFailure, testAddedSuccess, testFetchFailure, testFetchSuccess, testLoading, testSearchFailure, testSearchSuccess, testsFetchFailure, testsFetchSuccess } from "../actions/TestAction";

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
        dispatch(testsFetchFailure(error.repsonse.data));
    }
}

export const fetchTest = (testId: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(testLoading());
        const response = await RequestService.get(`/test/${testId}`, true);
        dispatch(testFetchSuccess(response.data));
    } catch (error) {
        dispatch(testFetchFailure(error.response.data));
    }
}

export const searchTest = (searchKey: string, classId: string, paginationRequest: PaginationRequest) => async (dispatch: Dispatch) => {
    try {
        dispatch(testLoading());
        console.log("search key: ", searchKey);
        const response = await RequestService.post(`/test/search?class-id=${classId}&search-key=${searchKey}`, paginationRequest, true);
        console.log("search result: ", response.data)
        dispatch(testSearchSuccess(response.data))
    } catch (error) {
        dispatch(testSearchFailure(error.reposne.data))
    }
}