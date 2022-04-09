import React, { useContext, useState } from "react";
import "../assets/style/login.css";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import { Authenticator } from "../utils/Authenticator";

const Login = () => {
  const [userStatus] = useContext(UserContext);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);

  return (
    <>
      {userStatus.isAdmin === null && userStatus.id === null ? (
        <React.Fragment>
          <nav className="nav-login">
            <h1>
              <a href="/" style={{ textDecoration: "none", color: "white" }}>
                cloud vapers
              </a>
            </h1>
          </nav>
          <div className="login-container">
            <div className="left-login-container"> </div>
            <div className="right-container">
              <div>
                <h1>Let's you sign in</h1>
                <h2>Welcome Cloud Vapers</h2>
                <h3 className="error-message">[!] {}</h3>
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
                  <input type="checkbox" name="checkbox" />
                  <label htmlFor="checkbox"> Keep me logged in</label>
                </div>
                <input
                  type="submit"
                  value="Sign In"
                  onClick={(e) => {
                    e.preventDefault();
                    Authenticator(username, password, "login");
                  }}
                />
              </form>

              <div>
                <h5>Forgot password?</h5>
                <h5>
                  Dont have an account yet?{" "}
                  <span>
                    <Link
                      to="/register"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Sign Up
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

export default Login;
