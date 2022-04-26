import React, { FC } from 'react'
import ChoiceQuestion from '../../../components/QuestionItem/ChoiceQuestion'
import TypeQuestion from '../../../components/QuestionItem/TypeQuestion'

type PropsType = {
    question: any
    index: number
}

// const ALDPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

const QuestionItem: FC<PropsType> = ({ question, index }) => {
    // const { choiceList } = question;
    let choices;
    if (question.type === 'Multi choice question' || question.type === 'One choice question') {
        choices = (
            <ChoiceQuestion choiceList={question.choiceList} />
        )
    } else {
        choices = (
            <TypeQuestion answer={question.answer} />
        )
    }
    return (
        <div className='card mt-3' style={{ boxShadow: "5px 5px 7px -7px rgba(0, 0, 0, 0.75)" }}>
            <div className="form row sub-title card-header">
                <label className="col-sm-1 col-form-label">
                    Q{index + 1}
                </label>
                <div className="col-sm-10 mt-2">
                    {question.title}
                </div>
            </div>
            {choices}
        </div >
    )
}

export default QuestionItem