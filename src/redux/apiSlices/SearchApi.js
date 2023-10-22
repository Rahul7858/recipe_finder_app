import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../data";

// Fetching data
export const fetchAsyncSearch = createAsyncThunk('serach/api', 
    async(searchItem)=>{
    const response = await api.get(`/recipes?search=${searchItem}`);
    return response.data.data.recipes;
});

const searchsApiSlice = createSlice({
    name: 'searchsApiSlice',
    initialState:{
        recipeList:[],
        loading: false, 
    },

    extraReducers: function(builder){
        builder.addCase(fetchAsyncSearch.pending, (state, action)=>{
            state.loading = true;
        })
        .addCase(fetchAsyncSearch.fulfilled, (state, action)=>{
            state.recipeList = action.payload;
            state.loading = false;
        })
        .addCase(fetchAsyncSearch.rejected, (state, action)=>{
            console.log('Error')
        })
    }

    
})

export default searchsApiSlice.reducer;