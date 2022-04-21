import React, { useState, Fragment } from 'react'
import {Route, Navigate} from "react-router-dom";
import Login from "../components/pages/Login";

const PrivateRoute = () => {

    const [state, setState] = useState({
        isAuthenticated: false
    })
    const authenticate = () => {
        console.log("authenticate")
    }

  return (
      
        //   <Navigate to="/login" />
        <Route exact path="/" element={<Login authenticate={state.isAuthenticated} authenticated={authenticate} />} />
 
  )
}

export default PrivateRoute