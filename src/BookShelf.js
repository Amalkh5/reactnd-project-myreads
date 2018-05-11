import React from 'react'
import Book from './Book'

class BookShelf extends React.Component {

    render() {
        return (
            <div className="bookshelf" >
                <h2 className="bookshelf-title">{this.props.shelfTitle.replace(/([a-z])([A-Z])/g, '$1 $2')}</h2>
                <Book data={this.props.data} onBookMove={this.props.onBookMove} />
            </div>
        )
    }
}
export default BookShelf
