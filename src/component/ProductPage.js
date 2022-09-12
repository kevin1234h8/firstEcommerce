import React from "react";
import Product from "./Product";
import { useState } from "react";
import { Button } from "@mui/material";
import { Card, CardGroup, Container } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const ProductPage = ({ handleCart }) => {
  const [colorSelected, setColorSelected] = useState([
    { id: 1, value: "black", color: "black", selected: false },
    { id: 2, value: "white", color: "white", selected: false },
    { id: 3, value: "red", color: "red", selected: false },
  ]);

  const handleColorChange = (index) => (event) => {
    setColorSelected(event.target.value);
  };

  return (
    <>
      <div className="product-container">
        <div className="text">
          <div>
            <span
              style={{
                fontSize: ".7rem",
                marginBottom: -10,
              }}
            >
              Our Product
            </span>
          </div>
        </div>
        <div>Three Different Product</div>
        <Container className="product-detail">
          {Product.map((product, index) => {
            return (
              <div>
                <img
                  className="product"
                  width="100%"
                  height="50%"
                  src={product.image1}
                  alt=""
                  key={index}
                />
                <div className="product-info">
                  <div className="color">
                    <h3 className="name" key={product.name}>
                      {product.name}
                    </h3>
                    <div className="circle-container">
                      <div>
                        {colorSelected.map((color, index) => (
                          <div
                            key={color.id}
                            value={color.value}
                            className="circle"
                            onChange={handleColorChange(index)}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="description" key={product.description}>
                    {product.description}
                  </div>
                  <button className="learn-btn" key={product.button}>
                    {product.button}
                  </button>
                  <Button
                    onClick={() => handleCart(product)}
                    startIcon={<ShoppingCartIcon />}
                    color="primary"
                    variant="outlined"
                    disableRipple
                    className="buy-btn"
                  >
                    Buy
                  </Button>
                </div>
              </div>
            );
          })}
        </Container>
        <div className="shop-now">
          <a href="/">Shop now</a>
          <ArrowForwardIcon className="arrow-right" />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
