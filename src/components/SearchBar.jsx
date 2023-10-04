import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bookService from "../api/bookService";
import { eraseArray, initializeArray } from "../actions";

const SearchBar = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    bookService
      .searchBook(title)
      .then((response) => {
        dispatch(initializeArray(response.data.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(eraseArray());
      });
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter book title..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="search-btn"
        disabled={title === ""}
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
