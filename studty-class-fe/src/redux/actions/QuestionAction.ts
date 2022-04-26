import { PaginationResponse } from "../../types/pagination/PaginationResponse";
import { QuestionRequest } from "../../types/question/QuestionRequest";
import { QuestionAddedNewActionType, QuestionLoadingActionType, QuestionSavedSuccessActionType, QuestionsFetchSuccessActionType, QUESTIONS_FETCH_FAILURE, QUESTIONS_FETCH_SUCCESS, QUESTION_ADDED_NEW, QUESTION_LOADING, QUESTION_SAVED_SUCCESS } from "../action-types/QuestionActionType";

export const questionLoading = (): QuestionLoadingActionType => ({
    type: QUESTION_LOADING
})

export const QuestionSavedSuccess = (questioNRequest: Array<Partial<QuestionRequest>>): QuestionSavedSuccessActionType => ({
    type: QUESTION_SAVED_SUCCESS,
    payload: questioNRequest
})

export const QuestionAddedNew = (questionRequest: Array<Partial<QuestionRequest>>): QuestionAddedNewActionType => ({
    type: QUESTION_ADDED_NEW,
    payload: questionRequest
})

export const questionsFetchSuccess = (pagination: PaginationResponse): QuestionsFetchSuccessActionType => ({
    type: QUESTIONS_FETCH_SUCCESS,
    payload: pagination
})

export const questionsFetchFailure = (error: string) => ({
    type: QUESTIONS_FETCH_FAILURE,
    payload: error
})

