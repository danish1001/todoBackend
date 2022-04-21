import React, {Fragment, useEffect} from 'react'
import Input from '../todoItem/Input';
import TodoList from '../TodoList';
import Login from './Login';
import {NavLink, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux"

const Home = () => {

    const state = useSelector(state => state.authenticate);
    
    const navigate = useNavigate();

    useEffect(() => {
        if(!state.isAuthenticated) {
            navigate("/login")
        }
    },[state.isAuthenticated])


  return (
        <Fragment >
            <Input />
            <TodoList />
        </Fragment>
  )
}

export default Home