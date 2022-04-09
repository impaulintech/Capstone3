/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "../assets/style/cart.css";
import { UserContext } from "../utils/UserContext";
import logo from "../assets/images/logo.png";

const Cart = () => {
  const [x, xx, localProduct, AddToCart, cart] = useContext(UserContext);
  let totalPrice = 0;
  let cartData = [];
  const localCart = localStorage.getItem("cart");
  const target = document.querySelector(".cart-container");

  cart.map((eachId) => {
    for (let i = 0; i < localProduct.product.length; i++) {
      if (eachId.id === localProduct.product[i]._id) {
        cartData.push({ ...localProduct.product[i], qty: eachId.qty });
      }
    }

    return eachId.qty;
  });

  return (
    <React.Fragment>
      <div className="cart-container">
        <div
          className="left-cart-container"
          onClick={() =>
            (document.querySelector(".cart-container").style.display = "none")
          }
        ></div>
        <div className="right-cart-container">
          <div className="order-container">
            <div className="header">
              <img
                src="https://i.imgur.com/SEihV05.png"
                alt="close"
                width="36"
                onClick={() =>
                  (document.querySelector(".cart-container").style.display =
                    "none")
                }
              />
              <h1>Check Out</h1>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <img src={logo} alt="logo" />
                <h1>Your cart is empty!</h1>
              </div>
            ) : (
              <div className="cart-order-list">
                {cartData.map((item) => (
                  <React.Fragment key={Math.random()}>
                    <span style={{ display: "none" }}>
                      {(totalPrice += item.price * item.qty)}
                    </span>
                    <div className="plate">
                      <div
                        className="left-plate"
                        style={{ backgroundImage: `url("${item.image}")` }}
                      ></div>
                      <div className="right-plate">
                        <h3>{item.name}</h3>
                        <span>
                          <strong className="color-disable">
                            Price:&nbsp;
                          </strong>

                          <span>
                            &#8369;{item.price.toLocaleString("en-US")}
                          </span>
                        </span>
                        <span>
                          <strong className="color-disable">
                            Quantity:&nbsp;
                          </strong>
                          <span>{item.qty.toLocaleString("en-US")}</span>
                        </span>
                        <span>
                          <strong className="color-disable">
                            Sub Total:&nbsp;
                          </strong>
                          <span>
                            &#8369;
                            {(item.price * item.qty).toLocaleString("en-US")}
                          </span>
                        </span>
                        <div className="right-plate-buttons">
                          <div className="count">
                            <button
                              className="count-decrement"
                              onClick={() => {
                                AddToCart(item._id, 1, "cart", "decrement");
                              }}
                              disabled={item.qty === 1 ? "disable" : ""}
                            >
                              -
                            </button>
                            <input
                              type="number"
                              className="total-count"
                              defaultValue={Number(item.qty)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  AddToCart(
                                    item._id,
                                    e.target.value,
                                    "change",
                                    "onchange"
                                  );
                                }
                              }}
                            />
                            <button
                              className="count-increment"
                              onClick={() => {
                                AddToCart(item._id, 1, "cart", "increment");
                              }}
                            >
                              +
                            </button>
                          </div>
                          <button
                            className="count-delete"
                            onClick={() => {
                              AddToCart(item._id, 1, "remove", "remove");
                            }}
                          >
                            DELETE
                          </button>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
          <div className="bot-content">
            <div>
              <h2 className="total">
                TOTAL:&nbsp;
                <span>&#8369; {totalPrice.toLocaleString("en-US")}</span>
              </h2>
            </div>
            <button
              className="check-out"
              onClick={() => {
                if (localCart === null || JSON.parse(localCart).length <= 0) {
                  console.log("empty cart");
                } else {
                  window.location = "/checkout";
                }
              }}
            >
              CHECKOUT
            </button>

            <button
              className="continue-shopping"
              onClick={() => {
                window.location = "/products";
              }}
            >
              <a href={"/products"}>CONTINUE SHOPPING</a>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
