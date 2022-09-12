import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import items from "./items";
const ProductSub = () => {
  return (
    <div className="sub-product-container">
      {items.map((item, index) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export default ProductSub;
