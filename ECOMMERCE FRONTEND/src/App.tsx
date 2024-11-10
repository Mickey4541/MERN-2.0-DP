
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import Login from './pages/auth/login/Login'
import Register from './pages/auth/register/Register'
import Home from './pages/home/Home'
import SingleProduct from './pages/singleProduct/SingleProduct'
import Cart from './pages/auth/cart/Cart'

function App() {

  return (
    // store vanni name maa hamro redux ko store import garera provider lai diyeko.
    //provider lai store disakepaxi yaha provider tag bhitra jj kura xa sabailey tyo store lai access garna sakni vaye. Provider bhitra jati pani routes xan aahile, paxi aru code ni huna sakyo, tyo sabai code , provider ko children haru vaye.
    //Ani yo provider vanni kura redux bata aako hoina, yo kura react-redux bata aako ho.
    
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/product/:id' element={<SingleProduct/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
