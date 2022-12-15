import "./register.css"

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">DenniSocial</h3>
          <span className="loginDescription">Connect with DenniSocial</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input type="password" placeholder="Password" className="loginInput" />
            <input type="password" placeholder="Confirm Password" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Log into your account</button>
          </div>
        </div>
      </div>
    </div>
  )
}