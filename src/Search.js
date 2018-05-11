import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bookOnHomePage: props.allbooks, query: '' }
    }
    componentWillReceiveProps(props) {
        this.setState({ bookOnHomePage: props.allbooks });
    }
    search = (query) => {
        if (query === '' || typeof query !== 'string') {
            this.setState({
                bookInSearchResults: []
            })
        }
        else {
            BooksAPI.search(query).then((bookInSearchResults) => {
                if (bookInSearchResults.error) {
                    this.setState({ bookInSearchResults: [] })
                }
                else if (bookInSearchResults.length > 0) {
                    let bookOnHomePage = this.state.bookOnHomePage;
                    bookOnHomePage.map((data) => {
                        bookInSearchResults.map((k) => {
                            if (k.id === data.id) {
                                console.log(k.title + '   == ' + data.title);
                                k.shelf = data.shelf
                                console.log(k.shelf + '   == ' + data.shelf);
                            }
                        })
                    });
                    this.setState({ bookInSearchResults: bookInSearchResults })
                }

            })
        }
    }


    render() {
        const { bookInSearchResults } = this.state
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
                    {bookInSearchResults ? <Book data={bookInSearchResults} onBookMove={this.props.onBookMove} /> : null}
                </div>

            </div>

        )
    }
}
export default Search
