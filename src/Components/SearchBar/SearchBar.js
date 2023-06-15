import React, { useState, useEffect } from "react";
import { Tracks } from "../Tracks/Tracks";
import "./SearchBar.css";

const SearchBar = ({ tracks, setTracks, setIsLoading, isLoading }) => {
  const [input, setInput] = useState("");
  useEffect(() => {
    const tracksFromAPI = () => {
      /*  if (isLoading) {
        return Promise.resolve([]);
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          const tracks = [
            {
              id: 2,
              trackName: "Midnight Revolution",
              trackArtist: "Black Sabbath",
              trackAlbum: "Paranoid (Deluxe Edition)",
            },
            {
              id: 3,
              trackName: "Shadow of the Abyss",
              trackArtist: "Iron Maiden",
              trackAlbum: "The Number of the Beast",
            },
          ];
          resolve(tracks);
        }, 1000);
      }); */
      return [
        {
          id: 2,
          trackName: "Midnight Revolution",
          trackArtist: "Black Sabbath",
          trackAlbum: "Paranoid (Deluxe Edition)",
        },
        {
          id: 3,
          trackName: "Shadow of the Abyss",
          trackArtist: "Iron Maiden",
          trackAlbum: "The Number of the Beast",
        },
      ];
    };

    // Example usage:
    /*  tracksFromAPI().then((tracks) => {
      setIsLoading(false);
      setTracks((prevTracks) => [...prevTracks, ...tracks]);
    }); */
    setIsLoading(false);
    setTracks((prevTracks) => [...prevTracks, ...tracksFromAPI()]);
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
