import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value : {
            user : ""
        },
    },
    reducers: {
       functionExample : (state , action) => {
           state.value.user = action.payload
       }
    },
})

export const { functionExample } = userSlice.actions

export default userSlice.reducer