import React from 'react'
import AddBook from '../components/AddBook';
import AddBookWithFormikValidation from '../components/AddBookWithFormikValidation';
import AddBookWithValidation from '../components/AddBookWithValidation';
import BookList from '../components/BookList';

function Home() {
    return (
        <div>
            <p>Home Page</p>
            <AddBook />
            <br />
            <AddBookWithValidation />
            <br />
            <AddBookWithFormikValidation />
            <BookList />
        </div>
    )
}

export default Home