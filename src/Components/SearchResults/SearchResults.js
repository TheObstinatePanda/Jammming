import React from "react";
import Tracklist from "../Tracklist/Tracklist"
import "./SearchResults.css"


const SearchResults = (props) => {
    return(
        <div className="SearchResults">
            <h2>Results</h2>
            <Tracklist isRemoval={false}/>
        </div>
    )
}

export default SearchResults;