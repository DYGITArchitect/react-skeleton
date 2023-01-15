import { Routes, Route } from 'react-router-dom';
import {publicRouter} from '../routes/publicRouter';
import { privateRouter } from '../routes/privateRouter';
import { useTypeSelector } from '../hooks/useTypedSelector';

const AppRouter = () => {
    const { isAuth } = useTypeSelector(state => state.auth)
        
    // const elem = React.createElement(About)

    // return(     
    // <Routes>        
    //     <Route path={RoutesNames.MAIN} element={<Main/>} errorElement={<Error/>}/>
    //     <Route path={RoutesNames.COURSELIST} element={<CourseList/>}/>
    //     <Route path={RoutesNames.LOGIN} element={<Login/>} />
    //     <Route path={RoutesNames.TRAINIGLIST} element={<TrainingList />} />
    //     <Route path={RoutesNames.ABOUT} element={elem} />
    //     <Route path="*" element={<Navigate to="/" replace />}/>        
    // </Routes>
    // );
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