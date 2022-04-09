import React from "react";

const OrderPlates = ({ id }) => {
  return (
    <div className="admin-bot-plates">
      <div
        className={`admin-bot-plates-top ${id}`}
        onClick={() => {
          let target = document.querySelector(`.x-${id}`);
          if (target.classList.contains("show-plate")) {
            target.classList.remove("show-plate");
          } else {
            target.classList.add("show-plate");
          }
        }}
      >
        <div>
          <img
            src="https://i.imgur.com/Smb9PCw.png"
            width="18"
            alt="btn"
            style={{ opacity: 0.5, cursor: "pointer" }}
          />
          &nbsp; &nbsp;
          <h3>user@mail.com</h3>
        </div>
        <h3 className="dim">
          Total Amount:&nbsp;
          <span className="color-secondary">PHP 9,999</span>
        </h3>
        <h3 className="dim">
          Date Ordered: &nbsp; <span className="color-secondary">3/3/3</span>
        </h3>
      </div>
      <div className={`admin-bot-plates-bot x-${id}`}>
        <hr />
        <div className="admin-bot-plates-bot-right">
          <img src="https://i.imgur.com/y2LvNg4.png" alt="pic" width="100" />
          <h3> Product Nameeeeeeeeeeeeeeeeee</h3>
          <h3 className="dim">
            Product Price: &nbsp;
            <span className="color-secondary">PHP 9,999</span>
          </h3>
          <h3 className="dim">
            Quantity: &nbsp; <span className="color-secondary">1</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default OrderPlates;
