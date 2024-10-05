
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Register from './pages/auth/register/Register'
import Login from './pages/auth/login/Login'
import { Provider } from 'react-redux'
import store from './store/store'
import Cart from './pages/cart/Cart'
import ProductDetails from './pages/productDetails/ProductDetails'
import Checkout from './pages/checkout/Checkout'
import KhaltiSuccess from './pages/checkout/KhaltiSuccess'
import UserProfile from './pages/profile/UserProfile'
import MyOrders from './pages/myOrders/MyOrders'
import OrderDetails from './pages/orderDetails/OrderDetails'
import MyOrdersqr from './pages/myOrdersqr/MyOrdersqr'
import ForgetPassword from './pages/auth/forgetPassword/ForgetPassword'
import VerifyOtp from './pages/auth/verifyOtp/VerifyOtp'
import ResetPassword from './pages/auth/resetPassword/ResetPassword'


function App() {
  
  return (
    <>
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/productDetails/:id' element={<ProductDetails />} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/success' element={<KhaltiSuccess />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/myOrders' element={<MyOrders />}/>
        <Route path='/myOrders/:id' element={<OrderDetails />}/>
        <Route path='/myOrdersqr' element={<MyOrdersqr/>} />
        <Route path='/forgetPassword' element={<ForgetPassword />}/>
        <Route path='/verifyotp' element={<VerifyOtp />}/>
        <Route path='/resetpassword' element={<ResetPassword />}/>
      </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
