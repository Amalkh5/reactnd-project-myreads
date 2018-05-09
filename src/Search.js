import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'


class Search extends React.Component {
    state = {
        query: '',
        books: []
    }

    search = (query) => {
        BooksAPI.search(query).then((books) => {
            if (books.length > 0) {
                console.log(books);
                this.setState({
                    books: books
                })
            }

        })
    }


    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search" >Close</Link>
                    <div className="search-books-input-wrapper">

                        <input type="text"
                            onChange={(event) => this.search(event.target.value)} placeholder="Search by title or author" />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.books ? (
                                this.state.books.map((data) =>
                                    (
                                        <li key={data.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{
                                                        width: 128, height: 193, backgroundImage: 'url("")'
                                                    }}></div>
                                                    <div className="book-shelf-changer">
                                                        <select onChange={(event) => this.props.onBookMove(data, event.target.value, this.props.shelfTitle)}>
                                                            <option value="none" disabled>Move to...</option>
                                                            <option value="none">None</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{data.title}</div>
                                                <div className="book-authors">{data.authors + ' '}</div>

                                            </div>
                                        </li>
                                    )
                                )
                            ) : null

                        }
                    </ol>
                </div>

            </div>

        )
    }
}
export default Search
