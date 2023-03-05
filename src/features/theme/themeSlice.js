import {createSlice} from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: {
            color: "root-theme",
            mode: "dark",
            themes: [
                {theme: "root-theme"},
                {theme: "second-theme"},
                {theme: "third-theme"},
                {theme: "fourth-theme"},
                {theme: "fifth-theme"},
                {theme: "sixth-theme"}
            ],
            modes : [
                {mode : "dark"},
                {mode : "light"}
            ]
        }
    },
    reducers: {
        changeThemeColorByAction: (state, action) => {
            state.value.color = action.payload
        },
        changeThemeModeByAction: (state, action) => {
            state.value.mode = action.payload
        },
    },
})

export const {changeThemeColorByAction, changeThemeModeByAction} = themeSlice.actions

export default themeSlice.reducer