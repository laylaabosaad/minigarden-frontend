import { Link } from "react-router-dom";
import "../LoginAndSignup/LoginandSignup.css";
import { useState } from "react";
import swal from "sweetalert";
import secureLocalStorage from "react-secure-storage";

function SignupComponent() {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");



  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:2000/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
     
          fullname
        }),
      });

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
          text: "User email already exists",
        
          icon: "error",
        }); {  console.log(data.message);}
      }
    } catch (error) {
      console.error(error);
    }
  };
  














    // const handleSignup = async (event) => {
    //   event.preventDefault();
    //   try {
    //     const response = await fetch("http://localhost:2000/users/signup", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         email,
    //         password,
    //         fullname
    //       }),
    //     });

    //     const data = await response.json();
    //     if (response.ok) {
    //        window.location.href = "/";
    //       swal({
    //         title: "signup was successful",
    //         icon: "success",
    //       }).then(() => {
    //         window.localStorage.setItem("token", data.token);
    //         if (data.role === "admin") {
    //           window.location.href = "/Products";
    //         } else if (data.role === "user") {
    //           window.location.href = "/";

    //         } else {
    //         }
    //       });
    //     } else {
    //       swal({
    //         title: "Signup Failed",
    //         text: data.error,
    //         icon: "error",
    //       });
    //       {console.log(data.error)}
    //     }
    //   } catch (error) {
    //     console.error(error);
    //      swal({
    //        title: error.data.error,
    //        text: error.data.error,
    //        icon: "error",
    //      });
    //   }
    // };
  
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
            <div className="loginandregisterbackgrnd">
              <h1>Signup</h1>

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
                  placeholder="Fullname"
                  type="text"
                  required
                  value={fullname}
                  onChange={handlefullnameChange}
                ></input>
              </div>
              <div className="loginandregister-inputs">
                <input
                  value={password}
                  placeholder="Password"
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
    </div>
  );
}

export default SignupComponent;
