import React from 'react'
import QRCode from "react-qr-code"

const MyOrdersqr = ({orderId , orderDetails}) => {
  console.log(orderDetails)
  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">Your QR Code</h1>
        <div className="flex justify-center items-center p-4 bg-gray-50 rounded-lg">
          <QRCode value={orderId} size={150} />
        </div>
        <p className="text-gray-600 text-center mt-4">
          Scan this QR code to get the details of your order : {orderDetails?.item[0]?.product?.productName}
        </p>
        <button className="mt-6 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
          QR Code
        </button>
      </div>
    </div>
    </>
  )
}

export default MyOrdersqr