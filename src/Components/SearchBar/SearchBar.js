import React, {useState, useEffect } from "react";
//import { Tracks } from '../Tracks/Tracks'
import "./SearchBar.css"

const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET} = process.env

const SearchBar = ( { searchResults, setSearchResults, setIsLoading, isLoading, query, setQuery } ) => {
    const [accessToken, setAccessToken] = useState("");
    

    useEffect(() => {
        
        // API Access Token
        let authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + REACT_APP_CLIENT_ID + '&client_secret=' +REACT_APP_CLIENT_SECRET
        }

        console.log('Auth parameters ' + authParameters.body)

        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token))


        //set loading state    
        if (isLoading === true) {
            setIsLoading(false);
            
        }    
    }, [])

    // Search function

    async function search() {
        console.log("Search for " + query);

        // Get request to get Artist ID
        let searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        }
        let queryResults = await fetch ('https://api.spotify.com/v1/search?q=' + query + '&type=artist' , searchParameters)
            .then(response => response.json())
            .then(data => {return data.artists.items[0].id})
        console.log("Artist ID is " + queryResults)

        // Get all results related to that query
        let results = await fetch ('https://api.spotify.com/v1/artists/' + queryResults + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
            .then(response => response.json())
            .then (data => {
                //console.log(data)
                setSearchResults(data.items)
            } )
            
        // Display those Albums


    }
    
    return (
        <div className="SearchBar">
            {/*console.log(tracks)*/}
            <input 
                value={query}
                type="search" 
                placeholder="Search for an artist to get albums"  
                onKeyPress={e => {
                    if (e.key === "Enter") {
                        search();
                    }
                }}
                onChange={e => setQuery(e.target.value)}
                
            />
            <button className="SearchButton" onClick={search}>Search</button>
            {/*console.log(query)*/}
        </div>
    )}

export default SearchBar;