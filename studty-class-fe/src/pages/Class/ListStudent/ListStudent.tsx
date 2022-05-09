import { type } from 'os'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom'
import Spinner from '../../../components/Spinner/Spinner';
import { AppStateType } from '../../../redux/reducers/RootReducer';
import { fetchStudentsInClass } from '../../../redux/thunks/class-thunk';

const ListStudent: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
    const classId = match.params.id;
    const dispatch = useDispatch();
    const loading = useSelector((state: AppStateType) => state.class.loading);
    const error = useSelector((state: AppStateType) => state.class.error);
    const students = useSelector((state: AppStateType) => state.class.students);

    useEffect(() => {
        dispatch(fetchStudentsInClass(classId));
    }, [])

    return (
        <div>
            {loading ? <Spinner /> :
                <>
                    {error ? error :
                        <>
                            {students.length}
                        </>}
                </>}
        </div>
    )
}

export default ListStudent