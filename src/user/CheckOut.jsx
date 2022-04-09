/* eslint-disable no-fallthrough */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { useReducer } from "react";
import cod from "../assets/images/cod.png";
import cc from "../assets/images/cc.png";
import gcash from "../assets/images/gcash.jpg";
import liver from "../assets/images/liver.png";
import { CheckoutOrder } from "../utils/Authenticator";

function CheckOut() {
  const [x, xx, localProduct, AddToCart, cart] = useContext(UserContext);
  let totalPrice = 0;
  let cartData = [];
  console.log(cart);

  cart.map((eachId) => {
    for (let i = 0; i < localProduct.product.length; i++) {
      if (eachId.id === localProduct.product[i]._id) {
        cartData.push({ ...localProduct.product[i], qty: eachId.qty });
      }
    }

    return eachId.qty;
  });

  const reducer = (state, action) => {
    switch (action.type) {
      case "info":
        return { ...state, [action.name]: action.payload };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    fName: "",
    address: "",
    number: "",
  });

  return (
    <>
      <nav className="nav-login">
        <h1>
          <a href="/" style={{ textDecoration: "none", color: "white" }}>
            cloud vapers
          </a>
        </h1>
      </nav>
      <div className="login-container">
        <div className="left-checkout-container">
          <h2>Order Summary</h2>
          <div className="left-checkout-content">
            {cartData.map((item) => {
              return (
                <React.Fragment key={Math.random()}>
                  <span style={{ display: "none" }}>
                    {(totalPrice += item.price * item.qty)}
                  </span>
                  <div className="checkout-plate">
                    <div
                      className="left-plate"
                      style={{ backgroundImage: `url("${item.image}")` }}
                    ></div>
                    <div className="right-plate">
                      <h3>{item.name}</h3>
                      <span>
                        <strong className="color-disable">Price:&nbsp;</strong>

                        <span>&#8369;{item.price.toLocaleString("en-US")}</span>
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
                            disabled={item.qty === 1 ? "disable" : ""}
                            onClick={() => {
                              AddToCart(item._id, 1, "cart", "decrement");
                            }}
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
                          disabled={
                            JSON.parse(localStorage.getItem("cart")).length <= 1
                              ? "disable"
                              : ""
                          }
                          className="count-delete"
                          onClick={() => {
                            console.log(
                              JSON.parse(localStorage.getItem("cart")).length
                            );
                            AddToCart(item._id, 1, "remove", "remove");
                          }}
                        >
                          DELETE
                        </button>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className="right-container">
          <div className="header-checkout">
            <h1>Let's checkout</h1>
            <h2>Total: &#8369;{totalPrice.toLocaleString("en-US")}</h2>
          </div>
          <form
            method="post"
            onChange={(e) => {
              dispatch({
                type: "info",
                payload: e.target.value,
                name: e.target.name,
              });
            }}
          >
            <div>
              <h2>Full Name</h2>
              <input
                autoComplete="off"
                type="text"
                name="fName"
                autoFocus="autoFocus"
              />
            </div>
            <div>
              <h2>Address</h2>
              <input autoComplete="off" type="text" name="address" />
            </div>
            <div>
              <h2>Number</h2>
              <input
                autoComplete="off"
                className="checkout-number"
                type="number"
                name="number"
                onChange={(e) => {
                  e.target.value = e.target.value.slice(0, 11);
                }}
              />
            </div>
            <div className="payment-method">
              {[cod, cc, gcash, liver].map((payment) => {
                return (
                  <label htmlFor={payment} key={payment}>
                    <input type="radio" name="mop" id={payment} />{" "}
                    <img src={payment} alt={payment}></img>
                  </label>
                );
              })}
            </div>
          </form>
          <button
            className="check-out"
            onClick={() => {
              if (
                state.fName.length > 5 &&
                state.address.length > 5 &&
                state.number.length === 11
              ) {
                localStorage.setItem("info", JSON.stringify(state));
                CheckoutOrder(totalPrice);
              } else {
                alert("Please complete all details needed.");
              }
            }}
          >
            SUBMIT
          </button>

          <div>
            <h5>
              Forgot Something?{" "}
              <span>
                <a
                  href="/products"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Continue Shopping
                </a>
              </span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
