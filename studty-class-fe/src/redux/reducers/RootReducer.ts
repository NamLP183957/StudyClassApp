import { combineReducers } from "redux";

import authReducer from './AuthReducer'
import classReducer from './ClassResucer'
import testReducer from './TestReducer'
import questionReducer from './QuestionReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    class: classReducer,
    test: testReducer,
    question: questionReducer
})

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>

export default rootReducer;