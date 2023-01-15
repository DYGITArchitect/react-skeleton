import { Button, Form, Input } from 'antd';
import React, { FC } from 'react';
import { rules } from '../utils/rules';
 

const LoginForm : FC = () => {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return(
  <Form
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
  >
    <Form.Item
        label="Пользователь"
        name="username"
        rules={[rules.required('Пожалуйста, имя пользователя!')]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required('Пожалуйста, введите пароль!')]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
  </Form>
  );
};
 

export default LoginForm;