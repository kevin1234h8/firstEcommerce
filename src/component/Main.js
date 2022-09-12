import React from "react";
import { Container } from "react-bootstrap";
import Typical from "react-typical";
const Main = () => {
  return (
    <Container className="main-container">
      <Container className="content">
        <Typical
          loops={Infinity}
          wrapper="div"
          steps={[
            " Don't shoot what it looks like",
            1000,
            "Shoot what it feels like",
            1000,
          ]}
        />
      </Container>
    </Container>
  );
};

export default Main;
