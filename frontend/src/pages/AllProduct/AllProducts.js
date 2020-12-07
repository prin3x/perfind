import React from "react";
import styled from "styled-components";
import {
  Collapse,
  Input,
  Carousel,
  Divider,
  Tag,
  Row,
  Col,
  Checkbox,
  Slider,
  Form,
  Pagination,
  Typography,
} from "antd";
import axios from "../../config/axios";
import { useHistory } from "react-router-dom";

const { CheckableTag } = Tag;
const { Panel } = Collapse;
const { Search } = Input;

const ProductContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #fff;
  margin: 0 auto;
  border-radius: 10px;
`;

const FilterOptionContainer = styled.div`
  width: 20%;
  background: #f3e3d1;
  float: left;
  border-right: 5px solid #fff5ea;
`;

const FindProductContainer = styled.div`
  padding: 3rem;
  margin-top: 2rem;
  width: 95%;
  background: #f1e3d2;
`;

const ProductContainer = styled.div`
  width: 95%;
  margin-top: 2rem;
  padding: 1rem;
`;

const SearchAndProductContainer = styled.div`
  width: 80%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 10rem;
  height: 10rem;
  background: cover center;
`;

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const ProductRow = styled.div`
  width: 10rem;
  height: 13rem;
  border-bottom: 1px solid #000;
  cursor: pointer;
