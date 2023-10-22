import { configureStore } from "@reduxjs/toolkit";
import searchApiReducer from "./apiSlices/SearchApi"
import favApiReducer from "./apiSlices/FavApi"
import favReducer from "./slices/FavSlice"
export default configureStore({
    reducer:{
        searchApiReducer,
        favApiReducer,
        favReducer
    }
})