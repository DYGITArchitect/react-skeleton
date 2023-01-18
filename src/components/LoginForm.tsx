import { Alert, Button, Form, Input } from 'antd';
import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { authSlice } from '../store/reducers/auth';
import { getUserAction } from '../store/reducers/auth/authAction';
import { rules } from '../utils/rules';
 

const LoginForm : FC = () => {
  const { error, isLoading } = useAppSelector(state => state.authReducer)
  const {setEmptyErrorAction} = authSlice.actions
  const dispatch = useAppDispatch()

   const onFinish = (values: any) => {
    dispatch(getUserAction( {username: values.username, password: values.password}))
  };

  const onFinishFailed = (values: any) => {
    console.log('Error:', values);
  }

  return(
  <Form
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    onValuesChange={(changed, values) => dispatch(setEmptyErrorAction())}
  >
    <Form.Item
        label="Пользователь"
        name="username"
        rules={[rules.required('Пожалуйста, имя пользователя!')]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required('Пожалуйста, введите пароль!')]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Войти
        </Button>
      </Form.Item>  
      {error.trim() !== "" &&
      <Form.Item wrapperCol={{ offset: 4, }}>
        <Alert
          message="Ошибка"
          description="Некорректный логин или пароль!"
          type="error"
          showIcon
        />
      </Form.Item>
      }    
  </Form>
  
  );
};
 

export default LoginForm;