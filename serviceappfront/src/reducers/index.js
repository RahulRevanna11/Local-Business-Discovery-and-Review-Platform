import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice"
import profileSlice from "../slices/profileSlice";
import serviceSlice from "../slices/serviceSlice";
import locationSlice from "../slices/locationSlice"

const rootReducer  = combineReducers({
    auth: authReducer,
    profile:profileSlice,
    service:serviceSlice,
     location:locationSlice
})

export default rootReducer