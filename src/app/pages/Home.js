import React from 'react'
import { useSelector } from 'react-redux'
import AddBook from '../components/AddBook';
import BookCard from '../components/BookCard';
import BookList from '../components/BookList';

function Home() {
    return (
        <div>
            <p>Home Page</p>
            <AddBook />
            <BookList />
        </div>
    )
}

export default Home