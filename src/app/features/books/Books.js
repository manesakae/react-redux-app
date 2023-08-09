import React from 'react'
import AddBook from './components/AddBook'
import AddBookWithFormikValidation from './components/AddBookWithFormikValidation'
import AddBookWithValidation from './components/AddBookWithValidation'
import BookList from './components/BookList'

export default function Books() {
    return (
        <div>
            <h4>Books Page</h4>
            <AddBook />
            <br />
            <AddBookWithValidation />
            <br />
            <AddBookWithFormikValidation />
            <BookList />
        </div>
    )
}
