import React, { Component, useContext, useEffect } from "react";
import TodoItem from "./todoItem/TodoItem";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../state/actions/index";
import { bindActionCreators } from "redux";
import axios from "axios";
import ToDoService from "../service/ToDoService";
import { Typography, List, ListItem, Box } from "@mui/material";

const TodoList = (props) => {
  const dispatch = useDispatch();

  const { getAllTasks, deleteTask } = bindActionCreators(actions, dispatch);

  const state = useSelector((state) => state.myTasksList);

  useEffect(async () => {
    getAllTasks();
  }, []);

  const deleteItem = async (id) => {
    deleteTask(id);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: "25ch", bgcolor: 'background.paper' }}>
      <List className="list-group list-group-flush">
        {state.list.length > 0 ? 
        (
          state.list.map((task) => (
            <ListItem>
              <TodoItem
                key={task._id}
                task={task.todoItem}
                id={task._id}
                deleteItem={deleteItem}
              />
            </ListItem>
          ))
        ) : (
          <Typography variant="h2" style={{ padding: "20px" }}>
            Add Tasks to view
          </Typography>
        )}
      </List>
      </Box>
  );
};

export default TodoList;
