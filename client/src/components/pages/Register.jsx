import React from 'react'

const Register = () => {
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Login</h1>

        <form  className="form-container" style={{width: "22rem", margin: "0 auto"}}>

            <div className="mb-3">
              <label className="form-label">Name</label>
              <input className="form-control" type="text" placeholder="name" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input className="form-control" type="text" placeholder="email" required />
            </div>
            
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input className="form-control" type="password" placeholder="password" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input className="form-control" type="password" placeholder="password" required />
            </div>
            
            <div className="mb-3">
              <input className="form-control btn btn-primary" type="submit" value="Login" />
            </div>
        </form>
    </div>
  )
}

export default Register