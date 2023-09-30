import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { Load } from "./Loading"
import { Notify } from "./Notification"

const initialState = {
    login: false,
    username: '',
    bill: '',
    projects: 0,
    attendance: 0,
    totaldays: 0,
    name: 'student',
    date: '',
    course: [],
    batch: ''
}

export const PostLogin = createAsyncThunk(
    "Login/PostLogin",
    async ({ creds, navigate }, { dispatch }) => {
        try {
            const response = await axios.post(process.env.NODE_ENV === 'development' ? 'http://localhost:8080/signin ' : '/signin', creds)
            dispatch(Load(false))
            if (response.data.login) {
                console.log(response.data)
                dispatch(Notify({ msg: response.data.msg, type: 'success' }))
                navigate('/dashboard/home', { replace: true })
                return response.data
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
    reducers: {
        logout: (state) => {
            return {
                ...state,
                login: false
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(PostLogin.pending, (state, action) => {
                console.log(action.payload)
                return {
                    ...state,
                }
            })
            .addCase(PostLogin.fulfilled, (state, action) => {
                return {
                    ...state,
                    login: action.payload.login,
                    username: action.payload.username,
                    bill: action.payload.bill,
                    projects: action.payload.assignments,
                    attendance: action.payload.attended,
                    totaldays: action.payload.totaldays,
                    name: action.payload.name,
                    date: action.payload.date,
                    course: action.payload.course,
                    batch: action.payload.batch
                }
            })
    }
})
export const { logout } = LoginSlice.actions
export default LoginSlice.reducer