import React, { FC } from 'react';
import NavBar from './components/NavBar';
import { Layout } from 'antd';
import Footer from './components/Fotter';
import AppRouter from './components/AppRouter';

const App:FC = () => {
  
  return(<div>      
      <Layout>
        {/* <RouterProvider router={auth?privateRouter:router}  />       */}        
        <NavBar />
        <Layout.Content>          
        <AppRouter />
          WORKING ...
        </Layout.Content>
        <Footer />
      </Layout>    
  </div>);
};
 

export default App;