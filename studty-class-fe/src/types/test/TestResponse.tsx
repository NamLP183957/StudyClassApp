import { QuestionResponse } from "../question/QuestionResponse"

export type TestResponse = {
    id: number
    name: string
    // startTime: Date
    leng: number
    // closeTime: Date
    note: string

    questionList: Array<QuestionResponse>
}