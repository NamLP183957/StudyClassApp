import { ChoiceRequest } from "../choice/ChoiceRequest"

export type QuestionRequest = {
    title: string
    mark: number
    imageURL: string
    choiceList: Array<Partial<ChoiceRequest>>
}