import { Layout, Menu, MenuProps, Row } from 'antd';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { RoutesNames } from "../routes/index";
import { authSlice } from '../store/reducers/auth';

export interface INavBarItems {
  key: number;
  label: string;
} 

const NavBar : FC = () => {
    const navigate = useNavigate()
    const { isAuth, user} = useAppSelector(state => state.authReducer)
    const {setAuthAction} = authSlice.actions
    const dispatch = useAppDispatch()

    const menuItems: INavBarItems[] = []

    isAuth ?
      menuItems.push(      
        {key: 100, label: "Выйти"}      
      )
    :
      menuItems.push(      
        {key: 1, label: "Логин"}      
      )

    const onClick: MenuProps['onClick'] = (e) => {
        switch(e.key) {
          case '1':
            navigate(RoutesNames.LOGIN)
            break;
          case '100':
            dispatch(setAuthAction(false))             
            navigate(RoutesNames.MAIN)
            break;          
        }
      };

  return(
  <Layout.Header>
    <Row justify="end">   
        {isAuth && <div style={{color: 'white'}}>{user.username}</div>}
        <Menu style={{minWidth: '100px'}} theme='dark' mode='horizontal' selectable={false} onClick={onClick}  items={menuItems} />
    </Row>
  </Layout.Header>);
};
 

export default NavBar;