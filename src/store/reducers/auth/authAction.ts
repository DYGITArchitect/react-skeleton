import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../../models/IUser";

export const getUserAction = createAsyncThunk(
    "user/fetchOne", 
    async(value: IUser, thunkAPI) => {
        try {            
            const response = await axios.get<IUser[]>("./users.json");
            const user = response.data.find(user => user.username === value.username && user.password === value.password)
            if (!user) {
                return thunkAPI.rejectWithValue("Пользователь не найден")
            } 
            return user
        } catch (error) {
            return thunkAPI.rejectWithValue("Не удается подгрузить пользователя")
        }
    }
)
