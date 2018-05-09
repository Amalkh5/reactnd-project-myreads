import React from 'react'
import Book from './Book'

class BookShelf extends React.Component {

    render() {
        return (
            <div className="bookshelf" >
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <Book data={this.props.data} onBookMove={this.props.onBookMove} />
            </div>
        )
    }
}
export default BookShelf
