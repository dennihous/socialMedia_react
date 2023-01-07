import { useRef } from "react"
import "./login.css"
import { loginCall } from "../../apiCalls";
import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext"

export default function Login() {
  const email = useRef();
  const password = useRef();
  const {isFetching, error, dispatch} = useContext(AuthContext)

  const handleClick = (e) => {
    e.preventDefault()
    loginCall({email, password}, dispatch)
  }

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
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Create new account</button>
          </form>
        </div>
      </div>
    </div>
  )
}