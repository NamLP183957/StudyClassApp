import React, { FC, useState } from 'react'

type PropsType = {
    content: string
}

const ModalDialog: FC<PropsType> = ({ content }) => {
    const [modalActive, setModalActive] = useState<boolean>(true);

    return (
        <>
            {modalActive &&
                <div className="modal fade show" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type='button' className='close' onClick={() => setModalActive(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <h4>{content}</h4>
                            </div>
                            <div className="modal-footer">
                                <button className='btn btn-secondary'
                                    onClick={() => setModalActive(false)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>}
        </>

    )
}

export default ModalDialog