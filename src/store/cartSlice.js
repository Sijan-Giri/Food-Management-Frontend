import { createSlice } from "@reduxjs/toolkit";
import { APIAuthenticated } from "../globals/http";
import { STATUSES } from "../globals/misc/status";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
        status : null
    },
    reducers : {
        setItems(state,action) {
            state.items = action.payload;
        },
        setStatus(state,action) {
            state.status = action.payload
        }
    }
})

export const {setItems , setStatus} = cartSlice.actions;
export default cartSlice.reducer;

export function addToCart(id) {
    return async function addToCartThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING));
            const response = APIAuthenticated.post(`/addCart/${id}`);
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS))
                dispatch(setItems((await response).data.data))
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function fetchCartItems() {
    return async function fetchCartItemsThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING));
            const response = await APIAuthenticated.get("/getCart");
            if(response.status == 200) {
                dispatch(setStatus(STATUSES.SUCCESS));
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}