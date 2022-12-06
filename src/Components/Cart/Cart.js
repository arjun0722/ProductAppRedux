import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
function Cart() {
  const allProduct = useSelector((state) => state.cart);

  return (
    <div className="movie__list">
      <h2 className="list__title">Cart</h2>
      <div className="list__cards">
        <Card movies={allProduct} />
      </div>
    </div>
  );
}

export default Cart;
