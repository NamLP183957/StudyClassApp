import { QuestionResponse } from "../question/QuestionResponse"

export type QuestionSubmitResponse = {
    id: number
    question: QuestionResponse
    answer: string
    mark: number
}