import React, { useState, useEffect } from "react";
//import { Tracks } from '../Tracks/Tracks'
import "./SearchBar.css"


const SearchBar = ({tracks, setTracks, setIsLoading, isLoading}) => {
    const [input, setInput] = useState("");
    
    useEffect(() => {
        if (isLoading === true) {
            setIsLoading(false);
            setTracks((prevTracks) => [...prevTracks])
        }
    })

    const handleSearch = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    };

     return (
        <div className="SearchBar">
            {/*console.log(tracks)*/}
            <input 
                type="search" 
                placeholder="Enter a Song, Album or Artist"  
                onChange = {handleSearch}
            />
            <button className="SearchButton">Search</button>
        </div>
    )
}

export default SearchBar;