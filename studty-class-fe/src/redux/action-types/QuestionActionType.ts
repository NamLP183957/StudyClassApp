import { QuestionRequest } from "../../types/question/QuestionRequest";

export const QUESTION_SAVED_SUCCESS = "QUESTION_SAVED_SUCCESS";
export const QUESTION_ADDED_NEW = "QUESTION_ADDED_NEW";

export type QuestionSavedSuccessActionType = {
    type: typeof QUESTION_SAVED_SUCCESS
    payload: Array<Partial<QuestionRequest>>
}

export type QuestionAddedNewActionType = {
    type: typeof QUESTION_ADDED_NEW
    payload: Array<Partial<QuestionRequest>>
}

export type QuestionActionType = QuestionSavedSuccessActionType
    | QuestionAddedNewActionType;