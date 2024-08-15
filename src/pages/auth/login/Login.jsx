import React from 'react'
import Navbar from '../../../globals/components/navbar/Navbar'
import Form from '../../../globals/components/forms/Form'
import Footer from '../../../globals/components/footer/Footer'

const Login = () => {
  return (
    <>
    <div className="space-y-2">
        <Navbar />
        <Form type="Login" />
         <Footer />
    </div>
    </>
  )
}

export default Login