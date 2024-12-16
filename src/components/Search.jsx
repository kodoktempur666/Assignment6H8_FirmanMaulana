import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
      setInput("");
    }
  };

  return (
    <form className="d-flex mt-4" onSubmit={handleSearch}>
      <input
        type="text"
        className="form-control me-2"
        placeholder="Search movies..."
        value={input}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
