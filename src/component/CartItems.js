import { Button } from "@mui/material";
import React from "react";

const CartItems = ({ product, handleRemove, handleChange }) => {
  console.log(product);
  return (
    <>
      <div className="item-container">
        <div className="item-item">
          <img
            style={{
              borderRadius: "1rem",
            }}
            src={product.image1}
            width={100}
            height="50%"
            alt=""
          />
          <div className="cart-name">
            <div>
              <span
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "600",
                }}
              >
                {product.name}
              </span>
            </div>
            <div>${product.price}</div>
          </div>
          <div className="button-container">
            <button onClick={() => handleChange(product, -1)}>-</button>
            <div>{product.amount}</div>
            <button onClick={() => handleChange(product, 1)}>+</button>
          </div>
          <Button
            onClick={() => handleRemove(product.id)}
            size="small"
            variant="outlined"
          >
            Remove
          </Button>
        </div>
      </div>
    </>
  );
};

export default CartItems;
