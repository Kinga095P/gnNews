import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./features/posts/countrySlice";
import infoSlice from "./features/posts/infoSlice";
import languageSlice from "./features/posts/languageSlice";
import postSlice from "./features/posts/postSlice";
import selectDisplayFormSlice from "./features/posts/selectDisplayFormSlice";

const store = configureStore({
    reducer: {
        postsSliceReducer: postSlice,
        countrySliceReducer: countrySlice,
        selectedDisplayFormReducer: selectDisplayFormSlice,
        infoSliceReducer: infoSlice,
        languageSliceReducer: languageSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store; 
