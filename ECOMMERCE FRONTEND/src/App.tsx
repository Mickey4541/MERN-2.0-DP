
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import Login from './pages/auth/login/Login'
import Register from './pages/auth/register/Register'
import Home from './pages/home/Home'
import SingleProduct from './pages/singleProduct/SingleProduct'
import Cart from './pages/auth/cart/Cart'
import Checkout from './pages/checkout/Checkout'
import MyOrders from './pages/orders/myOrders/MyOrders'
import MyOrdersDetails from './pages/orders/myOrders/MyOrdersDetails'
import {io} from 'socket.io-client'

export const socket = io("http://localhost:3000",{
  auth : {
    token : localStorage.getItem('token')
  }
})

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
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/myorders' element={<MyOrders/>} />
          <Route path='/myorders/:id' element={<MyOrdersDetails/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
