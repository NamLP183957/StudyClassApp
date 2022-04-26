import { TestSubmitResponse } from "../../types/submission/TestSubmitResponse"
import { TestSubmitActionType, TEST_SUBMIT_FAILURE, TEST_SUBMIT_LOADING, TEST_SUBMIT_START_FAILURE, TEST_SUBMIT_START_SUCCESS, TEST_SUBMIT_SUCCESS } from "../action-types/TestSubmitActionType"

export type InitialStateType = {
    loading: boolean
    testSubmit: Partial<TestSubmitResponse>,
    error: string
}


const initialState: InitialStateType = {
    loading: false,
    testSubmit: {},
    error: ''
}

const reducer = (state: InitialStateType = initialState, action: TestSubmitActionType): InitialStateType => {
    switch (action.type) {

        case TEST_SUBMIT_LOADING:
            return { ...state, loading: true }

        case TEST_SUBMIT_START_SUCCESS:
            return { ...state, loading: false, testSubmit: action.payload, error: '' }

        case TEST_SUBMIT_START_FAILURE:
            return { ...state, loading: false, error: action.payload }

        case TEST_SUBMIT_SUCCESS:
            return { ...state, loading: false, testSubmit: action.payload, error: '' }

        case TEST_SUBMIT_FAILURE:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }
}

export default reducer;