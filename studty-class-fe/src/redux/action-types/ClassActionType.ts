import { ClassError } from "../../types/class/ClassError";
import { ClassResponse } from "../../types/class/ClassResponse";

export const CLASS_LOADING = "CLASS_LOADING"
export const CLASS_ADDED_SUCCESS = "CLASS_ADDED_SUCCESS";
export const CLASS_ADDED_FAILURE = "CLASS_ADDED_FAILURE";
export const CLASS_FETCH_SUCCESS = "CLASS_FETCH_SUCCESS";
export const CLASS_FETCH_FAILURE = "CLASS_FETCH_FAILURE";

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


export type ClassActionType =
    ClassAddedSuccessActionType | ClassAddedFailureActionType
    | ClassLoadingActionType | ClassFetchSuccessActionType
    | ClassFetchFailureActionType;