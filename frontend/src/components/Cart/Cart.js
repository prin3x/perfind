import React, { useEffect, useContext } from 'react';
import { Checkbox, Row, Col, Button } from 'antd';
import { ProductContext } from '../../Context/productContext';


export default function Cart({ props, qty }) {
  const { selectItem, updateQty, deleteProduct, sendUpdatedData } = useContext(
    ProductContext
  );
  const { main_image, name, price, id, size } = props;


  return (



    <Row >
      <Col>
        <img src={main_image} alt={name} style={{ width: "10rem", height: "10rem", marginBottom: "2rem" }} />
      </Col>
      <Col >
        <div style={{ width: "17rem" }}>
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
          updateQty(id, -1)
        } >-</Button>
      </Col>
      <div>
        Quantity: {qty}
      </div>


      <Col style={{ marginRight: "2rem", marginLeft: "0.5rem" }}>
        <Button type="primary" onClick={() => {
          updateQty(id, 1);
        }}>+</Button>
      </Col>

      <Col style={{ marginLeft: "2rem" }}>
        <Button type="primary" onClick={() => {
          deleteProduct(id);
        }}>Delete</Button>
      </Col>
    </Row>




  );
}

