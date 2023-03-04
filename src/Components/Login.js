import React from "react";
import "../Style/login.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom"


const Login = () => {

  return (
    <body>
      <div className="cover" >
        <section className="glass">
          <h1>Login</h1>
          <div className="form">
            <form>
            <label>USERNAME</label>
            <input type="text" placeholder="username" required />
            <label>PASSWORD</label>

            <input type="password" placeholder="password" required/>
            <button>Submit</button>

            <span >Not a member?         <Link to="/signup"><u>Sign up!</u></Link></span>
            </form>
          </div>
        </section>

      </div>
    </body>


  )
};


export default Login;