import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../globals/misc/status";
import API from "../globals/http";

const productSlice = createSlice({
    name : 'product',
    initialState : {
        data : [],
        status : STATUSES.LOADING,
        singleProduct : []
    },
    reducers : {
        setData(state,action){
            state.data = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        },
        setSingleProduct(state,action) {
            state.singleProduct = action.payload
        }
    }
})

export const {setData , setStatus , setSingleProduct} = productSlice.actions;
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

export function fetchSingleProduct(id) {
    return async function fetchSingleProductThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const response = await API.get(`/getProduct/${id}`);
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS));
                dispatch(setSingleProduct(response.data.product))
            } 
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}