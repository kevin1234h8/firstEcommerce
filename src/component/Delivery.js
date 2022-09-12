import React from "react";
import { Container } from "react-bootstrap";
import deliveryItems from "./deliveryItems";

const Delivery = () => {
  return (
    <Container className="delivery-container">
      <small>SAFE SHOPPING</small>
      <h1
        style={{
          padding: "0 2rem 0 2rem",
        }}
      >
        We guarantee that your order is delivered on time
      </h1>
      <div className="delivery-content">
        {deliveryItems.map((item, index) => (
          <div>
            <div className="icon">
              <div key={index}>{item.image}</div>
              <h4>{item.title}</h4>
            </div>
            <div className="delivery-description">
              {item.descriptions.map((description) => (
                <>
                  <div className="number">{description.number}</div>
                  <div className="delivery-desc">{description.text}</div>
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Delivery;
