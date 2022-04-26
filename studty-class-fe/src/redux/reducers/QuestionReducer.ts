import { PaginationResponse } from "../../types/pagination/PaginationResponse"
import { QuestionRequest } from "../../types/question/QuestionRequest"
import { QuestionActionType, QUESTIONS_FETCH_FAILURE, QUESTIONS_FETCH_SUCCESS, QUESTION_ADDED_NEW, QUESTION_LOADING, QUESTION_SAVED_SUCCESS } from "../action-types/QuestionActionType"
import { QuestionSavedSuccess } from "../actions/QuestionAction"

export type InitialStateType = {
    loading: boolean
    question: Partial<QuestionRequest>
    questions: Array<Partial<QuestionRequest>>
    paginations: Partial<PaginationResponse>
    error: string
}

const initialState: InitialStateType = {
    loading: false,
    question: {},
    questions: [],
    paginations: {},
    error: "",
}

const reducer = (state: InitialStateType = initialState, action: QuestionActionType): InitialStateType => {
    switch (action.type) {

        case QUESTION_LOADING:
            return { ...state, loading: true }

        case QUESTION_SAVED_SUCCESS:
            return { ...state, questions: action.payload }

        case QUESTION_ADDED_NEW:
            return { ...state, questions: action.payload }

        case QUESTIONS_FETCH_SUCCESS:
            return { ...state, loading: false, paginations: action.payload, error: "" }

        case QUESTIONS_FETCH_FAILURE:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }
}



export default reducer;