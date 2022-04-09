/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";

const NavBar = () => {
  const toggle = () => {
    const toggle = document.querySelector(".menu");
    if (toggle.classList.contains("toggle")) {
      toggle.classList.remove("toggle");
    } else {
      toggle.classList.add("toggle");
    }
  };
  const closeToggle = () => {
    const toggle = document.querySelector(".menu");
    toggle.classList.add("toggle");
  };

  const [userStatus, dispatch, localProduct] = useContext(UserContext);
  let classX = userStatus.id === null ? "popup" : "cart";
  let path = window.location.pathname;
  let checkAdmin = userStatus.isAdmin === null ? true : false;
  return (
    <>
      {path === "/login" || path === "/register" || path === "/checkout" ? (
        ""
      ) : (
        <nav className="nav">
          <div className="logo">
            <h1>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                cloud vapers
              </Link>
            </h1>
            <div
              className="x"
              style={{
                justifyContent: checkAdmin ? "space-evenly" : "flex-end",
              }}
            >
              {checkAdmin ? (
                <>
                  <img
                    src="https://i.imgur.com/oCcM5tC.png"
                    width="21"
                    alt="orders"
                    onClick={() => {
                      document.querySelector(".popup-container").style.display =
                        "block";
                      closeToggle();
                    }}
                  />
                  <img
                    src="https://i.imgur.com/sKkdgD2.png"
                    width="21"
                    alt="cart"
                    onClick={() => {
                      document.querySelector(
                        `.${classX}-container`
                      ).style.display = "block";
                      closeToggle();
                    }}
                  />
                </>
              ) : null}
              <img
                src="https://i.imgur.com/yMoNMdN.png"
                width="30"
                alt="menus"
                onClick={() => {
                  toggle();
                }}
              />
            </div>
          </div>
          <div className="menu toggle">
            <ul style={{ marginRight: `${checkAdmin ? "0px" : "90px"}` }}>
              {checkAdmin ? (
                <li>
                  <Link to="/">Home</Link>
                </li>
              ) : null}
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                {checkAdmin ? (
                  userStatus.id === null ? (
                    <a href="/login">Login</a>
                  ) : (
                    <a
                      href="/login"
                      onClick={() => dispatch({ type: "resetData" })}
                    >
                      Logout
                    </a>
                  )
                ) : (
                  <a
                    href="/login"
                    onClick={() => dispatch({ type: "resetData" })}
                  >
                    Logout
                  </a>
                )}
              </li>
              {checkAdmin ? (
                userStatus.id === null ? (
                  <li>
                    <a href="/register">Register</a>
                  </li>
                ) : null
              ) : null}
            </ul>
          </div>
          {checkAdmin ? (
            <div className="cart">
              <span>
                {userStatus.id === null ? (
                  <img
                    src="https://i.imgur.com/oCcM5tC.png"
                    width="25"
                    onClick={() => {
                      document.querySelector(".popup-container").style.display =
                        "block";
                    }}
                  />
                ) : (
                  <Link to={"/order"}>
                    <img src="https://i.imgur.com/oCcM5tC.png" width="25" />
                  </Link>
                )}
              </span>
              <span>
                <img
                  src="https://i.imgur.com/sKkdgD2.png"
                  width="27"
                  onClick={() =>
                    (document.querySelector(
                      `.${classX}-container`
                    ).style.display = "block")
                  }
                />
              </span>
            </div>
          ) : null}
        </nav>
      )}
    </>
  );
};

export default NavBar;
