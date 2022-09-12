import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Shop = () => {
  return (
    <div className="shop-container">
      <div className="text">A good photography is knowing where to stand </div>
      <div className="shop-now">
        <a href="/" className="shop white">
          Shop now
        </a>
        <ArrowForwardIcon className="arrow-right" />
      </div>
    </div>
  );
};

export default Shop;
