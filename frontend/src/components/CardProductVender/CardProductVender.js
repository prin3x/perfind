import React, { useState } from "react";
import {
  Table,
  Input,
  InputNumber,
  Popconfirm,
  Form,
  Tag,
  Row,
  Col,
} from "antd";
import { Link } from "react-router-dom";

const { Search } = Input;

const onSearch = (value) => console.log(value);

const originData = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    img: `img ${i}`,
    product: `Edrward ${i}`,
    price: 32,
    style: ["nice", "developer", "loser"],
    size: `ml  ${i}`,
    scents: ["nice", "developer", "loser"],
    inventory: `no. ${i}`,
    description: `description  ${i}`,
  });
}
const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

function CardProductVender(props) {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      product: "",
      price: "",
      inventory: "",
      scents: "",
      style: "",
      description: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const deleteProduct = (key) => {
    const newData = [...data];
    const newProduct = newData.filter((e) => e.key !== key);
    setData(newProduct);
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      width: "15%",
      editable: true,
    },
    {
      title: "Img",
      dataIndex: "img",
      width: "15%",
      editable: true,
    },
    {
      title: "style",
      key: "style",
      dataIndex: "style",
      editable: true,
      width: "7%",
      render: (style) => (
        <span>
          {style.map((style) => {
            let color = style.length > 5 ? "geekblue" : "green";
            if (style === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={style}>
                {style.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    ,
    {
      title: "scents",
      key: "scents",
      dataIndex: "scents",
      editable: true,
      width: "7%",
      render: (scents) => (
        <span>
          {scents.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: "price",
      dataIndex: "price",
      width: "7%",
      editable: true,
      align: "center",
    },
    {
      title: "Size",
      dataIndex: "size",
      width: "7%",
      editable: true,
      align: "center",
    },
    {
      title: "Inventory",
      dataIndex: "inventory",
      width: "7%",
      editable: true,
      align: "center",
    },
    {
      title: "Description",
      dataIndex: "description",
      width: "40%",
      overflowY: "scroll",
      display: "flex",
      flexDirection: "column",
      editable: true,
      align: "center",
    },
    {
      title: "operation",
      dataIndex: "operation",
      align: "center",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
            <a
              onClick={() => deleteProduct(record.key)}
              style={{ marginLeft: 8 }}
            >
              Delete
            </a>
            <Link
              to="/vender/product/edit"
              className="btn btn-outline-info btn-sm pull-right"
            >
              Edit2
            </Link>
          </span>
        ) : (
          <a disabled={editingKey !== ""} onClick={() => edit(record)}>
            Edit1
          </a>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "price" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <>
      <Row style={{ marginLeft: "5rem" }}>
        <Col>
          <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{ width: "25rem", margin: "0 10px" }}
          />
        </Col>
      </Row>

      <Form form={form} component={false}>
        <Table
          style={{ margin: "3rem" }}
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    </>
  );
}

export default CardProductVender;
