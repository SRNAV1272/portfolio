import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { Load } from "./Loading"
import { Notify } from "./Notification"

const initialState = {
    response: null,
}

export const PostLogin = createAsyncThunk(
    "Login/PostLogin",
    async ({ creds, navigate }, { dispatch }) => {
        try {
            const response = await axios.post(process.env.NODE_ENV === 'development' ? 'http://localhost:8080/signin ' : '/signin', creds)
            dispatch(Load(false))
            if (response.data.login) {
                dispatch(Notify({ msg: response.data.msg, type: 'success' }))
                navigate('/dashboard/home', { replace: true })
            } else {
                dispatch(Notify({ msg: response.data.msg, type: 'error' }))
            }
        } catch (e) {
            dispatch(Load(false))
            dispatch(Notify({ msg: 'Please Check your Internet !', type: 'error' }))
        }
    }
)

export const LoginSlice = createSlice({
    name: 'Login',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(PostLogin.pending, (state, action) => {
                console.log(action.payload)
                return {
                    ...state,
                    loading: true
                }
            })
            .addCase(PostLogin.fulfilled, (state, action) => {
                return {
                    ...state,
                    response: action.payload,
                    loading: false
                }
            })
    }
})

export default LoginSlice.reducer