import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const authSlice = createSlice({
    name : 'auth',
    initialState : {
        data : []
    },
    reducers : {
        setData(state,action) {
            state.data = action.payload
        }
    }
})

export const {setData} = authSlice.actions;
export default authSlice.reducer;

export function register(data) {
    return async function registerThunk(dispatch) {
        try {
            const response = await axios.post("http://localhost:2000/register",data);
            if(response.status === 200){
                dispatch(setData(response.data.data))
            }
            else {
                dispatch(error)
            }
        } catch (error) {
            dispatch(error)
        }
    }
}

export function login(data) {
    return async function loginThunk(dispatch) {
        try {
            const response = await axios.post("http://localhost:2000/login",data)
        if(response.status === 200) {
            dispatch(setData(response.data.data))
        }
        else {
            dispatch(error)
        }
        } catch (error) {
            dispatch(error)
        }
    }
}