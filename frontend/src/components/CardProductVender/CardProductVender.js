import React, { useState } from "react";
import {
  Table,
  Input,
  InputNumber,
  Form,
  Row,
  Col,
} from "antd";
import { Link } from "react-router-dom";
import axios from "../../config/axios";


const { Search } = Input;


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
  const [editingKey, setEditingKey] = useState("");



  const [isLoading, setIsLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);




  const isEditing = (record) => record.key === editingKey;

  const onSearch = async (value) => {
    setIsLoading(true);
    const { data } = await axios.get(`/products/?_search=${value}`);
    const searchProduct = data;
    setProducts(searchProduct);
    setProducts(searchProduct);
    setIsLoading(false);
  };

  const fetchAllProducts = async () => {
    const { data } = await axios.get("/products/");
    setProducts(data);
  };

  React.useEffect(() => {
    fetchAllProducts();
  }, []);



  const deleteProduct = async (id) => {
    await axios.delete(`vender/product/${id}`);
    setProducts(products.filter((product) => product.id !== id));
    ///@@@@@@
    // fetchAllProducts();
    setEditingKey("");
  };



  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      width: "15%",
      align: "center",


    },
    {
      title: "Img",
      dataIndex: "main_image",
      render: (text, record) => <img src={record.main_image} style={{ width: "3rem", height: "3rem", }} />,
      width: "10%",
      align: "center",

    },

    {
      title: "price",
      dataIndex: "price",
      width: "10%",

      align: "center",
    },
    {
      title: "Size",
      dataIndex: "size",
      width: "10%",

      align: "center",
    },
    {
      title: "Inventory",
      dataIndex: "countInStock",
      width: "10%",

      align: "center",
    },

    {
      title: "operation",
      dataIndex: "operation",
      align: "center",
      width: "15%",
      render: (_, record) => {

        return (
          <Row justify="space-around">
            <Col>
              <button style={{ width: "3rem", }}>
                <Link
                  to={`/vender/product/edit/${record.id}`}
                  className="btn btn-outline-info btn-sm pull-right"
                >Edit
            </Link>

              </button>
            </Col>
            <Col>
              <button style={{ width: "3rem" }}

                onClick={() => deleteProduct(record.id)}
              >
                Delete
          </button>
            </Col>

          </Row >

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
            loading={isLoading}
            style={{ width: "25rem", margin: "0 10px" }}
          />
        </Col>
      </Row>

      <Form form={form} component={false}>
        <Table
          style={{ margin: "3rem", border: "2px solid #ddd" }}
          components={{
            body: {
              cell: EditableCell,

            },
          }}

          bordered
          dataSource={products}
          columns={mergedColumns}
          rowClassName="editable-row"
          rowKey={record => record.id}

        />
      </Form>
    </>
  );
}

export default CardProductVender;
