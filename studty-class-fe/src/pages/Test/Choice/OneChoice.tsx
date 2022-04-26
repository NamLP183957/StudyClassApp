import React, { FC } from 'react'
import { QuestionSubmitRequest } from '../../../types/submission/QuestionSubmitRequest'

type PropsType = {
    questionId: number
    choiceList: any
    handleSaveTestSumit: (questionSubmitRequest: QuestionSubmitRequest) => void
}
const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const OneChoice: FC<PropsType> = ({ questionId, choiceList, handleSaveTestSumit }) => {

    const handleradioChange = (choiceId: number) => {
        handleSaveTestSumit({ questionId: questionId, answer: choiceId.toString() })
    }

    return (
        <div>
            {choiceList.map((choice, index) => (
                <div className="row mt-1" key={index}>
                    <div className="col-sm-1">
                        <input
                            type="radio"
                            className='radio'
                            name={`radio-${questionId}`}
                            value={choice.id}
                            onChange={() => handleradioChange(choice.id)}
                        />
                    </div>
                    <div className="col-sm-11">
                        {ALPHABET[index]}: {choice.title}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OneChoice