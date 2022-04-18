import { faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { QuestionSavedSuccess } from '../../redux/actions/QuestionAction'
import { AppStateType } from '../../redux/reducers/RootReducer'
import { ChoiceRequest } from '../../types/choice/ChoiceRequest'
import { QuestionRequest } from '../../types/question/QuestionRequest'

type PropsType = {
    setModalActive: React.Dispatch<React.SetStateAction<boolean>>
}

const AddQuestionModal: FC<PropsType> = ({ setModalActive }) => {
    const dispatch = useDispatch();
    const tot[questionRequest, setQuestionRequest] = useState<Partial<QuestionRequest>>({});
    const questionList = useSelector((state: AppStateType) => state.question.questions)

    const { title, mark, imageURL } = questionRequest;
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setQuestionRequest({ ...questionRequest, [name]: value });
    }
    const [choiceList, setChoiceList] = useState<Array<Partial<ChoiceRequest>>>([{}, {}, {}, {}]);

    const handleChoiceChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        // choiceList[index] = event.target.value;
        const value = event.target.value;
        setChoiceList(prev => (
            prev.map((choice, idx) => idx === index ? { ...choice, title: value } : choice)
        ));
    }

    const onSaveQuestion = () => {
        questionList.push({ ...questionRequest, choiceList: choiceList });
        dispatch(QuestionSavedSuccess(questionList));
        setModalActive(false);
    }

    const [checkedState, setCheckedState] = useState(new Array(4).fill(false));

    const handleonCheckBoxChange = (position: number) => {
        const updatedCheckedState = checkedState.map((item, index) => index === position ? !item : item);
        setCheckedState(updatedCheckedState);

        setChoiceList(prev => (
            prev.map((choice, idx) => idx === position ? { ...choice, answer: updatedCheckedState[idx] } : choice)
        ))
    }

    return (
        // <div className='modal-open'>
        <div className="modal fade show" style={{ display: 'block', }}>
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role={"document"}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title b-2">Add question</h2>
                        <button type='button' className='close' onClick={() => setModalActive(false)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <form>
                            <div className="form-group row">

                                <label className="col-sm-2 col-form-label">Question</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className='form-control'
                                        name='title'
                                        value={title}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="form row">
                                <div className="col row">
                                    <label>Mark</label>
                                    <input
                                        type="number"
                                        className='form-control'
                                        name='mark'
                                        value={mark}
                                        onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="form"><b>Choices</b></div>
                            <div className="form-control">
                                {choiceList.map((choice, index) => (
                                    <div className='form-group row' key={index}>
                                        <label htmlFor="col-sm-2 col-form-label">{index + 1}</label>
                                        <div className="col-sm-8">
                                            <input

                                                type="text"
                                                className='form-control'
                                                value={choiceList[index].title}
                                                onChange={(event) => handleChoiceChange(event, index)}
                                            />
                                        </div>
                                        <div className="col-sm-2">
                                            <input
                                                type="checkbox"
                                                className='form-control'
                                                name={`${index}`}
                                                value={`${index}`}
                                                checked={checkedState[index]}
                                                onChange={() => handleonCheckBoxChange(index)} />
                                        </div>

                                    </div>
                                ))}
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type='button' className='btn btn-success' onClick={() => onSaveQuestion()}>
                            <FontAwesomeIcon icon={faSave} />Save
                        </button>
                    </div>
                </div>
            </div >
        </div >
        // </div>
    )
}

export default AddQuestionModal