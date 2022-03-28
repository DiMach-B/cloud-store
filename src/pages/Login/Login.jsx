import { useRef } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { AuthUser } from "../../http/userApi"
import { setAuth } from "../../redux/user/action"
import { FILES_ROUTE } from "../../utils/constURL"
import s from "./LoginStyle.module.css"

const Login = () => {

    const email = useRef()
    const password = useRef()
    const history = useHistory()
    const dispatch = useDispatch()

    const auth = () => {

        AuthUser(email.current.value, password.current.value)
        .then(data => localStorage.setItem('skyboxToken', data.idToken))
        history.push(FILES_ROUTE)
        dispatch(setAuth(true))

    }


    return (
        <div className={s.auth}>
            <div className={s.form}>
                <h1>LOGIN</h1>
                <h4>ONLINE STORAGE</h4>
                <input type="email" ref={email}/>
                <input type="password" ref={password}/>
                <button onClick={auth}>Login</button>
            </div>
        </div>
    )
}

export default Login;