import Login from "../pages/Login/Login";
import Main from "../pages/Main/Main";
import Profile from "../pages/Profile/Profile";
import Registration from "../pages/Registration/Registration";
import Storage from "../pages/Storage/Storage";
import { FILES_ROUTE,
         LOGIN_ROUTE, 
         MAIN_ROUTE,
         PROFILE_ROUTE,
         REGISTER_ROUTE } from "./constURL";


export const authRouter = [

    {
        path: PROFILE_ROUTE,
        component: Profile
    }
    ,
    {
        path: FILES_ROUTE,
        component: Storage
    }
] 

export const publicRouter = [

    {
        path: MAIN_ROUTE,
        component: Main
    }
    ,
    {
        path: REGISTER_ROUTE,
        component: Registration
    }
    , {
        path: LOGIN_ROUTE,
        component: Login
    }
    , {
        path: PROFILE_ROUTE,
        component: Profile
    }
    ,
] 