import {combineReducers} from "redux"
import tasksReducer from "./tasksReducer"
import authReducer from "./authReducer";

const reducers = combineReducers({
    myTasksList: tasksReducer,
    authenticate: authReducer
})

export default reducers;