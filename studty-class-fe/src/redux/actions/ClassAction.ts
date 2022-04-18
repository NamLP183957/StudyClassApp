import { ClassError } from "../../types/class/ClassError";
import { ClassResponse } from "../../types/class/ClassResponse";
import { ClassAddedFailureActionType, ClassAddedSuccessActionType, ClassFetchFailureActionType, ClassFetchSuccessActionType, ClassLoadingActionType, CLASS_ADDED_FAILURE, CLASS_ADDED_SUCCESS, CLASS_FETCH_FAILURE, CLASS_FETCH_SUCCESS, CLASS_LOADING } from "../action-types/ClassActionType";

export const ClassLoading = (): ClassLoadingActionType => ({
    type: CLASS_LOADING
})

export const ClassAddedSuccess = (classResponse: ClassResponse): ClassAddedSuccessActionType => ({
    type: CLASS_ADDED_SUCCESS,
    payload: classResponse
})

export const ClassAddedFailure = (classError: ClassError): ClassAddedFailureActionType => ({
    type: CLASS_ADDED_FAILURE,
    payload: classError
})


export const ClassFetchSuccess = (classResponse: ClassResponse): ClassFetchSuccessActionType => ({
    type: CLASS_FETCH_SUCCESS,
    payload: classResponse
})

export const ClassFetchFailure = (error: string): ClassFetchFailureActionType => ({
    type: CLASS_FETCH_FAILURE,
    payload: error
})