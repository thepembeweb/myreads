import React from "react";
import PropTypes from "prop-types";
import FALLBACK_BACKGROUND_IMAGE from "../images/fallback-background.jpg";
import {
  CURRENTLY_READING,
  WANT_TO_READ,
  READ,
  NONE,
} from "../utils/constants";

const Book = ({ book, onChangeBookShelf }) => {
  const changeBookShelfHandler = (event) => {
    let newValue = event.target.value;
    onChangeBookShelf(book, newValue);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193 }}>
          <img
            alt=""
            src={
              book.imageLinks
                ? book.imageLinks.thumbnail
                : FALLBACK_BACKGROUND_IMAGE
            }
            style={{ width: 128, height: 193 }}
          />
        </div>
        <div className="book-shelf-changer">
          <select
            onChange={changeBookShelfHandler}
            defaultValue={book.shelf || "none"}
          >
            <option value="" disabled>
              Move to...
            </option>
            <option value={CURRENTLY_READING}>Currently Reading</option>
            <option value={WANT_TO_READ}>Want to Read</option>
            <option value={READ}>Read</option>
            <option value={NONE}>None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired,
};
export default Book;
