import React, { useReducer } from "react";
import todoContext from "./TodoContext";
import todoReducer from "./TodoReducer";
import ToDoService from "../service/ToDoService";
import { ADD_ITEM, DELETE_ITEM, GET_ITEMS } from "../types/types";
// import axios from "axios";

const TodoState = (props) => {
  const initialState = {
    tasks: [],
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

//   get all the tasks
  const getTasks = async () => {
    let res = await ToDoService.getToDOItems("/api");

    dispatch({
      type: GET_ITEMS,
      payload: res.todoItems,
    });
  };

//   add input task
  const addTask = async (task) => {
    
    const res = await ToDoService.postToDoItem(task);

    dispatch({
      type: ADD_ITEM,
      payload: res.data,
    });
  };

//   delete task
  const deleteItem = async (id) => {

    //  ToDoService.deleteItem(id);

    dispatch({
      type: DELETE_ITEM,
      payload: id,
    });
    console.log(id);
  };

  
  return (
    <todoContext.Provider
      value={{
        tasks: state.tasks,
        getTasks,
        deleteItem,
        addTask,
      }}
    >
      {props.children}
    </todoContext.Provider>
  );
};

export default TodoState;
