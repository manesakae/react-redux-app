import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddBook from './components/AddBook'
import BookCard from './components/BookCard'
import Stack from 'react-bootstrap/Stack';

class BookPure extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         books: []
    //     }
    // }
    render() {
        return (
            <div>
                <h4>Book Pure Page</h4>
                <AddBook />

                <h4>Book Lists </h4>
                <Stack direction="horizontal" gap={3}>
                    {this.props.books.map((book) => {
                        return <BookCard key={book.id} book={book} />
                    })}
                </Stack>
            </div>
        )
    }
}

const mapStatetoProps = (state) => ({
    books: state.books
})

export default connect(mapStatetoProps)(BookPure)

