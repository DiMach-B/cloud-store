import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RegistrationUser } from '../../http/userApi';
import {LOGIN_ROUTE} from '../../utils/constURL'
import s from './RegistrationStyle.module.css'

const Registration = () => {

    const email = useRef();
    const password = useRef();
    const repassword = useRef();
    const history = useHistory();

    const register = () => {
        RegistrationUser(email.current.value, password.current.value)
        history.push(LOGIN_ROUTE)

    }

    return (
        <div className={s.registr}>
            <div className={s.form}>
                <h1>REGISTER</h1>
                <h4>ONLINE STORAGE</h4>
                <input type="email" ref={email}/>
                <input type="password" ref={password}/>
                <input type="password" ref={repassword}/>
                <input/>
                <button onClick={register}>Register</button>
            </div>
        </div>
    )
}

export default Registration;