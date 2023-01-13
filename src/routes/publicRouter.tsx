import Main from "../pages/Main";
import Login from "../pages/Login";
import { RoutesNames } from "./index";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Error from "../pages/Error";
import TrainingList from "../pages/TrainingList";
import About from "../pages/About";

export const router = createBrowserRouter([
    {
        path: RoutesNames.MAIN,
        element: <Main />,
        errorElement: <Error />
    },  
    {
        path: RoutesNames.LOGIN,
        element: <Login />
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

