import { Link } from "react-router-dom";
import "../LoginAndSignup/LoginandSignup.css";

function SignupComponent() {
  return (
    <div className="loginandregisterall">
      <div className="loginandregister">
        <div className="loginandregister-all">
          <div className="loginandregisterbackgrnd">
            <h1>Sign Up</h1>
            <div className="loginandregister-inputs">
              <input placeholder="Name" type="text" required></input>
            </div>
            <div className="loginandregister-inputs">
              <input placeholder="Email" type="text" required></input>
            </div>
            <div className="loginandregister-inputs">
              <input placeholder="Password" type="text" required></input>
            </div>
            <p>
              Already have an account?{" "}
              <Link className="link-signandLog" to="/Login">
                Login
              </Link>
            </p>
            <button className="login-register-btn">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupComponent;
