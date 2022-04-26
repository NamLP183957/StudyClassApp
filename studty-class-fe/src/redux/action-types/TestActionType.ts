import { PaginationResponse } from "../../types/pagination/PaginationResponse"
import { TestResponse } from "../../types/test/TestResponse"

export const TEST_LOADING = "TEST_LOADING"
export const TEST_ADDED_SUCCESS = "TEST_ADDED_SUCCESS"
export const TEST_ADDED_FAILURE = "TEST_ADDED_FAILURE"
export const TESTS_FETCH_SUCCESS = "TESTS_FETCH_SUCCESS"
export const TESTS_FETCH_FAILURE = "TESTS_FETCH_FAILURE"
export const TEST_FETCH_SUCCESS = "TEST_FETCH_SUCCESS"
export const TEST_FETCH_FAILURE = "TEST_FETCH_FAILURE"
export const TEST_SEARCH_SUCCESS = "TEST_SEARCH_SUCCESS"
export const TEST_SEARCH_FAILURE = "TEST_SEARCH_FAILURE"

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
    type: typeof TESTS_FETCH_FAILURE
    payload: string
}

export type TestFetchSuccessActionType = {
    type: typeof TEST_FETCH_SUCCESS
    payload: TestResponse
}

export type TestFetchFailureActionType = {
    type: typeof TEST_FETCH_FAILURE
    payload: string
}

export type TestSearchSuccessActionType = {
    type: typeof TEST_SEARCH_SUCCESS
    payload: PaginationResponse
}

export type TestSearchFailureActionType = {
    type: typeof TEST_SEARCH_FAILURE
    payload: string
}


export type TestActionType = TestLoadingActionType
    | TestAddedSuccessActionType | TestAddedFailureActionType
    | TestsFetchSuccessActionType | TestsFetchFailureActionType
    | TestFetchSuccessActionType | TestFetchFailureActionType
    | TestSearchSuccessActionType | TestSearchFailureActionType;