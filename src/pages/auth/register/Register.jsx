import React from 'react'
import Form from '../../../globals/components/forms/Form'
import Navbar from '../../../globals/components/navbar/Navbar'
import Footer from '../../../globals/components/footer/Footer'
import { useDispatch } from 'react-redux'
import { register } from '../../../store/authSlice'

const Register = () => {

  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    dispatch(register(data));
  }
  return (
    <>
    <div className="space-y-2">
        <Navbar />
        <Form type="Register" onSubmit={handleSubmit}/>
         <Footer />
    </div>
    </>
  )
}

export default Register