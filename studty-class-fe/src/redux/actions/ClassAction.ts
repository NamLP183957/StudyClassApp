import { ClassError } from "../../types/class/ClassError";
import { ClassResponse } from "../../types/class/ClassResponse";
import { PaginationResponse } from "../../types/pagination/PaginationResponse";
import { UserResponse } from "../../types/user/UserResponse";
import { ClassAddedFailureActionType, ClassAddedSuccessActionType, ClassesFetchFailureActionType, CLassesFetchSuccessActionType, CLASSES_FETCH_FAILURE, CLASSES_FETCH_SUCCESS, ClassFetchFailureActionType, ClassFetchStudentFailureActionType, ClassFetchStudentSuccessActionType, ClassFetchSuccessActionType, ClassJoinCodeFailureActioNType, ClassJoinCodeSuccessActionType, ClassLoadingActionType, ClassSearchFailureActioNType, ClassSearchSuccessActioNType, CLASS_ADDED_FAILURE, CLASS_ADDED_SUCCESS, CLASS_FETCH_FAILURE, CLASS_FETCH_STUDENT_FAILURE, CLASS_FETCH_STUDENT_SUCCESS, CLASS_FETCH_SUCCESS, CLASS_JOIN_CODE_FAILURE, CLASS_JOIN_CODE_SUCCESS, CLASS_LOADING, CLASS_SEARCH_FAILURE, CLASS_SEARCH_SUCCESS } from "../action-types/ClassActionType";

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

export const ClassesFetchSuccess = (paginationResponse: PaginationResponse): CLassesFetchSuccessActionType => ({
    type: CLASSES_FETCH_SUCCESS,
    payload: paginationResponse
})

export const ClassesFetchFailure = (error: string): ClassesFetchFailureActionType => ({
    type: CLASSES_FETCH_FAILURE,
    payload: error
})

export const ClassSearchSuccess = (paginationResponse: PaginationResponse): ClassSearchSuccessActioNType => ({
    type: CLASS_SEARCH_SUCCESS,
    payload: paginationResponse
})

export const ClassSearchFailure = (error: string): ClassSearchFailureActioNType => ({
    type: CLASS_SEARCH_FAILURE,
    payload: error
})


export const ClassJoinCodeSuccess = (data: ClassResponse): ClassJoinCodeSuccessActionType => ({
    type: CLASS_JOIN_CODE_SUCCESS,
    payload: data
})

export const ClassJoinCodeFailure = (error: string): ClassJoinCodeFailureActioNType => ({
    type: CLASS_JOIN_CODE_FAILURE,
    payload: error
})

export const ClassFetchStudentSuccess = (data: Array<UserResponse>): ClassFetchStudentSuccessActionType => ({
    type: CLASS_FETCH_STUDENT_SUCCESS,
    payload: data
})

export const ClassFetchStudentFailure = (error: string): ClassFetchStudentFailureActionType => ({
    type: CLASS_FETCH_STUDENT_FAILURE,
    payload: error
})

