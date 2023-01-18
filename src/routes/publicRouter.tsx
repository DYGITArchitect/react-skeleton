import Main from "../pages/Main";
import Login from "../pages/Login";
import { RoutesNames, IRoute } from "./index";
import { Navigate } from "react-router-dom";
import TrainingList from "../pages/TrainingList";
import About from "../pages/About";
import React from "react";

export const publicRouter: IRoute[] = [
    {path: RoutesNames.MAIN, element: React.createElement(Main)},
    {path: RoutesNames.ABOUT, element: React.createElement(About)},
    {path: RoutesNames.LOGIN, element: React.createElement(Login)},
    {path: RoutesNames.TRAINIGLIST, element: React.createElement(TrainingList)},
    {path: "*", element: <Navigate to="/" replace />}
]