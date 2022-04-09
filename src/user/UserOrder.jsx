import React from "react";
import AdminPanel from "../admin/AdminDashboard";

function UserOrder() {
  let checkUser =
    JSON.parse(localStorage.getItem("user")).id === null ? false : true;

  return <>{checkUser ? <AdminPanel /> : (window.location = "/")}</>;
}

export default UserOrder;
