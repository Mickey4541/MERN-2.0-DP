//requiring redux-toolkit createSlice function to configure slices.
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import API from '../http'


interface User{
    username : string,
    email : string,
    password : string,
    token : string
}

interface AuthState{
    user : User,
    status : string
}

const initialState:AuthState = {
    user : {} as User,
    status : "" //initial status empty. status vaneko pahile network call gardaa k vairako xa:: success vayo ki, failure vayo ki, loading vayo ki tei decide garna ko lagi.
}


interface RegisterData{
    username : string,
    email : string,
    password : string
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
        setStatus(state:AuthState, action:PayloadAction<string>){
            state.status = action.payload
        }
    }
})
//yaha createSlice lai const authSlice maa store ta garim, yaha createSlice ley aauta object return garirako hunxa. Tyo object bhitra aauta action vanni key hunxa, ani tyo action vanni key bhitra pani feri reducers ko key haru hunxan jastai setUSer, setStatus haru.

export const {setUser, setStatus} = authSlice.actions //aba kahi data pathauna paryo vani yei action user garnu parxa, 
export default authSlice.reducer






// DAY 47 //
//making a function which is returning a asynchronous function.
//yesari aauta normal function bhitra aarko asynchronous function return garayera Thunk use garera asynchronous work garna sakinxa.
export function register(data:RegisterData){
    return async function registerThunk(dispatch:any){
        // dispatch means calling. Here, we are calling setstatus by sending a initial payload loading state.
        dispatch(setStatus('loading'))
        try {
            const response = await API.post('/register', data)
        if(response.status === 201){
            dispatch(setStatus('success'))
        }else{
            dispatch(setStatus('error'))
        }
        } catch (error) {
            dispatch(setStatus('error'))
        }
    }
}





export function login(data:LoginData){
    return async function loginThunk(dispatch:any){
        dispatch(setStatus('loading'))
        try {
            const response = await API.post('/login',data)
            if(response.status ===  200){
                dispatch(setStatus('success'))
            }else{
                dispatch(setStatus('error'))
            }
        } catch (error) {
            dispatch(setStatus('error'))
        }
    }
}


