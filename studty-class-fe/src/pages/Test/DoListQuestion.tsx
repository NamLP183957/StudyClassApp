import React, { FC, useEffect, useState } from 'react'
import { Prev } from 'react-bootstrap/lib/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import PaginationItem from '../../components/Pagination/PaginationItem'
import { AppStateType } from '../../redux/reducers/RootReducer'
import { fetchQuestions } from '../../redux/thunks/question-thunk'
import { Pagination } from '../../types/pagination/Pagination'
import { PaginationRequest } from '../../types/pagination/PaginationRequest'
import { QuestionSubmitRequest } from '../../types/submission/QuestionSubmitRequest'
import DoQuestion from './DoQuestion'

type PropsType = {
    testId: string,
    handleSaveTestSumit: (questionSubmitRequest: QuestionSubmitRequest) => void
}

const DoListQuestion: FC<PropsType> = ({ testId, handleSaveTestSumit }) => {
    const dispatch = useDispatch();
    const error = useSelector((state: AppStateType) => state.question.error);
    const paginationData = useSelector((state: AppStateType) => state.question.paginations);
    const [pagination, setPagination] = useState<Pagination>({
        currentPage: 0,
        totalPages: paginationData.totalPages ? paginationData.totalPages : 1
    })

    useEffect(() => {
        const paginationRequest: PaginationRequest = {
            page: pagination.currentPage,
            itemsPerPage: 5
        }

        dispatch(fetchQuestions(paginationRequest, testId));
    }, [pagination])


    const questions = paginationData.content;
    const onChangePage = (newPage: number) => {
        setPagination(prev => ({ ...prev, currentPage: newPage }))
    }

    return (
        <div>
            {error ?
                <div>{error}</div> :
                <div>
                    <PaginationItem pagination={pagination} onChangePage={onChangePage} />
                    {questions?.map((question, index) => (
                        <DoQuestion
                            question={question}
                            index={index}
                            handleSaveTestSumit={handleSaveTestSumit}
                            key={index} />
                    ))}
                </div>}
        </div>
    )
}

export default DoListQuestion