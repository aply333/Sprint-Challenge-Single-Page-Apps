import React from "react";
import styled from 'styled-components';

const CardStyle = styled.div`
  display:flex;
  flex-flow:column;
  width: 300px;
  height: 500px;
  margin:10px;
  background-color: #7FFFD4;
`;

export default function CharacterCard({ data }) {
  return (
    <CardStyle>
      <img src={data.image} />
      <h2>{data.name}</h2>
      <h3>{data.origin.name}</h3>
    </CardStyle>
  );
}
