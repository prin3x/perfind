import { Button, Checkbox, Col, notification, Row } from 'antd';
import Form from 'antd/lib/form/Form';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Cart from '../../components/Cart/Cart';
import OmiseCheckout from '../../components/OmiseCheckout/OmiseCheckout';
import axios from '../../config/axios';
import { ProductContext } from '../../Context/productContext';
import { OrderContext } from '../../Context/orderContext';




const InsideMainSection = styled.div`
  box-shadow: 1px 0 45px 0.41px #33302a;
  max-width: 70vw;
  background: #fff;
  box-shadow: 1px 4px 19px 3px rgba(51, 48, 42, 0.47);
  margin: 0 auto;
  border-radius: 1rem;
  height: 100%;
`;



export default function AllCart(props) {
  let totalPrice = 0;

  const { totalPriceOrder, setTotalPriceOrder } = useContext(OrderContext);

  const { selectItem, retrieveAllItems } = useContext(ProductContext);

  const putPay = async (totalPrice) => {
    await axios.post(`/checkout/2`, { totalPrice });
    props.history.push("/checkout");
  };

  useEffect(() => {
    retrieveAllItems();
    console.log(retrieveAllItems);
  }, []);
  console.log(totalPrice);
  // console.log(selectItem);
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
      <br></br>
      <Row justify="center"><Col> <h2>My Item</h2></Col></Row>
      <br></br>
      <Row>
        <Col>
          <Checkbox style={{ marginLeft: "7rem", fontSize: "1rem" }} >
            Check all
      </Checkbox>
        </Col>

      </Row>
      <br></br>

      <Row>
        {selectItem.length &&
          selectItem.map(item => {
            const { Product } = item;
            totalPrice += +item.qty * +item.Product.price;

            setTotalPriceOrder(totalPrice);
            return <Cart key={item.id} props={{ ...Product }} qty={item.qty} />;
          })}
      </Row>

      <Row><hr></hr><Col style={{ marginLeft: "50rem" }}>Total : {totalPrice}</Col></Row>
      <Button onClick={() => putPay(totalPrice)} >Pay</Button>




    </InsideMainSection>
  );
}
