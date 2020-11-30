import React, { createContext, useEffect, useState, useReducer } from 'react';
import { Checkbox, Row, Col, Button } from 'antd';
import axios from '../../config/axios';
import { ProductReducer } from './ProductReducer';

export const ProductContext = createContext();

export default function Cart({ props }) {
  const { image, name, price, product_id, qty, size } = props;
  const [selectItem, dispatch] = useReducer(ProductReducer, []);


  const retreiveItems = async () => {
    const { data } = await axios.get('/carts');
    if (data) dispatch({ type: 'RETRIEVE_ALL_ITEMS', data });
  };

  const sendUpdatedData = async id => {
    await axios.patch(`/carts/${id}`, {
      qty: selectItem.find(item => item.product_id === id).qty,
    });
  };

  const updateQty = async (id, qty) => {
    qty === 0
      ? deleteProduct(id)
      : await dispatch({ type: 'UPDATE_QTY', id, qty });
  };
  const deleteProduct = async id => {
    await axios.delete(`/carts/${id}`);
    dispatch({ type: 'DELETE_ITEM_FROM_CART', id });
  };

  useEffect(() => {
    retreiveItems();
  }, []);

  useEffect(() => {
    sendUpdatedData(product_id);
  }, [selectItem]);

  return (
    <Row justify="center">
      <Col >
        <Checkbox style={{ marginLeft: "1rem", marginTop: "1rem" }}>
          <Row>
            <Col>
              <img src={image} alt={name} style={{ width: "10rem", height: "10rem", marginLeft: "2rem" }} />
            </Col>
            <Col style={{ marginLeft: "2rem", marginRight: "2rem" }}>
              <div>
                Product : {name}
              </div>
              <div>
                Price: {price}
              </div>
              <div>
                Size : {size}
              </div>
            </Col>
            <Col style={{ marginLeft: "2rem", marginRight: "0.5rem" }}>
              <Button type="primary" onClick={() => {
                updateQty(product_id, qty - 1);
              }}>-</Button>
            </Col>
            <div>
              Quantity: {qty}
            </div>


            <Col style={{ marginRight: "2rem", marginLeft: "0.5rem" }}>
              <Button type="primary" oonClick={() => {
                updateQty(product_id, qty + 1);
              }}>+</Button>
            </Col>

            <Col>
              <Button type="primary" onClick={() => {
                deleteProduct(product_id);
              }}>Delete</Button>
            </Col>
          </Row>

        </Checkbox>
        <hr></hr>
      </Col>
    </Row >
  );
}

