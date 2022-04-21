import {LOGIN, LOAD_USER, LOGOUT} from "../../types/authTypes"

const initialState = {
    isAuthenticated: false,
    user: null
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem("token", action.payload);
            return {
                ...state,
                isAuthenticated: true
            }
        case LOAD_USER:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            }
        case LOGOUT:
            localStorage.removeItem("token");
            return {
                ...state,
                isAuthenticated: false,
                user: null
            }
        default:
            return {
            ...state
        }
    }
}

export default authReducer;