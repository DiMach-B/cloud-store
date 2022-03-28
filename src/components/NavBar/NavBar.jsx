import { NavLink, useHistory } from 'react-router-dom';
import s from './NavBar.module.css'
import { MAIN_ROUTE, PROFILE_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from '../../utils/constURL'
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../redux/user/action';


const NavBar = () => {

    const history = useHistory();
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    const logOut = () => {

        dispatch(setAuth(false))
        history.push(MAIN_ROUTE)
    }

    return (
        <div className={s.navBar}>

            <div className={s.contaner}>
                <div className={s.labelName}><h3>SKYBOX</h3></div>


                {isAuth ?
                    <div className={s.authButton}>
                        <div className={s.profile}>
                            <NavLink style={{ textDecoration: 'none' }} to={PROFILE_ROUTE}>Profile</NavLink>
                        </div>
                        <div>
                            <button onClick={logOut}>LOG OUT</button>
                        </div>
                    </div>
                    :
                    <div className={s.authButton}>
                        <div>
                            <button onClick={() => history.push(REGISTER_ROUTE)}>LOGIN</button>
                            <button onClick={() => history.push(LOGIN_ROUTE)}>SIGN UP</button>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

export default NavBar;