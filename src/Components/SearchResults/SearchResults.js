import React, { useState } from "react";
//import Tracklist from "../Tracklist/Tracklist"
import { Tracks } from "../Tracks/Tracks";
import Track from "../Track/Track";
import "./SearchResults.css";

const SearchResults = ({
  searchResults,
  isLoading,
  setPlayList,
  setSearchResults,
}) => {
  console.log(searchResults);
  if (isLoading == true) return <h1>Loading...</h1>;
  function moveTrackToPlayList(trackObject) {
    console.log(trackObject);
    setSearchResults(() =>
      searchResults.filter((track) => track.id !== trackObject.id)
    );
    setPlayList((prevState) => [...prevState, trackObject]);
  }
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      {searchResults.map((track) => {
        console.log(track.id);
        return (
          <Track
            key={track.id}
            trackObject={track}
            isRemoval={true}
            moveTrackToPlayList={moveTrackToPlayList}
          />
        );
      })}
    </div>
  );
};

export default SearchResults;
