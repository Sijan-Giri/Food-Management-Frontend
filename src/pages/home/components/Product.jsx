import React from 'react'
import Card from './Card'

const Product = () => {
  return (
    <>
    <div class="bg-gray-100 py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-extrabold text-gray-900 dark:text-brown text-center mb-8">Our Products</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <Card />
    </div>
  </div>
</div>

    </>
  )
}

export default Product