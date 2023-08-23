import { call, put, takeEvery } from "redux-saga/effects";
import { getPostsSuccess } from "../reducers/postsSlice";

function* workGetPostsFetch() {
    const posts = yield call(() => fetch('https://jsonplaceholder.typicode.com/posts'));
    const postsFormatted = yield posts.json();
    const formatttedPosts = postsFormatted.slice(0, 10);
    yield put(getPostsSuccess(formatttedPosts));
}

function* postSaga() {
    yield takeEvery('posts/getPostsFetch', workGetPostsFetch)
}

export default postSaga;
