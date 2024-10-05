import React, { useState } from 'react';
import Navbar from '../../../globals/components/navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword, setStatus } from '../../../store/authSlice';
import { STATUSES } from '../../../globals/misc/status';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {

    const dispatch = useDispatch()
    const {email,status} = useSelector((state) => state.auth);
    const navigate = useNavigate()

    const [data , setData] = useState({
        email : email,
        newPassword : "",
        confirmPassword : ""
    })

    const handleChange = (e) => {
        const {name , value} = e.target;
        setData({
            ...data,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(resetPassword(data))
    }

    if(status == STATUSES.SUCCESS) {
        navigate("/login");
        dispatch(setStatus(STATUSES.LOADING))
    }

  return (
    <>
    <Navbar />
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r">
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-md w-full transform transition duration-300 hover:scale-105">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Reset Your Password
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="newPassword"
            >
              New Password
            </label>
            <input
              name="newPassword"
              type="password"
              placeholder="Enter your new password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm your new password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 rounded-md hover:bg-gradient-to-l hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transform transition duration-300 ease-in-out"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default ResetPassword;
