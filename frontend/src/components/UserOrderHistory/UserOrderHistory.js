import { Button, Menu, Table, Tag } from "antd";
import Column from "antd/lib/table/Column";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import moment from "moment";

export default function UserOrderHistory() {
  const { path } = useRouteMatch();
  const [loading, setLoading] = useState(true);
  const [orderHistory, setOrderHistory] = useState();

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/order");
        setOrderHistory(data);
        return setLoading(false);
      } catch (error) {
        return setLoading(false);
      }
    })();
    return;
  }, []);
  return (
    <Fragment>
      <Table
        dataSource={orderHistory}
        rowKey={(item) => item._id}
        loading={loading}
      >
        <Column title="id" dataIndex="id" key="id" />
        <Column title="ราคารวม" dataIndex="total_price" key="total_price" />
        <Column
          title="สถานะ"
          render={(item) => (
            <Fragment>
              <Tag
                color={item.status === 1 ? "#f78f1e" : "#009979"}
                key={item.status}
              >
                {item.status === 1 ? "กำลังดำเนินการ" : "กิจกรรมเสร็จสิ้น"}
              </Tag>
            </Fragment>
          )}
          key="status"
        />
        <Column
          title="วันที่"
          render={(item) => {
            return moment(item.createdAt).format("DD-MM-YYYY");
          }}
          key="createdAt"
        />
      </Table>
    </Fragment>
  );
}
