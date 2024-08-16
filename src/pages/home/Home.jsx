import React from 'react'
import Navbar from '../../globals/components/navbar/Navbar'
import Footer from '../../globals/components/footer/Footer'
import Hero from './components/Hero'
import Product from './components/Product'

const Home = () => {
  return (
    <>
    <Hero />
    <Product />
    <Footer />
    </>
  )
}

export default Home