import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    isLoading: false
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        getPostsFetch(state) {
            state.isLoading = true;
        },
        getPostsSuccess(state, action) {
            state.posts = action.payload;
            state.isLoading = false;
        },
        getPostsFailure(state, action) {
            state.isLoading = false;
        }
    }
});

export const { getPostsFetch, getPostsSuccess, getPostsFailure } = postsSlice.actions
export default postsSlice.reducer
