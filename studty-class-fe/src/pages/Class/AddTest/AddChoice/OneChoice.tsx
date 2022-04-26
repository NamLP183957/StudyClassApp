import React, { ChangeEvent, FC, useRef } from 'react'
import { QuestionRequest } from '../../../../types/question/QuestionRequest'

export type PropsType = {
    question: Partial<QuestionRequest>
    index: number
    handleSaveQuestion: (question: Partial<QuestionRequest>, index: number) => void
}

const OneChoice: FC<PropsType> = ({ question, index, handleSaveQuestion }) => {
    let choiceList = question.choiceList ? question.choiceList : [{}, {}, {}, {}];
    const typingTimeoutRef = useRef(null);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>, position: number) => {
        const value = event.target.value;
        const afterChoice = choiceList.map((choice, idx) => position === idx ? { ...choice, title: value } : choice);
        const afterValue = { ...question, choiceList: afterChoice };
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            handleSaveQuestion(afterValue, index);
        }, 300);
    }

    const handleRadioCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
        const position = parseInt(event.target.value);
        const afterChoice = choiceList.map((choice, idx) =>
            idx === position ? { ...choice, answer: true } : { ...choice, answer: false }
        )
        const afterValue = { ...question, choiceList: afterChoice };
        handleSaveQuestion(afterValue, index);
    }


    return (
        <div className="form">
            {choiceList.map((choice, idx) => (
                <div className='form-group row' key={idx}>
                    <label className="col-sm-2 col-form-label">{idx + 1}</label>
                    <div className="col-sm-8">
                        <input
                            type="text"
                            className='input-none-border'
                            placeholder='Enter the answer'
                            value={choiceList[idx].title}
                            onChange={(event) => handleInputChange(event, idx)}
                        />
                    </div>
                    <div className="col-sm-2">
                        <input
                            type="radio"
                            className='radio'
                            name={`radio ${index}`}
                            value={idx}
                            onChange={handleRadioCheckChange}
                        />
                    </div>

                </div>
            ))}
        </div>
    )
}

export default OneChoice