import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from "../hooks/useFetch"

export default function PostList() {
    const { users } = useSelector(state => state.userList);
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [posts])

    if (loading) {
        return (<span>Loading...</span>);
    }

    if (error) {
        return (<span>Something went wrong</span>);
    }

    return (
        <div>
            <h5>Post List Using useFetch</h5>
            <ul>
                {data && data.map((post) => {
                    return (<li key={post.id}>{post.title}</li>)
                })}
            </ul>
            <br />
            <h5>Post List</h5>
            <ul>
                {posts.map((post) => {
                    return (<li key={post.id}>{post.title}</li>)
                })}
            </ul>

            <p>User Count from store: {users.length}</p>
        </div>
    )
}
