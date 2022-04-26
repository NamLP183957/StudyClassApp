import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PaginationItem from '../../../components/Pagination/PaginationItem';
import Spinner from '../../../components/Spinner/Spinner';
import { AppStateType } from '../../../redux/reducers/RootReducer';
import { fetchQuestions } from '../../../redux/thunks/question-thunk';
import { Pagination } from '../../../types/pagination/Pagination';
import { PaginationRequest } from '../../../types/pagination/PaginationRequest';
import QuestionItem from './QuestionItem';

type PropsType = {
    testId: string
}

const ListQuestion: FC<PropsType> = ({ testId }) => {
    const dispatch = useDispatch();
    const paginationData = useSelector((state: AppStateType) => state.question.paginations);
    const error = useSelector((state: AppStateType) => state.question.error);
    const loading = useSelector((state: AppStateType) => state.question.loading);
    const questionData = paginationData.content;
    const totalPages = paginationData.totalPages;

    const [pagination, setPagination] = useState<Pagination>({
        currentPage: 0,
        totalPages: 1
    })

    useEffect(() => {
        const paginationRequest: PaginationRequest = {
            page: pagination.currentPage,
            itemsPerPage: 5
        }

        dispatch(fetchQuestions(paginationRequest, testId))
    }, [pagination])

    const onChangePage = (newPage: number) => {
        setPagination({ currentPage: newPage, totalPages })
    }

    return (
        <>
            {loading && <Spinner />}
            {error ? error : <>
                <PaginationItem pagination={pagination} onChangePage={onChangePage} />
                {questionData?.map((question, index) => (
                    <QuestionItem question={question} index={index} />
                ))}
            </>}

        </>


    )
}

export default ListQuestion