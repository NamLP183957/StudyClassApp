import { ChoiceResponse } from "../choice/ChoiceResponse"

export type QuestionResponse = {
    id: number
    title: string
    mark: number
    imageURL: string
    choiceList: Array<ChoiceResponse>
}