import React, { useState } from "react";
// import todoContext from "../../todoContext/TodoContext"
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../state/actions/index";
import ToDoService from "../../service/ToDoService";
import AddBoxIcon from "@mui/icons-material/AddBox";
import {FormControl,FormHelperText, InputLabel, Input} from "@mui/material";

import { Button, IconButton, Tooltip, Alert, Fab } from "@mui/material";

const InputBox = () => {
  const dispatch = useDispatch();

  const { addTask } = bindActionCreators(actions, dispatch);

  const [state, setState] = useState({
    task: "",
    successfullyAdded: false,
  });

  // const TodoContext = useContext(todoContext);

  const handleChange = (e) => {
    setState({
      task: e.target.value,
    });
  };

  const addTaskNow = async (e) => {
    e.preventDefault();

    if (state.task !== "") {
      // TodoContext.addTask(state.task)
      addTask(state.task);
      setState({ task: "", successfullyAdded: true });
    }

    setTimeout(() => {
      setState({
        successfullyAdded: false,
      });
    }, 1000);
  };

  return (
    <form onSubmit={addTaskNow}>
      <div
        className="row d-flex justify-content-center"
        style={{ margin: "20px" }}
      >
        {state.successfullyAdded && (
          <Alert severity="success" style={{ margin: "20px" }}>
            Successfully added item
          </Alert>
        )}

        <div className="col-auto">
          <FormControl>
        <Input
          fullWidth
          onChange={handleChange}
          value={state.task}
          name="password"
        />
        <FormHelperText>Type Your Today's Task.</FormHelperText>
      </FormControl>
        </div>
        <div className="col-auto">
          <Tooltip title="Add Item" style={{ float: "right" }}>
          <IconButton type="submit">
              <AddBoxIcon />
          </IconButton>
          </Tooltip>
        </div>
      </div>
    </form>
  );
};

export default InputBox;
