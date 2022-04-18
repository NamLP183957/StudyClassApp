import React, { FC } from 'react'

type PropsType = {
    setModalActive: React.Dispatch<React.SetStateAction<boolean>>
    index: number
    handleDeleteQuestion: (index: number) => void
}

const DeleteQuestion: FC<PropsType> = ({ setModalActive, index, handleDeleteQuestion }) => {
    const onDeleteClick = () => {
        setModalActive(false);
        handleDeleteQuestion(index);
    }
    return (
        <div className="modal fade show" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title b-2">Delete question</h2>
                        <button type='button' className='close' onClick={() => setModalActive(false)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h4>Are you sure to delete this question?</h4>
                    </div>
                    <div className="modal-footer">
                        <button className='btn btn-secondary'
                            onClick={() => setModalActive(false)}>Cancel</button>
                        <button className="btn btn-danger"
                            onClick={() => onDeleteClick()}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteQuestion