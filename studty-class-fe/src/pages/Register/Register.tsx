import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../redux/reducers/RootReducer';
import { RegistrationError } from '../../types/registration/RegistrationError';
import { RegistrationRequest } from '../../types/registration/RegistrationRequest';
import { Register as Regis } from '../../redux/thunks/auth-thunk';
import { useHistory } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
const Register: FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [user, setUser] = useState<RegistrationRequest>({ firstName: '', lastName: '', email: '', password: '', password2: '' });
    const registerError: Partial<RegistrationError> = useSelector((state: AppStateType) => state.auth.registerError);
    const loading: boolean = useSelector((state: AppStateType) => state.auth.loading);
    const success: string = useSelector((state: AppStateType) => state.auth.success);

    const { firstName, lastName, email, password, password2 } = user;
    const {
        firstNameError,
        lastNameError,
        emailError,
        passwordError,
        password2Error } = registerError;

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(Regis(user, history));
    }

    return (
        <div className="container">
            {loading ? <Spinner /> : null}
            {success ? <div className='alert alert-success'>{success}</div> : null}
            <div className="row">
                <div className="col-sm-6">
                    <form onSubmit={onFormSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label">First name</label>
                            <div className="col-sm-7">
                                <input
                                    type="text"
                                    name='firstName'
                                    className={firstNameError ? 'form-control is-invalid' : 'form-control'}
                                    value={firstName}
                                    onChange={handleInputChange} />
                                <div className="invalid-feedback">{firstNameError}</div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className='col-sm-4 col-form-label'>Last name</label>
                            <div className="col-sm-7">
                                <input
                                    type="text"
                                    name='lastName'
                                    className={lastNameError ? 'form-control is-invalid' : 'form-control'}
                                    value={lastName}
                                    onChange={handleInputChange} />
                                <div className="invalid-feedback">{lastNameError}</div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label">Email</label>
                            <div className="col-sm-7">
                                <input
                                    type="text"
                                    name='email'
                                    className={emailError ? 'form-control is-invalid' : 'form-control'}
                                    value={email}
                                    onChange={handleInputChange} />
                                <div className="invalid-feedback">{emailError}</div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label">Password</label>
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
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label">Re-password</label>
                            <div className="col-sm-7">
                                <input
                                    type="password"
                                    name='password2'
                                    className={password2Error ? 'form-control is-invalid' : 'form-control'}
                                    value={password2}
                                    onChange={handleInputChange} />
                                <div className="invalid-feedback">{password2Error}</div>
                            </div>
                        </div>
                        <button className='btn btn-success' type='submit'>Signup</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register