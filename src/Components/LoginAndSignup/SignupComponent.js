import { Link } from "react-router-dom";
import "../LoginAndSignup/LoginandSignup.css";
import { useState } from "react";
import swal from "sweetalert";
import secureLocalStorage from "react-secure-storage";
import Footer from "../Footer/Footer";

function SignupComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://mini-garden.onrender.com/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,

            fullname,
          }),
        }
      );

      const data = await response.json();

      secureLocalStorage.setItem("role", data.role);
      localStorage.setItem("userId", data.user);
      window.localStorage.setItem("token", data.token);
      if (response.ok) {
        swal({
          title: "signup successful",
          icon: "success",
        }).then(() => {
          window.location.href = "/Products";
        });
      } else {
        swal({
          title: "signup failed",
          text: data.error,

          icon: "error",
        });
      }
    } catch (error) {
      swal({
        title: "signup failed",
        text: error.response.data.error,

        icon: "error",
      });
      console.error(error);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handlefullnameChange = (event) => {
    setFullname(event.target.value);
  };

  return (
    <div className="loginandregisterall">
      <div className="loginandregister">
        <div className="loginandregister-all">
          <form onSubmit={handleSignup}>
            <div className="loginandregisterbackgrnd glassy">
              <h1>Signup</h1>

              <div className="loginandregister-inputs signup">
                <label>Full Name</label>
                <input
                  autoComplete="off"
                  type="text"
                  required
                  value={fullname}
                  onChange={handlefullnameChange}
                ></input>
              </div>

              <div className="loginandregister-inputs">
                <label>Email</label>
                <input
                  autoComplete="off"
                  type="text"
                  required
                  value={email}
                  onChange={handleEmailChange}
                ></input>
              </div>

              <div className="loginandregister-inputs">
                <label>Password</label>
                <input
                  autoComplete="off"
                  value={password}
                  type="password"
                  required
                  onChange={handlePasswordChange}
                ></input>
              </div>
              <p>
                Already have an account?
                <Link className="link-signandLog" to="/login">
                  Login
                </Link>
              </p>
              <button type="Submit" className="login-register-btn">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignupComponent;
