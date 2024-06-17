import {configureStore } from "@reduxjs/toolkit"
import cartSlice from "../features/cartSlice/cartSlice"

export const store= configureStore({
    reducer:{
     allCart:cartSlice
    }

 })