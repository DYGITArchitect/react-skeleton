import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IUser } from "../models/IUser"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001"}),
    endpoints: (build) => ({
        fetchAllUsers: build.query<IUser[], number>({
            query: (limit: number = 5) => ({
                url: "/users"
                // , params: {
                //     _limit: limit
                // }
            })
        })
    })
})