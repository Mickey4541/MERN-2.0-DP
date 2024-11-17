

import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice"
import authSlice from "./authSlice"


const store = configureStore({
    reducer : {
        datas : dataSlice,
        auth : authSlice
    }
})

export default store


//Hamile aafnai aafai aauta hook banako ho, hamilai bydefault dispatch ko type diyeko hudaina, SO, manually type diyera dispatch ko type banakoo.
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>