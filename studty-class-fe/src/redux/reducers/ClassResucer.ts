import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons"
import { ClassError } from "../../types/class/ClassError"
import { ClassResponse } from "../../types/class/ClassResponse"
import { PaginationResponse } from "../../types/pagination/PaginationResponse"
import { UserResponse } from "../../types/user/UserResponse"
import { ClassActionType, CLASSES_FETCH_FAILURE, CLASSES_FETCH_SUCCESS, CLASS_ADDED_FAILURE, CLASS_ADDED_SUCCESS, CLASS_FETCH_FAILURE, CLASS_FETCH_STUDENT_FAILURE, CLASS_FETCH_STUDENT_SUCCESS, CLASS_FETCH_SUCCESS, CLASS_JOIN_CODE_FAILURE, CLASS_JOIN_CODE_SUCCESS, CLASS_LOADING, CLASS_SEARCH_FAILURE, CLASS_SEARCH_SUCCESS } from "../action-types/ClassActionType"

export type InitialStateType = {
    loading: boolean
    class: Partial<ClassResponse>
    classes: Array<Partial<ClassResponse>>
    classErrors: Partial<ClassError>
    error: string
    pagination: Partial<PaginationResponse>
    students: Array<Partial<UserResponse>>
}

const initialState: InitialStateType = {
    loading: false,
    class: {},
    classes: [],
    classErrors: {},
    error: "",
    pagination: {},
    students: []
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

        case CLASSES_FETCH_SUCCESS:
            return { ...state, loading: false, pagination: action.payload, error: '' }

        case CLASSES_FETCH_FAILURE:
            return { ...state, loading: false, error: action.payload }

        case CLASS_SEARCH_SUCCESS:
            return { ...state, loading: false, pagination: action.payload, error: "" }

        case CLASS_SEARCH_FAILURE:
            return { ...state, loading: false, error: action.payload }

        case CLASS_JOIN_CODE_SUCCESS:
            return { ...state, loading: false, class: action.payload }

        case CLASS_JOIN_CODE_FAILURE:
            return { ...state, loading: false, error: action.payload }

        case CLASS_FETCH_STUDENT_SUCCESS:
            return { ...state, loading: false, students: action.payload }

        case CLASS_FETCH_STUDENT_FAILURE:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }
}

export default reducer