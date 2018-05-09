import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import Search from './Search'
import './App.css'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: {},
  }

  getAllBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books:
          {
            CurrentlyReading: books.filter(function (data) { return data.shelf === "currentlyReading" }),
            wantToRead: books.filter(function (data) { return data.shelf === "wantToRead" }),
            read: books.filter(function (data) { return data.shelf === "read" }),
          }
      })
    })
  }

  componentDidMount() {
    //get all data from api 
    this.getAllBooks();
  }
  // move books 
  moveBook = (data, newShelf, oldShelf) => {
    console.log(newShelf + '  ' + oldShelf);
    if (newShelf !== oldShelf) {
      BooksAPI.update(data, newShelf).then((books) => {
        this.getAllBooks();
      })
    }
  }

  render() {
    return (
      <div className="app">

        <Route exact path={"/"} render={() => (
          <ListBooks
            onBookMove={this.moveBook}
            books={this.state.books}
          />)}
        />
        <Route exact path={"/search"} render={() => (
          <Search
            onBookMove={this.moveBook}
          />)}
        />


      </div >
    )
  }
}

export default BooksApp
