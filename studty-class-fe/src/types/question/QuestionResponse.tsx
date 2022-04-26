import { ChoiceResponse } from "../choice/ChoiceResponse"

export type QuestionResponse = {
    id: number
    title: string
    mark: number
    type: string
    imageURL: string
    choiceList: Array<ChoiceResponse>
    answer: string
}