import React from 'react'
import { useSelector } from 'react-redux';
import BookCard from './BookCard';
import Stack from 'react-bootstrap/Stack';

export default function BookList({ selectBookCallback }) {
    const books = useSelector(state => state.books);

    return (
        <div>
            <h4>Book Lists </h4>
            <Stack direction="horizontal" gap={3}>
                {books.map((book) => {
                    return <BookCard key={book.id} book={book} selectBookCallback={selectBookCallback} />
                })}
            </Stack>
        </div>
    )
}
