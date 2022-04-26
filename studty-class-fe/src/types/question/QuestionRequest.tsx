import { ChoiceRequest } from "../choice/ChoiceRequest"

export type QuestionRequest = {
    title: string
    mark: number
    imageURL: string
    type: string
    choiceList: Array<Partial<ChoiceRequest>>
    answer: string
}