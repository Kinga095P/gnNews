import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from "axios"
import Post from '../../models/postModel';


export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async (data: string, thunkApi) => {
        const id = data;
        try {
            const response = await axios.get<Post>(`https://newsapi.org/v2/top-headlines?country=${id}&apiKey=a73fbe8c2087481b877ad66531329cb6`)
            return response.data;
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
);

interface PostState {
    loading: boolean,
    error: string | null,
    data: Post | null
}

const initialState = {
    loading: false,
    error: null,
    data: null
} as PostState


const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getPosts.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getPosts.fulfilled, (state, action: PayloadAction<Post>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getPosts.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload
            });
    },
});

export default postSlice.reducer;