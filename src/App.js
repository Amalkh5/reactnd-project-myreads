import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import Search from './Search'
import './App.css'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    Allbooks: [],
  }

  getAllBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        Allbooks: books
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
      // BooksAPI.update(data, newShelf).then((books) => {
      //   this.getAllBooks();
      // })
      BooksAPI.update(data, newShelf).then(() => {
        data.shelf = newShelf;
        this.setState(state => ({
          Allbooks: state.Allbooks.filter(b => b.id !== data.id).concat(data)
        }))
      })
    } //if  
  }

  render() {
    return (
      <div className="app">

        <Route exact path={"/"} render={() => (
          <ListBooks
            allbooks={this.state.Allbooks}
            onBookMove={this.moveBook}
          />)}
        />
        <Route exact path={"/search"} render={() => (
          <Search
            onBookMove={this.moveBook}
            allbooks={this.state.Allbooks}
          />)}
        />


      </div >
    )
  }
}

export default BooksApp
