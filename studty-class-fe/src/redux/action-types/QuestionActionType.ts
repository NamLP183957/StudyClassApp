import { PaginationResponse } from "../../types/pagination/PaginationResponse";
import { QuestionRequest } from "../../types/question/QuestionRequest";

export const QUESTION_LOADING = "QUESTION_LOADING"
export const QUESTION_SAVED_SUCCESS = "QUESTION_SAVED_SUCCESS";
export const QUESTION_ADDED_NEW = "QUESTION_ADDED_NEW";
export const QUESTIONS_FETCH_SUCCESS = "QUESTIONS_FETCH_SUCCESS";
export const QUESTIONS_FETCH_FAILURE = "QUESTIONS_FETCH_FAILURE"

export type QuestionLoadingActionType = {
    type: typeof QUESTION_LOADING
}

export type QuestionSavedSuccessActionType = {
    type: typeof QUESTION_SAVED_SUCCESS
    payload: Array<Partial<QuestionRequest>>
}

export type QuestionAddedNewActionType = {
    type: typeof QUESTION_ADDED_NEW
    payload: Array<Partial<QuestionRequest>>
}

export type QuestionsFetchSuccessActionType = {
    type: typeof QUESTIONS_FETCH_SUCCESS
    payload: PaginationResponse
}

export type QuestionsFetchFailureActionType = {
    type: typeof QUESTIONS_FETCH_FAILURE
    payload: string
}

export type QuestionActionType =
    QuestionLoadingActionType | QuestionSavedSuccessActionType
    | QuestionAddedNewActionType | QuestionsFetchFailureActionType
    | QuestionsFetchSuccessActionType;