import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../globals/misc/status";
import {API, APIAuthenticated} from "../globals/http";

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
        },
        logOut(state,action) {
            state.data = [],
            state.token = null,
            state.status = STATUSES.SUCCESS
        }
    }
})

export const {setData , setStatus , setToken , logOut} = authSlice.actions;
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
            localStorage.setItem("token",response.data.token)
        }
        else {
            dispatch(setStatus(STATUSES.ERROR))
        }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function fetchProfile() {
    return async function fetchProfileThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING));
            const response = await APIAuthenticated.get("/getProfile");
            if(response.status === 200) {
                dispatch(setData(response.data.data));
                dispatch(setStatus(STATUSES.SUCCESS))
                console.log(response.data.data)
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}