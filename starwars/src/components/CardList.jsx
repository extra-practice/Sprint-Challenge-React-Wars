import React from "react";
import Card from "./Card";
import styled from "styled-components";

function CardList({ data }) {
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
