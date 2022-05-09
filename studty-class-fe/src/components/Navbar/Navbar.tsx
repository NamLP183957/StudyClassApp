import { faContactBook, faHome, faPlus, faPlusCircle, faPlusSquare, faSignOut, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Logout } from '../../redux/thunks/auth-thunk'
import { AddClass } from '../../redux/thunks/class-thunk'
import { ClassRequest } from '../../types/class/ClassRequest'
import AddClassModal from '../Modal/AddClassModal'

const Navbar: FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isLogin = localStorage.getItem("isLogin");
    const [addModalActive, setModalActive] = useState(false);
    let Links;

    const logout = () => {
        dispatch(Logout());
    }

    if (isLogin) {
        Links = (
            <>
                <button className="btn font-light" onClick={() => { setModalActive(true) }}>
                    <h5> <FontAwesomeIcon icon={faPlusSquare} /> Create</h5>
                </button>
                <Link to={"/account"} className='btn font-light' >
                    <h5><FontAwesomeIcon icon={faUserEdit} /> Account</h5>
                </Link>
                <Link to={"/login"} className="btn font-light" onClick={() => logout()}>
                    <h5>Logout <FontAwesomeIcon icon={faSignOut} /></h5>
                </Link>
            </>
        )
    } else {
        Links = (
            <>

                <Link to={"/login"} className="btn btn-success font-light" >
                    <h5> <FontAwesomeIcon icon={faHome} /> Login</h5>
                </Link>
                <Link to={"/register"} className="btn font-light" >
                    <h5><FontAwesomeIcon icon={faContactBook} /> Register</h5>
                </Link>
            </>
        )
    }

    const handleAddClass = (classRequest: ClassRequest) => {
        dispatch(AddClass(classRequest, history, setModalActive));
    }


    return (
        <>
            {addModalActive && <AddClassModal setAddModalActive={setModalActive} addClassHandler={handleAddClass} />}
            <div className='container-fluid light-bg1 p-1'>
                <div className='row'>
                    <div className="col-lg-9">
                        <Link to={"/homepage"} className="btn font-light" >
                            <h5> <FontAwesomeIcon icon={faHome} /> Home</h5>
                        </Link>
                        <Link to={"/Contact"} className="btn font-light" >
                            <h5><FontAwesomeIcon icon={faContactBook} /> Contact</h5>
                        </Link>
                    </div>
                    <div className="col-lg-3" style={{ float: 'right' }}>
                        {Links}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar