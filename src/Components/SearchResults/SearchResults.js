import React from "react";
//import Tracklist from "../Tracklist/Tracklist"
import { Tracks } from '../Tracks/Tracks';
import Track from '../Track/Track';
import "./SearchResults.css"


const SearchResults = () => {
    return(
        <div className="SearchResults">
            <h2>Results</h2>
            {Tracks.map(track => {return <Track key={track.id} trackObject={track} isRemoval={true} />})
            }
            
        </div>
    )
}

export default SearchResults;