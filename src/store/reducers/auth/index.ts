import { createAction, createReducer } from "@reduxjs/toolkit";
import { IUser } from "../../../models/IUser";
import { AuthActionEnum, AuthState } from "./types";

const initialState: AuthState = {
    isAuth: false,
    error: "",
    isLoading: false,
    user: {} as IUser,
}

export const setAuthAction = createAction<boolean>(AuthActionEnum.SET_AUTH)
export const setErrorAction = createAction<string>(AuthActionEnum.SET_ERROR)
export const setIsLoadingAction = createAction<boolean>(AuthActionEnum.SET_IS_LOGGING)
export const setUserAction = createAction<IUser>(AuthActionEnum.SET_USER)

export const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(setAuthAction, (state, action) => {
        state.isAuth = action.payload;
        state.isLoading = false
    }) 
    builder.addCase(setErrorAction, (state, action) => {
        state.error = action.payload; 
        state.isLoading = false
    }) 
    builder.addCase(setIsLoadingAction, (state, action) => {state.isLoading = action.payload}) 
    builder.addCase(setUserAction, (state, action) => {state.user = action.payload}) 
})