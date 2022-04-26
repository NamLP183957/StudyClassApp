import { TestSubmitResponse } from "../../types/submission/TestSubmitResponse";
import { TestSubmitFailureActionType, TestSubmitStartFailureActionTyoe, TestSubmitStartSuccessActionType, TestSubmitSuccessActionType, TEST_SUBMIT_FAILURE, TEST_SUBMIT_LOADING, TEST_SUBMIT_START_FAILURE, TEST_SUBMIT_START_SUCCESS, TEST_SUBMIT_SUCCESS } from "../action-types/TestSubmitActionType";

export const testSubmitLoading = () => ({
    type: TEST_SUBMIT_LOADING
})

export const testSubmitStartSuccess = (testSubmitResponse: TestSubmitResponse): TestSubmitStartSuccessActionType => ({
    type: TEST_SUBMIT_START_SUCCESS,
    payload: testSubmitResponse
})

export const TestSubmitStartFailure = (error: string): TestSubmitStartFailureActionTyoe => ({
    type: TEST_SUBMIT_START_FAILURE,
    payload: error
})

export const TestSubmitSuccess = (testSubmitResponse: TestSubmitResponse): TestSubmitSuccessActionType => ({
    type: TEST_SUBMIT_SUCCESS,
    payload: testSubmitResponse
})


export const TestSubmitFailure = (error: string): TestSubmitFailureActionType => ({
    type: TEST_SUBMIT_FAILURE,
    payload: error
})




