import React from 'react'

class Book extends React.Component {

    render() {
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        this.props.data ? (
                            this.props.data.map((data) =>
                                (

                                    < li key={data.id} >                                        <div className="book">
                                        <div className="book-top">
                                            {data.imageLinks ?
                                                <div className="book-cover" style={{
                                                    width: 128, height: 193, backgroundImage: 'url("' + data.imageLinks.thumbnail + '")'
                                                }}></div> : null}

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
        )
    }
}
export default Book
