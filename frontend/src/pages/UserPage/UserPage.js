import { Tabs } from "antd";
import { Fragment } from "react";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import UserProfile from "../../components/UserProfile/UserProfile";
import UserOrderHistory from "../../components/UserOrderHistory/UserOrderHistory";

const { TabPane } = Tabs;
const MenuWrapper = styled.div`
  padding: 0 0rem;
  .ant-menu-item {
    height: 2rem;
  }
  .ant-menu-item-selected {
  }
`;

const ContentWrapper = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100%;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  background: #eeeeee;
`;

export default function UserPage() {
  const { path } = useRouteMatch();
  return (
    <Fragment>
      <Tabs tabPosition={"left"}>
        <TabPane tab="โปรไฟล์" key="1">
          <UserProfile />
        </TabPane>
        <TabPane tab="ประวัติคำสั่งซื้อ" key="2">
          <UserOrderHistory />
        </TabPane>
      </Tabs>
    </Fragment>
  );
}
