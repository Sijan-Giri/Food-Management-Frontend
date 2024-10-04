import React, { useState } from 'react'
import Navbar from '../../../globals/components/navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { forgetPassword } from '../../../store/authSlice'
import { STATUSES } from '../../../globals/misc/status'
import { useNavigate } from 'react-router-dom'

const ForgetPassword = () => {

    const {status} = useSelector((state) => state.auth);
    const navigate = useNavigate()

    const [email , setEmail] = useState({
        email : ""
    })
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const {name , value} = e.target;
        setEmail({
            ...email,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(forgetPassword(email))
    }

    if(status == STATUSES.SUCCESS) {
        navigate("/verifyotp")
    }

  return (
    <>
    <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br">
        <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-8 w-full max-w-md">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-8">
            Forgot Password
          </h1>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-6">
            Enter the email associated with your account and we'll send you a otp to reset your password.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="shadow-md rounded-md w-full px-4 py-2 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="youremail@example.com"
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              SEND OTP
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgetPassword
