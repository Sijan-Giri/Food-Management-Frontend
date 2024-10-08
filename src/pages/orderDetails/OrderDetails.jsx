import React from 'react'
import Navbar from '../../globals/components/navbar/Navbar'
import Footer from '../../globals/components/footer/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { APIAuthenticated } from '../../globals/http'
import MyOrdersqr from '../myOrdersqr/MyOrdersqr'

const OrderDetails = () => {

    const {id} = useParams();
    const navigate = useNavigate()
    const {orders} = useSelector((state) => state.checkout);
    
    const [filteredOrder] = orders.filter((order) => order._id === id);
    console.log(filteredOrder);

    const handleCancel = async() => {
      try {
      const response = await APIAuthenticated.patch(`/cancelMyOrder/${id}`);
      if(response.status === 200) {
        navigate("/myOrders")
      }
    } catch (error) {
      console.log(error)
    }
    }

    const handleDelete = async () => {
      try {
        const response = await APIAuthenticated.delete(`/deleteMyOrder/${id}`);
        if(response.status === 200) {
          navigate("/myOrders")
        }
      } catch (error) {
        console.log(error)
      }
    }
    
  return (
    <>
    <Navbar />
<div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
  <div class="flex justify-start item-start space-y-2 flex-col">
    <h1 class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order #13432</h1>
    <p class="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">21st Mart 2021 at 10:34 PM</p>
  </div>
  <div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
    <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
      <div class="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
        <p class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
        {
            filteredOrder && filteredOrder.item.length > 0 && filteredOrder.item.map((items) => {
                return (
                    <>
                    <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
          <div class="pb-4 md:pb-8 w-full md:w-40">
            <img class="w-full hidden md:block" src={items.product.productImage} alt="dress" />
            <img class="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" />
          </div>
          <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
            <div class="w-full flex flex-col justify-start items-start space-y-8">
              <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">{items.product.productName}</h3>
              
            </div>
            <div class="flex justify-between space-x-8 items-start w-full">
              <p class="text-base dark:text-white xl:text-lg leading-6">Rs. {items.product.productPrice}</p>
              <p class="text-base dark:text-white xl:text-lg leading-6 text-gray-800">{items.quantity}</p>
              <p class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">{items.product.productPrice * items.quantity}</p>
            </div>
          </div>
        </div>
                </>
                )
            })
        }
      </div>
      <div class="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
        <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
          <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
            <div class="flex justify-between w-full">
              <p class="text-base dark:text-white leading-4 text-gray-800">Payment Method</p>
              <p class="text-base dark:text-gray-300 leading-4 text-gray-600">{filteredOrder?.paymentDetails.method}</p>
            </div>
            <div class="flex justify-between w-full">
              <p class="text-base dark:text-white leading-4 text-gray-800">Payment Status</p>
              <p class="text-base dark:text-gray-300 leading-4 text-gray-600">{filteredOrder?.paymentDetails.status}</p>
            </div>
            <div class="flex justify-between items-center w-full">
              <p class="text-base dark:text-white leading-4 text-gray-800">Order Status</p>
              <p class="text-base dark:text-gray-300 leading-4 text-gray-600">{filteredOrder?.orderStatus}</p>
            </div>
          </div>
          <div class="flex justify-between items-center w-full">
            <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
            <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">{filteredOrder?.totalAmount}</p>
          </div>
        </div>
        <div class="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Shipping</h3>
          <div class="flex justify-between items-start w-full">
            <div class="flex justify-center items-center space-x-4">
              <div class="w-8 h-8">
                <img class="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
              </div>
              <div class="flex flex-col justify-start items-center">
                <p class="text-lg leading-6 dark:text-white font-semibold text-gray-800">Delivery Charge<br /><span class="font-normal">Delivery with 24 Hours</span></p>
              </div>
            </div>
            <p class="text-lg font-semibold leading-6 dark:text-white text-gray-800">Rs.100</p>
          </div>
          <div class="w-full flex justify-center items-center">
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
      <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Customer</h3>
      <div class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">   
        <div class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
          <div class="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
            <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
              <p class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
              <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">{filteredOrder?.shippingAddress}</p>
            </div>
          </div>
          {
            filteredOrder?.orderStatus !== "cancelled" && (
              <div class="flex w-full justify-center items-center md:justify-start md:items-start">
            <button class="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 w-96 2xl:w-full text-base font-medium leading-4 text-gray-800" onClick={handleCancel}>Cancel Order</button>
          </div>
            )
          }
          {
            filteredOrder?.orderStatus !== "cancelled" && (
              <div class="flex w-full justify-center items-center md:justify-start md:items-start">
            <button class="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 w-96 2xl:w-full text-base font-medium leading-4 text-gray-800" onClick={handleDelete}>Delete Order</button>
          </div>
            )
          }
          
        </div>
      </div>
    </div>
  </div>
</div>
{filteredOrder && <MyOrdersqr orderId={filteredOrder?._id} orderDetails={filteredOrder} />}
    <Footer />
    </>
  )
}

export default OrderDetails