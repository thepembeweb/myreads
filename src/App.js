import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import * as BooksAPI from "./api/BooksAPI";

import Home from "./pages/Home";
import Search from "./pages/Search";

import { getIntersect } from "./utils/common";
import {
  CURRENTLY_READING,
  WANT_TO_READ,
  READ,
  MAX_RESULT_COUNT,
  EMPTY_QUERY,
} from "./utils/constants";

function App() {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const books = await BooksAPI.getAll();
      setBooks(books);
    };

    fetchBooks();
  }, []);

  const changeBookShelfHandler = (book, shelf) => {
    book.shelf = shelf;

    setBooks((prevBooks) => {
      return prevBooks.filter((b) => b.id !== book.id).concat([book]);
    });

    BooksAPI.update(book, shelf);
  };

  const changeSearchInputHandler = (query) => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    BooksAPI.search(query, MAX_RESULT_COUNT).then((results) => {
      updateSearchResults(results);

      if (results !== undefined && results.error !== EMPTY_QUERY) {
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    });
  };

  const clearSearchInputHandler = () => {
    setSearchResults([]);
  };

  const updateSearchResults = (booksList) => {
    if (booksList !== undefined && booksList.error !== EMPTY_QUERY) {
      const ids = booksList.map((book) => book.id);
      const readIntersects = getIntersect(READ, ids, books);
      const currentlyReadingIntersect = getIntersect(
        CURRENTLY_READING,
        ids,
        books
      );
      const wantToReadIntersects = getIntersect(WANT_TO_READ, ids, books);

      for (const book of booksList) {
        if (currentlyReadingIntersect.includes(book.id)) {
          book.shelf = CURRENTLY_READING;
        }
        if (readIntersects.includes(book.id)) {
          book.shelf = READ;
        }
        if (wantToReadIntersects.includes(book.id)) {
          book.shelf = WANT_TO_READ;
        }
      }
    }
  };

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home books={books} onChangeBookShelf={changeBookShelfHandler} />
          }
        />
        <Route
          exact
          path="/search"
          element={
            <Search
              searchResults={searchResults}
              onChangeBookShelf={changeBookShelfHandler}
              onChangeSearchInput={changeSearchInputHandler}
              onClearSearchInput={clearSearchInputHandler}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
