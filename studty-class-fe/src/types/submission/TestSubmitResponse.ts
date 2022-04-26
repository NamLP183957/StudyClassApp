import { TestResponse } from "../test/TestResponse"
import { QuestionSubmitResponse } from "./QuestionSubmitResponse"

export type TestSubmitResponse = {
    id: number
    startTime: string
    submitTime: string
    test: TestResponse
    questionSubmitList: Array<QuestionSubmitResponse>
    totalMark: number
    done: boolean
}