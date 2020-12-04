import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import headerTag from "../../assets/header-tag.png";
import { Link } from "react-router-dom";

function SimilarProduct(props) {
  const { similarProductList } = props;

  return (
    <div>
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
            {similarProductList.map((product, idx) =>
              idx > 4 ? null : (
                <Col span={4} key={idx}>
                    <div className="product-card">
                  <a href={`/product/${product.id}`}>
                      <img alt="product" src={product.main_image} style={{objectFit:"cover"}}></img>
                          </a>
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
              )
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default SimilarProduct;
