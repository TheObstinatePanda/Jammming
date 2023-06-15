import React, { useState, useEffect } from "react";
import { Tracks } from "../Tracks/Tracks";
import "./SearchBar.css";

const SearchBar = ({ tracks, setTracks, setIsLoading, isLoading }) => {
  const [input, setInput] = useState("");
  const tracksFromAPI = () => {
    return [
      /*  {
        id: 4,
        trackName: "Midnight Revolution",
        trackArtist: "Black Sabbath",
        trackAlbum: "Paranoid (Deluxe Edition)",
        list: "tracklist",
      },
      {
        id: 5,
        trackName: "Shadow of the Abyss",
        trackArtist: "Iron Maiden",
        trackAlbum: "The Number of the Beast",
        list: "tracklist",
      }, */
    ];
  };
  useEffect(() => {
    if (isLoading == true) {
      setIsLoading(false);
      setTracks((prevTracks) => [...prevTracks, ...tracksFromAPI()]);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  /*   if (input.length > 0) {
    tracks.filter((track) => {
      return track.trackName.match(input);
    });
  } */

  return (
    <div className="SearchBar">
      {console.log(tracks)}
      <input
        type="search"
        placeholder="Enter a Song, Album or Artist"
        onChange={handleSearch}
      />
      <button className="SearchButton">Search</button>
    </div>
  );
};

export default SearchBar;
