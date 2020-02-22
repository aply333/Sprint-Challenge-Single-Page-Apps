import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import LocationCard from "./LocationCard";

export default function SearchForm({rickData}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [display, setDisplayed] = useState([]);

  console.log('initial SrchFrm',rickData)

  const changeHandler = event => {
    setSearchTerm(event.target.value);
  };
  const submitHandler = event => {
    event.preventDefault();
    console.log(searchTerm);
    console.log(filteredList);
    setDisplayed(filteredList);
  };

  let filteredList = rickData.filter(
    (character) => {
      return character.name.indexOf(searchTerm) !== -1;
    }
  )

  return (
    <section className="search-form">
      <form onSubmit={event => submitHandler(event)}>
        <input type="text" placeholder="Search" onChange={changeHandler} />
        <button>Go!</button>
      </form>
      <ul>
        {display.map(character => (
          <LocationCard display={character}/>
        ))}
      </ul>
      
    </section>
  );
}
