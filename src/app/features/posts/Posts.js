import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import PostList from './components/PostList'
import PostListWithAsyncData from './components/PostListWithAsyncData'
import PostListWithUseFetch from './components/PostListWithUseFetch'

export default function Posts() {
    return (
        <>
            <Tabs
                defaultActiveKey="postListWithAsyncData"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="postList" title="Post List">
                    <PostList />
                </Tab>
                <Tab eventKey="postListWithUseFetch" title="Post List Use Fetch">
                    <PostListWithUseFetch />
                </Tab>
                <Tab eventKey="postListWithAsyncData" title="Post List Async Data" >
                    <PostListWithAsyncData />
                </Tab>
            </Tabs>



        </>
    )
}
