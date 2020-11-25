import React, { Fragment } from "react";
import { Row, Col, Button, Form, Input, notification } from "antd";
import axios from "../../config/axios";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const layout = {
  labelCol: { xs: 24, sm: 5, md: 4, lg: 5, xl: 5, xxl: 5 },
  wrapperCol: { xs: 24, sm: 19, md: 20, lg: 19, xl: 19, xxl: 19 },
};

const InsideMainSection = styled.div`
  box-shadow: 1px 0 45px 0.41px #33302a;
  max-width: 60vw;
  background: #fff;
  box-shadow: 1px 4px 19px 3px rgba(51, 48, 42, 0.47);
  margin: 0 auto;
  border-radius: 1rem;
  height: 100%;
`;

function ContactForm(props) {
  const onFinish = ({ email, message }) => {
    axios
      .post("/auth/register", { email, message })
      .then((res) => {
        notification.success({
          description: "Signup successfully",
        });
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
        notification.error({
          description: "Something went wrong.",
        });
      });
  };

  const [form] = Form.useForm();
  const formLayout = "vertical";
  const formItemLayout =
    formLayout === "vertical"
      ? {
        labelCol: {
          span: 10,
        },
        wrapperCol: {
          span: 24,
        },
      }
      : null;
  return (
    <Fragment>
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
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
              color: "white",
              fontFamily: "Playfair",
            }}
          >
            Contact Form
        </h2>
        </Row>
        <Row justify="center">
          <Col span={20} className="Form">
            <Row justify="center">
              <Col span={24}>
                <Form
                  style={{
                    width: "100%",
                    marginRight: "3rem",
                    marginLeft: "5rem",
                    marginTop: "1rem",
                  }}
                  {...layout}
                  name="register"
                  onFinish={onFinish}
                  scrollToFirstError
                  ///
                  {...formItemLayout}
                  layout={formLayout}
                  form={form}
                  initialValues={{
                    layout: formLayout,
                  }}
                >
                  <Row>
                    <Col span={20}>
                      <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                          {
                            required: true,
                            message: "Please input your E-mail!!",
                          },
                        ]}
                      >
                        <Input placeholder="input E-mail!" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={20}>
                      <Form.Item
                        name="message"
                        label="Message"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Message",
                          },
                        ]}
                      >
                        <Input
                          style={{ height: "15rem" }}
                          placeholder="input Message!"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row
                    justify="space-around"
                    style={{
                      marginTop: "1.5rem",
                      marginBottom: "3rem",
                      marginRight: "9rem",
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Cancel
                  </Button>

                    <Button type="primary" htmlType="submit">
                      Send
                  </Button>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </InsideMainSection>
    </Fragment>
  );
}

export default withRouter(ContactForm);
