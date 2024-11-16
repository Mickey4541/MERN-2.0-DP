import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { InitialState } from '../types/data'
import { Status } from '../types/status'


const initialState:InitialState = {
    orders : [],
    products : [],
    users : [],
    status : Status.LOADING
}
const dataSlice = createSlice({
    name : 'data',
    initialState : initialState,
    reducers : {
        setStatus(state:InitialState, action:PayloadAction<Status>){
            state.status = action.payload
        },
        
    }
})