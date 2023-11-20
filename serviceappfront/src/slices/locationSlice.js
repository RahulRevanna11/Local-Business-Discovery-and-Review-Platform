import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  latitude:0,longitude:0
};

const locationSlice = createSlice({
    name:"location",
    initialState: initialState,
    reducers: {
        setLatitude(state, value) {
            state.latitude = value.payload;
        },
        setLongitude(state, value) {
            state.longitude = value.payload;
        },
        
    },
});

export const {setLatitude, setLongitude} = locationSlice.actions;
export default locationSlice.reducer;