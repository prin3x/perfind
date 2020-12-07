import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Row,
  Carousel,
  Col,
  Tabs,
  Select,
  PageHeader,
  InputNumber,
  Rate,
  Image,
} from "antd";
import {
  // HeartOutlined,
  // ShareAltOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import "../../App.less";
import "../../App.css";
import "./SingleProduct.css";
import product from "../../assets/product-01.png";
import dec from "../../assets/dec.png";
import { useParams } from "react-router-dom";
import axios from "../../config/axios";
import SimilarProduct from "../../components/SimilarProduct/SimilarProduct";

function SingleProduct(props) {
  const { id } = useParams();
  const [rateLongevity, setRateLongevity] = useState("");
  const [rateSillage, setRateSillage] = useState("");
  const [productImg, setProductImg] = useState("");
  const [data, setData] = useState({});
  const [similarList, setSimilarList] = useState([]);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    axios.get(`/products/${id}`).then((res) => {
      setData(res.data);
      const longevity = rateGraph(res.data.longevity);
      const sillage = rateGraph(res.data.sillage);
      setRateLongevity(longevity);
      setRateSillage(sillage);
      setProductImg(res.data.main_image);
    });

    axios.get(`/products/find/${id}`).then((res) => {
      setSimilarList(res.data);
    });
  };

  const putAddCart = async () => {
    axios.post(`/carts/${id}`, { qty });
    props.history.push("/cart");
  };


  function onChange(value) {
    console.log("changed", value);
    setQty(value);
  }

  const { Option } = Select;

  const { TabPane } = Tabs;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const InsideMainSection = styled.div`
    max-width: 90vw;
    background: #fff;
    box-shadow: 1px 3px 16px 3px rgba(51, 48, 42, 0.2);
    margin: 50px auto 0 auto;
    border-radius: 0.4rem;
    height: 100%;
  `;

  const routes = [
    {
      path: "/index",
      breadcrumbName: "Home",
    },
    {
      path: "/products",
      breadcrumbName: data.brand,
    },
    {
      path: "/product/:id",
      breadcrumbName: cutString(data.name, 30),
    },
  ];

  const calLongEvity = (value) => {
    switch (value) {
      case 1:
        return "less than 3 hours";
      case 2:
        return "3 - 5 hours";
      case 3:
        return "5 - 8 hours";
      case 4:
        return "8 - 12 hours";
      case 5:
        return "more than 12 hours";
      default:
        break;
    }
  };

  const calSillage = (value) => {
    switch (value) {
      case 1:
        return "soft";
      case 2:
        return "intimate";
      case 3:
        return "moderate";
      case 4:
        return "strong";
      case 5:
        return "enormous";
      default:
        break;
    }
  };

  const rateGraph = (value) => {
    switch (value) {
      case 1:
        return "20%";
      case 2:
        return "40%";
      case 3:
        return "60%";
      case 4:
        return "80%";
      case 5:
        return "100%";
      default:
        break;
    }
  };

  function cutString(str = "", max = 28) {
    if (str.length > max) {
      return str.slice(0, max) + "...";
    } else {
      return str;
    }
  }

  function numberWithCommas(x = 0) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const onChangeProductImg01 = () => {
    setProductImg(`${data.main_image}`);
  };

  return (
    <InsideMainSection style={{ padding: "20px 20px 20px 20px" }}>
      <PageHeader
        style={{
          display: "inline-flex",
          fontStyle: "normal",
          fontWeight: "300",
          letterSpacing: "0.045em",
          color: "#796145 !important",
          margin: "0",
          marginBottom: "10px",
          padding: "0",
        }}
        breadcrumb={{ routes }}
      />
      <Row>
        <Col
          span={24}
          style={{
            margin: "0 auto",
            border: "1px solid #B69F5B",
            boxSizing: "border-box",
            paddingTop: "2em",
            paddingBottom: "2em",
          }}
        >
          <Row>
            <Col span={3}>
              <div
                onClick={onChangeProductImg01}
                className="Product-sub-img"
                style={{
                  backgroundImage: "url(" + `${data.main_image}` + ")",
                }}
              ></div>
            </Col>
            <Col span={9} style={{ paddingTop: "2em" }}>
              <div
                style={{
                  backgroundImage: "url(" + productImg + ")",
                  width: "auto",
                  height: "34em",
                  margin: "0 auto",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </Col>
            <Col span={2}></Col>
            <Col span={10} style={{ paddingRight: "2em" }}>
              <div
                style={{
                  backgroundColor: "rgba(249, 246, 239, 0.8)",
                  borderRadius: "12px",
                  width: "100%",
                  padding: "2em",
                }}
              >
                <Row>
                  <Col span={12}>
                    <h1 className="Product-h1">{cutString(data.brand)}</h1>
                  </Col>
                  <Col
                    span={12}
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Rate
                      disabled
                      allowHalf
                      value={data.totalRating}
                      style={{ color: "#CDB67D" }}
                    />
                  </Col>
                  <Col span={24}>
                    <p className="Product-text-md">
                      {cutString(data.name, 35)}
                    </p>
                  </Col>
                </Row>
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "#C0B7AD",
                    marginTop: "1.6em",
                  }}
                ></div>
                <div
                  style={{
                    margin: "2em auto",
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "0.055em",
                  }}
                >
                  <p> {data.description}</p>
                </div>
                <Row style={{ marginTop: "3em" }}>
                  <Col span={12}>
                    <h1 className="Product-h1">
                      {numberWithCommas(data.price)} THB
                    </h1>
                  </Col>
                  <Col
                    span={12}
                    style={{ textAlign: "end", padding: "8px 0 0 0 " }}
                  >
                    <h3 className="Product-h3">{data.size} ml.</h3>
                  </Col>
                </Row>
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "#C0B7AD",
                    marginTop: "1em",
                  }}
                ></div>
                <Row style={{ marginTop: "2.3em" }}>
                  <Col
                    span={7}
                    style={{
                      textAlign: "end",
                      padding: "4px 20px 0 0",
                    }}
                  >
                    <h4 className="Product-h4"> Size :</h4>
                  </Col>
                  <Col span={17}>
                    <Select
                      placeholder="Choose product size"
                      style={{ width: "80%", color: "#85755e" }}
                      onChange={handleChange}
                      bordered={true}
                      defaultValue={data.size}
                    >
                      <Option value={data.size}>{data.size} ml.</Option>
                    </Select>
                  </Col>
                </Row>
                <Row style={{ marginTop: "1.4em" }}>
                  <Col
                    span={7}
                    style={{
                      textAlign: "end",
                      padding: "4px 20px 0 0",
                    }}
                  >
                    <h4 className="Product-h4"> Quantity :</h4>
                  </Col>
                  <Col span={6}>
                    <InputNumber
                      min={1}
                      max={data.countInStock}
                      defaultValue={1}
                      onChange={onChange}
                    />
                  </Col>
                  <Col
                    span={7}
                    style={{
                      textAlign: "start",
                      paddingTop: "4px",
                    }}
                  >
                    <h4
                      className="Product-h4"
                      style={{
                        color: "#AAA393",
                        fontWeight: "300",
                      }}
                    >
                      {data.countInStock} Remains
                    </h4>
                  </Col>
                </Row>
                <Row style={{ marginTop: "1.6em" }}>
                  <Col span={12} align="center">
                    <button className="style-btn-lightColor btn-effect"
                      onClick={putAddCart}>
                      <ShoppingCartOutlined />
                      <p style={{ marginLeft: "10px" }}>ADD TO CART</p>
                    </button>
                  </Col>
                  <Col span={12} align="center">
                    <button className="style-btn-darkColor btn-effect">
                      <ShoppingOutlined />
                      <p style={{ marginLeft: "10px" }}>BUY NOW</p>
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <SimilarProduct similarProductList={similarList} />
      <Row>
        <Col
          span={24}
          style={{
            marginTop: "3em",
            border: "1px solid #B69F5B",
          }}
        >
          <Tabs defaultActiveKey="1">
            <TabPane
              tab={
                <span style={{ letterSpacing: "0.08em" }}>
                  PRODUCT DESCRIPTION
                </span>
              }
              key="1"
            >
              <h1 style={{ margin: "1.2em 0" }} className="Product-desc-h1">
                " {data.name}"
              </h1>
              <Row>
                <Col span={1}></Col>
                <Col span={12} className="Product-carousel">
                  <Carousel autoplay style={{ height: "400px" }}>
                    <div>
                      <Image
                        className="Carousel-img"
                        src="https://images-na.ssl-images-amazon.com/images/I/81XWoMr6P6L._SX425_.jpg"
                      />
                    </div>
                    <div>
                      <Image
                        className="Carousel-img"
                        src="https://i.pinimg.com/originals/75/0b/e6/750be633c3b4ea67ba308c7e802de6b8.jpg"
                      />
                    </div>
                    <div>
                      <Image
                        className="Carousel-img"
                        src="https://www.fashiongonerogue.com/wp-content/uploads/2018/06/Chloe-Grace-Moretz-Coach-Floral-Fragrance02.jpg"
                      />
                    </div>
                    <div>
                      <Image
                        className="Carousel-img"
                        src="https://s3.amazonaws.com/richardmagazine.com/wp-content/uploads/2018/02/30040717/coach-floral-1024x1024.jpg"
                      />
                    </div>
                  </Carousel>
                  <img
                    style={{
                      zIndex: "1",
                      marginTop: "-150px",
                      transform: "rotate(12deg)",
                      marginLeft: "80%",
                      width: "30%",
                    }}
                    src={product}
                  />
                </Col>
                <Col span={1}></Col>
                <Col
                  span={8}
                  style={{
                    margin: "auto",
                    textAlign: "center",
                    fontFamily: "Pinyon script",
                    fontSize: "1.6em",
                  }}
                >
                  {data.description}
                  <img
                    src={dec}
                    style={{ display: "block", margin: "1em auto 0 auto" }}
                  />
                </Col>
                <Col span={1}></Col>
              </Row>
              <Row style={{ marginTop: "4em", marginBottom: "5em" }}>
                <Col span={4}></Col>
                <Col span={4} className="style-scent-btn">
                  <div className="dec-line" style={{ marginTop: "8px" }} />
                  <div className="scent-btn">{data.thirdscent}</div>
                  <div className="dec-line" style={{ marginBottom: "8px" }} />
                </Col>
                <Col span={2}></Col>
                <Col span={4} className="style-scent-btn">
                  <div className="dec-line" style={{ marginTop: "8px" }} />
                  <div className="scent-btn">{data.topscent}</div>
                  <div className="dec-line" style={{ marginBottom: "8px" }} />
                </Col>
                <Col span={2}></Col>
                <Col span={4} className="style-scent-btn">
                  <div className="dec-line" style={{ marginTop: "8px" }} />
                  <div className="scent-btn">{data.secondscent}</div>
                  <div className="dec-line" style={{ marginBottom: "8px" }} />
                </Col>
                <Col span={4}></Col>
              </Row>
              <Row>
                <Col
                  span={22}
                  style={{
                    margin: "0 auto 3em auto",
                    borderRadius: "10px",
                    boxShadow: "1px 1px 15px rgba(116, 98, 67, 0.25)",
                    backgroundColor: "white",
                    padding: "3em",
                  }}
                >
                  <h3 className="Product-h2">LONGEVITY</h3>
                  <Row>
                    <Col span={24} className="rate-border">
                      <div className="rate-bg">
                        <div
                          style={{
                            boxShadow: "0px 1px 3px rgba(157, 133, 71, 0.5)",
                            background:
                              "linear-gradient(90deg, #86BDB0 0%, #B0E7D5 47.92%, #EBE1CA 81.25%, rgba(218, 234, 224, 0.7) 100%)",
                            height: "100%",
                            width: rateLongevity,
                            borderRadius:
                              rateLongevity === "100%"
                                ? "10px"
                                : "10px 0 0 10px",
                          }}
                        ></div>
                      </div>
                    </Col>
                  </Row>
                  <h3 className="Product-h2" style={{ marginTop: "2.5em" }}>
                    SILLAGE
                  </h3>
                  <Row>
                    <Col span={24} className="rate-border">
                      <div className="rate-bg">
                        <div
                          style={{
                            boxShadow: "0px 1px 3px rgba(157, 133, 71, 0.5)",
                            background:
                              "linear-gradient(90deg, #86BDB0 0%, #B0E7D5 47.92%, #EBE1CA 81.25%, rgba(218, 234, 224, 0.7) 100%)",
                            height: "100%",
                            width: rateSillage,
                            borderRadius:
                              rateSillage === "100%" ? "10px" : "10px 0 0 10px",
                          }}
                        ></div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </TabPane>
            <TabPane
              tab={
                <span style={{ letterSpacing: "0.08em" }}>PRODUCT DETAILS</span>
              }
              key="2"
            >
              <Row>
                <Col span={12} style={{ paddingRight: "1em" }}>
                  <Row>
                    <Col span={5} className="Product-table-header">
                      BRAND :
                    </Col>
                    <Col span={19} className="Product-table-info">
                      {data.brand}
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      span={5}
                      className="Product-table-header"
                      style={{ borderTop: "none" }}
                    >
                      PRODUCT :
                    </Col>
                    <Col
                      span={19}
                      className="Product-table-info"
                      style={{ borderTop: "none" }}
                    >
                      {data.name}
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      span={5}
                      className="Product-table-header"
                      style={{ borderTop: "none" }}
                    >
                      SIZE :
                    </Col>
                    <Col
                      span={19}
                      className="Product-table-info"
                      style={{ borderTop: "none" }}
                    >
                      {data.size} ML.
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      span={5}
                      className="Product-table-header"
                      style={{ borderTop: "none" }}
                    >
                      SCENT :
                    </Col>
                    <Col
                      span={19}
                      className="Product-table-info"
                      style={{ borderTop: "none" }}
                    >
                      {data.topscent}, {data.secondscent}, {data.thirdscent}
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      span={5}
                      className="Product-table-header"
                      style={{ borderTop: "none" }}
                    >
                      gender :
                    </Col>
                    <Col
                      span={19}
                      className="Product-table-info"
                      style={{ borderTop: "none" }}
                    >
                      {data.gender}
                    </Col>
                  </Row>
                </Col>
                <Col span={12} style={{ paddingLeft: "1em" }}>
                  <Row>
                    <Col span={5} className="Product-table-header">
                      STYLE :
                    </Col>
                    <Col span={19} className="Product-table-info">
                      {data.style1}, {data.style2}, {data.style3}, {data.style4}
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      span={5}
                      className="Product-table-header"
                      style={{ borderTop: "none" }}
                    >
                      SEASON :
                    </Col>
                    <Col
                      span={19}
                      className="Product-table-info"
                      style={{ borderTop: "none" }}
                    >
                      {data.season}
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      span={5}
                      className="Product-table-header"
                      style={{ borderTop: "none" }}
                    >
                      TIME :
                    </Col>
                    <Col
                      span={19}
                      className="Product-table-info"
                      style={{ borderTop: "none" }}
                    >
                      {data.daynight} time
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      span={5}
                      className="Product-table-header"
                      style={{ borderTop: "none" }}
                    >
                      LONGEVITY :
                    </Col>
                    <Col
                      span={19}
                      className="Product-table-info"
                      style={{ borderTop: "none" }}
                    >
                      {calLongEvity(data.longevity)}
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      span={5}
                      className="Product-table-header"
                      style={{ borderTop: "none" }}
                    >
                      SILLAGE :
                    </Col>
                    <Col
                      span={19}
                      className="Product-table-info"
                      style={{ borderTop: "none" }}
                    >
                      {calSillage(data.sillage)}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </TabPane>
            <TabPane
              disabled
              tab={
                <span style={{ letterSpacing: "0.08em" }}>USER REVIEWS</span>
              }
              key="3"
            >
              Review
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </InsideMainSection>
  );
}

export default SingleProduct;
