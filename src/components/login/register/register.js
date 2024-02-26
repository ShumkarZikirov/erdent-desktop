import React, { useState } from 'react';
import './register.scss';
import Logo from '../../../assets/images/teeth.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearError, showLoading, showError, hideLoading } from '../../../redux/actions/global-action';
import { registerServices } from '../../../services/auth-services';
const Register = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const [number,setNumber] = useState('')
    const { loading, error } = useSelector(state => state.globalReducer)
    const dispatch = useDispatch()


    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(showLoading())
        dispatch(clearError)
        try {
            await registerServices({ username, password})
            setEmail('')
            setPassword('')
            setUsername('')
            // setNumber('')
        } catch (e) {
            dispatch(showError('ой что то не так!'))
        } finally {
            dispatch(hideLoading())
        }
    }
    return (
        <div className='register'>
            <div className='logo'>
                <h1>Здравствуйте</h1>
            </div>
            <form onSubmit={handleSubmit} className='form-control' action="">
                <div className="auth__login">
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        placeholder='Имя пользователя'
                        type="text"
                        required={true}
                    />
                </div>
                <div className="auth__password">
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder='Придумайте пароль'
                        type="password"
                        required={true}
                    />
                </div>
                {/*<div className="auth__password">*/}
                {/*    <input*/}
                {/*        onChange={(e) => setEmail(e.target.value)}*/}
                {/*        value={email}*/}
                {/*        placeholder='Подтвердите пароль'*/}
                {/*        type="password"*/}
                {/*        required={true}*/}
                {/*    />*/}
                {/*</div>*/}
                <div className="auth__remember">
                    <input type="checkbox" />
                    <span>Запомнить меня</span>
                </div>
                <div className="auth__btn">
                    <button type='submit'>{loading ? 'Загрузка...' : 'Зарегистрироваться'}</button>
                </div>
                <div className='auth__route'>
                    <span>Уже есть аккаунт?</span> <Link to='/sing-in'>Войдите</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;