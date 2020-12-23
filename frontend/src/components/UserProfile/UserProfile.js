import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { InsideMainSection } from "../../pages/Layout/Layout";
import axios from "../../config/axios";
import styled from "styled-components";
const UserWrapper = styled.section`
  width: 100%;
  height: 50vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function UserProfile() {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState();

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/auth/myinfo");
        setUserData(data);
        return setLoading(false);
      } catch (error) {
        return setLoading(false);
      }
    })();
    return;
  }, []);
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
          {userData?.username}
        </h2>
      </Row>
      <UserWrapper>
        <Row justify="center">
          <Col span={24} className="Form">
            <Row justify="center" gutter={[16, 32]}>
              <Col span={24}>
                <Row>
                  <Col span={9}>{userData?.fname}</Col>
                  <Col span={2}></Col>
                  <Col span={9}>{userData?.lname}</Col>
                </Row>

                <Row>
                  <Col span={20}>{userData?.email}</Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </UserWrapper>
    </InsideMainSection>
  );
}
