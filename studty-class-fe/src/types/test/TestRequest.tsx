import { QuestionRequest } from "../question/QuestionRequest"

export type TestRequest = {
    name: string
    // startTime: Date
    leng: number
    // closeTime: Date
    note: string
    questionList: Array<Partial<QuestionRequest>>
    classId: number
}