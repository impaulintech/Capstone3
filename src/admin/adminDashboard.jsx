import React, { useContext } from "react";
import OrderPlates from "../components/OrderPlates";
import "../assets/style/admin.css";
import { UserContext } from "../utils/UserContext";
import AddProductButton from "../components/AddProduct";
import { getUserOrders } from "./../utils/Authenticator";

const AdminPanel = () => {
  const [userStatus] = useContext(UserContext);
  let checkAdmin = userStatus.isAdmin === null ? false : true;
  let getInfo = JSON.parse(localStorage.getItem("info"));
  const { fName, address, number } = getInfo;
  let getOrders = JSON.parse(localStorage.getItem("orders"));

  return (
    <React.Fragment>
      <div className="admin-panel-container">
        <div className="admin-top-container">
          <div className="admin-top-left-content">
            <img
              src={
                userStatus.isAdmin === null
                  ? "https://i.imgur.com/9HDbJKx.png"
                  : "https://i.imgur.com/RTSHEg5.png"
              }
              alt="logo"
              width="300"
            />
          </div>
          <div className="admin-top-right-content">
            {checkAdmin ? (
              ""
            ) : (
              <div className="customer-details">
                <h1>{fName}</h1>
                <p>{number}</p>
                <p>{address} </p>
              </div>
            )}
            <div className="admin-top-right-top-content">
              <div>
                <h3 className="dim">You have a total of</h3>
                <h1>36</h1>
                <h3 className="dim">Orders</h3>
              </div>
              <div>
                <h3 className="dim">And a total of</h3>
                <h1>PHP 9,999</h1>
                <h3 className="dim">{checkAdmin ? "Sales" : "Amount"}</h3>
              </div>
            </div>
            {checkAdmin ? (
              <div className="admin-top-right-bot-content">
                <div>
                  <h3 className="dim">Total Users</h3>
                  <h1>18</h1>
                </div>
                <div>
                  <h3 className="dim">Total Products</h3>
                  <h1>9</h1>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <h1>{checkAdmin ? "Users" : "Your"} Orders</h1>
        <div className="admin-bot-container">
          {/* {getOrders.map((x) => {
            console.log(x);
          })} */}
          {["a", "b", "c", "d", "e", "f", "g"].map((x) => (
            <OrderPlates id={x} key={Math.random()} />
          ))}
        </div>
      </div>
      {userStatus.id === null ? <AddProductButton /> : ""}
    </React.Fragment>
  );
};

export default AdminPanel;
