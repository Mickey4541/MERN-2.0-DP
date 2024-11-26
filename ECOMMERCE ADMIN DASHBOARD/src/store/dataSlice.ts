import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Category, InitialState, OrderData, Product, User } from '../types/data'
import { Status } from '../types/status'
import { AppDispatch } from './store'
import { APIAuthenticated } from '../http'



export interface AddProduct{
    productName : string,
    productDescription : string,
    productPrice : number,
    productTotalStockQty : number,
    image : null,
    categoryId : string
    
}

const initialState:InitialState = {
    orders : [],
    products : [],
    users : [],
    categories : [],
    status : Status.LOADING,
    singleProduct : null
}

interface DeleteProduct{
    productId : string
}


interface DeleteUser{
    userId : string
}

interface DeleteOrder{
    orderId : string
}


interface DeleteCategory{
    categoryId : string
}

const dataSlice = createSlice({
    name : 'data',
    initialState : initialState,
    reducers : {
        setStatus(state:InitialState, action:PayloadAction<Status>){
            state.status = action.payload
        },
        setProduct(state:InitialState,action:PayloadAction<Product[]>){
            state.products = action.payload
        },
        setOrders(state:InitialState,action:PayloadAction<OrderData[]>){
            state.orders = action.payload
        },
        setCategories(state:InitialState,action:PayloadAction<Category[]>){
            state.categories = action.payload
        },
        setUsers(state:InitialState,action:PayloadAction<User[]>){
            state.users = action.payload
        },
        setSingleProduct(state:InitialState,action:PayloadAction<Product>){
            state.singleProduct = action.payload
        },
        setDeleteProduct(state:InitialState, action:PayloadAction<DeleteProduct>){
            const index = state.products.findIndex(item => item.id = action.payload.productId)
            state.products.splice(index, 1)
        },
        setDeleteUser(state:InitialState, action:PayloadAction<DeleteUser>){
            const index = state.users.findIndex(item => item.id = action.payload.userId)
            state.users.splice(index, 1)
        },
        setDeleteOrder(state:InitialState, action:PayloadAction<DeleteOrder>){
            const index = state.orders.findIndex(item => item.id = action.payload.orderId)
            state.orders.splice(index, 1)
        }
        setDeleteCategory(state:InitialState, action:PayloadAction<DeleteCategory>){
            const index = state.categories.findIndex(item => item.id = action.payload.categoryId)
            state.orders.splice(index, 1)
        }
    }
})

export const {setStatus, setProduct, setOrders, setCategories, setDeleteCategory, setUsers, setSingleProduct, setDeleteProduct, setDeleteUser, setDeleteOrder} = dataSlice.actions
export default dataSlice.reducer



//hamile manually function banauna lageko. Catchasyncthunk use gareko xainam. first aauta function banako ra tes function ley aarko asynchronous function return garxa.
export function fetchProducts(){
    return async function fetchProductThunk(dispatch : AppDispatch){
        dispatch(setStatus(Status.LOADING))
        try {
            const response = await APIAuthenticated.get('/admin/product')
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




export function fetchOrders(){
    return async function fetchOrdersThunk(dispatch:AppDispatch){
        dispatch(setStatus(Status.LOADING))
        try {
            const response = await APIAuthenticated.get('/order')
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setOrders(response.data.data))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR))
        }
    }
}


export function fetchUsers(){
    return async function fetchUsersThunk(dispatch:AppDispatch){
        dispatch(setStatus(Status.LOADING))
        try {
            const response = await APIAuthenticated.get('/users')
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setUsers(response.data.data))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR))
        }
    }
}



//admin ley product add gardaa>>>
export function addProduct(data:AddProduct){
    return async function addProductThunk(dispatch:AppDispatch){
        dispatch(setStatus(Status.LOADING))
        try {
            const response = await APIAuthenticated.post('/admin/product',data,{
                headers : {
                    'Content-Type' : "multipart/form-data"
                }
            })
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))   
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR))
        }
    }
}



export function addCategory(data:{categoryName : string}){
    return async function addcategoryThunk(dispatch:AppDispatch){
        dispatch(setStatus(Status.LOADING))
        try {
            const response = await APIAuthenticated.post('/admin/category',data)
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
                setCategories(response.data.data)
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR))
        }
    }
}


//1:06:34 day 66/////////
skdjflksdjf


export function deleteProduct(id:string){
    return async function deleteProductThunk(dispatch:AppDispatch){
        dispatch(setStatus(Status.LOADING))
        try {
            const response = await APIAuthenticated.delete('/admin/product/'+ id)
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))           
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR))
        }
    }
}





export function deleteUser(id:string){
    return async function deleteUserThunk(dispatch:AppDispatch){
        dispatch(setStatus(Status.LOADING))
        try {
            const response = await APIAuthenticated.delete('/users/'+ id)
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))  
                dispatch(setDeleteUser({userId:id}))            
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR))
        }
    }
}




export function deleteOrder(id:string){
    return async function deleteOrderThunk(dispatch:AppDispatch){
        dispatch(setStatus(Status.LOADING))
        try {
            const response = await APIAuthenticated.delete('/order/admin/'+ id)
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setDeleteOrder({orderId : id}))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR))
        }
    }
}



export function singleProduct(id:string){
    return async function singleProductThunk(dispatch:AppDispatch){
        dispatch(setStatus(Status.LOADING))
        try {
            const response = await APIAuthenticated.get('/admin/product'+ id)
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))               
                dispatch(setSingleProduct(response.data.data))               
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR))
        }
    }
}

//23.55