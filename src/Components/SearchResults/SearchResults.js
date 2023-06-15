import React, { useState } from "react";
//import Tracklist from "../Tracklist/Tracklist"
import { Tracks } from "../Tracks/Tracks";
import Track from "../Track/Track";
import "./SearchResults.css";

const SearchResults = ({ searchResults, isLoading }) => {
  if (isLoading == true) return <h1>Loading...</h1>;

  return (
    <div className="SearchResults">
      <h2>Results</h2>
      {searchResults.map((track) => (
        <Track key={track.id} trackObject={track} isRemoval={true} />
      ))}
    </div>
  );
};

export default SearchResults;
