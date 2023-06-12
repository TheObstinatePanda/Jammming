import React, { useState } from "react";
import { Tracks } from '../Tracks/Tracks'
import "./SearchBar.css"


const SearchBar = () => {
    const [input, setInput] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    };

    if (input.length > 0) {
        Tracks.filter((track) => {
            return track.trackName.match(input)
        });
    }

    return (
        <div className="SearchBar">
            <input type="search" placeholder="Enter a Song, Album or Artist"  onChange = {handleSearch}/>
            <button className="SearchButton">Search</button>
        </div>
    )
}

export default SearchBar;