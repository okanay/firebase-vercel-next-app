import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../features/counter/counterSlice";
import themeReducer from "../features/theme/themeSlice"
import extensionNavigationReducer from "../features/extensionNavigation/extensionNavigationSlicer";
import userReducer from "../features/user/userSlice"
export default configureStore({
    reducer: {
        user : userReducer,
        counter: counterReducer,
        theme: themeReducer,
        extensionNavigation : extensionNavigationReducer,
    },
})