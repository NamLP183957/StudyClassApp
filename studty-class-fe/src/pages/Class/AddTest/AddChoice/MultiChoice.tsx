import React, { ChangeEvent, FC, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../../redux/reducers/RootReducer';
import { QuestionRequest } from '../../../../types/question/QuestionRequest'

type PropsType = {
    question: Partial<QuestionRequest>
    index: number,
    handleSaveQuestion: (question: Partial<QuestionRequest>, index: number) => void
}

const MultiChoice: FC<PropsType> = ({ question, index, handleSaveQuestion }) => {
    let choiceList = question.choiceList ? question.choiceList : [{}, {}, {}, {}];
    const [checkedState, setCheckedState] = useState<Array<boolean>>(new Array(choiceList.length).fill(false));
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

    const handleonCheckBoxChange = (position: number) => {
        const updatedCheckBox = checkedState.map((checked, idx) => idx === position ? !checked : checked);
        setCheckedState(updatedCheckBox);
        const afterChoice = choiceList.map((choice, idx) => idx === position ? { ...choice, answer: updatedCheckBox[idx] } : choice);
        const afterValue = { ...question, choiceList: afterChoice };
        handleSaveQuestion(afterValue, index);
    }

    return (
        <div className="form">
            {choiceList.map((choice, index) => (
                <div className='form-group row' key={index}>
                    <label className="col-sm-2 col-form-label">{index + 1}</label>
                    <div className="col-sm-8">
                        <input
                            type="text"
                            className='input-none-border'
                            placeholder='Enter the answer'
                            value={choiceList[index].title}
                            onChange={(event) => handleInputChange(event, index)}
                        />
                    </div>
                    <div className="col-sm-2">
                        <input
                            type="checkbox"
                            className='checkbox'
                            name={`${index}`}
                            value={`${index}`}
                            checked={checkedState[index]}
                            onChange={() => handleonCheckBoxChange(index)}
                        />
                    </div>

                </div>
            ))}
        </div>
    )
}

export default MultiChoice