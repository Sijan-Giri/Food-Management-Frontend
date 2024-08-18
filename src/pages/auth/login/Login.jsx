import React from 'react'
import Navbar from '../../../globals/components/navbar/Navbar'
import Form from '../../../globals/components/forms/Form'
import Footer from '../../../globals/components/footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../store/authSlice'
import { useNavigate } from 'react-router-dom'
import { STATUSES } from '../../../globals/misc/status'

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {status , token} = useSelector((state) => state.auth)

  const handleLogin = (data) => {
    dispatch(login(data))
    if(status === STATUSES.SUCCESS) {
      localStorage.setItem("token",token)
      return navigate("/");
    }
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