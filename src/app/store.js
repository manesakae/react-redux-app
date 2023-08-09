import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./services/reducers/booksSlice";
import userReducer from "./services/reducers/userSlice";

export default configureStore({
    reducer: {
        books: booksReducer,
        user: userReducer
    }
});