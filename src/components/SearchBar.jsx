import React, { useState } from "react";

const SearchBar = () => {
    const [title, setTitle] = useState("");


  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter book title..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="search-btn" disabled={title === ""}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
