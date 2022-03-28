import { combineReducers, createStore } from "redux";
import {userReducer} from './user/reducers'

const rootReduser = combineReducers({
        user: userReducer
    })

export const store = createStore(rootReduser)