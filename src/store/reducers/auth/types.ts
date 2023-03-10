import { IUser } from "../../../models/IUser";

export interface AuthState {
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
    error: string;
}

// export enum AuthActionEnum {
//     SET_AUTH = "SET_AUTH",
//     SET_ERROR = "SET_ERROR",
//     SET_USER = "SET_USER",
//     SET_IS_LOGGING = "SET_IS_LOGGING"
// }

// export interface SetAuthAction {
//     type: AuthActionEnum.SET_AUTH;
//     payload: boolean
// }

// export interface SetErrorAction {
//     type: AuthActionEnum.SET_ERROR;
//     payload: string
// }

// export interface SetIsLoggingAction {
//     type: AuthActionEnum.SET_IS_LOGGING;
//     payload: boolean
// }

// export interface SetUserAction {
//     type: AuthActionEnum.SET_USER;
//     payload: IUser
// }

// export type AuthAction = 
//     SetAuthAction | 
//     SetIsLoggingAction | 
//     SetErrorAction | 
//     SetUserAction
