import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons"
import { ClassError } from "../../types/class/ClassError"
import { ClassResponse } from "../../types/class/ClassResponse"
import { ClassActionType, CLASS_ADDED_FAILURE, CLASS_ADDED_SUCCESS, CLASS_FETCH_FAILURE, CLASS_FETCH_SUCCESS, CLASS_LOADING } from "../action-types/ClassActionType"

export type InitialStateType = {
    loading: boolean
    class: Partial<ClassResponse>
    classes: Array<Partial<ClassResponse>>
    classErrors: Partial<ClassError>
    error: string
}

const initialState: InitialStateType = {
    loading: false,
    class: {},
    classes: [],
    classErrors: {},
    error: "",
}

const reducer = (state: InitialStateType = initialState, action: ClassActionType): InitialStateType => {
    switch (action.type) {
        case CLASS_LOADING:
            return { ...state, loading: true }

        case CLASS_ADDED_SUCCESS:
            return { ...state, loading: false, class: action.payload, classErrors: {} }

        case CLASS_ADDED_FAILURE:
            return { ...state, loading: false, classErrors: action.payload }

        case CLASS_FETCH_SUCCESS:
            return { ...state, loading: false, class: action.payload }

        case CLASS_FETCH_FAILURE:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }
}

export default reducer