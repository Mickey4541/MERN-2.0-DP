# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
- Redux Toolkit is synchronous in nature. So, we cannot do asynchronous task inside redux toolkit. Like calling a api, settimeout functions, setinterval functions etc. Like in simple we, cannot do the asynchronous tasks inside redux. 

- But what if we have to do a asynchronous tasks inside redux toolkit. Redux toolkit has a function called createAsyncThunk to do a asynchronous task inside the redux toolkit.

- npm i axios to do async tasks inside redux using createAsyncThunk.

- Inside authslice.ts make a function of register and login which is returning a thunk function.

- make a http folder and inside that, make a index.ts file and make a instance of axios. Then we can use it like this::  const response = await API.post('/register', data).

Then, the code of register and login inside authslice.ts which is a redux-toolkit code, we have to connect that redux-toolkit code with our login and register form so that whenever user submit a form, code inside authslice.ts got triggered. For that we have react-redux package. We can use different hooks given by the react-redux package like usedispatch, useselector to connect the react with redux.


- app.ts 7 to 9
- card.tsx line 17
