
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Register from './pages/auth/register/Register'
import Login from './pages/auth/login/Login'
import { Provider } from 'react-redux'
import store from './store/store'
import Cart from './pages/cart/Cart'
import ProductDetails from './pages/productDetails/ProductDetails'

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
      </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
