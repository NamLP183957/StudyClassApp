import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom'
import CountDownTimer from '../../components/CountDownTimer/CountDownTimer';
import ModalDialog from '../../components/Modal/ModalDialog';
import Spinner from '../../components/Spinner/Spinner';
import { AppStateType } from '../../redux/reducers/RootReducer';
import { startTest, submitTest } from '../../redux/thunks/test-submit-thunk';
import { fetchTest } from '../../redux/thunks/test-thunk';
import { QuestionSubmitRequest } from '../../types/submission/QuestionSubmitRequest';
import { TestSubmitRequest } from '../../types/submission/TestSubmitRequest';
import DoListQuestion from './DoListQuestion';

const DoTest: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
    const dispatch = useDispatch();
    const testId = match.params.id;
    const testLoading = useSelector((state: AppStateType) => state.testSubmit.loading);
    const testSubmit = useSelector((state: AppStateType) => state.testSubmit.testSubmit);
    const error = useSelector((state: AppStateType) => state.testSubmit.error);

    const { id, test } = testSubmit;

    const [testSubmmitRequest, setTestSubmitRequest] = useState<TestSubmitRequest>({
        questionSubmitRequestList: []
    });

    useEffect(() => {
        // dispatch(fetchTest(testId));
        dispatch(startTest(testId));
    }, [testId])

    const handleSaveTestSubmit = (questionSubmit: QuestionSubmitRequest) => {
        let questionSubmitList = testSubmmitRequest.questionSubmitRequestList;
        let isDone = false;
        questionSubmitList.forEach((quesSubmit) => {
            if (quesSubmit.questionId === questionSubmit.questionId) {
                isDone = true;
            }
        })

        let updateQuestionSubmitList = questionSubmitList;
        if (isDone) {
            updateQuestionSubmitList = questionSubmitList.map((quesSubmit) => quesSubmit.questionId === questionSubmit.questionId ? questionSubmit : quesSubmit)
        } else {
            updateQuestionSubmitList.push(questionSubmit);
        }
        console.log("List: ", updateQuestionSubmitList);
        setTestSubmitRequest({ questionSubmitRequestList: updateQuestionSubmitList })
    }

    const handleSubmitTest = () => {
        if (testSubmit) {
            dispatch(submitTest(id, testSubmmitRequest));
        }
    }

    console.log("total mark: ", testSubmit.totalMark);

    return (
        <div className="container">
            {testLoading ?
                <Spinner />
                :
                <div className='card'>
                    {error ? error : ""}
                    <div className="card-header title row">
                        <div className="col-sm-8">{test ? test.name : ""}</div>
                        <div className="col-sm-4">
                            <CountDownTimer
                                minutes={test?.leng}
                                handleSubmitTest={handleSubmitTest}
                            />
                        </div>
                    </div>
                    <div className="card-body">
                        <DoListQuestion
                            testId={testId}
                            handleSaveTestSumit={handleSaveTestSubmit} />
                    </div>
                    <div className="card-footer">
                        <button
                            className='btn btn-success'
                            onClick={() => handleSubmitTest()}
                        >Submit</button>
                    </div>
                </div>
            }

            {testSubmit.totalMark && <ModalDialog content={`Total mark: ${testSubmit.totalMark}`} />}
        </div>
    )
}

export default DoTest