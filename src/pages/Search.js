import React from "react";

import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

const Search = ({
  searchResults,
  onChangeBookShelf,
  onChangeSearchInput,
  onClearSearchInput,
}) => {
  const changeSearchInputHandler = (query) => {
    onChangeSearchInput(query);
  };

  const clearSearchInputHandler = (query) => {
    onClearSearchInput(query);
  };

  const changeBookShelfHandler = (book, shelf) => {
    onChangeBookShelf(book, shelf);
  };

  return (
    <>
      <div className="search-books">
        <SearchBar
          onChangeSearchInput={changeSearchInputHandler}
          onClearSearchInput={clearSearchInputHandler}
        />
        <SearchResults
          searchResults={searchResults}
          onChangeBookShelf={changeBookShelfHandler}
        />
      </div>
    </>
  );
};

export default Search;
