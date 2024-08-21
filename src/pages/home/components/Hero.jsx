import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../globals/components/navbar/Navbar'

const Hero = () => {
  return (
    <>
<div className="relative w-full">
  <Navbar />
  <div className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
    <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
      <div className="flex items-center flex-wrap px-2 md:px-0">
        <div className="relative lg:w-6/12 lg:py-24 xl:py-32 animate-fade-in">
          <h1 className="font-bold text-4xl md:text-5xl lg:w-10/12 tracking-wide">
            Delicious Meals, Delivered to You
          </h1>
          <p className="mt-4 lg:w-10/12 text-lg">
            Experience gourmet cuisine from the comfort of your home. Choose from a wide range of dishes, crafted with love and delivered with care.
          </p>
          <form action="" className="w-full mt-12">
            <div className="relative flex p-1 rounded-full bg-white text-gray-900 shadow-xl transform transition-all duration-300 hover:shadow-2xl">
              <select className="hidden p-3 rounded-full bg-transparent md:block md:p-4" name="category" id="category">
                <option value="fastfood">FastFood</option>
                <option value="restaurant">Restaurant</option>
                <option value="gourmet">Gourmet</option>
              </select>
              <input placeholder="Find your next favorite dish..." className="w-full p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600" type="text" />
              <button type="button" title="Start searching" className="ml-auto py-3 px-6 rounded-full text-center bg-gradient-to-b from-yellow-400 to-yellow-500 text-gray-900 font-semibold transform hover:scale-105 transition-transform duration-300">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="ml-auto lg:w-6/12">
          <img src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp" className="relative max-w-full h-auto transform transition-transform duration-500 hover:scale-105" alt="food illustration" loading="lazy"/>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Hero