import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productSlice from './features/products/productSlice';

export const store = configureStore({
    reducer : combineReducers({
        products: productSlice
    })
});