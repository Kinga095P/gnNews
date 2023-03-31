import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Article from '../../models/articleModel'

interface InfoState {
    article: Article
}

const initialState: InfoState = {
    article: {
        author: "",
        content: "",
        description: "",
        publishedAt: "",
        source: {
            id: 0,
            name: ""
        },
        title: "",
        url: "",
        urlToImage: ""
    },
}

export const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        getInfo: (state, action: PayloadAction<Article>) => {
            state.article = action.payload;
        },
    },
})

export const { getInfo } = infoSlice.actions
export default infoSlice.reducer