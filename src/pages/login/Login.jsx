import { useRef } from "react"
import "./login.css"
import { loginCall } from "../../apiCalls";
import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext"
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch} = useContext(AuthContext)

  const handleClick = (e) => {
    e.preventDefault()
    loginCall({email: email.current.value, password: password.current.value}, dispatch)
  }

  console.log(user)
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">DenniSocial</h3>
          <span className="loginDescription">Connect with DenniSocial</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Email" type="email" required className="loginInput" ref={email} />
            <input placeholder="Password" type="password" required className="loginInput" ref={password} minLength="6"/>
            <button className="loginButton">{isFetching ? <CircularProgress size="20px" style={{ color: 'white' }}/> : "Log In"}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">{isFetching ? <CircularProgress size="20px" style={{ color: 'white' }}/> : "Create new account"}</button>
          </form>
        </div>
      </div>
    </div>
  )
}