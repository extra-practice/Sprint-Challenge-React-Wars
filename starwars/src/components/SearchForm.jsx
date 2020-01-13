import React, { useState } from "react";

function SearchForm({ fetchData, setInputValue }) {
  const handleChange = e => {
    setInputValue(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchData();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button type="submit">search</button>
    </form>
  );
}

export default SearchForm;
