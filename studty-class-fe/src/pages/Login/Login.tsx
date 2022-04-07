import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/reducers/RootReducer';
import { AuthenticationError } from '../../types/auth/AuthenticationError';
import { AuthenticationRequest } from '../../types/auth/AuthenticationRequest'
import { ActiveAccount, Login as lg } from '../../redux/thunks/auth-thunk';
import './Login.css'
import { RouteComponentProps, useHistory } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';

const Login: FC<RouteComponentProps<{ code: string }>> = ({ match }) => {
    const activeCode = match.params.code;
    const dispatch = useDispatch();
    const history = useHistory();
    const [auth, setAuth] = useState<AuthenticationRequest>({ email: '', password: '' });
    const { email, password } = auth;
    const authError: Partial<AuthenticationError> = useSelector((state: AppStateType) => state.auth.loginError);
    const { emailError, passwordError } = authError;
    const loading: boolean = useSelector((state: AppStateType) => state.auth.loading);
    const error: string = useSelector((state: AppStateType) => state.auth.error);
    const success: string = useSelector((state: AppStateType) => state.auth.success);

    useEffect(() => {
        if (activeCode) {
            dispatch(ActiveAccount(activeCode))
        }
    }, [])


    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;

        setAuth({ ...auth, [name]: value });
    }

    const onFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log("auth: ", auth);
        dispatch(lg(auth, history));
    }

    return (
        <>
            {loading ? <Spinner /> :
                <>
                    <div className='container'>
                        {error ? <div className='alert alert-danger'>{error}</div> : null}
                        {success ? <div className='alert alert-success'>{success}</div> : null}
                        <div className="row ">
                            <div className="col-sm-6">
                                <form onSubmit={onFormSubmit}>
                                    <div className="form-group row">
                                        <label className="col-sm-4 col-form-label">Email:</label>
                                        <div className="col-sm-7">
                                            <input
                                                type="text"
                                                name='email'
                                                className={emailError ? 'form-control is-invalid' : 'form-control'}
                                                value={email}
                                                onChange={handleInputChange}
                                            />
                                            <div className="invalid-feedback">{emailError}</div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className='col-sm-4 col-form-label'>Password: </label>
                                        <div className="col-sm-7">
                                            <input
                                                type="password"
                                                name='password'
                                                className={passwordError ? 'form-control is-invalid' : 'form-control'}
                                                value={password}
                                                onChange={handleInputChange} />
                                            <div className="invalid-feedback">{passwordError}</div>
                                        </div>
                                    </div>
                                    <button className='btn btn-success'>Login</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </>}
        </>
    )
}

export default Login