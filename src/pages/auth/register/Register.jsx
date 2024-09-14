import React from 'react'
import Form from '../../../globals/components/forms/Form'
import Navbar from '../../../globals/components/navbar/Navbar'
import Footer from '../../../globals/components/footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../../store/authSlice'
import { useNavigate } from 'react-router-dom'
import { STATUSES } from '../../../globals/misc/status'

const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {status} = useSelector((state) => state.auth)

  const handleSubmit = (data) => {
    dispatch(register(data));
  }

  if(status === STATUSES.SUCCESS) {
    return navigate("/login")
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