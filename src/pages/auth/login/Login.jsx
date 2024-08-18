import React from 'react'
import Navbar from '../../../globals/components/navbar/Navbar'
import Form from '../../../globals/components/forms/Form'
import Footer from '../../../globals/components/footer/Footer'
import { useDispatch } from 'react-redux'
import { login } from '../../../store/authSlice'

const Login = () => {

  const dispatch = useDispatch();

  const handleLogin = (data) => {
    dispatch(login(data))
  }

  return (
    <>
    <div className="space-y-2">
        <Navbar />
        <Form type="Login" onSubmit={handleLogin} />
         <Footer />
    </div>
    </>
  )
}

export default Login