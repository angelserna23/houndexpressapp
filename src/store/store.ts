import { configureStore } from "@reduxjs/toolkit";
import guidesReducer from "./guidesSlice";

const store = configureStore({
    reducer: {
        guides: guidesReducer,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;