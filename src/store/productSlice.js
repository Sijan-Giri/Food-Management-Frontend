import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../globals/misc/status";
import API from "../globals/http";

const productSlice = createSlice({
    name : 'product',
    initialState : {
        data : [],
        status : STATUSES.LOADING
    },
    reducers : {
        setData(state,action){
            state.data = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        }
    }
})

export const {setData , setStatus} = productSlice.actions;
export default productSlice.reducer;

export function fetchProducts() {
    return async function fetchProductsThunk(dispatch){
        try {
            const response = await API.get("/createProduct");
        if(response.status === 200) {
            dispatch(setStatus(STATUSES.SUCCESS))
            dispatch(setData(response.data.data))
        }
        else {
            dispatch(setStatus(STATUSES.ERROR))
        }
        } catch (error) {
           dispatch(setStatus(STATUSES.ERROR)) 
        }
    }
}