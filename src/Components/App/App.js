import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import logo from "./jammingpanda.png";

import "./App.css";
import { Tracks } from "../Tracks/Tracks";

const App = () => {
  const [searchResults, setSearchResults] = useState(Tracks);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="Jamming">
      <h1>Jammming with The Obstinate Panda!</h1>
      <img src={logo} alt="panda logo" className="logo" />

      <div className="App">
        <SearchBar
          tracks={searchResults}
          setTracks={setSearchResults}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />
      </div>

      <div className="tracks">
        <div className="SearchResults">
          <SearchResults searchResults={searchResults} isLoading={isLoading} />
        </div>
        <div className="Playlist">
          <Playlist />
        </div>
      </div>
    </div>
  );
};

export default App;
