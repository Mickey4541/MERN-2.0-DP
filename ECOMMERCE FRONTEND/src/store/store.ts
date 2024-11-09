



import {configureStore} from '@reduxjs/toolkit' //store configure gardaa redux ley configureStore vanni function diraako hunxa tri import gareko
import authSlice from './authSlice'
// import { productSlice } from './productSlice'
import productSlice from './productSlice'
import cartSlice from './cartSlice'






const store = configureStore({
    reducer : {
        auth : authSlice,
        products : productSlice,
        carts : cartSlice
        
    }
})


export default store

//type of dispatch
export type AppDispatch = typeof store.dispatch//this type will be used on register.tsx
//type of useselector
export type RootState = ReturnType<typeof store.getState>