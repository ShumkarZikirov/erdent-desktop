import React, {useRef, useState,useEffect} from "react";
import imgLogo from '../../../assets/images/header-logo.png'
import {Link} from 'react-router-dom';
import {getMeServices} from "../../../services/auth-services";
import './header.css'
import {useDispatch, useSelector} from 'react-redux';
const Header = () => {
    const [headerTittle, setHeaderTittle] = useState('')

    const navRef = useRef();
    const {user} = useSelector(state => state.AuthReducer)
    const loadUser = () => {
        dispatch(getMeServices())
    }

    useEffect(() => {
        loadUser()
    }, [])


    const dispatch = useDispatch()
    const showNavbar = (e) => {
        navRef.current.classList.toggle('responsive_nav')
    }
    return (
        <div  className={'header'}>
            <div className={'header_main'}>
                <div className={'header_logo'}>
                    <img className={'logo-img'} src={imgLogo} alt=""/>
                </div>
                <nav ref={navRef} onClick={showNavbar} className={'header-nav'}>
                    <Link  to='/'>Главная</Link>
                    <Link  to='/about'>О нас</Link>
                    <Link  to='/services'>Услуги</Link>
                    <Link  to='/doctors'>Наши врачи</Link>
                    <button className={'nav-btn btn_close nav-close-btn'}><i className="fa-solid fa-x"></i></button>
                    <div className={'nav-btns'}>
                        <Link to='/sing-in'>
                            {user !== '' ?
                                <><Link  to={'/profile'}>{user}</Link></>
                                :
                                <button>Войти</button>
                            }
                        </Link>
                    </div>
                </nav>

                <p className={'headerTittle'}>{headerTittle}</p>
                <button onClick={showNavbar} className={'nav-btn nav-close-btn'} ><i className="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
    )
}

export default Header