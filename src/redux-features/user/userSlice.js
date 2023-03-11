import {createSlice} from '@reduxjs/toolkit'
import {signOut} from "next-auth/react";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: {
            user: ""
        },
    },
    reducers: {
        reduxSignIn: (state, action) => {
            state.value.user = action.payload
        },
        reduxSignOut: (state, action) => {
            state.value.user = {}
            signOut()
        }
    },
})

export const {reduxSignIn, reduxSignOut} = userSlice.actions

export default userSlice.reducer