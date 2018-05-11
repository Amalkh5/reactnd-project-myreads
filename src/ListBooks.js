import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
class ListBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: props.allbooks,
            shelves: ["currentlyReading", "wantToRead", "read"]
        }
    }
    componentWillReceiveProps(props) {
        this.setState({ books: props.allbooks });
    }
    getBookShelfBooks(bookShelfName) {
        return this.state.books.filter(function (data) { return data.shelf === bookShelfName })
    }


    render() {
        const { shelves } = this.state;
        return (
            < div className="list-books" >
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {
                            shelves.map(shelve => <BookShelf shelfTitle={shelve} data={this.getBookShelfBooks(shelve)} onBookMove={this.props.onBookMove} />)

                        }

                    </div>
                </div>
                <div className="open-search">
                    <Link to={"/search"} className="open-search">Add a book</Link>
                </div>

            </div >

        )
    }
}
export default ListBooks
