import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'


class Search extends React.Component {
    state = {
        query: '',
        books: []
    }

    search = (query) => {
        if (query === '' || typeof query !== 'string') {
            this.setState({
                books: []
            })
        }
        else {
            BooksAPI.search(query).then((books) => {
                if (books.length > 0) {
                    console.log(books);
                    this.setState({ books })
                }

            })
        }
    }


    render() {
        const { books } = this.state
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
                    {books ? <Book data={books} onBookMove={this.props.onBookMove} /> : null}

                </div>

            </div>

        )
    }
}
export default Search
