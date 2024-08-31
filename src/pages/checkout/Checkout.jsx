import React, { useEffect, useState } from 'react'
import Navbar from '../../globals/components/navbar/Navbar'
import Footer from '../../globals/components/footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../../store/checkoutSlice'
import { STATUSES } from '../../globals/misc/status'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const navigate = useNavigate()
  const {status} = useSelector((state) => state.checkout)
  const {items:products} = useSelector((state) => state.cart);
  const [paymentMethod,setPaymentMethod] = useState("COD");
  const subTotal = products.reduce((amount,item) => item.quantity * item.product.productPrice + amount,0);
  const dispatch = useDispatch();
  const shippingAmount = 100
  const totalAmount = subTotal + shippingAmount

  const [data,setData] = useState({
    email : "",
    phoneNumber : "",
    shippingAddress : ""
  })

  const handleChange = (e) => {
    const {name , value} = e.target;
    setData({ 
      ...data,
      [name] : value
    })
  }

  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  }
 
  const handleOrder = () => {
    const orderDetails = {
      shippingAddress : data.shippingAddress,
      totalAmount : totalAmount,
      item : products,
      paymentDetails : {
        method : paymentMethod
      },
      phoneNumber : data.phoneNumber
    }
    dispatch(createOrder(orderDetails))
  }

  const proceedForKhaltiPayment = () => {
    console.log(paymentMethod,status)
    if(paymentMethod === "Khalti" && status === STATUSES.SUCCESS) {
      return navigate("/Khalti")
    }
  }
  
  useEffect(() => {
    proceedForKhaltiPayment()
  },[status,data])


  const handleSubmit = (e) => {
    e.preventDefault();
    handleOrder();
  }

  return (
    <>
    <Navbar />
 
<div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 gap-8 mt-20"> 
  <div class="px-4 pt-8">
    <p class="text-xl font-medium">Order Summary</p>
    <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>
    <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
      {
          products.length > 0 && products.map((product) => {
            return (
              <>
              <div class="flex flex-col rounded-lg bg-white sm:flex-row">
        <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src={product.product.productImage} alt="" />
        <div class="flex w-full flex-col px-4 py-4">
          <span class="font-semibold">{product.product.productName}</span>
          <span class="float-right text-gray-400">Qty:- {product.quantity}</span>
          <p class="text-lg font-bold">{product.product.productPrice}</p>
        </div>
      </div>
              </>
            )
          })
      }
      
    </div>

    <p class="mt-8 text-lg font-medium">Shipping Methods</p>
    <form class="mt-5 grid gap-6">
      <div class="relative">
        <input class="peer hidden" id="radio_1" value="COD" checked={paymentMethod==="COD"} type="radio" name="radio" onChange={handlePaymentMethod}  />
        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
          <img class="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">COD (Cash On Delivery)</span>
            <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
      <div class="relative">
        <input class="peer hidden" id="radio_2" type="radio" name="radio" value="Khalti" onChange={handlePaymentMethod} />
        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
          <img class="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">Online (Khalti)</span>
            <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
    </form>
  </div>
  <form onSubmit={handleSubmit} >
  <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
    <p class="text-xl font-medium">Payment Details</p>
    <p class="text-gray-400">Complete your order by providing your payment details.</p>
    <div class="">
      <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
      <div class="relative">
        <input type="text" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" onChange={handleChange}/>
        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-18 0v1.5a2.5 2.5 0 005 0V12" />
          </svg>
        </div>
      </div>
      <label for="phoneNumber" class="mt-4 mb-2 block text-sm font-medium">Phone Number</label>
      <div class="relative">
        <input type="number" id="phoneNumber" name="phoneNumber" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="phoneNumber" onChange={handleChange}/>
        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-18 0v1.5a2.5 2.5 0 005 0V12" />
          </svg>
        </div>
      </div>
      <label for="shipping-address" class="mt-4 mb-2 block text-sm font-medium">Shipping Address</label>
      <div class="flex flex-col sm:flex-row">
        <div class="relative flex-shrink-0 sm:w-7/12">
          <input type="text" id="shipping-address" name="shippingAddress" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Shipping Address" onChange={handleChange} />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c0 2.314-2.239 3.875-3.94 3.875S4 13.5 4 11a8 8 0 1116 0c0 2.314-2.239 3.875-3.94 3.875S12 13.5 12 11z" />
            </svg>
          </div>
        </div>
        <select name="billing-state" class="mt-3 w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 sm:ml-3 sm:mt-0 sm:w-1/3">
          <option value="State">State</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Rajastan">Rajastan</option>
        </select>
        <input type="text" name="billing-zip" class="mt-3 flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 sm:ml-3 sm:mt-0 sm:w-1/6" placeholder="ZIP" />
      </div>

      <div class="mt-6 border-t border-b py-2">
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Subtotal</p>
          <p class="font-semibold text-gray-900">Rs {subTotal}</p>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Shipping</p>
          <p class="font-semibold text-gray-900">Rs {shippingAmount}</p>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-between">
        <p class="text-sm font-medium text-gray-900">Total</p>
        <p class="text-2xl font-semibold text-gray-900">Rs {totalAmount}</p>
      </div>
    </div>
    <button class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
  </div>
  </form>
</div>

    <Footer />
    </>
  )
}

export default Checkout