import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { Prev } from 'react-bootstrap/lib/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { cursorTo } from 'readline';
import ClassCard from '../../components/ClassCard/ClassCard';
import PaginationItem from '../../components/Pagination/PaginationItem';
import CodeForm from '../../components/SearchForm/CodeForm';
import SelectSearchForm from '../../components/SearchForm/SelectSearchForm';
import TestSearchForm from '../../components/SearchForm/TestSearchForm';
import Spinner from '../../components/Spinner/Spinner';
import { AppStateType } from '../../redux/reducers/RootReducer';
import { fetchClasses, joinClass, searchClass } from '../../redux/thunks/class-thunk';
import { Pagination } from '../../types/pagination/Pagination';
import { PaginationRequest } from '../../types/pagination/PaginationRequest';
import './Homepage.css'

const Homepage: FC = () => {
    const isLogin = localStorage.getItem("isLogin");
    const dispatch = useDispatch();
    const history = useHistory();
    const loading = useSelector((state: AppStateType) => state.class.loading);
    const error = useSelector((state: AppStateType) => state.class.error);
    const paginationData = useSelector((state: AppStateType) => state.class.pagination);
    const classList = paginationData.content;
    const [searcher, setSearcher] = useState({
        key: "",
        scope: ""
    })
    const [pagination, setPagination] = useState<Pagination>({
        currentPage: 0,
        totalPages: paginationData.totalPages ? paginationData.totalPages : 1
    })
    const [code, setCode] = useState<string>("");

    useEffect(() => {
        if (!isLogin) {
            history.push("/login");
        }
    }, [])

    useEffect(() => {
        const paginationRequest: PaginationRequest = {
            page: pagination.currentPage,
            itemsPerPage: 16
        }
        // dispatch(fetchClasses(paginationRequest));
        dispatch(searchClass(searcher.key, searcher.scope, paginationRequest));
    }, [pagination])

    const onChangePage = (newPage: number) => {
        setPagination({ currentPage: newPage, totalPages: paginationData.totalPages })
    }

    const handleSearch = (key: string) => {
        const paginationRequest: PaginationRequest = {
            page: 0,
            itemsPerPage: 16
        }
        const updateSearcher = { ...searcher, key: key };
        setSearcher(updateSearcher)
        dispatch(searchClass(updateSearcher.key, updateSearcher.scope, paginationRequest));
    }

    const handleSelectSearch = (scope: string) => {
        const paginationRequest: PaginationRequest = {
            page: 0,
            itemsPerPage: 16
        }
        const updateSearcher = { ...searcher, scope: scope };
        setSearcher(updateSearcher)
        dispatch(searchClass(updateSearcher.key, updateSearcher.scope, paginationRequest));
    }

    const handleSubmitCode = () => {
        dispatch(joinClass(code, history));
    }



    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-sm-6">
                    <TestSearchForm handleSearch={handleSearch} />
                </div>
                <div className="col-sm-3">
                    <SelectSearchForm
                        handleSelectSearch={handleSelectSearch}
                        values={["", "PRIVATE", "PUBLIC"]}
                    />
                </div>
            </div>
            {loading ? <Spinner /> :
                <>
                    {error}

                    <div className="row mt-2">
                        <div className="col-sm-6">
                            <div className='row'>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='Enter code to join class...'
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <button
                                        className="btn btn-success"
                                        onClick={() => handleSubmitCode()}
                                    >Join</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {classList?.map((clas, index) => (
                            <ClassCard clas={clas} />
                        ))}
                    </div>
                    <div className='pagination-container'>
                        <PaginationItem
                            pagination={pagination}
                            onChangePage={onChangePage} />
                    </div>
                </>}
        </div>
    )
}

export default Homepage