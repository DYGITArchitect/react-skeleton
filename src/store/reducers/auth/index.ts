import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../models/IUser";
import { getUserAction } from "./authAction";
import { AuthState } from "./types";

const initialState: AuthState = {
    isAuth: false,
    error: "",
    isLoading: false,
    user: {} as IUser,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthAction(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
            localStorage.removeItem('auth')
            localStorage.removeItem('username')
        },
        setEmptyErrorAction(state) {
            state.error = "";
        },
        setUser(state){
          state.error = "";     
          state.isAuth = Boolean(localStorage.getItem("auth"))     
          state.user.username = String(localStorage.getItem("username"))
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserAction.fulfilled, (state, action: PayloadAction<IUser>) => {            
            state.isAuth = true;
            state.isLoading = false;
            state.error = "";
            state.user = action.payload;    
            
            localStorage.setItem('auth', 'true')
            localStorage.setItem('username', action.payload.username)
        });
        
        builder.addCase(getUserAction.pending, (state) => {
            state.isAuth = false;
            state.isLoading = true;                     
        });   
        
        builder.addCase(getUserAction.rejected, (state, action: PayloadAction<string | any>) => {
            state.isAuth = false;
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default authSlice.reducer;