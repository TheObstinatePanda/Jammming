import React, { useEffect } from "react";
//import { Tracks } from '../Tracks/Tracks'
import "./SearchBar.css"


const SearchBar = ( { tracks, setTracks, setIsLoading, isLoading, query, setQuery } ) => {
        
    useEffect(() => {
        if (isLoading === true) {
            setIsLoading(false);
            setTracks((prevTracks => [...prevTracks]))
        }
    })
    
    return (
        <div className="SearchBar">
            {console.log(tracks)}
            <input 
                value={query}
                type="search" 
                placeholder="Enter a Song, Album or Artist"  
                onChange = {e => setQuery(e.target.value)}
            />
            <button className="SearchButton" >Search</button>
        </div>
    )}

export default SearchBar;