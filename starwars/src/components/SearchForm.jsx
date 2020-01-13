import React, { useState } from "react";

function SearchForm({ data, setData, fetchData }) {
  const [inputValue, setInputValue] = useState(null);

  const handleChange = e => {
    setInputValue(e.target.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newList = data.filter(char => {
      const charName = char.name.toLowerCase();
      return charName.includes(inputValue);
    });
    // console.log(inputValue, newList);
    setData(newList);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button type="submit">search</button>
      <button onClick={fetchData}>reset</button>
    </form>
  );
}

export default SearchForm;
