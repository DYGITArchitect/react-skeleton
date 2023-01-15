import React, { FC } from 'react';
import NavBar from './components/NavBar';
import { Layout } from 'antd';
import Footer from './components/Fotter';
import AppRouter from './components/AppRouter';
import { Content } from 'antd/es/layout/layout';
import './App.css';

const App:FC = () => {
  
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