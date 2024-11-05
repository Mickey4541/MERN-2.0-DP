
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
