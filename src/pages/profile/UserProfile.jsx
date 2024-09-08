import React from 'react'
import Navbar from '../../globals/components/navbar/Navbar'
import Footer from '../../globals/components/footer/Footer'
import { Link } from 'react-router-dom'

const UserProfile = () => {
  return (
    <>
    <Navbar />

        <div class="flex flex-col justify-center items-center h-[100vh]">
            <div class="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
                <div class="mt-2 mb-8 w-full">
                    <h4 class="px-2 text-xl font-bold text-navy-700 dark:text-black">
                    My Profile
                    </h4>
                    <p class="mt-2 px-2 text-base text-gray-600">
                    This is the things what you have done yet...
                    </p>
                </div> 
                <div class="grid grid-cols-2 gap-4 px-2 w-full">
                    <Link to="/myOrders" class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none" style={{border : "1px solid black",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <a class="text-base font-medium text-navy-700 dark:text-black">
                        My Orders
                    </a>
                    </Link>
                    <Link to="/myOrders" class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none" style={{border : "1px solid black",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <a class="text-base font-medium text-navy-700 dark:text-black">
                        My Orders
                    </a>
                    </Link>
                    <Link to="/myOrders" class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none" style={{border : "1px solid black",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <a class="text-base font-medium text-navy-700 dark:text-black">
                        My Orders
                    </a>
                    </Link>
                   
                </div>
            </div>  
            <p class="font-normal text-navy-700 mt-20 mx-auto w-max">Profile Card component from <a href="https://horizon-ui.com?ref=tailwindcomponents.com" target="_blank" class="text-brand-500 font-bold">Horizon UI Tailwind React</a></p>  
        </div>

    <Footer />
    </>
  )
}

export default UserProfile