import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../data";

// Fetching data
export const fetchAsyncId = createAsyncThunk('fav/api', 
    async(id)=>{
    const response = await api.get(`/recipes/${id}`);
    return response.data.data.recipe;
});

const favApiSlice = createSlice({
    name: 'favApiSlice',
    initialState:{
        recipeDetail:[],
        loading: false, 
    },

    extraReducers: function(builder){
        builder.addCase(fetchAsyncId.pending, (state, action)=>{
            state.loading = true;
        })
        .addCase(fetchAsyncId.fulfilled, (state, action)=>{
            state.recipeDetail = action.payload;
            state.loading = false;
        })
        .addCase(fetchAsyncId.rejected, (state, action)=>{
            console.log('Error')
        })
    }

    
})

export default favApiSlice.reducer;