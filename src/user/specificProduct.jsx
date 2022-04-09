/* eslint-disable no-unused-expressions */
import React, { useContext } from "react";
import Footer from "../components/Footer";
import ProductBanner from "../components/ProductBanner";
import ProductCard from "../components/ProductCard";
import { UserContext } from "../utils/UserContext";
import "../assets/style/specific.css";
import { useParams } from "react-router-dom";
import dummy from "../assets/images/dummy.png";

const SpecificProduct = () => {
  const [userStatus, dispatch, localProduct] = useContext(UserContext);
  const { productId } = useParams();
  let g = Number(localStorage.getItem("spotlight"));
  const matchProduct = () => {
    if (localProduct.product.length === 0) {
      null;
    } else {
      for (let i = 0; i < localProduct.product.length; i++) {
        if (localProduct.product[i]._id === productId) {
          return (
            <>
              <ProductBanner
                name={localProduct.product[i].name}
                price={localProduct.product[i].price}
                description={localProduct.product[i].description}
                image={localProduct.product[i].image}
                id={localProduct.product[i]._id}
              />
              <div className="spcp">
                <h1 className="subh1">Similar Product</h1>
                <div className="similar">
                  {localProduct.product.length === 0
                    ? null
                    : localProduct.product
                        .slice(g, g + 3)
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
              </div>
              <Footer />
            </>
          );
        }
      }
    }
  };

  return (
    <>
      {userStatus.isAdmin === null ? (
        <React.Fragment>
          {localProduct.product.length === 0 ? (
            <>
              <ProductBanner
                name={"Lorem ipsum dolor sit amet..."}
                price={"000"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
                image={dummy}
              />
              <div className="spcp">
                <h1 className="subh1">Similar Product</h1>
                <div className="similar">
                  {[0, 0, 0].map(() => (
                    <ProductCard
                      key={Math.random()}
                      name={"Lorem ipsum dolor sit amet..."}
                      price={"000"}
                      description={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      }
                      image={dummy}
                    />
                  ))}
                </div>
              </div>
              <Footer />
            </>
          ) : (
            matchProduct()
          )}
        </React.Fragment>
      ) : (
        (window.location = "/")
      )}
    </>
  );
};

export default SpecificProduct;
