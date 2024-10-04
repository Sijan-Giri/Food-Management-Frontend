import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Form = ({type,onSubmit}) => {

	const [data , setData] = useState({
		email : "",
		username : "",
		phoneNum : "",
		password : ""
	})

	const handleChange = (e) => {
		const {name,value} = e.target;
		setData({
			...data,
			[name] : value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(data);
	}

  return (
	<>
	<div className="min-h-screen flex items-center justify-center bg-gradient-to-br ">
	  <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 w-full max-w-lg">
		<h1 className="text-3xl font-extrabold text-center text-indigo-900 dark:text-gray-100 mb-6">
		  {type === "Register" ? "Create an Account" : "Welcome Back!"}
		</h1>
		<form onSubmit={handleSubmit}>
		  {/* Email Input */}
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
  
		  {/* Conditionally Render Fields for Register */}
		  {type === "Register" && (
			<>
			  <div className="mb-5">
				<label htmlFor="username" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
				  Username
				</label>
				<input
				  type="text"
				  name="username"
				  id="username"
				  className="shadow-md rounded-md w-full px-4 py-2 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
				  placeholder="Choose a username"
				  onChange={handleChange}
				  required
				/>
			  </div>
  
			  <div className="mb-5">
				<label htmlFor="phoneNum" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
				  Phone Number
				</label>
				<input
				  type="tel"
				  name="phoneNum"
				  id="phoneNum"
				  className="shadow-md rounded-md w-full px-4 py-2 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
				  placeholder="Your phone number"
				  onChange={handleChange}
				  required
				/>
			  </div>
			</>
		  )}
  
		  {/* Password Input */}
		  <div className="mb-5">
			<label htmlFor="password" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
			  Password
			</label>
			<input
			  type="password"
			  name="password"
			  id="password"
			  className="shadow-md rounded-md w-full px-4 py-2 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
			  placeholder="Enter your password"
			  onChange={handleChange}
			  required
			/>
			<Link to="/forgetPassword">
			  <p className="mt-1 text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-500">
				Forgot Password?
			  </p>
			</Link>
		  </div>
  
		  {/* Remember Me & Create Account */}
		  <div className="flex items-center justify-between mb-6">
			<div className="flex items-center">
			  <input
				type="checkbox"
				id="remember"
				className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
			  />
			  <label htmlFor="remember" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
				Remember me
			  </label>
			</div>
			{type !== "Register" && (
			  <Link to="/register">
				<span className="text-xs text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-500">
				  Create Account
				</span>
			  </Link>
			)}
		  </div>
  
		  {/* Submit Button */}
		  <button
			type="submit"
			className="w-full py-3 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
		  >
			{type}
		  </button>
		</form>
	  </div>
	</div>
  </>
  
  )
}

export default Form