import React, { useContext } from "react";
import Form from "../components/Form";
import dummy from "../assets/images/dummy.png";
import { UserContext } from "../utils/UserContext";
import Footer from "../components/Footer";

const AddProduct = () => {
  const [userStatus, dispatch, localProduct] = useContext(UserContext);
  return (
    <>
      {userStatus.isAdmin === true ? (
        <React.Fragment>
          <Form
            title="Add Product"
            name={"Product Name..."}
            price={"666"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
            image={dummy}
          />
          <Footer />
        </React.Fragment>
      ) : (
        (window.location = "/")
      )}
    </>
  );
};

export default AddProduct;
