import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const Shelf = ({ title, books, onChangeBookShelf }) => {
  const changeBookShelfHandler = (book, shelf) => {
    onChangeBookShelf(book, shelf);
  };

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} onChangeBookShelf={changeBookShelfHandler} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired,
};
export default Shelf;
