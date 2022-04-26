import React, { FC } from 'react'
import { Pagination } from '../../types/pagination/Pagination'
import './Pagination.css'
type PropsType = {
    pagination: Pagination
    onChangePage: (newPage: number) => void
}

const PaginationItem: FC<PropsType> = ({ pagination, onChangePage }) => {
    const { currentPage, totalPages } = pagination;
    const handleChangePage = (newPage: number) => {
        if (onChangePage) {
            onChangePage(newPage);
        }
    }

    let listCurrentPage = [];
    if (currentPage === 0) {
        listCurrentPage = totalPages < 3 ? Array.from(Array(totalPages).keys()) : [0, 1, 2]
    } else if (currentPage === totalPages - 1) {
        listCurrentPage = totalPages - 3 < 0 ? Array.from(Array(totalPages).keys()) : [currentPage - 2, currentPage - 1, currentPage]
    } else {
        listCurrentPage = [currentPage - 1, currentPage, currentPage + 1];
    }

    return (
        <div>
            <button
                className={currentPage <= 0 ? 'btn-square btn-disabled' : 'btn-square btn-active'}
                style={{ boxShadow: '5px 5px 7px -7px rgba(0, 0, 0, 0.75)' }}
                disabled={currentPage <= 0}
                onClick={() => handleChangePage(0)}
            >
                <b>{"<<"}</b>
            </button>

            <span> </span>
            <button
                className={currentPage <= 0 ? 'btn-square btn-disabled' : 'btn-square btn-active'}
                style={{ boxShadow: '5px 5px 7px -7px rgba(0, 0, 0, 0.75)' }}
                disabled={currentPage <= 0}
                onClick={() => handleChangePage(currentPage - 1)}
            >
                <b>{"<"}</b>
            </button>
            {listCurrentPage.map((page, index) => (
                <button
                    className={currentPage === page ? 'btn-square btn-focus' : 'btn-square btn-active'}
                    style={{ boxShadow: '5px 5px 7px -7px rgba(0, 0, 0, 0.75)' }}
                    onClick={() => handleChangePage(page)}
                    key={index}
                >
                    {page + 1}
                </button>
            ))}

            <button
                className={currentPage >= totalPages - 1 ? 'btn-square btn-disabled' : 'btn-square btn-active'}
                style={{ boxShadow: '5px 5px 7px -7px rgba(0, 0, 0, 0.75)' }}
                onClick={() => handleChangePage(currentPage + 1)}
                disabled={currentPage >= totalPages - 1}
            >
                <b>{">"}</b>
            </button>

            <span>  </span>
            <button
                className={currentPage >= totalPages - 1 ? 'btn-square btn-disabled' : 'btn-square btn-active'}
                style={{ boxShadow: '5px 5px 7px -7px rgba(0, 0, 0, 0.75)' }}
                onClick={() => handleChangePage(totalPages - 1)}
                disabled={currentPage >= totalPages - 1}
            >
                <b>{">>"}</b>
            </button>
        </div>
    )
}

export default PaginationItem