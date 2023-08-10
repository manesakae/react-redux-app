import React from 'react'
import { useDispatch } from 'react-redux'
import { bookDelete } from '../../../services/reducers/booksSlice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

function BookCard({ book, selectBookCallback }) {
    const dispatch = useDispatch();
    const deleteBook = () => {
        dispatch(bookDelete(book.id))
    }
    const editBook = () => {
        selectBookCallback(book)
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{book.title} by {book.author}</Card.Title>
                <Card.Text>
                    Price: {book.price}
                </Card.Text>
                <Stack direction="horizontal" gap={3}>
                    <Button type="button" variant="primary" onClick={editBook}>Edit</Button>
                    <Button type="button" variant="primary" onClick={deleteBook}>Delete</Button>
                </Stack>

            </Card.Body>
        </Card >
    )
}

export default BookCard