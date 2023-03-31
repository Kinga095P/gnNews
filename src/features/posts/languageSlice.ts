import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
    value: string
}

const initialState: LanguageState = {
    value: "us",
}

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        getSelectedLanguage: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
})

export const { getSelectedLanguage } = languageSlice.actions
export default languageSlice.reducer