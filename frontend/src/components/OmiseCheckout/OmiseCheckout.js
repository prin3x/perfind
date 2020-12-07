import React, { useEffect, useState } from "react";
import axios from "../../config/axios";
import { Form, Input, Button, Select, Modal } from "antd";
import { useHistory } from "react-router-dom";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

export default function OmiseCheckout(props) {
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
        axios
          .post("/charge", {
            token: response.id,
            amount: props.totalPrice || '300000',
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
    <React.Fragment>
      <Form {...layout} name="nest-messages" onFinish={handleFieldSubmit}>
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
  );
}
