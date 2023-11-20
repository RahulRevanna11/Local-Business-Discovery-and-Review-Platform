import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    service: localStorage.getItem("service") ? JSON.parse(localStorage.getItem("service")) : null,
// service:null
};

const serviceSlice = createSlice({
    name:"service",
    initialState: initialState,
    reducers: {
        setService(state, value) {
            state.service = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
          },
    },
});

export const {setService, setLoading} = serviceSlice.actions;
export default serviceSlice.reducer;