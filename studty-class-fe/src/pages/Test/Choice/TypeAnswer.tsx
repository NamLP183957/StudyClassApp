import React, { ChangeEvent, FC, useRef, useState } from 'react'
import { QuestionSubmitRequest } from '../../../types/submission/QuestionSubmitRequest'

type PropsType = {
    questionId: number
    handleSaveTestSumit: (questionSubmitRequest: QuestionSubmitRequest) => void
}

const TypeAnswer: FC<PropsType> = ({ questionId, handleSaveTestSumit }) => {

    const [answer, setAnswer] = useState<string>("");
    const typingTimeoutRef = useRef(null);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setAnswer(value);

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }

        typingTimeoutRef.current = setTimeout(() => {
            handleSaveTestSumit({ questionId: questionId, answer: value })
        }, 300)
    }

    return (
        <div className="row">
            <div className="col-sm-1 mt-2"><b>Answer: </b></div>
            <div className="col-sm-11">
                <input
                    type="text"
                    value={answer}
                    className="input-none-border pt-2 pl-2"
                    onChange={handleInputChange}
                />
            </div>
        </div>
    )
}

export default TypeAnswer