import {
    ADD_ITEM,
    DELETE_ITEM,
    GET_ITEMS
} from "../types/types"

export default (state, action) => {
    switch(action.type) {
        
        case GET_ITEMS:
            return {
                ...state,
                tasks: action.payload
            }

        case DELETE_ITEM:
            return {
                ...state,
                tasks: state.tasks.filter(task => {
                    return task._id !== action.payload
                })
            }

        case ADD_ITEM:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }

        default:
            return {
                ...state
            }
    }
}