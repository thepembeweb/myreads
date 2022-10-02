import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const SearchResults = ({ searchResults, onChangeBookShelf }) => {
  const changeBookShelfHandler = (book, shelf) => {
    onChangeBookShelf(book, shelf);
  };

  return (
    <>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults.map((book) => (
            <li key={book.id}>
              <Book book={book} onChangeBookShelf={changeBookShelfHandler} />
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired,
};
export default SearchResults;
