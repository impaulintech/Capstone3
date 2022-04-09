/* eslint-disable no-fallthrough */
import axios from "axios";

export function Authenticator(username, password, login) {
  axios
    .post(
      `https://capstone02-pong.herokuapp.com/users/${
        login === "login" ? "login" : "register"
      }`,
      {
        email: username,
        password,
      }
    )
    .then((response) => {
      switch (login) {
        case "login":
          if (response.data.access) {
            localStorage.setItem("token", JSON.stringify(response.data.access));
            localStorage.setItem(
              "user",
              JSON.stringify({
                id: true,
                isAdmin: null,
              })
            );
            return (window.location = "/");
          } else {
            return alert(response.data.message);
          }
        case "register":
          localStorage.setItem("token", JSON.stringify(response.data.access));
          localStorage.setItem(
            "user",
            JSON.stringify({
              id: true,
              isAdmin: null,
            })
          );
          return (window.location = "/");
        default:
          throw new Error();
      }
    });
  return;
}

export function CheckoutOrder(totalAmount) {
  const token = JSON.parse(localStorage.getItem("token"));
  const cart = JSON.parse(localStorage.getItem("cart"));

  const options = {
    method: "POST",
    url: "https://capstone02-pong.herokuapp.com/users/checkout",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: {
      totalAmount,
      products: cart,
    },
  };

  axios
    .request(options)
    .then((response) => {
      if (response.data.auth) {
        alert("Error: Something went wrong.");
      } else {
        document.querySelector(".popup-container").style.display = "block";
        localStorage.removeItem("cart");
        setTimeout(() => {
          window.location = "/order";
        }, 1000);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export function getUserOrders() {
  const token = JSON.parse(localStorage.getItem("token"));
  const options = {
    method: "GET",
    url: "https://capstone02-pong.herokuapp.com/users/my-orders",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .request(options)
    .then((response) => {
      localStorage.setItem("orders", JSON.stringify(response.data));
    })
    .catch((error) => {
      return console.log(error);
    });
}
