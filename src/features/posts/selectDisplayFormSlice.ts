import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface SelectDisplayFormState {
    value: string
}

const initialState: SelectDisplayFormState = {
    value: "list",
}

export const selectDisplayFormSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        getSelectedDisplayForm: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
})

export const { getSelectedDisplayForm } = selectDisplayFormSlice.actions
export default selectDisplayFormSlice.reducer