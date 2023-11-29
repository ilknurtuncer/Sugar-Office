import { configureStore } from "@reduxjs/toolkit";

// ** Reducers

import posts from '@/store/apps/posts'

export const store = configureStore({
    reducer: {
        posts
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>