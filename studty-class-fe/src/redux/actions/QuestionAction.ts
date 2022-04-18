import { PaginationResponse } from "../../types/pagination/PaginationResponse";
import { QuestionRequest } from "../../types/question/QuestionRequest";
import { QuestionAddedNewActionType, QuestionSavedSuccessActionType, QUESTION_ADDED_NEW, QUESTION_SAVED_SUCCESS } from "../action-types/QuestionActionType";
import { TestsFetchSuccessActionType, TESTS_FETCH_SUCCESS } from "../action-types/TestActionType";

export const QuestionSavedSuccess = (questioNRequest: Array<Partial<QuestionRequest>>): QuestionSavedSuccessActionType => ({
    type: QUESTION_SAVED_SUCCESS,
    payload: questioNRequest
})

export const QuestionAddedNew = (questionRequest: Array<Partial<QuestionRequest>>): QuestionAddedNewActionType => ({
    type: QUESTION_ADDED_NEW,
    payload: questionRequest
})

