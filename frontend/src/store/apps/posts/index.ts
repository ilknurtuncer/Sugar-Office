import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getPosts = createAsyncThunk('get/posts', async() => {
    const response = await axios.get('https://jsonplaceholder.org/posts')

    return response.data
})

export const appPostsSlice = createSlice({
    name: 'getPosts',
    initialState: {
        data: [],
        loading: false
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getPosts.pending, (state: any) => {
            state.loading = true
        })
        builder.addCase(getPosts.fulfilled, (state: any, action: any) => {
            state.data = action.payload
            state.loading = false
        })
        builder.addCase(getPosts.rejected, (state: any, action: any) => {
            state.loading = false
        })
    }
})

export default appPostsSlice.reducer