
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
- So, first make a authSlice.ts file for the authentication.