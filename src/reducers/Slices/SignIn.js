import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { Load } from "./Loading"
import { Notify } from "./Notification"

const initialState = {
    login: false,
    ph_no: '',
    bill: '',
    projects: 0,
    attendance: 0,
    totaldays: 0,
    name: 'student',
    date: '',
    course: [],
    batch: '',
    signupdata: {

    }
}

export const PostLogin = createAsyncThunk(
    "Login/PostLogin",
    async ({ creds, navigate }, { dispatch }) => {
        try {
            console.log(creds)
            const response = await axios.post(process.env.NODE_ENV === 'development' ? 'http://localhost:8080/login ' : '/login', creds)
            dispatch(Load(false))
            if (response.data.login) {
                console.log(response.data)
                dispatch(Notify({ msg: response.data.msg, type: 'success' }))
                navigate('/dashboard/home', { replace: true })
                return response.data
            } else {
                console.log(response.data)
                dispatch(Notify({ msg: response.data.msg, type: 'error' }))
            }
        } catch (e) {
            dispatch(Load(false))
            dispatch(Notify({ msg: 'Please Check your Internet !', type: 'error' }))
        }
    }
)

export const PostSignUp = createAsyncThunk(
    "Login/SignUp",
    async ({ data, navigate }, { dispatch }) => {
        try {
            console.log(data)
            const response = await axios.post(
                process.env.NODE_ENV === 'development' ? 'http://localhost:8080/getOtp ' : '/getOtp', data
            )
            console.log(response.data)
            dispatch(Load(false))
            if (response.data.Message === 'Submitted Successfully') {
                dispatch(Notify({ msg: 'OTP Sent !', type: 'success' }))
                navigate('/otp')
                return {
                    ...response.data
                }
            } else
                dispatch(Notify({ msg: response.data.msg, type: 'info' }))
        } catch (e) {
            console.error(e)
        }
    }
)
export const VerifyOtp = createAsyncThunk(
    "Login/VerifyOtp",
    async ({ data, navigate }, { dispatch }) => {
        try {
            console.log(data)
            const response = await axios.post(
                process.env.NODE_ENV === 'development' ? 'http://localhost:8080/verifyOtp ' : '/verifyOtp', data
            )
            console.log(response.data)
            dispatch(Load(false))
            if (response.data.verification) {
                dispatch(Notify({ msg: 'Verification Successful !', type: 'success' }))
                navigate('/login')
            } else dispatch(Notify({ msg: 'Verification Failed !', type: 'error' }))
            return {}
        } catch (e) {
            console.error(e)
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
                return {
                    ...state,
                }
            })
            .addCase(PostLogin.fulfilled, (state, action) => {
                console.log(action.payload)
                if (action.payload)
                    return {
                        ...state,
                        login: action.payload.login,
                        ph_no: action.payload.ph_no,
                        // bill: action.payload.bill,
                        // projects: action.payload.assignments,
                        // attendance: action.payload.attended,
                        // totaldays: action.payload.totaldays,
                        // name: action.payload.name,
                        // date: action.payload.date,
                        // course: action.payload.course,
                        // batch: action.payload.batch
                    }
            })
            .addCase(PostSignUp.pending, (state, action) => {
                return {
                    ...state
                }
            })
            .addCase(PostSignUp.fulfilled, (state, action) => {
                console.log(action.payload)
                return {
                    ...state,
                    signupdata: {
                        ...action.payload
                    }
                }
            })
            .addCase(VerifyOtp.pending, (state, action) => {
                return {
                    ...state
                }
            })
            .addCase(VerifyOtp.fulfilled, (state, action) => {
                return {
                    ...state,
                    signupdata: action.payload
                }
            })
    }
})
export const { logout } = LoginSlice.actions
export default LoginSlice.reducer