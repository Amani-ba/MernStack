import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//createAsyncThunk : for calling api 
import axios from 'axios'

export const getProducts = createAsyncThunk("counter/getProduct",
    async (info, {rejectWithValue, dispach})=>{
        try{
            const res = await axios.get('https://dummyjson.com/products')
            return res.data;
        } catch(error){
            return rejectWithValue(error.response.data);
        }
    });

    
export const getOneProduct = createAsyncThunk("counter/getOneProduct",
async (info, {rejectWithValue, dispach})=>{
    try{
        const res = await axios.get(`https://dummyjson.com/products/${info.id}`)
        return res.data;
    } catch(error){
        return rejectWithValue(error.response.data);
    }
});



const counterSlice = createSlice({
    name:"counter",
    initialState:{
        number:0,
        products: [],
        loading:false,
        errors: null,
        product:null,
        loadingProduct:false,
        errorsProduct: null,
    },
    reducers:{
        addOne:(state,action)=>{
            state.number = state.number+1
        },
        addNumber:(state,action)=>{
            state.number = state.number+action.payload
        }
    },
    extraReducers:{
        [getProducts.pending]:(state)=>{
            state.loading =true
        },
        [getProducts.fulfilled]:(state, action)=>{
            state.loading = false;
            state.products = action.payload;
        },
        [getProducts.rejected]:(state, action)=>{
            state.loading = false;
            state.errors = action.payload;
        },
        [getOneProduct.pending]:(state)=>{
            state.loadingProduct =true
        },
        [getOneProduct.fulfilled]:(state, action)=>{
            state.loadingProduct = false;
            state.product = action.payload;
        },
        [getOneProduct.rejected]:(state, action)=>{
            state.loadingProduct = false;
            state.errorsProduct = action.payload;
        },
        
    }
})
export default counterSlice.reducer
export const {addOne,addNumber} = counterSlice.actions;