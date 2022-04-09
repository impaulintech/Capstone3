/* eslint-disable no-unused-expressions */
import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import ButtonLg from "./ButtonLg";
import dummy from "../assets/images/dummy.png";

const HeroBanner = () => {
  const [userStatus, dispatch, localProduct] = useContext(UserContext);
  let spotlight = Number(localStorage.getItem("spotlight"));
  let x = [];
  localProduct === undefined ? null : (x = localProduct.product[spotlight]);

  const { name, price, image, _id: id } = x;

  return (
    <div className="product-model">
      <div className="left-content">
        <h1>{name === undefined ? "Lorem ipsum dolor sit amet..." : name}</h1>
        <h2>Kit w/ Zeus Tank</h2>
        <div className="price">
          <span className="current">
            PHP {price === undefined ? "000" : price.toLocaleString("en-US")}.oo
          </span>
          <span className="previous">
            <del>
              PHP{" "}
              {price === undefined
                ? "000"
                : (price * 2).toLocaleString("en-US")}
              .oo
            </del>
          </span>
        </div>
        <ButtonLg id={id} />
      </div>

      <div
        className="right-content"
        onClick={() => (window.location = `/products/${id}`)}
      >
        <div
          className="model-image"
          style={{
            backgroundImage: `url('${image === undefined ? dummy : image}')`,
          }}
        >
          <div className="discount spotlight">Spotlight</div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
