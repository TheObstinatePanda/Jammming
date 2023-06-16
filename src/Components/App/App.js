import React, { useState } from  "react";
import SearchBar from  "../SearchBar/SearchBar"
import SearchResults from "../SearchResults/SearchResults"
import Playlist from "../Playlist/Playlist"
import logo from "./jammingpanda.png"
import { Tracks } from "../Tracks/Tracks"

import "./App.css";

const App =()=>{    

    const [searchResults, setSearchResults] = useState(Tracks);
    const [playlist, setPlaylist] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isRemoval, setIsRemoval] = useState(true)
    const [query, setQuery] = useState("");

      return (
        <div className="Jamming">
            <h1>Jamming with The Obstinate Panda!</h1>
            <img src={logo} alt='panda logo' className="logo" />
            
            <div className="App">    
                    <SearchBar
                        tracks={searchResults}
                        setTracks={setSearchResults}
                        setIsLoading={setIsLoading}
                        isLoading={isLoading}
                        query={query}
                        setQuery={setQuery}
                    />
            </div>

            <div className="tracks">
                <div className="SearchResults">
                    <SearchResults 
                        searchResults={searchResults}
                        setSearchResults={setSearchResults}
                        isLoading={isLoading}
                        playlist={playlist}
                        setPlaylist={setPlaylist}
                        isRemoval={isRemoval}
                        setIsRemoval={setIsRemoval}
                        query={query}
                    />
                </div>    
                <div className="Playlist">    
                    <Playlist 
                        playlist={playlist}
                        setPlaylist={setPlaylist}
                        searchResults={searchResults}
                        setSearchResults={setSearchResults}
                    />
                    {console.log(playlist)}
                    
                </div>
            </div>
        </div>
        )   
    }


export default App;