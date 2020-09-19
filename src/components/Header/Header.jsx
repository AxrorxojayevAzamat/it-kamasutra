import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = ({isAuth, login, logout}) => {
    return (
        <header className={s.header}>
            <img src="https://pbs.twimg.com/profile_images/473506797462896640/_M0JJ0v8.png" alt="" />
            <div className={s.loginBlock}>
                { isAuth ? <div>{login} - <button onClick={logout}>logout</button></div>
                    : <NavLink to="/login">login</NavLink> }
            </div>
        </header>
    );
}

export default Header;