import { SELECT_FILES } from "./action";

const defaultState = {
    files: []
}

export const fileReducer = (state = defaultState, action) => {
    switch (action.type){
    case SELECT_FILES:
        return {...state, state: action.payload}
    }
    return state;
}