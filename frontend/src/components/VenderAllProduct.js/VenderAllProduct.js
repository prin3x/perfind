import { Col, Row } from "antd";

import React from "react";
import CardProductVender from "../CardProductVender/CardProductVender";

function VenderAllProduct(props) {
  return (
    <div>
      <Row justify="center">
        <h2
          style={{
            background: "linear-gradient(to right, #b8956c, #e3d5b0)",
            width: "100%",
            height: "3.5rem",
            margin: "0 auto",
            textAlign: "center",
            paddingTop: "0.5rem",
            paddingLeft: "0rem",
            paddingRight: "0rem",
            color: "white",
            fontFamily: "Playfair",
          }}
        >
          ALL PRODUCT
        </h2>
      </Row>
      <br></br>
      <CardProductVender />
    </div>
  );
}

export default VenderAllProduct;
