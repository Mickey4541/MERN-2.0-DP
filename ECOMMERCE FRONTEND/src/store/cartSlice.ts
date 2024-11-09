
import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { CartItem, Cartstate } from "../globals/components/types/cartTypes"
import { Status } from "../globals/components/types/types"
import { AppDispatch } from "./store"
import { APIAuthenticated } from "../http"

const intitalState:Cartstate = {
    items : [],
    status : Status.LOADING,

}


const cartSlice = createSlice({
    name : 'cart',
    initialState : intitalState,
    reducers : {
        setItems(state:Cartstate, action:PayloadAction<CartItem[]>){
           state.items = action.payload
        },
        setStatus(state:Cartstate, action:PayloadAction<Status>){
            state.status = action.payload
        }
    }
})

export const {setItems, setStatus} = cartSlice.actions
export default cartSlice.reducer



//function to call api::
export function addToCart(productId:string){
    return async function addToCartThunk(dispatch : AppDispatch){
        dispatch(setStatus(Status.LOADING))
        try {
             const response = await APIAuthenticated.post('/customer/cart',{
                productId : productId,
                quantity : 1,
             })
             if(response.status === 201){
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setItems(response.data.data))
             }else{
                dispatch(setStatus(Status.ERROR))
             }
        } catch (error) {
            
        }
    }
}