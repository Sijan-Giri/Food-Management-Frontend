import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios';

const Product = () => {
    const [products,setProducts] = useState([]);

    const fetchProducts = async() => {
        const response = await axios.get("http://localhost:2000/createProduct");
        if(response.status === 200) {
            setProducts(response.data.data)
        }
    }

    useEffect(() => {
        fetchProducts();
    },[])

  return (
    <>
    <div class="bg-gray-100 py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-extrabold text-gray-900 dark:text-brown text-center mb-8">Our Products</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {
        products.map((product) => {
            return (
                <Card key={product._id} product={product}/>
            )
        })
      }
      
    </div>
  </div>
</div>

    </>
  )
}

export default Product