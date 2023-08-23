import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./services/reducers/booksSlice";
import userReducer from "./services/reducers/userSlice";
import createSagaMiddleware from "redux-saga";
import postSaga from "./services/saga/postSaga";
import postsSlice from "./services/reducers/postsSlice";

const saga = createSagaMiddleware();
const store = configureStore({
    reducer: {
        books: booksReducer,
        user: userReducer,
        post: postsSlice
    },
    middleware: [saga]
});
saga.run(postSaga);

export default store;