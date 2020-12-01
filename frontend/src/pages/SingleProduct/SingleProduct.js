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
  HeartOutlined,
  ShareAltOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import "../../App.less";
import "../../App.css";
import "./SingleProduct.css";
import headerTag from "../../assets/header-tag.png";
import product from "../../assets/product-01.png";
import dec from "../../assets/dec.png";

function SingleProduct() {
  const [rateLongevity, setRateLongevity] = useState("");
  const [rateSillage, setRateSillage] = useState("");
  const [productImg, setProductImg] = useState(
    "https://l.lnwfile.com/2zkj4k.jpg"
  );

  useEffect(() => {
    const longevity = rateGraph(data.longevity);
    const sillage = rateGraph(data.sillage);
    setRateLongevity(longevity);
    setRateSillage(sillage);
  }, []);

  function onChange(value) {
    console.log("changed", value);
  }

  const { Option } = Select;

  const { TabPane } = Tabs;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const simlarProductList = [
    {
      imgSrc: "https://cdn.thebeautrium.com/image-product/B0052891.png",
      brand: "GUCCI",
      name: "Guilty Pour Femme Eau De Parfum",
    },
    {
      imgSrc: "https://cdn.thebeautrium.com/image-product/B0052891.png",
      brand: "GUCCI",
      name: "Guilty Pour Femme Eau De Parfum",
    },
    {
      imgSrc: "https://cdn.thebeautrium.com/image-product/B0052891.png",
      brand: "GUCCI",
      name: "Guilty Pour Femme Eau De Parfum",
    },
    {
      imgSrc: "https://cdn.thebeautrium.com/image-product/B0052891.png",
      brand: "GUCCI",
      name: "Guilty Pour Femme Eau De Parfum",
    },
    {
      imgSrc: "https://cdn.thebeautrium.com/image-product/B0052891.png",
      brand: "GUCCI",
      name: "Guilty Pour Femme Eau De Parfum",
    },
  ];

  const data = {
    id: 1,
    sku: "versace_01",
    name: "Versace Man Eau Fraiche Versace",
    gender: "men",
    size: "50",
    daynight: "day",
    season: "fall",
    image: "https://fimgs.net/mdimg/perfume/375x500.644.jpg",
    description:
      "Versace Man Eau Fraiche by Versace is a Woody Aquatic fragrance for men. Versace Man Eau Fraiche was launched in 2006. The nose behind this fragrance is Olivier Cresp. ",
    brand: "Versace",
    style1: "sport",
    style2: "luxury",
    style3: "fresh",
    style4: "cozy",
    topscent: "citrus",
    secondscent: "aromatic",
    thirdscent: "woody",
    longevity: 5,
    sillage: 4,
    price: 2399,
    countInStock: 50,
    totalRating: 5,
    category_id: null,
    user_id: null,
    vendor_id: null,
  };

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
      path: "index",
      breadcrumbName: "Home",
    },
    {
      path: "brand",
      breadcrumbName: "Coach",
    },
    {
      path: "gender",
      breadcrumbName: "Women",
    },
    {
      path: "productName",
      breadcrumbName: "Floral Eau De Parfum",
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

  const onChangeProductImg01 = () => {
    setProductImg(
      "https://www.app-perfume.com/public/upload/product/original/product4531D5eff8c02da62609de8d20be44d1639ec1.jpg"
    );
  };

  const onChangeProductImg02 = () => {
    setProductImg(
      "https://www.fragrancedirect.co.uk/dw/image/v2/BBNB_PRD/on/demandware.static/-/Sites-fragrance-master-catalog/default/dw7bc98ebb/images/large/0095631-1.jpg?sw=340&sh=340&sm=fit"
    );
  };
  const onChangeProductImg03 = () => {
    setProductImg("https://l.lnwfile.com/2zkj4k.jpg");
  };

  return (
    <InsideMainSection style={{ padding: "20px 20px 20px 20px" }}>
      {/* start part link */}
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
      {/* end part link */}

      {/* start main product container */}
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
            {/*start sub-img products */}
            <Col span={3}>
              <div
                onClick={onChangeProductImg01}
                className="Product-sub-img"
                style={{
                  backgroundImage:
                    "url(" +
                    "https://www.app-perfume.com/public/upload/product/original/product4531D5eff8c02da62609de8d20be44d1639ec1.jpg" +
                    ")",
                }}
              ></div>
              <div
                onClick={onChangeProductImg02}
                className="Product-sub-img"
                style={{
                  backgroundImage:
                    "url(" +
                    "https://www.fragrancedirect.co.uk/dw/image/v2/BBNB_PRD/on/demandware.static/-/Sites-fragrance-master-catalog/default/dw7bc98ebb/images/large/0095631-1.jpg?sw=340&sh=340&sm=fit" +
                    ")",
                }}
              ></div>
              <div
                onClick={onChangeProductImg03}
                className="Product-sub-img"
                style={{
                  backgroundImage:
                    "url(" +
                    "https://l.lnwfile.com/2zkj4k.jpg" +
                    ")",
                }}
              ></div>
            </Col>
            {/*end sub-img products */}
            {/* start main product img */}
            <Col span={9} style={{ paddingTop: "2em" }}>
              <div
                style={{
                  backgroundImage: "url(" + productImg + ")",
                  width: "36em",
                  height: "36em",
                  margin: "0 auto",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </Col>
            {/* end main product img */}
            <Col span={2}></Col>{" "}
            {/* just a blank space baby... and I'll write your name */}
            {/* start product side information */}
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
                    <h1 className="Product-h1">COACH</h1>
                    <p className="Product-text-md">Floral Eau De Parfum</p>
                  </Col>
                  <Col span={12}>
                    <Row>
                      <Col
                        span={24}
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          cursor: "pointer",
                        }}
                      >
                        <div>
                          <ShareAltOutlined
                            style={{
                              color: "#CDB67D",
                              fontSize: "1.8em",
                              marginRight: "1em",
                            }}
                          />
                        </div>
                        <div>
                          <HeartOutlined
                            style={{ color: "#CDB67D", fontSize: "1.8em" }}
                          />
                        </div>
                      </Col>
                      <Col
                        span={24}
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          marginTop: "1em",
                        }}
                      >
                        <Rate
                          disabled
                          allowHalf
                          value={4.5}
                          style={{ color: "#CDB67D" }}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                {/* header product side information */}
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
                  <p>
                    {" "}
                    The feminine scent opens with a splash of Citrus Coeur and a
                    touch of effervescent Pink Peppercorn with radiant Pineapple
                    Sorbet. The heart reveals a bouquet of fragrant flowers—Rose
                    Tea, Jasmine Sambac and Gardenia—before an enveloping
                    dry-down to elegant Creamy Wood, Patchouli Essence and Musky
                    notes.
                  </p>
                </div>
                <Row style={{ marginTop: "3em" }}>
                  <Col span={12}>
                    <h1 className="Product-h1">4,500 THB</h1>
                  </Col>
                  <Col
                    span={12}
                    style={{ textAlign: "end", padding: "8px 0 0 0 " }}
                  >
                    <h3 className="Product-h3">90 ml</h3>
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
                    {" "}
                    <h4 className="Product-h4"> Size :</h4>
                  </Col>
                  <Col span={17}>
                    <Select
                      placeholder="Choose product size"
                      style={{ width: "80%", color: "#85755e" }}
                      onChange={handleChange}
                      bordered={true}
                    >
                      <Option value="90ml">90 ml.</Option>
                      <Option value="50ml">50 ml.</Option>
                      <Option value="30ml">30 ml.</Option>
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
                    {" "}
                    <h4 className="Product-h4"> Quantity :</h4>
                  </Col>
                  <Col span={6}>
                    <InputNumber
                      min={1}
                      max={10}
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
                      {" "}
                      26 Remains{" "}
                    </h4>
                  </Col>
                </Row>
                <Row style={{ marginTop: "1.6em" }}>
                  <Col span={12} align="center">
                    <button className="style-btn-lightColor btn-effect">
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
            {/* end product side information */}
          </Row>
        </Col>
      </Row>
      {/* end main-product container */}
      {/* -------------------------------------------------------------------------- */}
      <Row>
        {/* start similar-product container */}
        <Col
          span={24}
          style={{
            marginTop: "3em",
            border: "1px solid #B69F5B",
            paddingTop: "2em",
          }}
        >
          <img
            src={headerTag}
            style={{
              width: "20%",
              position: "relative",
              marginTop: "-64px",
              marginLeft: "40px",
            }}
          ></img>
          <div
            style={{
              width: "20%",
              position: "relative",
              marginTop: "-52px",
              marginLeft: "40px",
              textAlign: "center",
              // backgroundColor: "white",
              // padding: "1em 3em",
              // border: "2px solid #B59E5A",
              // borderRadius: "8px"
            }}
          >
            <h4 className="Product-h4">YOU MIGHT ALSO LIKE</h4>
          </div>
          <Row
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "1.5em 2.5em 1.5em 1em",
              flexWrap: "nowrap",
              overflow: "auto",
              scroll: "none",
            }}
          >
            {simlarProductList.map((product, idx) => (
              <Col span={4} key={idx}>
                <div className="product-card">
                  <img alt="example" src={product.imgSrc}></img>
                  <div className="desc">
                    <h4 className="Product-h4">{product.brand}</h4>
                    <Row>
                      <Col span={18}>
                        <p className="Product-text-sm">{product.name}</p>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          display: "flex",
                          alignItems: "flex-end",
                          justifyContent: "flex-end",
                          paddingBottom: "6px",
                          fontSize: "1.3em",
                          color: "#85755e",
                        }}
                      >
                        <ShoppingCartOutlined />
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            ))}
            {/* end similar-product card */}
          </Row>
        </Col>
      </Row>
      {/* end similar-product container */}

      <Row>
        {/* start product-description container */}
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
                {" "}
                " {data.name}"{" "}
              </h1>
              <Row>
                <Col span={1}></Col>
                <Col span={12}>
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

              {/* -------------- End Impage Carousel and contents -------------- */}

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
            {/* -------------- End Tab 2 -------------- */}
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
      {/* end product-description container */}
    </InsideMainSection>
  );
}

export default SingleProduct;
