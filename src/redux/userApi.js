import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/user" }),
    tagTypes: ["user"],
    endpoints: (builder) => {
        return {
            addUser: builder.mutation({
                query: (userData) => {
                    return {
                        url: `/add-user`,
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["user"]
            }),

            mailUser: builder.mutation({
                query: (userData) => {
                    return {
                        url: `/send`,
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["user"]
            }),
        }
    }
})

export const {
    useAddUserMutation,
    useMailUserMutation
} = userApi
