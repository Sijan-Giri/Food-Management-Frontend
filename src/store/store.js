import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import authSlice from "./authSlice";
import checkoutSlice from "./checkoutSlice";


const store = configureStore({
    reducer : {
        cart : cartSlice,
        product : productSlice,
        auth : authSlice,
        checkout : checkoutSlice
    }
})

export default store