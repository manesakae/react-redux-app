import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddBook from '../components/AddBook'
import BookCard from '../components/BookCard'

class HomePure extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         books: []
    //     }
    // }
    render() {
        return (
            <div>
                <p>Home Pure Page</p>
                <AddBook />

                <h4>Book Lists </h4>
                <ul>
                    {this.props.books.map((book) => {
                        return <BookCard key={book.id} book={book} />
                    })}
                </ul>
            </div>
        )
    }
}

const mapStatetoProps = (state) => ({
    books: state.books
})

export default connect(mapStatetoProps)(HomePure)

