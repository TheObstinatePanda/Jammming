import React from "react";
import Track from '../Track/Track';
import "./SearchResults.css"


const SearchResults = ({searchResults, isLoading, setPlaylist, setSearchResults, isRemoval, setIsRemoval, query}) => {
    
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
            {searchResults.map((track, i) => {
                return (
                    <div>
                        
                        <Track 
                        
                        trackObject={track}
                        moveToPlaylist={moveToPlaylist}
                        isRemoval={isRemoval}
                        setIsRemoval={setIsRemoval}
                    />
                    </div>
                    
                );
            })}  
            {/*console.log("setSearch :" + setSearchResults)*/}          
        </div>
    )
}

export default SearchResults;