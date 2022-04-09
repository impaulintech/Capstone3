import React, { useContext, useState } from "react";
import "../assets/style/register.css";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import { Authenticator } from "../utils/Authenticator";

const Register = () => {
  const [userStatus] = useContext(UserContext);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [password2, setPassword2] = useState([]);
  return (
    <>
      {userStatus.isAdmin === null && userStatus.id === null ? (
        <React.Fragment>
          <nav className="nav-register">
            <h1>
              <a href="/" style={{ textDecoration: "none", color: "white" }}>
                cloud vapers
              </a>
            </h1>
          </nav>
          <div className="register-container">
            <div className="left-register-container"> </div>
            <div className="right-register-container">
              <div>
                <h1>Create new account</h1>
                <h2>Welcome Cloud Vapers</h2>
              </div>
              <form method="post">
                <div>
                  <h2>Email</h2>
                  <input
                    type="email"
                    name="email"
                    autoFocus="autoFocus"
                    autoComplete="off"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <h2>Password</h2>
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <h2>Password again</h2>
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => {
                      setPassword2(e.target.value);
                    }}
                  />
                </div>
                <div></div>
                <input
                  type="submit"
                  value="Sign Up"
                  onClick={(e) => {
                    e.preventDefault();
                    if (password === password2) {
                      if (username.includes("@")) {
                        Authenticator(username, password, "register");
                      } else {
                        alert("Please input valid email");
                      }
                    } else {
                      alert("Password did not matched");
                    }
                  }}
                />
              </form>

              <div>
                <h5>
                  Already have an account?{" "}
                  <span>
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Sign In
                    </Link>
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        null((window.location = "/"))
      )}
    </>
  );
};

export default Register;
