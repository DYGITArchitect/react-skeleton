import CourseList from "../pages/CourseList";
import Main from "../pages/Main";
import { createBrowserRouter, Navigate} from "react-router-dom";
import Error from "../pages/Error";
import { RoutesNames } from "./index";
import TrainingList from "../pages/TrainingList";
import About from "../pages/About";

export const privateRouter = createBrowserRouter([
    {
        path: RoutesNames.MAIN,
        element: <Main />,
        errorElement: <Error />
    },
    {
        path: RoutesNames.COURSELIST,
        element: <CourseList />        
    },
    {
        path: RoutesNames.TRAINIGLIST,
        element: <TrainingList />
    },  
    {
        path: RoutesNames.ABOUT,
        element: <About />
    },  
    {
        path: "*",
        element: <Navigate to="/" replace />
    },
])

