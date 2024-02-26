import './sing-in.scss'
import React,{useState} from "react";
import { Link } from 'react-router-dom';
import { loginServices, getMeServices } from '../../../services/auth-services';
import { useSelector, useDispatch } from 'react-redux';
import { clearError, hideLoading, showLoading } from '../../../redux/actions/global-action';
import Register from "../register/register";
const SingIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { loading, error } = useSelector(state => state.globalReducer)
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(showLoading())
        dispatch(clearError())
        try {
            getMeServices()
            await loginServices({ username, password })
            setPassword('')
            setUsername('')
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(hideLoading())
        }
    }
    return(
        <div className={'auth'}>
            <div className='logo'>
                <h1>Войти</h1>
            </div>
            <form onSubmit={handleSubmit} className='form-control' action="">
                <div className="auth__login">
                    <input
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                        placeholder='Имя пользователя'
                        type="text" />
                </div>
                <div className="auth__password">
                    <input
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        placeholder='Пароль'
                        type="password" />
                </div>
                <div className="auth__remember">
                    <input type="checkbox" />
                    <span>Запомнить меня</span>
                </div>
                <div className="auth__btn">
                    <button type='submit'>{loading ? 'Загрузка...' : 'Войти'}</button>
                </div>
                <div className={'auth__forgot'}>
                    <button>Забыли пароль</button>
                </div>
                <div className='auth__route'>
                    <span>Ещё нет аккаунта?</span><span></span> <Link to='/auth/register'>Зарегистрируйтесь</Link>
                </div>
            </form>
        </div>
    )
}
export default SingIn