import React, { ChangeEvent, FC, useState } from 'react'
import { QuestionRequest } from '../../../../types/question/QuestionRequest'

type PropsType = {
    question: Partial<QuestionRequest>
    index: number,
    handleSaveQuestion: (question: Partial<QuestionRequest>, index: number) => void
}

const TypeChoice: FC<PropsType> = ({ question, index, handleSaveQuestion }) => {
    const answer = question.answer ? question.answer : "";
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {

        handleSaveQuestion({ ...question, answer: event.target.value }, index);
    }

    return (
        <div className="form row">
            <label className="col-sm-2">Answer </label>
            <div className="col-sm-9">
                <input
                    type="text"
                    value={answer}
                    className='input-none-border'
                    onChange={handleInputChange}
                />
            </div>

        </div>
    )
}

export default TypeChoice