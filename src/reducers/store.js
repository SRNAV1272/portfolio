import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Movies from "./Slices/Movies";

export const store = configureStore({
    reducer: combineReducers({
        MoviesReducers: Movies
    })
})