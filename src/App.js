/* eslint-disable no-unused-expressions */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Nav";
import PopUp from "./components/Popup";
import Home from "./user/Home";
import Products from "./user/Products";
import Login from "./user/Login";
import Register from "./user/Register";
import SpecificProduct from "./user/SpecificProduct";
import Cart from "./components/Cart";
import AdminPanel from "./admin/AdminDashboard";
import AddProduct from "./admin/AddProduct";
import EditProduct from "./admin/EditProduct";
import { UserProvider } from "./utils/UserContext";
import DummyLogin from "./utils/dummyLogin";
import Error from "./user/Error";
import UserOrder from "./user/UserOrder";
import CheckOut from "./user/CheckOut";
import "./assets/style/App.css";
import "./assets/style/popup.css";

alert("Note: This is currently my playground in react. Please expect flaws in functions and codes. ")

const App = () => {
  return (
    <UserProvider>
      <React.Fragment>
        <PopUp />
        <Router>
          <NavBar />
          <Cart />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<SpecificProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/order" element={<UserOrder />} />
            <Route path="/checkout" element={<CheckOut />} />
            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<AdminPanel />} />
            <Route path="/admin/add-product" element={<AddProduct />} />
            <Route
              path="/admin/edit-product/:productId"
              element={<EditProduct />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </React.Fragment>
    </UserProvider>
  );
};

export default App;
