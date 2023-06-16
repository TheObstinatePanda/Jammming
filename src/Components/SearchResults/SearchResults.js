import React from "react";
//import Tracklist from "../Tracklist/Tracklist"
//import { Tracks } from '../Tracks/Tracks';
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

    /*function filteredTracks(trackObject) {
         trackObject.toLowerCase().hasOwnProperty(query.toLowerCase())
    }*/

    /*const filteredTracks = useMemo(() => {
        return searchResults.filter(trackObject => {
            return trackObject.toLowerCase().includes(query.toLowerCase())
    })*/

    
    return(
        <div className="SearchResults">
            <h2>Results</h2>
            {/*console.log(filteredTracks)*/}
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
            {/*console.log("setSearch :" + setSearchResults)*/}          
        </div>
    )
}

export default SearchResults;