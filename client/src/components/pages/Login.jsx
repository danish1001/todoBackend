import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actions from "../../state/actions/index";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Input from "@mui/material/Input";
import Item from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormGroup from "@mui/material/FormGroup";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { login } = bindActionCreators(actions, dispatch);
  const authenticated = useSelector((state) => state.authenticate);

  useEffect(() => {
    if (authenticated.isAuthenticated) {
      navigate("/"); // redirects to home route after checking if it is authenticated or not
    }
    // eslint-disable-next-line
  }, [authenticated.isAuthenticated]);

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // call action from state for login;
    login(state);
  };

  return (
    <div>
    <FormGroup sx={{ width: "25ch"}}>
      <FormControl>
        <InputLabel>Email address</InputLabel>
        <Input 
          fullWidth 
          onChange={onChange}
          value={state.email} 
          name="email" 
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <InputLabel>Password</InputLabel>
        <Input
          fullWidth
          onChange={onChange}
          value={state.password}
          name="password"
        />
        <FormHelperText>Your Password is protected with us.</FormHelperText>
      </FormControl>

      <FormControl>
        <Button
          fullWidth
          onClick={onSubmit}
          type="submit"
          value="Login"
          variant="contained"
        >
          Login
        </Button>
      </FormControl>
    </FormGroup>
    </div>
  );
};

export default Login;

{
  /* <form
        onSubmit={onSubmit}
        className="form-container"
        style={{ width: "22rem", margin: "0 auto" }}
      >
        <div className="mb-3">
          <label className="form-label">email</label>
          <input
            onChange={onChange}
            value={state.email}
            name="email"
            className="form-control"
            type="text"
            placeholder="email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={onChange}
            value={state.email}
            name="email"
            className="form-control"
            type="text"
            placeholder="password"
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control btn btn-primary"
            type="submit"
            value="Login"
          />
        </div>
      </form> */
}
