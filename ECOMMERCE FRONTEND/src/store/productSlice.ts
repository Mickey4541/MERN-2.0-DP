//requiring redux-toolkit createSlice function to configure slices.
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Product, ProductState } from '../globals/components/types/productTypes'
import { Status } from '../globals/components/types/types'
import { AppDispatch, RootState } from './store'
import API from '../http'





const initialState:ProductState = {
    product : [],
    status : Status.LOADING,
    singleProduct : null
}

//This code is from productSlice.ts
export const productSlice = createSlice({
    name : 'product',
    initialState : initialState,//tyo store bhirta ko slice maa initially kk data hold garni vaneko,
    reducers : { //reducer is a function ani yesmaa jahile pani 2 ota parameter atate ra action aairako hunxa.
        setProduct(state:ProductState, action: PayloadAction<Product[]>){
            state.product = action.payload//jun data user ley pathauxa tyo action.payload maa aauxa. ani tyo data lai user ko {} empty object xa initially, tei maa lagera set gardinxa.
        },
        setStatus(state:ProductState, action:PayloadAction<Status>){
            state.status = action.payload
        },
        setSingleProduct(state:ProductState, action:PayloadAction<Product>){
            state.singleProduct = action.payload
        },
        
    }
})


export const {setProduct, setStatus, setSingleProduct} = productSlice.actions //aba kahi data pathauna paryo vani yei action user garnu parxa, 
export default productSlice.reducer 


//hamile manually function banauna lageko. Catchasyncthunk use gareko xainam. first aauta function banako ra tes function ley aarko asynchronous function return garxa.
export function fetchProduct(){
    return async function fetchProductThunk(dispatch : AppDispatch){
        dispatch(setStatus(Status.LOADING))
        try {
            const response = await API.get('/admin/product')
            if(response.status === 200){
                const {data} = response.data
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setProduct(data))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR))
        }
    }
}


export function fetchByProductId(productId : string){
    return async function fetchByProductIdThunk(dispatch:AppDispatch, getState : ()=> RootState){// GetState is a function and when we call it, it returns a initialState of productSlice. We need it to check if the data of specific id is there or not. And TootState help to access store.tsx
    const state = getState()
    const existingProduct = state.products.product.find((product:Product)=>product.id === productId)
    if(existingProduct){
        dispatch(setSingleProduct(existingProduct))
        dispatch(setStatus(Status.SUCCESS))
    }else{
        dispatch(setStatus(Status.LOADING))
        try {
            const response = await API.get(`/admin/product/${productId}`)
            if(response.status === 200){
                const {data} = response.data
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setSingleProduct(data))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR))
        }
    }
}
}

