import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, RouteComponentProps, useHistory } from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner';
import { AppStateType } from '../../redux/reducers/RootReducer';
import { FetchClass } from '../../redux/thunks/class-thunk';
import { ClassResponse } from '../../types/class/ClassResponse';
import AddTest from './AddTest/AddTest';
import './Classroom.css'
import ListStudent from './ListStudent/ListStudent';
import ListTest from './ListTest/ListTest';
import Test from './Test/Test';

const Classroom: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
    const classId = match.params.id;
    const dispatch = useDispatch();
    const history = useHistory();
    const classData: Partial<ClassResponse> = useSelector((state: AppStateType) => state.class.class);
    const loading: boolean = useSelector((state: AppStateType) => state.class.loading);
    const error: string = useSelector((state: AppStateType) => state.class.error);
    const isLogin = localStorage.getItem("isLogin");
    useEffect(() => {

        if (!isLogin) {
            history.push("/login");
        } else {
            dispatch(FetchClass(classId));

        }
    }, [classId])

    const { name, testList, code } = classData;
    const isCreateUser = (localStorage.getItem("email") === classData.createUser?.email);
    return (
        <div className='container' style={{
            border: '0.5px solid black'
        }}>
            {loading ? <Spinner /> :
                <>
                    {error ?
                        <div>
                            {error} <br />
                            Click here &nbsp;
                            <button>join</button>
                            &nbsp; to join this class
                            <div>
                            </div>
                        </div> :
                        <div>
                            <h3>{name}</h3>
                            <div className="row">
                                <div className="col-sm-2">
                                    <NavLink to={`/class/${classId}/list-test`}
                                        className="account-sidebar-link nav-link"
                                        activeClassName='is-active'>
                                        List test
                                    </NavLink>
                                    {isCreateUser ?
                                        <>
                                            <NavLink to={`/class/${classId}/add-test`}
                                                className="account-sidebar-link nav-link"
                                                activeClassName='is-active'>
                                                Add test
                                            </NavLink>
                                        </> :
                                        <>

                                        </>}

                                    <NavLink
                                        to={`/class/${classId}/list-student`}
                                        className="account-sidebar-link nav-link"
                                        activeClassName='is-active'
                                    >
                                        List Student
                                    </NavLink>
                                </div>

                                <div className="col-sm-8">
                                    <Route path="/class/:id/list-test" exact component={(props: RouteComponentProps<{ id: string }>) => <ListTest {...props} />} />
                                    <Route path="/class/:id/add-test" exact component={AddTest} />
                                    <Route path="/class/:id/test/:testId" exact component={Test} />
                                    <Route path="/class/:id/list-student" exact component={ListStudent} />

                                </div>
                            </div>


                        </div>
                    }

                </>}
        </div >
    )
}

export default Classroom;