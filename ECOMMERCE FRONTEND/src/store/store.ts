



import {configureStore} from '@reduxjs/toolkit' //store configure gardaa redux ley configureStore vanni function diraako hunxa tri import gareko
import authSlice from './authSlice'






const store = configureStore({
    reducer : {
        auth : authSlice
        
    }
})


export default store