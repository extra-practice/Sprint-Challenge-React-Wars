import React from "react";
import styled from "styled-components";

function Card({ char }) {
  let {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender
  } = char;
  return (
    <StyledCard>
      <LineItem>
        <Span>Name:</Span>
        {name}
      </LineItem>
      <LineItem>
        <Span>Height:</Span>
        {height}
      </LineItem>
      <LineItem>
        <Span>Mass:</Span>
        {mass}
      </LineItem>
      <LineItem>
        <Span>Hair Color:</Span>
        {hair_color}
      </LineItem>
      <LineItem>
        <Span>Skin Color:</Span>
        {skin_color}
      </LineItem>
      <LineItem>
        <Span>Eye Color:</Span>
        {eye_color}
      </LineItem>
      <LineItem>
        <Span>Birth Year:</Span>
        {birth_year}
      </LineItem>
      <LineItem>
        <Span>Gender:</Span>
        {gender}
      </LineItem>
    </StyledCard>
  );
}

export default Card;

const StyledCard = styled.div`
  background: #fafafa;
  width: 350px;
  margin: 20px;
  border-radius: 5px;
  opacity: 0.8;
  list-style-type: none;
  padding: 20px;
`;

const LineItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid silver;

  &:last-child {
    border-bottom: none;
  }
`;

const Span = styled.span`
  font-weight: bold;
`;
