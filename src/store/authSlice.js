import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../globals/misc/status";
import API from "../globals/http";


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
            const response = await API.post("/register",data);
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
            const response = await API.post("/login",data)
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