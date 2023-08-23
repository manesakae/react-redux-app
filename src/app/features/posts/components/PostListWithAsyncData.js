import React, { useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Loader from '../../../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsFetch } from '../../../services/reducers/postsSlice';
import { Button } from 'react-bootstrap';

export default function PostListWithAsyncData() {
    const posts = useSelector(state => state.post.posts)
    const loading = useSelector(state => state.post.isLoading)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostsFetch())
    }, [dispatch])
    if (loading) {
        return (<Loader />);
    }

    return (
        <div>
            <h5>Post List Using Saga Async</h5>
            <Button type="button" className='mb-5' onClick={() => dispatch(getPostsFetch())}>Get Data</Button>
            <ListGroup>
                {posts && posts.map((post) => {
                    return (<ListGroup.Item key={post.id}>{post.title}</ListGroup.Item>)
                })}
            </ListGroup>
            <br />
        </div>
    )
}
