import { faDeleteLeft, faRemove } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeleteQuestion from '../../../components/Modal/DeleteQuestion'
import { QuestionSavedSuccess } from '../../../redux/actions/QuestionAction'
import { AppStateType } from '../../../redux/reducers/RootReducer'
import { ChoiceRequest } from '../../../types/choice/ChoiceRequest'
import { QuestionRequest } from '../../../types/question/QuestionRequest'
import MultiChoice from './AddChoice/MultiChoice'
import OneChoice from './AddChoice/OneChoice'
import TypeChoice from './AddChoice/TypeChoice'

type PropsType = {
    question: Partial<QuestionRequest>
    index: number
    handleSaveQuestion: (question: Partial<QuestionRequest>, index: number) => void
    handleDeleteQuestion: (index: number) => void
}

const Question: FC<PropsType> = ({ question, index, handleSaveQuestion, handleDeleteQuestion }) => {
    // const dispatch = useDispatch();
    const [questionRequest, setQuestionRequest] = useState<Partial<QuestionRequest>>(question);
    const { title, mark, type } = questionRequest
    // let choiceList = questionData.choiceList ? questionData.choiceList : [{}, {}, {}, {}];
    const [modalActive, setModalActive] = useState(false);
    // const [checkedState, setCheckedState] = useState<Array<boolean>>(new Array(choiceList.length).fill(false));

    useEffect(() => {
        setQuestionRequest(question);
    }, [question])

    const typingTimeoutRef = useRef(null);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

    // const handleChoiceChange = (event: ChangeEvent<HTMLInputElement>, position: number) => {
    //     const value = event.target.value;
    //     const afterChoice = choiceList.map((choice, idx) => position === idx ? { ...choice, title: value } : choice);
    //     const afterValue = { ...questionRequest, choiceList: afterChoice };
    //     setQuestionRequest(afterValue);

    //     if (typingTimeoutRef.current) {
    //         clearTimeout(typingTimeoutRef.current);
    //     }

    //     typingTimeoutRef.current = setTimeout(() => {
    //         handleSaveQuestion(afterValue, index);
    //     }, 300);
    // }

    // const handleonCheckBoxChange = (position: number) => {
    //     const updatedCheckBox = checkedState.map((checked, idx) => idx === position ? !checked : checked);
    //     setCheckedState(updatedCheckBox);
    //     const afterChoice = choiceList.map((choice, idx) => idx === position ? { ...choice, answer: updatedCheckBox[idx] } : choice);
    //     const afterValue = { ...questionRequest, choiceList: afterChoice };
    //     setQuestionRequest(afterValue);
    //     handleSaveQuestion(afterValue, index);
    // }

    let choice;
    if (type === 'Multi choice question') {
        choice = (
            <>
                <MultiChoice
                    question={questionRequest}
                    index={index}
                    handleSaveQuestion={handleSaveQuestion}
                />
            </>)
    } else if (type === 'One choice question') {
        choice = (
            <>
                <OneChoice
                    question={questionRequest}
                    index={index}
                    handleSaveQuestion={handleSaveQuestion}
                />
            </>
        )
    } else if (type === 'Type question') {
        choice = (
            <>
                <TypeChoice
                    question={questionRequest}
                    index={index}
                    handleSaveQuestion={handleSaveQuestion}
                />
            </>
        )
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
                <div className="col-sm-2"></div>
                <label className="col-sm-2 col-form-label"><b>Type</b></label>
                <div className="col-sm-3">
                    <select className='form-control sub-title' value={type} name='type' onChange={handleInputChange}>
                        <option value=""></option>
                        <option value='Multi choice question'>Multi choice </option>
                        <option value='One choice question'>One choice </option>
                        <option value='Type question'>Type </option>
                    </select>
                </div>
            </div>

            {choice}

            {/* <div className="form">
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
            </div> */}
        </div >
    )
}

export default Question