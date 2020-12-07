import {
  Col,
  Row,
  message,
  Form,
  Input,
  notification,
  Checkbox,
  Button,
  Upload,
} from "antd";
import Dragger from "antd/lib/upload/Dragger";
import React, { useState } from "react";
import { BASE_BACKEND_URL } from "../../config/constants";
import axios from "../../config/axios";
import { UploadOutlined } from "@ant-design/icons";
import styled from "styled-components";
const layout = {
  labelCol: { xs: 24, sm: 5, md: 4, lg: 5, xl: 5, xxl: 5 },
  wrapperCol: { xs: 24, sm: 19, md: 20, lg: 19, xl: 19, xxl: 19 },
};
const InsideMainSection = styled.div`
  box-shadow: 1px 0 45px 0.41px #33302a;
  max-width: 70vw;
  background: #fff;
  box-shadow: 1px 4px 19px 3px rgba(51, 48, 42, 0.47);
  margin: 0 auto;
  border-radius: 1rem;
  height: 100%;
`;

function VenderRegister(props) {
  const [fileBrandName, setFileBrandName] = useState("");
  const fileCertificate = [];
  const onFinish = ({
    username,
    password,
    brandName,
    email,
    security,
    answer,
    fileCertificate,
  }) => {
    axios
      .post("/auth/vender/register", {
        username,
        password,
        brandName,
        email,
        security,
        answer,
        profileUrl: fileBrandName,
        fileCertificate,
      })
      .then((res) => {
        notification.success({
          description: "Signup successfully",
        });
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
        notification.error({
          description: "Something went wrong.",
        });
      });
  };

  const propsUpload = {
    name: "img",
    multiple: false,
    action: `${BASE_BACKEND_URL}/auth/vender/register`,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        setFileBrandName(info.file.response.url);
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const [form] = Form.useForm();
  const formLayout = "vertical";
  const formItemLayout =
    formLayout === "vertical"
      ? {
        labelCol: {
          span: 10,
        },
        wrapperCol: {
          span: 24,
        },
      }
      : null;
  return (
    <InsideMainSection>
      <h2
        style={{
          background: "linear-gradient(to right, #b8956c, #e3d5b0)",
          width: "100%",
          height: "3.5rem",
          marginTop: "0rem",
          textAlign: "center",
          paddingTop: "0.5rem",
          paddingLeft: "0rem",
          paddingRight: "0rem",
          borderTopLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
          color: "white",
          fontFamily: "Playfair",
        }}
      >
        Vender Register
      </h2>

      <Row justify="center">
        <Col span={20} className="Form">
          <Row justify="center">
            <div>
              <Dragger {...propsUpload}>
                <div
                  style={{
                    width: "12rem",
                    height: "12rem",
                    background: "Gray",
                    borderRadius: "50%",
                    marginTop: "1rem",
                  }}
                >
                  <p className="ant-upload-drag-icon">
                    <br></br>
                    <br></br>
                  </p>

                  <p className="ant-upload-text">Upload</p>
                  <p className="ant-upload-hint">Brand Image</p>
                </div>
              </Dragger>
            </div>
          </Row>
          <Row justify="center">
            <Col span={24}>
              <Form
                style={{
                  width: "100%",
                  marginRight: "3rem",
                  marginLeft: "5rem",
                }}
                {...layout}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
                ///
                {...formItemLayout}
                layout={formLayout}
                form={form}
                initialValues={{
                  layout: formLayout,
                }}
              >
                <Row>
                  <Col span={20}>
                    <Form.Item
                      name="username"
                      label="Username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Username!",
                        },
                      ]}
                      style={{ width: "100%" }}
                    >
                      <Input
                        placeholder="input Username"
                        style={{ width: "100%" }}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Row>
                  <Col span={20}>
                    <Form.Item
                      name="brandName"
                      label="Brandname"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Brand name",
                        },
                      ]}
                    >
                      <Input placeholder="input Brand name!" />
                    </Form.Item>
                  </Col>
                </Row>

                <Row>
                  <Col span={20}>
                    <Form.Item
                      name="email"
                      label="E-mail"
                      rules={[
                        {
                          required: true,
                          message: "Please input your E-mail!!",
                        },
                      ]}
                    >
                      <Input placeholder="input E-mail!" />
                    </Form.Item>
                  </Col>
                </Row>

                <Row>
                  <Col span={20}>
                    <Form.Item
                      name="password"
                      label="Password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Password",
                        },
                      ]}
                    >
                      <Input.Password placeholder="input Password" />
                    </Form.Item>
                  </Col>
                </Row>

                <Row>
                  <Col span={20}>
                    <Form.Item
                      name="confirm"
                      label="Confirm Password"
                      dependencies={["password"]}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                          validator(rule, value) {
                            if (!value || getFieldValue("password") === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              "The two passwords that you entered do not match!"
                            );
                          },
                        }),
                      ]}
                    >
                      <Input.Password placeholder="input Password" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>Certificate</Row>
                <Row>
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture"
                    defaultFileList={[...fileCertificate]}
                  >
                    <Button icon={<UploadOutlined />}>Upload</Button>
                  </Upload>
                </Row>
              </Form>
            </Col>
          </Row>

          <Row justify="center">
            <Col>
              <Form
                style={{
                  width: "25rem",
                  height: "10rem",
                  overflowY: "scroll",
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "9rem",
                }}
              >
                เงื่อนไข<br></br>• สำหรับผู้สมัครบัตรเครดิตเทสโก้ โลตัส วีซ่า
                ที่มียอดใช้จ่ายสะสมตั้งแต่ 5,000 บาทขึ้นไป
                รับเครดิตเงินคืนสูงสุด 5% หรือ 250 บาท ภายใน 30
                วันนับจากวันที่บัตรอนุมัติ และพิเศษในวันดับเบิ้ลเดย์
                (10.10/11.11/12.12) รับเครดิตเงินคืนเพิ่ม 10% หรือ 300 บาท
                เมื่อใช้จ่ายสะสมตั้งแต่ 3,000 บาทขึ้นไป ในวันที่ 10 ต.ค. 63,
                เครดิตเงินคืนเพิ่ม 11% หรือ 330 บาท เมื่อใช้จ่ายสะสมตั้งแต่
                3,000 บาทขึ้นไป ในวันที่ 11 พ.ย. 63, เครดิตเงินคืนเพิ่ม 12% หรือ
                360 บาท เมื่อใช้จ่ายสะสมตั้งแต่ 3,000 บาทขึ้นไป ในวันที่ 12 ธ.ค.
                63 (รับเครดิตเงินคืนสูงสุด 1,240 บาท/หมายเลขบัญชีบัตรหลัก
                ตลอดรายการ) • เฉพาะสมาชิกใหม่ที่ไม่เคยถือบัตรเครดิตเทสโก้ โลตัส
                วีซ่า หรือยกเลิกบัตรไปแล้วไม่ต่ำกว่า 6 เดือน
                และสมัครผ่านช่องทางออนไลน์ในระหว่าง 1 ก.ย. 63 - 30 พ.ย. 63
                และได้รับอนุมัติภายในวันที่ 15 ธ.ค. 63
                และมียอดใช้จ่ายตามเงื่อนไข •
                การมอบเครดิตเงินคืนตามรายการส่งเสริมการขายนี้
                จะคำนวณจากยอดใช้จ่ายสะสมตั้งแต่ 5,000 บาทขึ้นไป ที่ทำรายการภายใน
                30 วันนับจากวันที่บัตรอนุมัติ และยอดใช้จ่ายสะสมตั้งแต่ 3,000
                บาทขึ้นไป ที่ทำรายการเฉพาะวันที่กำหนดเท่านั้น (วันที่ 10 ต.ค.
                63, 11 พ.ย. 63 และ 12 ธ.ค. 63) •
                ได้รับยกเว้นการเรียกเก็บค่าธรรมเนียมรายปี ปีแรก
                (สำหรับบัตรหลักและบัตรเสริม)
                เมื่อสมัครผ่านช่องทางออนไลน์ในระหว่างวันที่ 1 ก.ย. 63 - 30 พ.ย.
                63 และได้รับอนุมัติภายในวันที่ 15 ธ.ค. 63 •
                สำหรับค่าธรรมเนียมรายปีในปีถัดไป
                มีสิทธิได้รับการยกเว้นการเรียกเก็บโดยอัตโนมัติ เมื่อบัตรแพลทินัม
                บียอนด์มียอดใช้จ่ายสะสมของบัตรหลักและบัตรเสริมรวมกันครบ 200,000
                บาท/รอบปีก่อนหน้า และเมื่อบัตรแพลทินัม
                รีวอร์ดมียอดใช้จ่ายสะสมของบัตรหลักและบัตรเสริมรวมกันครบ 100,000
                บาท/รอบปีก่อนหน้า • เครดิตเงินคืนจะโอนเข้าบัญชีหลัก ภายใน 60 วัน
                หลังจบรายการส่งเสริมการขายนี้ • เครดิตเงินคืน
                ไม่สามารถโอน/เปลี่ยน/แลก/ทอนเป็นเงินสดได้ • บริษัทฯ
                ขอสงวนสิทธิ์ในการให้ของสมนาคุณที่มีมูลค่าสูงสุดให้กับสมาชิกบัตรเพียงอย่างเดียวในกรณีที่บริษัทฯ
                ให้ของสมนาคุณในรายการส่งเสริมการขายอื่นในช่วงเวลาเดียวกัน •
                สมาชิกบัตรควรเก็บหลักฐานและเซลล์สลิปไว้ตรวจสอบกรณีจำเป็น •
                คำนวณยอดใช้จ่ายสะสมจากร้านค้าทั่วไป ยกเว้น รายการที่ถูกยกเลิก,
                การซื้อหน่วยลงทุน, หมวดทองคำ จิวเวลรี่ และเครื่องประดับมีมูลค่า,
                ค่าปรับและค่าธรรมเนียมต่างๆ • บริษัทฯ
                ขอสงวนสิทธิ์ในการมอบเครดิตเงินคืนแก่สมาชิกที่ยังคงสภาพการเป็นสมาชิกและมีประวัติการชำระดีจนถึงวันที่บริษัทฯ
                มอบเครดิตเงินคืนให้ท่าน
                และสงวนสิทธิ์เรียกคืนเครดิตเงินคืนหากมีการยกเลิกรายการใช้จ่ายในภายหลัง
                • บริษัทฯ
                ขอสงวนสิทธิ์ในการเปลี่ยนแปลงเงื่อนไขรายการหรือของสมนาคุณที่มีมูลค่าใกล้เคียงกันโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
                • เงื่อนไขเป็นไปตามที่บริษัทฯ กำหนด
                หากมีข้อพิพาทคำตัดสินของบริษัทฯ ถือเป็นที่สุด •
                ให้บริการสินเชื่อโดยบริษัท เทสโก้ โลตัส มันนี่ เซอร์วิสเซส จำกัด
              </Form>
            </Col>
          </Row>

          <Row justify="center">
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("Should accept agreement"),
                },
              ]}
              style={{ marginRight: "10rem", marginTop: "1rem" }}
            >
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            </Form.Item>
          </Row>
          <Row
            justify="space-around"
            style={{
              marginTop: "1.5rem",
              marginBottom: "3rem",
              marginRight: "9rem",
            }}
          >
            <Button type="primary" htmlType="submit">
              Reset
            </Button>

            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Row>
        </Col>
      </Row>
    </InsideMainSection>
  );
}

export default VenderRegister;
