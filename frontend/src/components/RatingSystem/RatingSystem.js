import React, { useEffect, useState } from "react";
import { Form, Input, Button, Rate } from "antd";
import axios from "../../config/axios";
import styled from "styled-components";
import { InsideMainSection } from "../../pages/Layout/Layout";

const MainSection = styled.div`
  margin-left: 17rem;
  margin-top: 4rem;
  width: 50vw;
  position: absolute;
  top: 5%;
  background: transparent;
  z-index: 2;
`;

const RatingSystem = (props) => {
  const [reviews, setReviews] = useState([]);
  const [form] = Form.useForm();
  const productId = props.match.params.id;
  console.log(props);
  const fetchReviews = async () => {
    await axios.get(`/reviews/${productId}`).then(({ data }) => {
      setReviews(data);
    });
  };

  const onFinish = async (values) => {
    console.log(values);
    await axios.post(`/reviews/${productId}`, {
      rating: values.rating,
      comment: values.comment,
    });
    await fetchReviews();
    form.resetFields();
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <MainSection>
      <InsideMainSection>
        <div>
          <Form onFinish={onFinish}>
            <Form.Item initialValue={0} name="rating">
              <Rate />
            </Form.Item>
            <Form.Item initialValue="" name="comment">
              <Input.TextArea showCount maxLength={100} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>

          {reviews
            ? reviews.map((el) => (
                <div key={el.id}>
                  <div className="product">
                    <Rate disabled defaultValue={el.rating} />
                  </div>
                  <div>{el.comment}</div>
                </div>
              ))
            : null}
        </div>
      </InsideMainSection>
    </MainSection>
  );
};

export default RatingSystem;
