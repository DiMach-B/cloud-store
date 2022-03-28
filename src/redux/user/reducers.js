import { AUTH_USER } from "./action";

const defaultState = {
    user: {},
    isAuth: false
}

export const userReducer = (state = defaultState, action) => {

    switch (action.type) {
        case AUTH_USER:
            return { ...state, isAuth: action.payload }
    }
    return state;
}