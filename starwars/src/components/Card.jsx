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
        <span>Name:</span>
        {name}
      </LineItem>
      <LineItem>
        <span>Height:</span>
        {height}
      </LineItem>
      <LineItem>
        <span>Mass:</span>
        {mass}
      </LineItem>
      <LineItem>
        <span>Hair Color:</span>
        {hair_color}
      </LineItem>
      <LineItem>
        <span>Skin Color:</span>
        {skin_color}
      </LineItem>
      <LineItem>
        <span>Eye Color:</span>
        {eye_color}
      </LineItem>
      <LineItem>
        <span>Birth Year:</span>
        {birth_year}
      </LineItem>
      <LineItem>
        <span>Gender:</span>
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
  padding-bottom: 10px;
`;
