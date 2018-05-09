import React from 'react'

class BookShelf extends React.Component {

    render() {
        return (
            <div className="bookshelf" >
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.data ? (
                                this.props.data.map((data) =>
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
export default BookShelf
