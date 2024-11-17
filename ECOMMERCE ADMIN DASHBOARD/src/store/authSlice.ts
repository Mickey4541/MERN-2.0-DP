//requiring redux-toolkit createSlice function to configure slices.
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { AppDispatch } from './store';
import { Status } from '../types/status';
import { API } from '../http';


interface User{
    username : string,
    email : string,
    password : string,
    token : string | null;
}

interface AuthState{
    user : User,
    status : Status,
    token : string | null
}

const initialState:AuthState = {
    user : {} as User,
    status : Status.LOADING, //initial status empty. status vaneko pahile network call gardaa k vairako xa:: success vayo ki, failure vayo ki, loading vayo ki tei decide garna ko lagi.
    token : null
}



interface LoginData{
    email : string,
    password : string
}


const authSlice = createSlice({
    name : 'auth',
    initialState : initialState,//tyo store bhirta ko slice maa initially kk data hold garni vaneko,
    reducers : { //reducer is a function ani yesmaa jahile pani 2 ota parameter atate ra action aairako hunxa.
        setUser(state:AuthState, action: PayloadAction<User>){
            state.user = action.payload//jun data user ley pathauxa tyo action.payload maa aauxa. ani tyo data lai user ko {} empty object xa initially, tei maa lagera set gardinxa.
        },
        setStatus(state:AuthState, action:PayloadAction<Status>){
            state.status = action.payload
        },
        resetStatus(state:AuthState){
            state.status = Status.LOADING
        },
        setToken(state:AuthState, action:PayloadAction<string>){
            state.user.token = action.payload
        },
        clearToken(state:AuthState){
            state.user.token = null;
        }
    }
})
//yaha createSlice lai const authSlice maa store ta garim, yaha createSlice ley aauta object return garirako hunxa. Tyo object bhitra aauta action vanni key hunxa, ani tyo action vanni key bhitra pani feri reducers ko key haru hunxan jastai setUSer, setStatus haru.

export const {setUser, setStatus, resetStatus, setToken, clearToken} = authSlice.actions //aba kahi data pathauna paryo vani yei action user garnu parxa, 
export default authSlice.reducer


export function login(data:LoginData){
    return async function loginThunk(dispatch:AppDispatch){
        dispatch(setStatus(Status.LOADING))
        try {
            const response = await API.post('/login',data)
            console.log(response, "Response is");
            
            if(response.status ===  200){
                const {data} = response.data //data is token
                //console.log(data);
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setToken(data))
                localStorage.setItem('token', data)
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR))
        }
    }
}


