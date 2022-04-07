import { faContactBook, faHome, faSignOut, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { AppStateType } from '../../redux/reducers/RootReducer'
import { Logout } from '../../redux/thunks/auth-thunk'

const Navbar: FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isLogin = localStorage.getItem("isLogin");
    const isLoggedIn: boolean = useSelector((state: AppStateType) => state.auth.isLoggedIn);
    let links;

    const logout = () => {
        dispatch(Logout());
    }

    if (isLoggedIn && isLogin) {
        links = (
            <>
                <Link to={"/account"} className='btn font-light' >
                    <h5><FontAwesomeIcon icon={faUserEdit} /> Account</h5>
                </Link>
                <Link to={"/login"} className="btn font-light" onClick={logout}>
                    <h5>Logout <FontAwesomeIcon icon={faSignOut} /></h5>
                </Link>
            </>
        )
    } else {
        links = (
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

    return (
        <div className='container-fluid light-bg1 p-1'>
            <div className='row'>
                <div className="col-lg-10">
                    <Link to={"/home"} className="btn font-light" >
                        <h5> <FontAwesomeIcon icon={faHome} /> Home</h5>
                    </Link>
                    <Link to={"/Contact"} className="btn font-light" >
                        <h5><FontAwesomeIcon icon={faContactBook} /> Contact</h5>
                    </Link>
                </div>
                <div className="col-lg-2">
                    {links}
                </div>

            </div>
        </div>
    )
}

export default Navbar