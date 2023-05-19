import { Link } from "react-router-dom";
import "../LoginAndSignup/LoginandSignup.css"

function LoginComponent() {
  return (
    <div className="loginandregisterall">
      <div className="loginandregister">
        <div className="loginandregister-all">
          <div className="loginandregisterbackgrnd">
            <h1>Login</h1>
            {/* <div className="loginandregister-inputs">
              <input placeholder="Name" type="text" required></input>
            </div> */}
            <div className="loginandregister-inputs">
              <input placeholder="Email" type="text" required></input>
            </div>
            <div className="loginandregister-inputs">
              <input placeholder="Password" type="text" required></input>
            </div>
            <p>
              Don't have an account? <Link className="link-signandLog" to="/Signup">Signup</Link>
            </p>
            <button className="login-register-btn">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
