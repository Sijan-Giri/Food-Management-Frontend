import { createSlice } from "@reduxjs/toolkit";
import { APIAuthenticated } from "../globals/http";
import { STATUSES } from "../globals/misc/status";

const checkoutSlice = createSlice({
    name : "checkout",
    initialState : {
        data : [],
        status : null
    },
    reducers : {
        setData(state,action) {
            state.data.push(action.payload)
        },
        setStatus(state,action) {
            state.status = action.payload;
        }
    }
})

export const {setData , setStatus} = checkoutSlice.actions;
export default checkoutSlice.reducer;

export function createOrder(data) {
    return async function createOrderThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const response = await APIAuthenticated.post("/createOrder",data);
            if(response.status === 200) {
                dispatch(setData(response.data.data))
                dispatch(setStatus(STATUSES.SUCCESS))
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}