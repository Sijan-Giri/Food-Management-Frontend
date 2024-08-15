import React from 'react'
import Form from '../../../globals/components/forms/Form'
import Navbar from '../../../globals/components/navbar/Navbar'
import Footer from '../../../globals/components/footer/Footer'

const Register = () => {
  return (
    <>
    <div className="space-y-2">
        <Navbar />
        <Form type="Register" />
         <Footer />
    </div>
    </>
  )
}

export default Register