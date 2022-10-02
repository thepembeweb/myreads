import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Debounce } from "react-throttle";

const SearchBar = ({ onChangeSearchInput, onClearSearchInput }) => {
  const changeSearchInputHandler = (event) => {
    let query = event.target.value;
    onChangeSearchInput(query);
  };

  const clearSearchInputHandler = () => {
    onClearSearchInput();
  };

  return (
    <>
      <div className="search-books-bar">
        <Link to="/" className="close-search" onClick={clearSearchInputHandler}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <Debounce time="200" handler="onChange">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={changeSearchInputHandler}
            />
          </Debounce>
        </div>
      </div>
    </>
  );
};

SearchBar.propTypes = {
  onChangeSearchInput: PropTypes.func.isRequired,
  onClearSearchInput: PropTypes.func.isRequired,
};
export default SearchBar;
