- Dashboard integration through tailwind component.
> Installing redux toolkit:
- npm i @reduxjs/toolkit
- npm i react-redux

>First make a dataSlice and then make a store.ts file and write this:
```ts
import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice"


const store = configureStore({
    reducer : {
        datas : dataSlice
    }
})

export default store
```
- Now the redux store is setup complete, now we have to connect our admin project with the redux toolkit.

- then in app.tsx file which is main file, wrap the whole code with provider tag.


# Web socket integration in day 68 and in order status:
- for backend:
- npm in socket.io
> For Admin:
-  npm i socket.io-client
>for frontend:
 npm i socket.io-client 