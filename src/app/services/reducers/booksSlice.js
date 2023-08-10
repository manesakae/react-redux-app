import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: "Book1",
        author: "author1",
        price: 100
    },
    {
        id: 2,
        title: "Book2",
        author: "author2",
        price: 220
    },
];

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        bookAdd(state, action) {
            // state.push(action.payload)
            const { payload: book } = action
            return [...state, book]
        },
        bookDelete(state, action) {
            const { payload: id } = action;
            return state.filter(book => book.id !== id)
        },
        bookUpdate(state, action) {
            const { payload: updatedBook } = action
            return state.map((book) => {
                if (book.id === updatedBook.id) return { ...book, ...updatedBook };
                else return book;
            });
        }
    }
});

export const { bookAdd, bookDelete, bookUpdate } = booksSlice.actions
export default booksSlice.reducer
