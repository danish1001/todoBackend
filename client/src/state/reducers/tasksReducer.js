import { ADD_ITEM,
    DELETE_ITEM,
    GET_ITEMS
} from "../../types/todoTypes"

const initialState = {
    list: [
        
    ]
  };

const tasksReducer = (state = initialState, action) => {

    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                list: action.payload
            }

        case ADD_ITEM:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case DELETE_ITEM: 
            return {
                ...state,
                list: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default tasksReducer;