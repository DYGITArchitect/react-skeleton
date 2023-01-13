import { Layout, Menu, MenuProps, Row } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutesNames } from "../routes/index";
 

const NavBar : FC = () => {
    const navigate = useNavigate()

    const [current, setCurrent] = useState('');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        navigate(RoutesNames.LOGIN)
      };

  return(
  <Layout.Header>
    <Row justify="end">
        <Menu theme='dark' mode='horizontal' onClick={onClick} selectedKeys={[current]} selectable={false} items={[{key: 1, label: "Логин"}]} />
            
        
    </Row>
  </Layout.Header>);
};
 

export default NavBar;