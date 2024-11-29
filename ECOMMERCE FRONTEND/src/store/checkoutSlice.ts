

import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Status } from '../globals/components/types/types'
import { MyOrdersData, OrderData, OrderDetails, OrderResponseData, OrderResponseItem, OrderStatus } from '../globals/components/types/checkoutTypes'
import { AppDispatch } from './store'
import { APIAuthenticated } from '../http'

const initialState:OrderResponseData = {
    items : [],
    status : Status.LOADING,
    khaltiUrl : null,
    myOrders : [],
    orderDetails : []

}

const orderSlice = createSlice({
    name : 'order',
    initialState,
    reducers : {
        setItems(State:OrderResponseData, action:PayloadAction<OrderResponseItem>){
            State.items.push(action.payload)
        },
        setStatus(state:OrderResponseData, action:PayloadAction<Status>){
            state.status = action.payload
        },
        setKhaltiUrl(state:OrderResponseData, action:PayloadAction<OrderResponseData['khaltiUrl']>){
            state.khaltiUrl = action.payload
        },
        setMyOrders(state:OrderResponseData, action:PayloadAction<MyOrdersData[]>){
            state.myOrders = action.payload
        },
        setMyOrderDetails(state:OrderResponseData, action:PayloadAction<OrderDetails[]>){
            state.orderDetails = action.payload
        },
        updateOrderStatus(state:OrderResponseData, action:PayloadAction<{status:OrderStatus, orderId:string}>){
            const status = action.payload.status
            const orderId = action.payload.orderId
            const updatedOrder = state.myOrders.map(order => order.id == orderId ? {...order, orderStatus : status} : order)
            state.myOrders = updatedOrder
        }

    }
})

export const {setItems, setStatus, setKhaltiUrl, setMyOrders, setMyOrderDetails, updateOrderStatus} = orderSlice.actions
export default orderSlice.reducer



export function orderItem(data:OrderData){
    return async function orderItemThunk(dispatch:AppDispatch){
        dispatch(setStatus(Status.LOADING))
        try {
            const response = await APIAuthenticated.post('/order',data)
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setItems(response.data.data))
                if(response.data.url){
                    dispatch(setKhaltiUrl(response.data.url))
                }else{
                    dispatch(setKhaltiUrl(null))
                }
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR))
        }
    }
}

//myorders
export function fetchMyOrders(){
    return async function fetchMyOrdersThunk(dispatch:AppDispatch){
        dispatch(setStatus(Status.LOADING))
        try {
            const response = await APIAuthenticated.get('/order/customer')
            console.log(response,"This is response");
            
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setMyOrders(response.data.data))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR))
        }
    }
}
//myorders Details
export function fetchMyOrderDetails(id:string){
    return async function fetchMyOrderDetailsThunk(dispatch:AppDispatch){
        dispatch(setStatus(Status.LOADING))
        try {
            const response = await APIAuthenticated.get('/order/customer/' + id)
            // console.log(response,"This is response");
            
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setMyOrderDetails(response.data.data))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR))
        }
    }
}


export function updateOrderStatusInStore(data:any){
    return function updateOrderStatusInStoreThunk(dispatch:AppDispatch){
        dispatch(updateOrderStatus(data))
    }
}