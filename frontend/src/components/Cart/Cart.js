import React, { useEffect, useContext } from 'react';
import { Checkbox, Row, Col, Button } from 'antd';
import { ProductContext } from '../../Context/productContext';


export default function Cart({ props, qty }) {
  const { selectItem, updateQty, deleteProduct, sendUpdatedData } = useContext(
    ProductContext
  );
  const { main_image, name, price, id, size } = props;


  return (
    <Row justify="center">
      <Col >
        <Checkbox style={{ marginLeft: "1rem", marginTop: "1rem" }}>
          <Row>
            <Col>
              <img src={main_image} alt={name} style={{ width: "10rem", height: "10rem", marginLeft: "2rem" }} />
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
              <Button type="primary" onClick={() =>
                updateQty(id, --qty)
              } >-</Button>
            </Col>
            <div>
              Quantity: {qty}
            </div>


            <Col style={{ marginRight: "2rem", marginLeft: "0.5rem" }}>
              <Button type="primary" onClick={() => {
                updateQty(id, ++qty);
              }}>+</Button>
            </Col>

            <Col>
              <Button type="primary" onClick={() => {
                deleteProduct(id);
              }}>Delete</Button>
            </Col>
          </Row>

        </Checkbox>
        <hr></hr>
      </Col>
    </Row >
  );
}

