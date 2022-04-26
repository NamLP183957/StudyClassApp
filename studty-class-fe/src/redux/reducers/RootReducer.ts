import { combineReducers } from "redux";

import authReducer from './AuthReducer'
import classReducer from './ClassResucer'
import testReducer from './TestReducer'
import questionReducer from './QuestionReducer'
import testSubmitReducer from './TeestSubmitResucer'

const rootReducer = combineReducers({
    auth: authReducer,
    class: classReducer,
    test: testReducer,
    question: questionReducer,
    testSubmit: testSubmitReducer
})

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>

export default rootReducer;