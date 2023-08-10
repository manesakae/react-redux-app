import React from 'react'
import PostList from './components/PostList'
import PostListWithUseFetch from './components/PostListWithUseFetch'

export default function Posts() {
    return (
        <>
            <PostListWithUseFetch />
            <PostList />
        </>
    )
}
