import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
const Layout = () => {
  let total = useSelector((state)=>state.cart.totalPrice);
  const show = useSelector((state)=>state.cart.showCart)
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
      {!show &&<CartItems/>}
    </React.Fragment>
  );
};

export default Layout;
