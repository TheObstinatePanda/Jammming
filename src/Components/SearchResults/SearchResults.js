import React from "react";
//import Tracklist from "../Tracklist/Tracklist"
//import { Tracks } from '../Tracks/Tracks';
import Track from '../Track/Track';
import "./SearchResults.css"


const SearchResults = ({searchResults, isLoading, setPlaylist, setSearchResults, isRemoval, setIsRemoval}) => {
    
    if (isLoading === true) return <h3>Loading...</h3>;

    function moveToPlaylist(trackObject) {
        setSearchResults(() =>
            searchResults.filter((track) => track.id !== trackObject.id)
        );
        setPlaylist((prevState) => [...prevState, trackObject])
    }
    
    return(
        <div className="SearchResults">
            <h2>Results</h2>

            {searchResults.map((track) => {
                return (
                    <Track 
                        key={track.id}
                        trackObject={track}
                        moveToPlaylist={moveToPlaylist}
                        isRemoval={isRemoval}
                        setIsRemoval={setIsRemoval}
                    />
                );
            })}            
        </div>
    )
}

export default SearchResults;