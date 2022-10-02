import React from "react";
import { Link } from "react-router-dom";
import Shelf from "../components/Shelf";
import {
  CURRENTLY_READING,
  WANT_TO_READ,
  READ,
  ADD_A_BOOK,
} from "../utils/constants";

const Home = ({ books, onChangeBookShelf }) => {
  const changeBookShelfHandler = (book, shelf) => {
    onChangeBookShelf(book, shelf);
  };

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              title="Currently Reading"
              books={books.filter((book) => book.shelf === CURRENTLY_READING)}
              onChangeBookShelf={changeBookShelfHandler}
            />
            <Shelf
              title="Want to Read"
              books={books.filter((book) => book.shelf === WANT_TO_READ)}
              onChangeBookShelf={changeBookShelfHandler}
            />
            <Shelf
              title="Read"
              books={books.filter((book) => book.shelf === READ)}
              onChangeBookShelf={changeBookShelfHandler}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">{ADD_A_BOOK}</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
