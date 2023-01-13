import React, { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/publicRouter';
import { privateRouter } from './routes/privateRouter';
 

const App:FC = () => {
  const auth = false
  return(<div>    
    <RouterProvider router={auth?privateRouter:router}  />
    {/* <AppRouter /> */}
    WORKING ...
  </div>);
};
 

export default App;