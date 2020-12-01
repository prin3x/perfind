import React, { Fragment, useState } from "react";
import { Tabs } from "antd";

import VenderAddProduct from "../../components/VenderAddProduct/VenderAddProduct";
import VenderAllProduct from "../../components/VenderAllProduct.js/VenderAllProduct";
import styled from "styled-components";
const { TabPane } = Tabs;

const InsideMainSection = styled.div`
  box-shadow: 1px 0 45px 0.41px #33302a;
  max-width: 95vw;
  background: #fff;
  box-shadow: 1px 4px 19px 3px rgba(51, 48, 42, 0.47);
  margin: 0 auto;
  border-radius: 1rem;
  height: 100%;
`;

function VenderPage(props) {

  const [activePane, setActivePane] = useState("1");

  const changeActivePane = (value) => {
    setActivePane(value);
  };

  return (

    <Fragment>
      <InsideMainSection>
        <Tabs
          defaultActiveKey={activePane}
          onTabClick={(k) => setActivePane(k)}
          activeKey={activePane}
          centered style={{ borderRadius: "1rem" }}>
          <TabPane
            tab={
              <span
                style={{
                  background: "linear-gradient(to right, #b8956c, #e3d5b0)",
                  padding: "5rem",
                }}
              >
                ALL PRODUCT
            </span>
            }
            key="1"
          >
            <VenderAllProduct />
          </TabPane>
          <TabPane
            tab={
              <span
                style={{
                  background: "linear-gradient(to right, #b8956c, #e3d5b0)",
                  padding: "5rem",
                }}
              >
                ADD PRODUCT
            </span>
            }
            key="2"
            style={{ background: "white" }}
          >
            <VenderAddProduct changeActivePane={changeActivePane} />
          </TabPane>
          <TabPane
            tab={
              <span
                style={{
                  background: "linear-gradient(to right, #b8956c, #e3d5b0)",
                  padding: "5rem",
                }}
              >
                Tab 3
            </span>
            }
            key="3"
            style={{ background: "white" }}
          >
            Content of Tab Pane 3
        </TabPane>
          <TabPane
            tab={
              <span
                style={{
                  background: "linear-gradient(to right, #b8956c, #e3d5b0)",
                  padding: "5rem",
                }}
              >
                Tab 4
            </span>
            }
            key="4"
            style={{ background: "white" }}
          >
            Content of Tab Pane 3
        </TabPane>
        </Tabs>
      </InsideMainSection>
    </Fragment>
  );
}

export default VenderPage;
