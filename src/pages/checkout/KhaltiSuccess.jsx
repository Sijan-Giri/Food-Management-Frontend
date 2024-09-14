import React, { useEffect, useState } from 'react'
import { APIAuthenticated } from '../../globals/http';
import { useNavigate } from 'react-router-dom';

const KhaltiSuccess = () => {
  const queryParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const [loading,setLoading] = useState(true)
  const pidx = queryParams.get("pidx");
  const verifyPidx = async() => {
    try {
      const response = await APIAuthenticated.post("/success",{pidx, method: "Khalti"});
      console.log(response.status)
      if(response.status == 200) {
        navigate("/")
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    verifyPidx()
  },[])
  
  if(loading) {
    return (
      <div class="flex justify-center items-center h-screen">
      <div class="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
    </div>  
    )
  }
}

export default KhaltiSuccess