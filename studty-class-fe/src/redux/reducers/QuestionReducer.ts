import { QuestionRequest } from "../../types/question/QuestionRequest"
import { QuestionActionType, QUESTION_ADDED_NEW, QUESTION_SAVED_SUCCESS } from "../action-types/QuestionActionType"
import { QuestionSavedSuccess } from "../actions/QuestionAction"

export type InitialStateType = {
    question: Partial<QuestionRequest>
    questions: Array<Partial<QuestionRequest>>
}

const initialState: InitialStateType = {
    question: {},
    questions: []
}

const reducer = (state: InitialStateType = initialState, action: QuestionActionType): InitialStateType => {
    switch (action.type) {
        case QUESTION_SAVED_SUCCESS:
            return { ...state, questions: action.payload }

        case QUESTION_ADDED_NEW:
            return { ...state, questions: action.payload }

        default:
            return state;
    }
}

export default reducer;