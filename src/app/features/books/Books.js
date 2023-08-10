import React, { createContext, useState } from 'react'
import AddBook from './components/AddBook'
import AddBookWithFormikValidation from './components/AddBookWithFormikValidation'
import AddBookWithValidation from './components/AddBookWithValidation'
import BookList from './components/BookList'

export const SelectedBookContext = createContext();

export default function Books() {
    const [selectedBook, setSelectedBook] = useState({
        title: "",
        author: "",
        price: 0
    });
    const selectBookCallback = valueFromChild => {
        setSelectedBook(valueFromChild)
    };
    const onEditCancel = () => {
        setSelectedBook({
            title: "",
            author: "",
            price: 0
        })
    }

    return (
        <div>
            <h4>Books Page</h4>
            <AddBook />
            <br />
            <AddBookWithValidation />
            <br />
            <AddBookWithFormikValidation selectedBook={selectedBook} editCancel={onEditCancel} />
            <BookList selectBookCallback={selectBookCallback} />
        </div>
    )
}
