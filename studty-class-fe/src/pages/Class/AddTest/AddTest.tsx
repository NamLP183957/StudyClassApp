import { faPlus, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom'
import AddQuestionModal from '../../../components/Modal/AddQuestionModal';
import Spinner from '../../../components/Spinner/Spinner';
import { QuestionAddedNew, QuestionSavedSuccess } from '../../../redux/actions/QuestionAction';
import { AppStateType } from '../../../redux/reducers/RootReducer';
import { TestRequest } from '../../../types/test/TestRequest';
import { AddTest as AddTe } from '../../../redux/thunks/test-thunk'
import EditQuestionModal from '../../../components/Modal/EditQuestionModal';
import Question from './Question';
import { QuestionRequest } from '../../../types/question/QuestionRequest';
import './AddTest.css'

const AddTest: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
    const dispatch = useDispatch();
    const classId = match.params.id;
    const testLoading: boolean = useSelector((state: AppStateType) => state.test.loading)
    const [testRequest, setTestRequest] = useState<Partial<TestRequest>>({});
    const { name, leng, note } = testRequest;
    // const questionListData = useSelector((state: AppStateType) => state.question.questions);
    const [questionList, setQuestionList] = useState<Array<Partial<QuestionRequest>>>([])
    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = event.target;
        setTestRequest({ ...testRequest, [name]: value });
    }

    const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Test: ", {
            ...testRequest,
            questionList: questionList,
            classId: parseInt(classId)
        })

        dispatch(AddTe({
            ...testRequest,
            questionList: questionList,
            classId: parseInt(classId)
        }));
    }

    const handleAddNewQuestion = () => {
        let prev = [...questionList];
        prev.push({});
        console.log("question list: ", questionList);
        setQuestionList(prev);
    }

    const handleSaveQuestion = (question: Partial<QuestionRequest>, index: number) => {
        console.log("save question")
        setQuestionList(prev => prev.map((ques, idx) =>
            index === idx ? question : ques))
    }

    const handlDeleteQuestion = (index: number) => {
        let updateQuestionList = [...questionList];
        updateQuestionList.splice(index, 1);
        setQuestionList(updateQuestionList)
    }

    return (
        <>

            <div>
                {testLoading ? <Spinner /> : <></>}
                <form onSubmit={onFormSubmit}>
                    <div className="form-group row">
                        <div className="col-sm-9">
                            <input
                                type="text"
                                placeholder='Enter the name of test'
                                name='name'
                                className='input-none-border title'
                                value={name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-sm-2">
                            <input
                                type="number"
                                name='leng'
                                className='input-none-border title'
                                value={leng}
                                onChange={handleInputChange} />
                        </div>
                        <div className="col-sm-1">
                            <div className="title ">minutes</div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-9">
                            <textarea
                                placeholder='Description'
                                name="note"
                                rows={3}
                                onChange={handleInputChange}
                                className='form-control'
                            />
                        </div>

                    </div>
                    <button type='button' className='btn btn-success' onClick={() => handleAddNewQuestion()}>
                        <FontAwesomeIcon icon={faPlus} />
                        Add question
                    </button>
                    <button type='submit' className="btn btn-primary">
                        <FontAwesomeIcon icon={faSave} /> Save
                    </button>
                    <div className="form mt-3 mb-3">
                        {questionList.length === 0 ?
                            <div>No question</div> :
                            <div>List Questions</div>}
                    </div>

                    {questionList.map((question, index) => (
                        <div>
                            <Question question={question} index={index} handleSaveQuestion={handleSaveQuestion} handleDeleteQuestion={handlDeleteQuestion} />
                            <br />
                        </div>
                    ))}

                </form>
            </div>

        </>
    )
}

export default AddTest