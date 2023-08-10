import React, { useEffect, useState } from 'react'
import useFetch from "../../../hooks/useFetch"
import ListGroup from 'react-bootstrap/ListGroup';
import Loader from '../../../components/Loader';

export default function PostListWithUseFetch() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const { data, loading, error } = useFetch(url);

    if (loading) {
        return (<Loader />);
    }

    if (error) {
        return (<span>Something went wrong</span>);
    }

    return (
        <div>
            <h5>Post List Using useFetch</h5>
            <ListGroup>
                {data && data.map((post) => {
                    return (<ListGroup.Item key={post.id}>{post.title}</ListGroup.Item>)
                })}
            </ListGroup>
            <br />
        </div>
    )
}
