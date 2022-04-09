import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { UserContext } from "../utils/UserContext";
import dummy from "../assets/images/dummy.png";

const FeaturedProduct = () => {
  const [userStatus, dispatch, localProduct] = useContext(UserContext);

  let spotlight = Number(localStorage.getItem("spotlight"));
  return (
    <div className="featured-products">
      {localProduct.product.length === 0
        ? [0, 0, 0].map(() => (
            <ProductCard
              key={Math.random()}
              name={"Lorem ipsum dolor sit amet..."}
              price={"000"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
              image={dummy}
            />
          ))
        : localProduct.product
            .slice(spotlight, spotlight + 3)
            .map((x) => (
              <ProductCard
                key={Math.random()}
                name={x.name}
                price={x.price}
                description={x.description}
                image={x.image}
                id={x._id}
              />
            ))}
    </div>
  );
};

export default FeaturedProduct;
