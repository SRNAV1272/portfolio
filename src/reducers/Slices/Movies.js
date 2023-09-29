import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const GetMoviesData = createAsyncThunk(
    'get/GetMoviesData',
    async () => {
        try {
            const response = await axios.get(process.env.NODE_ENV === 'development' ? 'http://localhost:5000/movies ' : '/movies')
            console.log(response.data)
            return response.data
        } catch (e) {
            console.error(e)
            return []
        }
    }
)



const initialState = {
    MoviesData: [],
    loading: false
}

export const MoviesSlice = createSlice({
    name: 'Movies',
    initialState,
    reducers: {
        ResetData: (state, action) => {
            console.log('Reducers Data =>', action.payload)
        }
    },
    extraReducers(builder) {
        builder
            .addCase(GetMoviesData.pending, (state, action) => {
                return {
                    ...state,
                    loading: true
                }
            })
            .addCase(GetMoviesData.fulfilled, (state, action) => {
                return {
                    ...state,
                    MoviesData: action.payload,
                    loading: false
                }
            })
    }
})

export const { ResetData } = MoviesSlice.actions
export default MoviesSlice.reducer