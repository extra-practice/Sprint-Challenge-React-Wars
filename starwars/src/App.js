import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList";
import SearchForm from "./components/SearchForm";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://swapi.co/api/people")
      .then(res => {
        return res.json();
      })
      .then(res => {
        // console.log(res);
        setData(res.results);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <SearchForm data={data} setData={setData} fetchData={fetchData} />
      <CardList data={data} />
    </div>
  );
};

export default App;
