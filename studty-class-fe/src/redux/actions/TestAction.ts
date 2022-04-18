import { PaginationResponse } from "../../types/pagination/PaginationResponse";
import { TestResponse } from "../../types/test/TestResponse";
import { TestAddedSuccessActionType, TestLoadingActionType, TestAddedFailureActionType, TEST_ADDED_SUCCESS, TEST_LOADING, TEST_ADDED_FAILURE, TESTS_FETCH_SUCCESS, TestsFetchSuccessActionType, TestsFetchFailureActionType, TESTS_FETCH_FAILURE } from "../action-types/TestActionType";

export const testLoading = (): TestLoadingActionType => ({
    type: TEST_LOADING
})

export const testAddedSuccess = (testResponse: TestResponse): TestAddedSuccessActionType => ({
    type: TEST_ADDED_SUCCESS,
    payload: testResponse
})

export const testAddedFailure = (error: string): TestAddedFailureActionType => ({
    type: TEST_ADDED_FAILURE,
    payload: error
})

export const testsFetchSuccess = (paginationResponse: PaginationResponse): TestsFetchSuccessActionType => ({
    type: TESTS_FETCH_SUCCESS,
    payload: paginationResponse
})

export const testsFetchFailure = (error: string): TestsFetchFailureActionType => ({
    type: TESTS_FETCH_FAILURE,
    payload: error
})

