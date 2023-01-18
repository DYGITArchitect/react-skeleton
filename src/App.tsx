import React, { FC, useEffect } from 'react';
import NavBar from './components/NavBar';
import { Layout } from 'antd';
import Footer from './components/Fotter';
import AppRouter from './components/AppRouter';
import { Content } from 'antd/es/layout/layout';
import './App.css';
import { authSlice } from './store/reducers/auth';
import { useAppDispatch } from './hooks/redux';

const App:FC = () => {
  const dispatch = useAppDispatch()

  const {setUser} = authSlice.actions

  useEffect(() => {
    if (localStorage.getItem('auth')){ // почему-то отрабатывает дважды, где-то накосячил надо разобраться
      dispatch(setUser())
    }
  })

  return(<div>      
      <Layout className="layout">
        <NavBar />
        <Content className="site-layout-content">          
          <AppRouter />          
        </Content>
        <Footer/>
      </Layout>    
  </div>);
}; 

export default App;