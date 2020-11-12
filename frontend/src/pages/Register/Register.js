import React, {useState, Fragment} from 'react';
import {
  Row,
  Col,
  Button,
  Form,
  Input,
  Divider,
  message,
  notification,
  Select,
} from 'antd';
import axios from '../../config/axios';
import {BASE_BACKEND_URL} from '../../config/constants';
import Dragger from 'antd/lib/upload/Dragger';
import {withRouter} from 'react-router-dom';

const layout = {
  labelCol: {xs: 24, sm: 5, md: 4, lg: 5, xl: 5, xxl: 5},
  wrapperCol: {xs: 24, sm: 19, md: 20, lg: 19, xl: 19, xxl: 19},
};

const {Option} = Select;

function Register(props) {
  const [fileName, setFileName] = useState('');

  const onFinish = ({username, password, nickname: name}) => {
    axios
      .post('/auth/register', {username, password, name, profileUrl: fileName})
      .then(res => {
        notification.success({
          description: 'Signup successfully',
        });
        props.history.push('/');
      })
      .catch(err => {
        console.log(err);
        notification.error({
          description: 'Something went wrong.',
        });
      });
  };

  const propsUpload = {
    name: 'img',
    multiple: false,
    action: `${BASE_BACKEND_URL}/auth/register`,
    onChange(info) {
      const {status} = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        setFileName(info.file.response.url);
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
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
  return (
    <Fragment>
      <Row justify='center'>
        <Col span={16} className='Form' marginTop='2rem'>
          <Row justify='center'>
            <div>
              <Dragger {...propsUpload}>
                <div
                  style={{
                    width: '14rem',
                    height: '14rem',
                    background: 'Gray',
                    borderRadius: '50%',
                  }}
                >
                  <p className='ant-upload-drag-icon'>
                    <br></br>
                    <br></br>
                  </p>

                  <p className='ant-upload-text'>Upload</p>
                  <p className='ant-upload-hint'>Profile Image</p>
                </div>
              </Dragger>
            </div>
          </Row>
          <Divider />

          <Row justify='center'>
            <Col span={16}>
              <Form
                style={{width: '100%', padding: '1rem'}}
                {...layout}
                name='register'
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
                  <Col span={24}>
                    <Form.Item
                      name='username'
                      label='Username'
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Username!',
                        },
                      ]}
                      style={{width: '100%'}}
                    >
                      <Input
                        placeholder='input Username'
                        style={{width: '100%'}}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Row>
                  <Col span={10}>
                    <Form.Item
                      name='firstname'
                      label='First Name'
                      rules={[
                        {
                          required: true,
                          message: 'Please input your First Name!',
                        },
                      ]}
                    >
                      <Input placeholder='input First Name' />
                    </Form.Item>
                  </Col>
                  <Col span={4}></Col>
                  <Col span={10}>
                    <Form.Item
                      name='lastname'
                      label='Last name'
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Last name!',
                        },
                      ]}
                    >
                      <Input placeholder='input Last name' />
                    </Form.Item>
                  </Col>
                </Row>

                <Row>
                  <Col span={24}>
                    <Form.Item
                      name='email'
                      label='E-mail'
                      rules={[
                        {
                          required: true,
                          message: 'Please input your E-mail!!',
                        },
                      ]}
                    >
                      <Input placeholder='input E-mail!' />
                    </Form.Item>
                  </Col>
                </Row>

                <Row>
                  <Col span={24}>
                    <Form.Item
                      name='password'
                      label='Password'
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Password',
                        },
                      ]}
                    >
                      <Input placeholder='input Password' />
                    </Form.Item>
                  </Col>
                </Row>

                <Row>
                  <Col span={24}>
                    <Form.Item
                      name='confirm'
                      label='Confirm Password'
                      dependencies={['password']}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: 'Please confirm your password!',
                        },
                        ({getFieldValue}) => ({
                          validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              'The two passwords that you entered do not match!'
                            );
                          },
                        }),
                      ]}
                    >
                      <Input placeholder='input Password' />
                    </Form.Item>
                  </Col>
                </Row>

                <Row>
                  <Col span={24}>
                    <Form.Item
                      name='security'
                      label='Security Question'
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Security Question!',
                        },
                      ]}
                    >
                      <Input.Group compact>
                        <Form.Item
                          name={['security', 'question']}
                          label='Security Question'
                          noStyle
                          rules={[
                            {
                              required: true,
                              message: 'Question is required',
                            },
                          ]}
                        >
                          <Select placeholder='Select question'>
                            <Option value='เกิดเดือนอะไร'>เกิดเดือนอะไร</Option>
                            <Option value='ชอบสีอะไร'>ชอบสีอะไร</Option>
                          </Select>
                        </Form.Item>
                        <Form.Item
                          name={['security', 'answer']}
                          noStyle
                          rules={[
                            {required: true, message: 'Answer is required'},
                          ]}
                        >
                          <Input
                            style={{width: '76%'}}
                            placeholder='Input answer'
                          />
                        </Form.Item>
                      </Input.Group>
                    </Form.Item>
                  </Col>
                </Row>

                <Row
                  justify='space-around'
                  style={{marginTop: '1rem', marginBottom: '3rem'}}
                >
                  <Button type='primary' htmlType='submit'>
                    Reset
                  </Button>

                  <Button type='primary' htmlType='submit'>
                    Register
                  </Button>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
}

export default withRouter(Register);
