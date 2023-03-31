import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CountryState {
    value: string
}
const initialState: CountryState = {
    value: "us",
}

export const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        getSelectedCountry: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
})

export const { getSelectedCountry } = countrySlice.actions
export default countrySlice.reducer