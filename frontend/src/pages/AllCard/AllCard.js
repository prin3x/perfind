import { Button, Row } from 'antd';
import React from 'react';
import styled from "styled-components";
import Cart from '../../components/Cart/Cart';


const InsideMainSection = styled.div`
  box-shadow: 1px 0 45px 0.41px #33302a;
  max-width: 70vw;
  background: #fff;
  box-shadow: 1px 4px 19px 3px rgba(51, 48, 42, 0.47);
  margin: 0 auto;
  border-radius: 1rem;
  height: 100%;
`;

export default function AllCard() {
  return (
    <InsideMainSection>
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
          CART
        </h2>
      </Row>
      <Row>My Item</Row>
      <Row><Cart /></Row>
      <Row>Total : xxxxx</Row>
      <Button>Pay</Button>
    </InsideMainSection>
  );
}
