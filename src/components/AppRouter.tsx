import { Routes, Route } from 'react-router-dom';
import {publicRouter} from '../routes/publicRouter';
import { privateRouter } from '../routes/privateRouter';
import { useAppSelector } from '../hooks/redux';

const AppRouter = () => {
    const { isAuth } = useAppSelector(state => state.authReducer)

    return (
            !isAuth
            ?  
            <Routes>
            {publicRouter.map(route => 
                <Route key={route.path} path={route.path} element={route.element} />
            )}
            </Routes>
            :
            <Routes>
            {privateRouter.map(route => 
                <Route key={route.path} path={route.path} element={route.element} />
            )}
            </Routes>
    );
};
 

export default AppRouter;