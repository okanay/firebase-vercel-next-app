import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../features/counter/counterSlice";
import themeReducer from "../features/theme/themeSlice"
import extensionNavigationReducer from "../features/extensionNavigation/extensionNavigationSlicer";

export default configureStore({
    reducer: {
        counter: counterReducer,
        theme: themeReducer,
        extensionNavigation : extensionNavigationReducer,

    },
})