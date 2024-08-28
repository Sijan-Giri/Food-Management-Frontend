import React from 'react'
import Navbar from '../../globals/components/navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartItem, updateCartItem } from '../../store/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {items:products} = useSelector((state) => state.cart)

    const totalItemsInCart = products.reduce((total,items) =>  items.quantity + total,0);
    const totalCartAmount = products.reduce((amount,items) => items.quantity * items.product.productPrice + amount,0 )

    const dispatch = useDispatch();

    const handleQuantityChange = (productId,newQuantity) => {
      dispatch(updateCartItem(productId,newQuantity))
    }

    const handleDelete = (id) => {
      dispatch(deleteCartItem(id))
    }
  return (
    <>
    <Navbar />
    <div class="h-screen bg-gray-100 pt-20">
    <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div class="rounded-lg md:w-2/3">
        {
            products.map((product) => {
                return (
                    <>
                    <div key={product.product._id} class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img src={product.product.productImage} alt="product-image" class="w-full rounded-lg sm:w-40" />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">{product.product.productName}</h2>
              <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
            </div>
            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-gray-100">
                <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => handleQuantityChange(product.product._id,product.quantity - 1)}> - </span>
                <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={product.quantity} min="1" />
                <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => handleQuantityChange(product.product._id,product.quantity + 1)}> + </span>
              </div>
              <div class="flex items-center space-x-4">
                <p class="text-sm">{product.product.productPrice}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500" onClick={() => handleDelete(product.product._id)}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
    </>
                )
            })
        }
        
      </div>
      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Total Items</p>
          <p class="text-gray-700">{totalItemsInCart}</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">{totalCartAmount}</p>
            <p class="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <Link to="/checkout"><button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button></Link>
      </div>
    </div>
  </div>
    </>
  )
}

export default Cart