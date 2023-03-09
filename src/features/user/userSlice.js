import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value : "dummy_value"
    },
    reducers: {
       functionExample : (state , action) => {
           console.log(state.value)
           console.log(action.payload)
       }
    },
})

// Action creators are generated for each case reducer function
export const { functionExample } = userSlice.actions

export default userSlice.reducer