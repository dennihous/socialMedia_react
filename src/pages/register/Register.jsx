import "./register.css"
import { useRef } from "react";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">DenniSocial</h3>
          <span className="loginDescription">Connect with DenniSocial</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" ref={username} className="loginInput" />
            <input placeholder="Email" ref={email} className="loginInput" />
            <input type="password" placeholder="Password" ref={password} className="loginInput" />
            <input type="password" placeholder="Confirm Password" ref={confirmPassword} className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Log into your account</button>
          </div>
        </div>
      </div>
    </div>
  )
}