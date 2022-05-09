import React, { ChangeEvent, FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../redux/reducers/RootReducer'
import { ClassRequest } from '../../types/class/ClassRequest'

type PropsType = {
    setAddModalActive: React.Dispatch<React.SetStateAction<boolean>>
    addClassHandler: (classRequest: ClassRequest) => void
}

const AddClassModal: FC<PropsType> = ({ setAddModalActive, addClassHandler }) => {
    const [classRequest, setClassRequest] = useState<ClassRequest>({ name: '', description: '', scope: 'PRIVATE' });
    const { name, description, scope } = classRequest;
    const error = useSelector((state: AppStateType) => state.class.error);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
        const { name, value } = event.target;
        setClassRequest({ ...classRequest, [name]: value });
    }

    return (
        <>
            <div className="modal-open" style={{}}>
                <div className="modal fade show" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered" role={"document"}>
                        <div className="modal-content">
                            <div className="modal-header">
                                {error ? error : ""}
                                <h2 className="modal-title b-2">Add Class</h2>
                                <button type='button' className='close' onClick={() => setAddModalActive(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className='modal-body'>
                                <form>
                                    <div className="form-group row">
                                        <label className="col-sm-4 col-form-label"><h5>Name</h5></label>
                                        <div className="col-sm-8">
                                            <input
                                                type="text"
                                                className='form-control'
                                                name='name'
                                                value={name}
                                                onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-4 col-form-label"><h5>Description</h5></label>
                                        <div className="col-sm-8">
                                            <textarea
                                                rows={3}
                                                className='form-control'
                                                name='description'
                                                value={description}
                                                onChange={handleInputChange} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-4 col-form-label"><h5>Scope</h5></label>
                                        <div className="col-sm-8">
                                            <select
                                                name='scope'
                                                className='form-control'
                                                onChange={handleInputChange}>
                                                <option value="PRIVATE">Private</option>
                                                <option value="PUBLIC">Public</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button
                                        type='button'
                                        className='btn btn-success'
                                        onClick={() => addClassHandler(classRequest)}
                                    >Add
                                    </button>
                                </form>
                            </div>

                            {/* <div className="modal-footer">

                                <button type='button'
                                    className='btn btn-secondary'
                                    data-dismiss="modal"
                                    onClick={() => setAddModalActive(false)}>
                                    Close
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddClassModal