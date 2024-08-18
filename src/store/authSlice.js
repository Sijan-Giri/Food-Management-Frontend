import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUSES } from "../globals/misc/status";


const authSlice = createSlice({
    name : 'auth',
    initialState : {
        data : [],
        status : STATUSES.LOADING,
        token : ""
    },
    reducers : {
        setData(state,action) {
            state.data = action.payload
        },
        setStatus(state,action) {
            state.status = action.payload
        },
        setToken(state,action) {
            state.token = action.payload
        }
    }
})

export const {setData , setStatus , setToken} = authSlice.actions;
export default authSlice.reducer;

export function register(data) {
    return async function registerThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING))
            const response = await axios.post("http://localhost:2000/register",data);
            if(response.status === 200){
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

export function login(data) {
    return async function loginThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING))
            const response = await axios.post("http://localhost:2000/login",data)
        if(response.status === 200) {
            dispatch(setToken(response.data.token))
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