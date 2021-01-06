import { Button, Col, Form, Input, notification, Row } from "antd";
import { Link } from "react-router-dom";
import axios from "../../config/axios";
import LocalStorageService from "../../services/LocalStorageService";
import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../../Context/userContext";

const InsideMainSection = styled.div`
  box-shadow: 1px 0 45px 0.41px #33302a;
  width: 70vw;
  background: #fff;
  box-shadow: 1px 4px 19px 3px rgba(51, 48, 42, 0.47);
  margin: 0 auto;
  border-radius: 1rem;
  height: 100%;
  margin-top: 5rem;
`;

function Login(props) {
  const { retrieveUserInfo } = useContext(UserContext);
  const onFinish = (values) => {
    const body = {
      username: values.username,
      password: values.password,
    };
    axios
      .post("/auth/login", body)
      .then((res) => {
        notification.success({
          description: "Login success.",
        });
        props.history.push("/");
        LocalStorageService.setToken(res.data.token);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        notification.error({
          description: "Login failed. Please try again",
        });
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
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
            color: "white",
            fontFamily: "Playfair",
          }}
        >
          Login
        </h2>
      </Row>
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
            <Row justify="center" name="fbLoginBtn">
              <Col style={{ width: "5rem" }}>Login With :</Col>
              <Button type="primary">
                <a href="http://localhost:7000/auth/facebook">Facebook</a>
              </Button>
            </Row>
            <br></br>
            <Row justify="space-between">
              <Link to="/register">
                <Button type="primary">Register</Button>
              </Link>
              <Button htmlType="submit" type="primary" onClick={Login}>
                SIGN IN
              </Button>
            </Row>
            <br></br>
            <Row justify="center">
              <Link to="/vender/login">
                <Button type="primary">Vendor</Button>
              </Link>
            </Row>
          </Form>
        </Col>
      </Row>
    </InsideMainSection>
  );
}

export default Login;
