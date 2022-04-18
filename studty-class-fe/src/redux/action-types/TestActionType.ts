import { PaginationResponse } from "../../types/pagination/PaginationResponse"
import { TestResponse } from "../../types/test/TestResponse"

export const TEST_LOADING = "TEST_LOADING"
export const TEST_ADDED_SUCCESS = "TEST_ADDED_SUCCESS"
export const TEST_ADDED_FAILURE = "TEST_ADDED_FAILURE"
export const TESTS_FETCH_SUCCESS = "TESTS_FETCH_SUCCESS"
export const TESTS_FETCH_FAILURE = "TESTS_FETCH_FAILURE";

export type TestLoadingActionType = {
    type: typeof TEST_LOADING
}

export type TestAddedSuccessActionType = {
    type: typeof TEST_ADDED_SUCCESS
    payload: TestResponse
}

export type TestAddedFailureActionType = {
    type: typeof TEST_ADDED_FAILURE
    payload: string
}

export type TestsFetchSuccessActionType = {
    type: typeof TESTS_FETCH_SUCCESS
    payload: PaginationResponse
}

export type TestsFetchFailureActionType = {
    type: typeof TESTS_FETCH_FAILURE,
    payload: string
}

export type TestActionType = TestLoadingActionType
    | TestAddedSuccessActionType | TestAddedFailureActionType
    | TestsFetchSuccessActionType | TestsFetchFailureActionType;