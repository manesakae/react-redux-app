import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./reducers/booksSlice";
import usersReducer from "./reducers/usersSlice";

export default configureStore({
    reducer:
    {
        books: booksReducer,
        userList: usersReducer
    }
});