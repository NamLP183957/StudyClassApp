import { TestSubmitResponse } from "../../types/submission/TestSubmitResponse"

export const TEST_SUBMIT_LOADING = "TEST_SUBMIT_LOADING"
export const TEST_SUBMIT_START_SUCCESS = "TEST_SUBMIT_START_SUCCESS"
export const TEST_SUBMIT_START_FAILURE = "TEST_SUBMIT_START_FAILURE"
export const TEST_SUBMIT_SUCCESS = 'TEST_SUBMIT_SUCCESS'
export const TEST_SUBMIT_FAILURE = 'TEST_SUBMIT_FAILURE'

export type TestSubmitLoadingActionType = {
    type: typeof TEST_SUBMIT_LOADING
}

export type TestSubmitStartSuccessActionType = {
    type: typeof TEST_SUBMIT_START_SUCCESS
    payload: TestSubmitResponse
}

export type TestSubmitStartFailureActionTyoe = {
    type: typeof TEST_SUBMIT_START_FAILURE
    payload: string
}

export type TestSubmitSuccessActionType = {
    type: typeof TEST_SUBMIT_SUCCESS
    payload: TestSubmitResponse
}

export type TestSubmitFailureActionType = {
    type: typeof TEST_SUBMIT_FAILURE
    payload: string
}

export type TestSubmitActionType =
    TestSubmitLoadingActionType
    | TestSubmitStartSuccessActionType | TestSubmitStartFailureActionTyoe
    | TestSubmitSuccessActionType | TestSubmitFailureActionType;