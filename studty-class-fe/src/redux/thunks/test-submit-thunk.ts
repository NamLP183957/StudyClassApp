import { Dispatch } from "redux";
import { TestSubmitRequest } from "../../types/submission/TestSubmitRequest";
import RequestService from "../../utils/RequestService";
import { TestSubmitFailure, testSubmitLoading, TestSubmitStartFailure, testSubmitStartSuccess, TestSubmitSuccess } from "../actions/TestSubmitAction";

export const startTest = (testId: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(testSubmitLoading())
        const response = await RequestService.post(`/test-submit/start-test?test-id=${testId}`, {}, true);
        dispatch(testSubmitStartSuccess(response.data))
    } catch (error) {
        dispatch(TestSubmitStartFailure(error.response.data))
    }
}

export const submitTest = (testSubmitId: number, testSubmit: TestSubmitRequest) => async (dispatch: Dispatch) => {
    try {
        dispatch(testSubmitLoading())
        const response = await RequestService.post(`/test-submit?test-submit-id=${testSubmitId}`, testSubmit, true);
        dispatch(TestSubmitSuccess(response.data))
    } catch (error) {
        dispatch(TestSubmitFailure(error.response.data))
    }
}