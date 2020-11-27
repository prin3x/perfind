import { Button, Col, Form, Input, notification, Row } from "antd";
import { Link } from "react-router-dom";
import axios from "../../config/axios";
import LocalStorageService from "../../services/LocalStorageService";
import styled from "styled-components";
import { InsideMainSection } from "../Layout/Layout";

const Background = styled.div`
  min-height: 150rem;
  height: 100%;
  width: 100vw;
  position: relative;
`;

const TopBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  background: url("/assets/index/bg-top.jpg") center center no-repeat;
  background-size: cover;
  z-index: 1;
  position: fixed;
`;
const BottomBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  bottom: 0;
  background: url("/assets/index/bg-bottom.jpg") center center no-repeat;
  background-size: cover;
  z-index: 1;
`;
const MainSection = styled.div`
  margin-top: 4rem;
  width: 100vw;
  position: absolute;
  top: 5%;
  background: transparent;
  z-index: 2;
`;

function VenderLogin(props) {
  const onFinish = (values) => {
    const body = {
      username: values.username,
      password: values.password,
    };
    axios
      .post("/auth/vender/login", body)
      .then((res) => {
        notification.success({
          description: "Login success.",
        });
        LocalStorageService.setToken(res.data.token);
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
        notification.error({
          description: "Login failed. Please try again",
        });
      });
  };

  return (
    <MainSection>
      <InsideMainSection>
        <Row justify="center">
          <Col xs={20} md={14} lg={9}>
            <Form
              labelCol={{ xs: 24, sm: 5, md: 4, lg: 5, xl: 5, xxl: 5 }}
              wrapperCol={{
                xs: 24,
                sm: 19,
                md: 20,
                lg: 19,
                xl: 19,
                xxl: 19,
              }}
              onFinish={onFinish}
              className="Form"
              style={{ padding: "20px" }}
            >
              <Form.Item name="username" label="Username">
                <Input />
              </Form.Item>
              <Form.Item name="password" label="Password">
                <Input.Password />
              </Form.Item>
              <Row justify="center">
                <Button htmlType="submit" onClick={VenderLogin}>
                  SIGN IN
                </Button>
                <Link to="/vender/register">
                  <Button>SIGN UP</Button>
                </Link>
              </Row>
            </Form>
          </Col>
        </Row>
      </InsideMainSection>
    </MainSection>
  );
}

export default VenderLogin;
