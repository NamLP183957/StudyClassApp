import { ClassError } from "../../types/class/ClassError";
import { ClassResponse } from "../../types/class/ClassResponse";
import { PaginationResponse } from "../../types/pagination/PaginationResponse";
import { UserResponse } from "../../types/user/UserResponse";

export const CLASS_LOADING = "CLASS_LOADING"
export const CLASS_ADDED_SUCCESS = "CLASS_ADDED_SUCCESS";
export const CLASS_ADDED_FAILURE = "CLASS_ADDED_FAILURE";
export const CLASS_FETCH_SUCCESS = "CLASS_FETCH_SUCCESS";
export const CLASS_FETCH_FAILURE = "CLASS_FETCH_FAILURE";
export const CLASSES_FETCH_SUCCESS = "CLASSES_FETCH_SUCCESS";
export const CLASSES_FETCH_FAILURE = "CLASSES_FETCH_FAILURE";
export const CLASS_SEARCH_SUCCESS = "CLASS_SEARCH_SUCCESS";
export const CLASS_SEARCH_FAILURE = "CLASS_SEARCH_FAILURE";
export const CLASS_JOIN_CODE_SUCCESS = "CLASS_JOIN_CODE_SUCCESS";
export const CLASS_JOIN_CODE_FAILURE = "CLASS_JOIN_CODE_FAILURE";
export const CLASS_FETCH_STUDENT_SUCCESS = "CLASS_FETCH_STUDENT_SUCCESS";
export const CLASS_FETCH_STUDENT_FAILURE = "CLASS_FETCH_STUDENT_FAILURE";

export type ClassLoadingActionType = {
    type: typeof CLASS_LOADING
}

export type ClassAddedSuccessActionType = {
    type: typeof CLASS_ADDED_SUCCESS,
    payload: ClassResponse
}

export type ClassAddedFailureActionType = {
    type: typeof CLASS_ADDED_FAILURE,
    payload: ClassError
}

export type ClassFetchSuccessActionType = {
    type: typeof CLASS_FETCH_SUCCESS,
    payload: ClassResponse
}

export type ClassFetchFailureActionType = {
    type: typeof CLASS_FETCH_FAILURE
    payload: string
}

export type CLassesFetchSuccessActionType = {
    type: typeof CLASSES_FETCH_SUCCESS,
    payload: PaginationResponse
}

export type ClassesFetchFailureActionType = {
    type: typeof CLASSES_FETCH_FAILURE,
    payload: string
}

export type ClassSearchSuccessActioNType = {
    type: typeof CLASS_SEARCH_SUCCESS
    payload: PaginationResponse
}

export type ClassSearchFailureActioNType = {
    type: typeof CLASS_SEARCH_FAILURE
    payload: string
}

export type ClassJoinCodeSuccessActionType = {
    type: typeof CLASS_JOIN_CODE_SUCCESS
    payload: ClassResponse
}

export type ClassJoinCodeFailureActioNType = {
    type: typeof CLASS_JOIN_CODE_FAILURE
    payload: string
}

export type ClassFetchStudentSuccessActionType = {
    type: typeof CLASS_FETCH_STUDENT_SUCCESS,
    payload: Array<UserResponse>
}

export type ClassFetchStudentFailureActionType = {
    type: typeof CLASS_FETCH_STUDENT_FAILURE,
    payload: string
}


export type ClassActionType =
    ClassAddedSuccessActionType | ClassAddedFailureActionType
    | ClassLoadingActionType | ClassFetchSuccessActionType
    | ClassFetchFailureActionType
    | CLassesFetchSuccessActionType | ClassesFetchFailureActionType
    | ClassSearchSuccessActioNType | ClassSearchFailureActioNType
    | ClassJoinCodeSuccessActionType | ClassJoinCodeFailureActioNType
    | ClassFetchStudentSuccessActionType | ClassFetchStudentFailureActionType;