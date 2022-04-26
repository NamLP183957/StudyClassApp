import { faAngleUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom'
import { AppStateType } from '../../../redux/reducers/RootReducer';
import { fetchTest } from '../../../redux/thunks/test-thunk';
import ListQuestion from './ListQuestion';

const Test: FC<RouteComponentProps<{ id: string, testId: string }>> = ({ match }) => {
    const testId = match.params.testId;
    const dispatch = useDispatch();
    const testData = useSelector((state: AppStateType) => state.test.test);
    const [showQuestions, setShowQuestions] = useState(false);

    useEffect(() => {
        dispatch(fetchTest(testId));
    }, [testId])

    const handleShowQuestions = () => {
        setShowQuestions(prev => !prev);
    }

    return (
        <div>
            <div className="card">
                <div className="card-header row">
                    <div className="title col-sm-8">{testData.name}</div>
                    <div className="col-sm-2">
                        <Link
                            to={`/do-test/${testId}`}
                            className='btn btn-info'>
                            Do test
                        </Link>
                    </div>
                    <div className="col-sm-2">
                        <button className='btn btn-secondary'>
                            Print
                        </button>
                    </div>
                </div>
                <div className="card-body sub-title">
                    {testData.note}
                    <br />
                    Leng: {testData.leng ? testData.leng + " minutes" : "0 minute"}
                    <div className="btn btn-secondary ml-3 mb-3" onClick={() => handleShowQuestions()}>
                        Question <span> </span>
                        {showQuestions ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faSortDown} />}
                    </div>
                    {showQuestions && <ListQuestion testId={testId} />}
                </div>
            </div>



        </div>
    )
}

export default Test