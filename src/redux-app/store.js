import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../redux-features/counter/counterSlice";
import themeReducer from "../redux-features/theme/themeSlice"
import extensionNavigationReducer from "../redux-features/extensionNavigation/extensionNavigationSlicer";
import userReducer from "../redux-features/user/userSlice"
export default configureStore({
    reducer: {
        user : userReducer,
        counter: counterReducer,
        theme: themeReducer,
        extensionNavigation : extensionNavigationReducer,
    },
})