import React from 'react'
import { useSelector } from 'react-redux';
import BookCard from './BookCard';

export default function BookList({ selectBookCallback }) {
    const books = useSelector(state => state.books);

    return (
        <div>
            <h4>Book Lists </h4>
            <ul>
                {books.map((book) => {
                    return <BookCard key={book.id} book={book} selectBookCallback={selectBookCallback} />
                })}
            </ul>
        </div>
    )
}
