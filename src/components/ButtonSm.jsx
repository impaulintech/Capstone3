import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";

function ButtonSm({ id }) {
  const [userStatus, dispatch, localProduct, AddToCart, cart] =
    useContext(UserContext);
  return (
    <div className="button-sm">
      <a
        href={
          userStatus.isAdmin === null
            ? `/products/${id}`
            : `/admin/edit-product/${id}`
        }
        style={{
          textDecoration: "none",
          color: "white",
          backgroundColor: "transparent",
        }}
      >
        <button className="more-details-sm">
          {userStatus.isAdmin === true ? "Edit" : "More details"}
        </button>
      </a>
      <button
        className="add-to-cart-sm"
        onClick={() => {
          if (userStatus.id === true) {
            AddToCart(id, 1, "cart", null);
            setTimeout(() => {
              document.querySelector(".popup-order-complete").style.display =
                "none";
            }, 3000);
          } else {
            AddToCart(id, 1, "visitor", null);
          }
        }}
      >
        {userStatus.isAdmin === true ? "Disable" : "Add to cart"}
      </button>
    </div>
  );
}

export default ButtonSm;
