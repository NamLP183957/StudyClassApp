import React, { FC } from 'react'
import { QuestionSubmitRequest } from '../../types/submission/QuestionSubmitRequest'
import QuestionItem from '../Class/Test/QuestionItem'
import MultiChocie from './Choice/MultiChocie'
import OneChoice from './Choice/OneChoice'
import TypeAnswer from './Choice/TypeAnswer'

type PropsType = {
    question: any
    index: number
    handleSaveTestSumit: (questionSubmitRequest: QuestionSubmitRequest) => void
}

const DoQuestion: FC<PropsType> = ({ question, index, handleSaveTestSumit }) => {
    const type = question.type;
    let choices;
    if (type === 'Multi choice question') {
        choices = (
            <MultiChocie
                choiceList={question.choiceList}
                handleSaveTestSumit={handleSaveTestSumit}
                questionId={question.id} />
        )
    } else if (type === 'One choice question') {
        choices = (
            <OneChoice
                choiceList={question.choiceList}
                handleSaveTestSumit={handleSaveTestSumit}
                questionId={question.id}
            />
        )
    } else {
        choices = (
            <TypeAnswer
                questionId={question.id}
                handleSaveTestSumit={handleSaveTestSumit}
            />
        )
    }

    return (
        <div className="card card-shadow mt-3">
            <div className="card-header row sub-title   ">
                <div className="col-sm-2">QUES {index + 1}</div>
                <div className="col-sm-10">{question.title}</div>
            </div>
            <div className="card-body">
                {choices}
            </div>
        </div>
    )
}

export default DoQuestion