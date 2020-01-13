import React, { useState, useEffect } from "react";
import Card from "./Card";
import styled from "styled-components";

function CardList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://swapi.co/api/people")
      .then(res => {
        return res.json();
      })
      .then(res => {
        setData(res.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <StyledList>
      {data.map(char => {
        return <Card char={char} key={char.name} />;
      })}
    </StyledList>
  );
}

export default CardList;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
