import { faLaptopHouse } from "@fortawesome/free-solid-svg-icons"
import { PaginationResponse } from "../../types/pagination/PaginationResponse"
import { TestResponse } from "../../types/test/TestResponse"
import { TestActionType, TESTS_FETCH_FAILURE, TESTS_FETCH_SUCCESS, TEST_ADDED_FAILURE, TEST_ADDED_SUCCESS, TEST_LOADING } from "../action-types/TestActionType"

export type InitialStateType = {
    loading: boolean
    test: Partial<TestResponse>
    error: string
    tests: Partial<PaginationResponse>
    totalPages: number
}

const initialState: InitialStateType = {
    loading: false,
    test: {},
    error: "",
    tests: {},
    totalPages: 0
}

const reducer = (state: InitialStateType = initialState, action: TestActionType): InitialStateType => {
    switch (action.type) {

        case TEST_LOADING:
            return { ...state, loading: true }

        case TEST_ADDED_SUCCESS:
            return { ...state, loading: false, test: action.payload, error: "" }

        case TEST_ADDED_FAILURE:
            return { ...state, loading: false, error: action.payload }

        case TESTS_FETCH_SUCCESS:
            return { ...state, loading: false, tests: action.payload, error: "" }

        case TESTS_FETCH_FAILURE:
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}

export default reducer;