import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Movies from "./Slices/Movies";
import Login from "./Slices/SignIn";
import Notification from "./Slices/Notification";
import Loading from "./Slices/Loading";

export const store = configureStore({
    reducer: combineReducers({
        MoviesReducers: Movies,
        LoginReducers: Login,
        NotificationReducers: Notification,
        LoadingReducers: Loading
    })
})