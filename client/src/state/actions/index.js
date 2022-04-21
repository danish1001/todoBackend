import { ADD_ITEM,
    DELETE_ITEM,
    GET_ITEMS
    } from "../../types/todoTypes"
import {
    LOGIN,
    LOAD_USER,
    LOGOUT
    } from "../../types/authTypes";

import ToDoService from "../../service/ToDoService"


export const login = (data) => {
    
    return async (dispatch) => {

        try {
            const payload = {
                email: data.email,
                password: data.password
            }
            
            const res = await ToDoService.postLoginDetails(payload);

            dispatch({
                type: LOGIN,
                payload: res.data.token
            });

            dispatch(loadUser());
            
        } catch (error) {
            console.log("Error found in login action: " + error.message);
        }
        
    }
}

export const logOut = () => {
    return async (dispatch) => {
        dispatch({
            type: LOGOUT
        })
    }
}

export const loadUser = () => {

    return async (dispatch) => {

        try {
            const user = await ToDoService.getCurrentUser();
            console.log("current authenticated user is: " + user.data.name);
    
            dispatch({
                type: LOAD_USER,
                payload: user.data
            });

        } catch (error) {
            console.log("error found in loadUser action: " + error.message)
        }
        
}

}

export const addTask = (task) => {

    return async (dispatch) => {

        try {
            const item = await ToDoService.postToDoItem(task)

            dispatch({
                type: ADD_ITEM,
                payload: item.data
            })

        } catch (error) {
            console.log("error found in addTask action: " + error.message);

        }
        
        
    }
}

export const getAllTasks = () => {  

    return async (dispatch) => {

        try {

            const res = await ToDoService.getToDOItems();

            dispatch({
                type: GET_ITEMS,
                payload: res.todoItems
            })

            } catch (error) {
                console.log("error found in getAllTasks action: " + error.message);
            }
    }
}

export const deleteTask = (id) => {

    return async (dispatch, getState) => {

        try {
            await ToDoService.deleteItem(id).then((status) => {
                console.log(status.data);
            })

            const list = getState().myTasksList.list.filter((item) => (item._id !== id));
    
            dispatch({
                type: DELETE_ITEM,
                payload: list
            })
        } catch (error) {
            console.log("error found in deleteTask action: " + error.message);
        }

    }
}

// global loader with the help of action redux
// jwt token
// axios interceptor bind all api calls