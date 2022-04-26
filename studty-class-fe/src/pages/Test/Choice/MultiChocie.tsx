import React, { FC, useState } from 'react'
import { QuestionSubmitRequest } from '../../../types/submission/QuestionSubmitRequest';

type PropsType = {
    questionId: number
    choiceList: any
    handleSaveTestSumit: (questionSubmitRequest: QuestionSubmitRequest) => void
}

const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const MultiChocie: FC<PropsType> = ({ questionId, choiceList, handleSaveTestSumit }) => {
    const [checkedState, setCheckedState] = useState<Array<boolean>>(new Array(choiceList.length).fill(false))

    const handleCheckboxChange = (position: number) => {
        const updatedCheckbox = checkedState.map((checked, idx) => idx === position ? !checked : checked)
        setCheckedState(updatedCheckbox);
        let answer = '';
        updatedCheckbox.forEach((checked, index) => {
            if (checked) answer += choiceList[index].id + '_';
        })

        if (answer) {
            answer = answer.slice(0, -1);
        }

        console.log(answer);

        handleSaveTestSumit({ questionId: questionId, answer: answer })
    }

    return (
        <div>
            {choiceList.map((choice, index) => (
                <div className="row" key={index}>
                    <div className="col-sm-1">
                        <input
                            type="checkbox"
                            className='checkbox'
                            checked={checkedState[index]}
                            onChange={() => handleCheckboxChange(index)}
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

export default MultiChocie