import React from 'react'

const Card = () => {
  return (
    <>
    <div class="transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
  <img class="h-48 w-full object-cover object-center" src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Product Image" />
  <div class="p-4">
    <h3 class="mb-2 text-lg font-medium text-gray-900 dark:text-white">Product Name 1</h3>
    <p class="mb-2 text-base text-gray-700 dark:text-gray-300">Product description goes here.</p>
    <div class="flex items-center mb-4">
      <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p class="text-base font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p class="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
    <a href="#" class="block mt-4 w-full px-4 py-2 text-center text-white bg-blue-600 rounded-lg shadow-md transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
      Add to Cart
    </a>
  </div>
</div>

    </>
  )
}

export default Card