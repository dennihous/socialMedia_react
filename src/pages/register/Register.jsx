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
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username" required ref={username} className="loginInput" />
            <input placeholder="Email" required ref={email} className="loginInput" type="email" />
            <input placeholder="Password" required ref={password} className="loginInput" type="password" minLength="6"/>
            <input placeholder="Confirm Password" required ref={confirmPassword} className="loginInput" type="password" />
            <button className="loginButton" type="submit">Sign Up</button>
            <button className="loginRegisterButton">Log into your account</button>
          </form>
        </div>
      </div>
    </div>
  )
}