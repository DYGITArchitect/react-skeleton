export enum RoutesNames{
    LOGIN = "login",
    MAIN = "/",
    COURSELIST = "courses",
    ERROR = "error",
    ABOUT = "about",
    TRAINIGLIST = "trainings"
}

export interface IRoute {
    path: string;
    element: React.ReactNode;
}