`;

export default function AllProducts() {
  const [form] = Form.useForm();
  const [selectTag, setSelectTag] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [actualPresentedProduct, setActualPresentedProduct] = React.useState(
    products
  );

  const history = useHistory();

  const [searchQuery, setSearchQuery] = React.useState({
    gender: [],
    brand: [],
    scent: [],
    style: [],
    size: [],
    price: [],
  });

  const brandOptions = [
    { label: "Dior", value: "Dior" },
    { label: "Versace", value: "Versace" },
    { label: "Montblac", value: "Montblac" },
    { label: "Givonchy", value: "Givonchy" },
    { label: "Channel", value: "Channel" },
    { label: "Aventus", value: "Aventus" },
  ];

  const [brands, setBrands] = React.useState(brandOptions);

  const onSearch = async (value) => {
    setIsLoading(true);
    const { data } = await axios.get(`/products/?_search=${value}`);
    const searchProduct = data;
    setProducts(searchProduct);
    setIsLoading(false);
  };
  const onSearchBrand = (e) => {
    const valueAsRegex = new RegExp(e.target.value, "gi");
    const searchBrand = brandOptions.filter((brand) =>
      valueAsRegex.test(brand.label)
    );
    setBrands(searchBrand);
  };

  const tagsData = [
    "citrus",
    "floral",
    "woody",
    "musky",
    "green",
    "sweet",
    "powdery",
    "sport",
    "party",
  ];

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectTag, tag]
      : selectTag.filter((t) => t !== tag);
    setSelectTag(nextSelectedTags);
    setSearchQuery({ ...searchQuery, scent: [...nextSelectedTags] });
  };

  const fetchAllProducts = async () => {
    const { data } = await axios.get("/products/");
    setProducts(data);
    setActualPresentedProduct(data);
  };

  const genderOptions = [
    { label: "For Women", value: "female" },
    { label: "For Men", value: "men" },
    { label: "Unisex", value: "unisex" },
  ];

  const sizeOptions = [
    { label: "35ml", value: "35" },
    { label: "50ml", value: "50" },
    { label: "100ml", value: "100" },
  ];
  const scentOptions = [
    { label: "citrus", value: "citrus" },
    { label: "floral", value: "floral" },
    { label: "woody", value: "woody" },
    { label: "musky", value: "musky" },
    { label: "green", value: "green" },
    { label: "sweet", value: "sweet" },
    { label: "powdery", value: "powdery" },
  ];
  const styleOptions = [
    { label: "formal", value: "formal" },
    { label: "sport", value: "sport" },
    { label: "playful", value: "playful" },
    { label: "luxury", value: "luxury" },
    { label: "fresh", value: "fresh" },
    { label: "sweet", value: "sweet" },
    { label: "glamorous", value: "glamorous" },
    { label: "cozy", value: "cozy" },
  ];

  React.useEffect(() => {
    fetchAllProducts();
  }, []);
  React.useEffect(() => {
    setActualPresentedProduct(products);
  }, [products]);

  const handleNextPage = (id) => {
    history.push(`/product/${id}`);
  };

  React.useEffect(() => {
    const filteredProducts = products.filter(
      (item) =>
        (searchQuery.gender.length
          ? searchQuery.gender.includes(item.gender)
          : true) &&
        (searchQuery.brand.length
          ? searchQuery.brand.includes(item.brand)
          : true) &&
        (searchQuery.scent.length
          ? searchQuery.scent.includes(item.topscent) ||
          searchQuery.scent.includes(item.secondscent) ||
          searchQuery.scent.includes(item.thirdscent)
          : true) &&
        (searchQuery.size.length
          ? searchQuery.size.includes(item.size)
          : true) &&
        (searchQuery.style.length
          ? searchQuery.style.includes(item.style1) ||
          searchQuery.style.includes(item.style2) ||
          searchQuery.style.includes(item.style3) ||
          searchQuery.style.includes(item.style4)
          : true) &&
        (searchQuery.price.length
          ? item.price >= searchQuery.price[0] &&
          item.price <= searchQuery.price[1]
          : true)
    );
    setActualPresentedProduct(filteredProducts);
  }, [searchQuery]);

  const debounce = (func, wait) => {
    let timeout;

    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const onChangeForm = (values, allvalues) => {
    console.log(values);
    setSearchQuery({ ...searchQuery, ...values });
  };

  return (
    <ProductContentContainer>
      <FilterOptionContainer>
        <Form
          form={form}
          name="control-hooks"
          onValuesChange={debounce(onChangeForm, 500)}
        >
          <Collapse defaultActiveKey={["12"]}>
            <Panel header="GENDER" key="12">
              <Form.Item name="gender">
                <Checkbox.Group options={genderOptions} />
              </Form.Item>
            </Panel>
            <Divider />
            <Panel header="BRAND" key="22">
              <Input
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="small"
                onChange={onSearchBrand}
              />
              <Form.Item name="brand">
                <Checkbox.Group options={brands} />
              </Form.Item>
            </Panel>
            <Divider />
            <Panel header="TONE OF SCENT" key="32">
              <Form.Item name="scent">
                <Checkbox.Group options={scentOptions} />
              </Form.Item>
            </Panel>
            <Divider />
            <Panel header="STYLE" key="42">
              <Form.Item name="style">
                <Checkbox.Group options={styleOptions} />
              </Form.Item>
            </Panel>
            <Divider />
            <Panel header="SIZE" key="52">
              <Form.Item name="size">
                <Checkbox.Group options={sizeOptions} />
              </Form.Item>
            </Panel>
            <Divider />
            <Panel header="PRICE" key="62">
              <Form.Item name="price">
                <Slider
                  range
                  defaultValue={[100, 10000]}
                  reverse={false}
                  min={100}
                  max={10000}
                />
              </Form.Item>
            </Panel>
          </Collapse>
        </Form>
      </FilterOptionContainer>
      <SearchAndProductContainer>
        <FindProductContainer>
          <h1>Find Product</h1>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            loading={isLoading}
          />
          {tagsData.map((tag) => (
            <CheckableTag
              key={tag}
              checked={selectTag.indexOf(tag) > -1}
              onChange={(checked) => handleChange(tag, checked)}
            >
              {tag}
            </CheckableTag>
          ))}
        </FindProductContainer>
        <Carousel>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
        <ProductContainer>
          <Row align="middle" justify="center">
            {actualPresentedProduct &&
              actualPresentedProduct.map(({ sku, name, main_image, id }) => (
                <Col span={6} key={sku}>
                  <ProductRow onClick={() => handleNextPage(id)}>
                    <Image src={main_image} alt="" />
                    <Typography.Text>{name}</Typography.Text>
                  </ProductRow>
                </Col>
              ))}
          </Row>
        </ProductContainer>
        <Pagination current={1} total={20} />
      </SearchAndProductContainer>
    </ProductContentContainer>
  );
}
