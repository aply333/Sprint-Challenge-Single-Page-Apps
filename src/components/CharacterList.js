import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import SearchForm from "./SearchForm";

const CardContainer = styled.div`
  display: flex;
  flex-flow: row-reverse wrap-reverse;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [rickData, setRickData] = useState([]);


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getRickData = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => setRickData(response.data.results))
        .catch(err => console.log(err));
    };
    getRickData();
  }, []);

  return (
    <section className="character-list">
      <SearchForm rickData={rickData} />
      <CardContainer>
        {rickData.map(character => (
          <CharacterCard key={character.id} data={character} />
        ))}
      </CardContainer>
    </section>
  );
}
