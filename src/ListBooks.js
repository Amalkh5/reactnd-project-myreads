import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
class ListBooks extends React.Component {

    render() {
        return (
            < div className="list-books" >
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf shelfTitle={"Currently Reading"} data={this.props.books.CurrentlyReading} onBookMove={this.props.onBookMove} />
                        <BookShelf shelfTitle={"Want To Read"} data={this.props.books.wantToRead} onBookMove={this.props.onBookMove} />
                        <BookShelf shelfTitle={"Read"} data={this.props.books.read} onBookMove={this.props.onBookMove} />

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
