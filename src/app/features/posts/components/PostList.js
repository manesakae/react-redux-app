import React, { useEffect, useState } from 'react'
import useFetch from "../../../hooks/useFetch"
import ListGroup from 'react-bootstrap/ListGroup';

export default function PostList() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <h5>Post List</h5>
            <ListGroup>
                {posts.map((post) => {
                    return (<ListGroup.Item key={post.id}>{post.title}</ListGroup.Item>)
                })}
            </ListGroup>
        </div>
    )
}
