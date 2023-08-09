import React from 'react'
import { useDispatch } from 'react-redux'
import { bookDelete } from '../reducers/booksSlice';

function BookCard({ book }) {
    const dispatch = useDispatch();
    const deleteBook = () => {
        dispatch(bookDelete(book.id))
    }
    return (
        <li>
            <span>{book.id} - </span>
            <span>{book.title} - </span>
            <span>{book.author} - </span>
            <span>{book.price}</span>
            <button type="button" onClick={deleteBook}>Delete</button>
        </li>
    )
}

export default BookCard