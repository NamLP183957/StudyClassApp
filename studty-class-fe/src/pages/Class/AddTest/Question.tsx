import { faDeleteLeft, faRemove } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ChangeEvent, FC, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import DeleteQuestion from '../../../components/Modal/DeleteQuestion'
import { QuestionSavedSuccess } from '../../../redux/actions/QuestionAction'
import { ChoiceRequest } from '../../../types/choice/ChoiceRequest'
import { QuestionRequest } from '../../../types/question/QuestionRequest'

type PropsType = {
    question: Partial<QuestionRequest>
    index: number
    handleSaveQuestion: (question: Partial<QuestionRequest>, index: number) => void
    handleDeleteQuestion: (index: number) => void
}

const Question: FC<PropsType> = ({ question, index, handleSaveQuestion, handleDeleteQuestion }) => {
    const dispatch = useDispatch();
    const [questionRequest, setQuestionRequest] = useState<Partial<QuestionRequest>>(question);
    const { title, mark } = questionRequest
    let choiceList = question.choiceList ? question.choiceList : [{}, {}, {}, {}];
    const [modalActive, setModalActive] = useState(false);
    const [checkedState, setCheckedState] = useState<Array<boolean>>(new Array(choiceList.length).fill(false));

    const typingTimeoutRef = useRef(null);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const afterValue = { ...questionRequest, [name]: value };
        setQuestionRequest(afterValue);
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            handleSaveQuestion(afterValue, index);
        }, 300);
    }

    const handleChoiceChange = (event: ChangeEvent<HTMLInputElement>, position: number) => {
        const value = event.target.value;
        const afterChoice = choiceList.map((choice, idx) => position === idx ? { ...choice, title: value } : choice);
        const afterValue = { ...questionRequest, choiceList: afterChoice };
        setQuestionRequest(afterValue);

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
        const afterValue = { ...questionRequest, choiceList: afterChoice };
        setQuestionRequest(afterValue);
        handleSaveQuestion(afterValue, index);
    }

    return (
        <div className='question-group'>
            {modalActive && <DeleteQuestion setModalActive={setModalActive} index={index} handleDeleteQuestion={handleDeleteQuestion} />}
            <div className="form-group row">
                <label className="col-sm-2">
                    <b>
                        <button className='btn-oval-border' onClick={() => setModalActive(true)}>
                            <FontAwesomeIcon icon={faRemove} />
                        </button>
                        <span> </span>
                        QUES {index + 1}:
                    </b>

                </label>
                <div className="col-sm-9">
                    <input
                        type="text"
                        className='input-none-border sub-title'
                        placeholder='Enter the question'
                        name='title'
                        value={title}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label"><b>Mark</b></label>
                <div className="col-sm-2">
                    <input
                        type="number"
                        className='input-none-border sub-title'
                        name='mark'
                        value={mark}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

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
                                onChange={(event) => handleChoiceChange(event, index)}
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
        </div >
    )
}

export default Question