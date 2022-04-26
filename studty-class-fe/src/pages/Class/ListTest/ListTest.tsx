import { faEdit, faEye, faRemove, faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom'
import PaginationItem from '../../../components/Pagination/PaginationItem';
import TestSearchForm from '../../../components/SearchForm/TestSearchForm';
import { AppStateType } from '../../../redux/reducers/RootReducer';
import { FetchClass } from '../../../redux/thunks/class-thunk';
import { FetchTests, searchTest } from '../../../redux/thunks/test-thunk';
import { ClassResponse } from '../../../types/class/ClassResponse';
import { Pagination as Pag } from '../../../types/pagination/Pagination';
import { PaginationRequest } from '../../../types/pagination/PaginationRequest';
import './ListTest.css'

const ITEMS_PER_PAGE = 5;

const ListTest: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
    const classId = match.params.id;
    const dispatch = useDispatch();
    const classData: Partial<ClassResponse> = useSelector((state: AppStateType) => state.class.class);
    const paginationData = useSelector((state: AppStateType) => state.test.tests);
    const [searchKey, setSearchKey] = useState("");

    const [pagination, setPagination] = useState<Pag>({
        currentPage: 0,
        totalPages: parseInt(paginationData.totalPages)
    })

    const testList = paginationData.content;
    useEffect(() => {
        const paginationRequest: PaginationRequest = {
            page: pagination.currentPage,
            itemsPerPage: ITEMS_PER_PAGE
        }

        dispatch(searchTest(searchKey, classId, paginationRequest));
        // dispatch(FetchTests(paginationRequest, classId))

    }, [pagination]);

    const onChangePage = (newPage: number) => {
        setPagination({ ...pagination, currentPage: newPage, totalPages: parseInt(paginationData.totalPages) })
    }

    const isCreateUser = (localStorage.getItem("email") === classData.createUser?.email);

    const handleSearch = (searchKey: string) => {
        const paginationRequest: PaginationRequest = {
            page: pagination.currentPage,
            itemsPerPage: ITEMS_PER_PAGE
        }
        setSearchKey(searchKey)
        dispatch(searchTest(searchKey, classId, paginationRequest));
    }

    return (
        <>
            <div className="row">
                <div className="col-sm-6">
                    <PaginationItem pagination={pagination} onChangePage={onChangePage} />
                </div>
                <div className="col-sm-6">
                    <TestSearchForm handleSearch={handleSearch} />
                </div>
            </div>
            {testList?.length === 0 ?
                <h4>There are no test in this class</h4> :
                <>
                    {testList?.map((test) => (
                        <>
                            <div className="card mt-3 card-shadow" >
                                <div className="card-header">{test.name}</div>
                                <div className="card-body">
                                    {test.note}
                                    <br />
                                    Leng: {test.leng ? test.leng + " minutes" : "0 minute"}
                                </div>
                                <div className="btn-group">
                                    <Link to={`test/${test.id}`} className='btn btn-success'>
                                        <FontAwesomeIcon icon={faEye} />
                                    </Link>
                                    {isCreateUser &&
                                        <>
                                            <span>&nbsp;&nbsp;&nbsp;</span>
                                            <Link to={""} className='btn btn-warning'>
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Link>
                                            <span>&nbsp;&nbsp;&nbsp;</span>
                                            <Link to={""} className='btn btn-danger'>
                                                <FontAwesomeIcon icon={faRemove} />
                                            </Link>
                                        </>}
                                </div>
                            </div>
                        </>
                    ))}
                </>}
        </>
    )
}

export default ListTest