//requiring redux-toolkit createSlice function to configure slices.
import {createSlice, PayloadAction} from '@reduxjs/toolkit'


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
    status : "loading" //initial status loading. status vaneko pahile network call gardaa k vairako xa:: success vayo ki, failure vayo ki, loading vayo ki tei decide garna ko lagi.
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