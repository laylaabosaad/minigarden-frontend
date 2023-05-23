import { Link } from "react-router-dom";
import "../LoginAndSignup/LoginandSignup.css";
import React from "react";
import { useState } from "react";
import swal from "sweetalert";
import "../LoginAndSignup/LoginandSignup.css";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:2000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        swal({
          title: "Login successful",
          icon: "success",
        }).then(() => {
          window.localStorage.setItem("token", data.token);
          if (data.role === "admin") {
            window.location.href = "/Products";
          } else if (data.role === "user") {
            window.location.href = "/";
          } else {
          }
        });
      } else {
        swal({
          title: "Login failed",
          text: data.message,
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="loginandregisterall">
      <div className="loginandregister">
        <div className="loginandregister-all">
          <form onSubmit={handleLogin}>
            <div className="loginandregisterbackgrnd">
              <h1>Login</h1>

              <div className="loginandregister-inputs">
                <input
                  placeholder="Email"
                  type="text"
                  required
                  value={email}
                  onChange={handleEmailChange}
                ></input>
              </div>
              <div className="loginandregister-inputs">
                <input
                  value={password}
                  placeholder="Password"
                  type="text"
                  required
                  onChange={handlePasswordChange}
                ></input>
              </div>
              <p>
                Don't have an account?
                <Link className="link-signandLog" to="/Signup">
                  Signup
                </Link>
              </p>
              <button type="Submit" className="login-register-btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
