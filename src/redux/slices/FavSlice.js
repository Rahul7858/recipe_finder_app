import { createSlice, current } from "@reduxjs/toolkit";


const FavSlice = createSlice({
    name:"favList",
    initialState:{
        setFav:localStorage.getItem("Items") !== null
        ? JSON.parse(localStorage.getItem("Items"))
        : []
    },


    reducers:{
        add:(state,action) => {
            state.setFav.push(action.payload)
            let data = JSON.stringify(current(state.setFav));
            localStorage.setItem("Items", data)
        },
        remove:(state,action) => {
            state.setFav = state.setFav.filter((item) => item.id !== action.payload);
            let data = JSON.stringify(state.setFav);
            localStorage.setItem("Items", data)
        },
    }
});

export const {add, remove} = FavSlice.actions;
export default FavSlice.reducer;