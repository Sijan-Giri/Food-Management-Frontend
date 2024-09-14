import { createSlice } from "@reduxjs/toolkit";
import { API, APIAuthenticated } from "../globals/http";
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
        },
        updateItems(state,action) {
            zitems.findIndex((item) => item.product._id === action.payload.productId)
            if(index !== -1) {
                state.items[index].quantity = action.payload.quantity
            }
        },
        deleteItem(state,action) {
            const index = state.items.findIndex((item) => item.product._id === action.payload.id);
            state.items.splice(index,1)
        }
    }
})

export const {setItems , setStatus, updateItems , deleteItem} = cartSlice.actions;
export default cartSlice.reducer;

export function addToCart(id) {
    return async function addToCartThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING));
            const response = await APIAuthenticated.post(`/addCart/${id}`);
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS))
                dispatch(setItems(response.data.data))
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
                dispatch(setItems(response.data.data));
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function updateCartItem(productId,quantity){
    return async function updateCartItemThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING));
            const response = await APIAuthenticated.patch(`/updateCart/${productId}`,{quantity});
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS))
                dispatch(updateItems({productId,quantity}))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function deleteCartItem(id) {
    return async function deleteCartItemThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING));
            const response = await APIAuthenticated.delete(`/deleteCart/${id}`);
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS));
                dispatch(deleteItem({id}))
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}