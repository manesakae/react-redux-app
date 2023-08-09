import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { bookAdd } from '../reducers/booksSlice';
import { nanoid } from '@reduxjs/toolkit'

function AddBook() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title && author && price) {
            dispatch(bookAdd({
                id: nanoid(),
                title,
                author,
                price
            }))
        }
        setTitle('');
        setAuthor('');
        setPrice(0);
    }
    return (
        <div>
            <h5>Add Book</h5>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Title
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label> Author
                        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label> Price
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </label>
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    )
}

export default AddBook