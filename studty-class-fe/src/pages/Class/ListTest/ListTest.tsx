import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom'
import PaginationItem from '../../../components/Pagination/PaginationItem';
import { AppStateType } from '../../../redux/reducers/RootReducer';
import { FetchClass } from '../../../redux/thunks/class-thunk';
import { FetchTests } from '../../../redux/thunks/test-thunk';
import { ClassResponse } from '../../../types/class/ClassResponse';
import { Pagination as Pag } from '../../../types/pagination/Pagination';
import { PaginationRequest } from '../../../types/pagination/PaginationRequest';


const ListTest: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
    const classId = match.params.id;
    const dispatch = useDispatch();
    // dispatch(FetchClass(classId));
    const paginationData = useSelector((state: AppStateType) => state.test.tests);

    const [pagination, setPagination] = useState<Pag>({
        currentPage: 0,
        totalPages: parseInt(paginationData.totalPages)
    })

    const testList = paginationData.content;
    useEffect(() => {
        const paginationRequest: PaginationRequest = {
            page: pagination.currentPage,
            itemsPerPage: 5
        }

        dispatch(FetchTests(paginationRequest, classId));

    }, [pagination]);

    const onChangePage = (newPage: number) => {
        setPagination({ ...pagination, currentPage: newPage, totalPages: parseInt(paginationData.totalPages) })
    }

    return (
        <>
            <PaginationItem pagination={pagination} onChangePage={onChangePage} />
            {testList?.length === 0 ?
                <h4>There are no test in this class</h4> :
                <>
                    {testList?.map((test) => (
                        <div className="card">
                            <div className="card-header">{test.name}</div>
                        </div>
                    ))}
                </>}
        </>
    )
}

export default ListTest