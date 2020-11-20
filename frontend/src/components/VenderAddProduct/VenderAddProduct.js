import React from 'react';
import { Row, Col, Form, Input, notification, Button, Upload, Radio, Select } from 'antd';
import axios from '../../config/axios';
import { UploadOutlined } from '@ant-design/icons';


const { Option } = Select;
const layout = {
    labelCol: { xs: 24, sm: 5, md: 4, lg: 5, xl: 5, xxl: 5 },
    wrapperCol: { xs: 24, sm: 19, md: 20, lg: 19, xl: 19, xxl: 19 },
};

const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}



function VenderAddProduct(props) {
    const fileMain = [];
    const fileList = [
        {
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-2',
            name: 'yyy.png',
            status: 'error',
        },
    ];

    const onFinish = ({ nameproduct, price, inventory, description, fileList, fileMain }) => {
        axios
            .post('/auth/Vendor', { nameproduct, price, inventory, description, fileList, fileMain })
            .then(res => {
                notification.success({
                    description: 'successfully',
                });
                props.history.push('/');
            })
            .catch(err => {
                console.log(err);
                notification.error({
                    description: 'wrong.',
                });
            });
    };
    const [form] = Form.useForm();
    const formLayout = 'vertical';
    const formItemLayout =
        formLayout === 'vertical'
            ? {
                labelCol: {
                    span: 10,
                },
                wrapperCol: {
                    span: 24,
                },
            }
            : null;
    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }
    function onSearch(val) {
        console.log('search:', val);
    }
    return (
        <>
            <Row justify='center' >

                <h2 style={{
                    background: "linear-gradient(to right, #b8956c, #e3d5b0)",
                    width: "100%",
                    height: "3.5rem",
                    margin: "0 auto",
                    textAlign: "center",
                    paddingTop: "0.5rem",
                    paddingLeft: "0rem",
                    paddingRight: "0rem",
                    color: "white",
                    fontFamily: "Playfair"
                }}>
                    ADD NEW PROJECT
                </h2>

            </Row>
            <Row justify='center'>
                <Col span={14}>
                    <Form
                        style={{ width: '100%', marginRight: "3rem", marginLeft: "4rem" }}
                        {...layout}
                        name='vendor'
                        onFinish={onFinish}
                        scrollToFirstError
                        ///
                        {...formItemLayout}
                        layout={formLayout}
                        form={form}
                        initialValues={{
                            layout: formLayout,
                        }}>
                        <Row style={{ marginTop: "2rem" }}>
                            <Col span={20}>
                                <Form.Item
                                    name='nameproduct'
                                    label='NameProduct'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Name product!',
                                        },
                                    ]}
                                    style={{ width: '100%' }}
                                >
                                    <Input
                                        placeholder='input Name product'
                                        style={{ width: '100%' }}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>


                        <Row>
                            <Col span={20}>
                                <Form.Item
                                    name='price'
                                    label='Price'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Price!',
                                        },
                                    ]}
                                >
                                    <Input placeholder='input Price' />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={20}>
                                <Form.Item
                                    name='inventory'
                                    label='Inventory'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your inventory',
                                        },
                                    ]}
                                >
                                    <Input placeholder='input inventory' />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row><div>main pic</div></Row>
                        <Row>

                            <Col>
                                <Upload
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture"
                                    defaultFileList={[...fileMain]}
                                >
                                    <Button icon={<UploadOutlined />}>Upload</Button>
                                </Upload>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col span={20}>
                                <Form.Item
                                    name='description'
                                    label='Description'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your description',
                                        },
                                    ]}
                                >
                                    <Input placeholder='input description' style={{ height: "10rem" }} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row justify="center">style</Row>
                        <Row justify='space-around'>
                            <Col>
                                <Radio.Group defaultValue="a" buttonStyle="solid">
                                    <Radio.Button value="a">aaaa</Radio.Button>
                                    <Radio.Button value="b">bbbb</Radio.Button>
                                </Radio.Group>
                            </Col>
                            <Col>
                                <Radio.Group defaultValue="a" buttonStyle="solid">
                                    <Radio.Button value="a">aaaa</Radio.Button>
                                    <Radio.Button value="b">bbbb</Radio.Button>
                                </Radio.Group>
                            </Col>

                            <Col>
                                <Radio.Group defaultValue="a" buttonStyle="solid">
                                    <Radio.Button value="a">aaaa</Radio.Button>
                                    <Radio.Button value="b">bbbb</Radio.Button>
                                </Radio.Group>
                            </Col>
                            <Col>
                                <Radio.Group defaultValue="a" buttonStyle="solid">
                                    <Radio.Button value="a">aaaa</Radio.Button>
                                    <Radio.Button value="b">bbbb</Radio.Button>
                                </Radio.Group>
                            </Col>


                        </Row>
                        <br></br>
                        <Row justify='center'>Note</Row>
                        <Row justify='space-around'>
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Select a person"
                                optionFilterProp="children"
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Select a person"
                                optionFilterProp="children"
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Select a person"
                                optionFilterProp="children"
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>


                        </Row>
                        <br></br>
                        <Row>
                            <div>
                                Sup pic
                           </div>
                        </Row>
                        <Row>
                            <Upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture"
                                defaultFileList={[...fileList]}
                            >
                                <Button icon={<UploadOutlined />}>Upload</Button>
                            </Upload>
                        </Row>
                        <Row
                            justify='space-around'
                            style={{ marginTop: '1.5rem', marginBottom: '3rem', marginRight: "9rem" }}
                        >
                            <Button type='primary' htmlType='submit'>
                                Reset
                  </Button>


                            <Button type='primary' htmlType='submit'>
                                send
                  </Button>
                        </Row>


                    </Form>
                </Col>
            </Row>

        </>
    );
}

export default VenderAddProduct;
