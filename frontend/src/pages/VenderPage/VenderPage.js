import React, { Fragment } from "react";
import { Tabs } from "antd";

import VenderAddProduct from "../../components/VenderAddProduct/VenderAddProduct";
import VenderAllProduct from "../../components/VenderAllProduct.js/VenderAllProduct";

const { TabPane } = Tabs;

function VenderPage(props) {
  return (
    <Fragment>
      <Tabs defaultActiveKey="1" centered style={{ borderRadius: "1rem" }}>
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
          <Tabs defaultActiveKey="1" centered></Tabs>
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
          <VenderAddProduct />
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
    </Fragment>
  );
}

export default VenderPage;
