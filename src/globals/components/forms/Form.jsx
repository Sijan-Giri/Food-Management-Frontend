import React, { useState } from 'react'

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
	<div class="min-h-screen flex items-center justify-center w-full">
	<div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-2xl">
		<h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
		<form onSubmit={handleSubmit}>
			<div class="mb-4">
				<label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
				<input type="email" name="email" id="email" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" onChange={handleChange} required />
			</div>
			{
				type === "Register" && (
					<>
					<div class="mb-4">
				<label for="username" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Username</label>
				<input type="text" id="username" name="username" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your username" onChange={handleChange} required />
			</div>
			<div class="mb-4">
				<label for="phoneNum" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
				<input type="tel" id="phoneNum" name='phoneNum' class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your phone number" onChange={handleChange} required />
			</div>
					</>
				)
			}
			<div class="mb-4">
				<label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
				<input type="password" name='password' id="password" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" onChange={handleChange} required />
				<a href="#"
					class="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot
					Password?</a>
			</div>
			<div class="flex items-center justify-between mb-4">
				<div class="flex items-center">
					<input type="checkbox" id="remember" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" checked />
					<label for="remember" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
				</div>
				<a
					class="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create
					Account</a>
			</div>
			<button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{type}</button>
		</form>
	</div>
</div>

    </>
  )
}

export default Form