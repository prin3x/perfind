import React, { useEffect, useState, useContext } from "react";
import axios from "../../config/axios";
import { Form, Input, Button, Select, Modal, Row } from "antd";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { OrderContext } from "../../Context/orderContext";


const InsideMainSection = styled.div`
  box-shadow: 1px 0 45px 0.41px #33302a;
  max-width: 60rem;
  background: #fff;
  box-shadow: 1px 4px 19px 3px rgba(51, 48, 42, 0.47);
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 10rem;
  border-radius: 1rem;
`;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

export default function OmiseCheckout() {

  const { totalPriceOrder } = useContext(OrderContext);

  const [confirmPayment, setConfirmPayment] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const history = useHistory();

  const handleOk = () => {
    if (confirmPayment) {
      history.push('/');
    } else {
      setConfirmModal(false);
    }
  };

  useEffect(() => {
    window.Omise.setPublicKey("pkey_test_5m4dyglwj7eqrxmkix2");
  }, []);

  useEffect(() => {
    if (confirmPayment) setConfirmModal(true);
  }, [confirmPayment]);

  const handleFieldSubmit = (values) => {
    window.Omise.createToken("card", values, function (statusCode, response) {
      if (statusCode === 200) {
        axios.post("/charge", {
          token: response.id,
          amount: totalPriceOrder || '300000',
        })
          .then((response) => {
            if (response.request.statusText === 'OK') setConfirmPayment(true);
          });
      } else {
        alert(response.code + ": " + response.message);
      }
    });
  };
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
          Checkout
        </h2>
      </Row>
      <React.Fragment >
        <Form {...layout} name="nest-messages" onFinish={handleFieldSubmit} style={{ padding: "3rem" }}>
          <Form.Item
            name="number"
            label="Number"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="4242424242424242" />
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"

            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="John Doe" />
          </Form.Item>
          <Form.Item
            name="expiration_month"
            label="Exp. Month"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="11">
              <Select.Option value="1">1</Select.Option>
              <Select.Option value="2">2</Select.Option>
              <Select.Option value="3">3</Select.Option>
              <Select.Option value="4">4</Select.Option>
              <Select.Option value="5">5</Select.Option>
              <Select.Option value="6">6</Select.Option>
              <Select.Option value="7">7</Select.Option>
              <Select.Option value="8">8</Select.Option>
              <Select.Option value="9">9</Select.Option>
              <Select.Option value="10">10</Select.Option>
              <Select.Option value="11">11</Select.Option>
              <Select.Option value="12">12</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="expiration_year"
            label="Exp. Year"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="2022">
              <Select.Option value="2020">2020</Select.Option>
              <Select.Option value="2021">2021</Select.Option>
              <Select.Option value="2022">2022</Select.Option>
              <Select.Option value="2023">2023</Select.Option>
              <Select.Option value="2024">2024</Select.Option>
              <Select.Option value="2025">2025</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="security_code"
            label="Security Code"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="123" />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
          </Button>
          </Form.Item>
        </Form>

        <Modal
          title="Basic Modal"
          visible={confirmModal}
          closable={false}
          footer={null}
          centered
        >
          <p>Congrat!</p>
          <p>Successful Payment</p>
          <Button type='primary' onClick={handleOk}>Ok</Button>
        </Modal>
      </React.Fragment>
    </InsideMainSection>
  );
}
