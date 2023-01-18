import CourseList from "../pages/CourseList";
import Main from "../pages/Main";
import { Navigate} from "react-router-dom";
import { RoutesNames, IRoute } from "./index";
import TrainingList from "../pages/TrainingList";
import About from "../pages/About";
import React from "react";

export const privateRouter: IRoute[] = [
    {path: RoutesNames.MAIN, element: React.createElement(Main)},
    {path: RoutesNames.ABOUT, element: React.createElement(About)},    
    {path: RoutesNames.TRAINIGLIST, element: React.createElement(TrainingList)},
    {path: RoutesNames.COURSELIST, element: React.createElement(CourseList)},
    {path: "*", element: <Navigate to="/" replace />} // если логин корректный, то отрабатывает этот переход
]