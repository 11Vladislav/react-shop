import { configureStore } from "@reduxjs/toolkit";
import CategoriesSlice from "./categories/CategoriesSlice";

export const store = configureStore({
    reducer:{
        categories: CategoriesSlice,
    },
    devTools: true,
});