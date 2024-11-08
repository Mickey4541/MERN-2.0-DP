
# STATE MANAGEMENT ::::
- prop drilling.(Example 10 story building). State management concept is like makinga central codebase/place to store data, so that every component can use that data . It helps to remove the problem of prop driling.

- In React, state refers to a data structure that holds information about the component. It can change over time, usually in response to user actions or API calls.

> STORE, SLICE, REDUCERS, ACTIONS :::

> STORE : 
- Store is like a full cake.

> SLICE : 
- Slice is like one slice of cake. Without SLICE there is no STORE.

> REDUCERS:
- Reducer is like a api, jasle data haru lagera store ko kuani aauta slice maa store gardinxa. Tara problem is reducer lai chai hamile yo data lagera slice maa store gardel ma vanda samma usle kei pani garna sakdaina. So, we have to instruct that reducer.(What to do??)

- In technical term, reducer is a method which always has two parameters: state and action.

> ACTIONS: 
- Action vaneko reducer lai kei kaam gar vanna ko lagi use hunxa. Aba data store ko slice(Room) maa halni ra jhikni reducer + action ko kaam ho.(How to do?)




> react-redux:
react-redux: This library connects Redux to React by providing:

- Provider: A component that makes the Redux store accessible to the React component tree.
- Hooks (useSelector, useDispatch): Functions that allow React components to access Redux state and dispatch actions without manually connecting components.
react-redux is necessary because it bridges Redux with React, enabling us to use Redux state in React components.

# Integration of Redux Toolkit :
- npm install @reduxjs/toolkit react-redux
- make a store folder inside src folder. All the redux toolkit setup and codes are written in this folder.
- Like we know , there is a store(cake) and inside that store(cake), there are many slices(authslice, productSlice, cartSlice and many more.)
- like this, we have to make a slice inside store.
- So, first make a authSlice.ts file for the authentication. and write this code:
```ts
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
```
- make a store.ts file and in that store.ts file, import authSlice.ts file and configure that store as: 
```ts
import {configureStore} from '@reduxjs/toolkit' //store configure gardaa redux ley configureStore vanni function diraako hunxa tri import gareko
import authSlice from './authSlice'

const store = configureStore({
    reducer : {
        auth : authSlice
        
    }
})


export default store
```

# Connecting the redux and react : 
- We already installed react-redux package for this connection of redux and react. If we have to send data to redux store and receiving the data from redux store , we need to connect our react project with the redux.

- the react-redux pacakge gives us different hooks like useselector, useDispatch etc for the connection of react and redux store.

- So, to connect, we have to write all the connection code in main file app.tsx.

- lets make aroute first:
- npm i react-router-dom
```ts
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Hello World Homepage</h1>} />
          <Route path='/register' element={<h1>Register</h1>} />
          <Route path='/login' element={<h1>Login</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
```
- now connecting to redux store:::
```ts

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {

  return (
    // store vanni name maa hamro redux ko store import garera provider lai diyeko.
    //provider lai store disakepaxi yaha provider tag bhitra jj kura xa sabailey tyo store lai access garna sakni vaye. Provider bhitra jati pani routes xan aahile, paxi aru code ni huna sakyo, tyo sabai code , provider ko children haru vaye.
    //Ani yo provider vanni kura redux bata aako hoina, yo kura react-redux bata aako ho.
    
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Hello World Homepage</h1>} />
          <Route path='/register' element={<h1>Register</h1>} />
          <Route path='/login' element={<h1>Login</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App

```
# day49::42 minutes: mern2:
- login register form and homepage banayera ani redux ko authslice panayera logic lekhisakepaxi, aba frontend ko form ko data backend maa table maa store garnu paryo. like /register api hit handaa forntend ta backend maa communicate hudaa cors ko error aauna sakxa. teskaa lagi::
- npm i cors
- npm i -D @types/cors

>Day 50 ::
redux ko ::
- data react bata redux store maa send garna paryo vani usedispatch ani data store bata react maa tanera herna paryo vani useSelector use garnu parxa.

- makes a dynamic navbar and logout implementation. token implementation in authslice and localstoage.