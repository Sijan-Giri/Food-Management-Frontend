import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStatus, verifyOtp } from '../../../store/authSlice'
import { STATUSES } from '../../../globals/misc/status'
import { useNavigate } from 'react-router-dom'

const VerifyOtp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [otp , setOtp] = useState({
        otp : ""
    })
    const {data,status} = useSelector((state) => state.auth)
    
    const datas = {
        email : data,
        otp : otp
    }

    const handleChange = (e) => {
        const {name , value} = e.target;
        setOtp({
            ...otp,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(verifyOtp(datas))
    }

    if(status == STATUSES.SUCCESS) {
      navigate("/resetpassword");
      dispatch(setStatus(STATUSES.LOADING))
    }

  return (
    <>
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
  <div class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
    <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
      <div class="flex flex-col items-center justify-center text-center space-y-2">
        <div class="font-semibold text-3xl">
          <p>Email Verification</p>
        </div>
        <div class="flex flex-row text-sm font-medium text-gray-400">
          <p>We have sent a code to your email {data}</p>
        </div>
      </div>

      <div>
        <form method="post" onSubmit={handleSubmit}>
          <div class="flex flex-col space-y-16">
            <div class="flex flex-col items-center justify-center mx-auto w-full max-w-xs">
              <input 
                class="w-full h-16 flex items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" 
                name='otp'
                type="text" 
                maxlength="4" 
                placeholder="Enter the digit code" 
                onChange={handleChange}
                required 
              />
            </div>

            <div class="flex flex-col space-y-5">
              <div>
                <button class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                  Verify Account
                </button>
              </div>

              <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                <p>Didn't receive the code?</p> 
                <a class="flex flex-row items-center text-blue-600" href="#">Resend</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    </>
  
  )
}

export default VerifyOtp