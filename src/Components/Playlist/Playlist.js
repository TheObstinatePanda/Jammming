import React from "react";
//import Tracklist from '../Tracklist/Tracklist';
//import {Tracks} from '../Tracks/Tracks';
import Track from '../Track/Track';
import "./Playlist.css"

const Playlist = (props, {searchResults, setSearchResults, setPlaylist, playlist}) => {
    
    function moveToSearchResults(trackObject) {
        setPlaylist(() =>
            playlist.filter((track) => track.id !== trackObject.id)
        );
        setSearchResults((prevState) => [...prevState, trackObject])
    }

    return (
        <div className="Playlist">
            <input defaultValue="New Playlist"/>
            {props.playlist.map((track) => {
                return <Track 
                    key={track.id}
                    trackObject={track} 
                    isRemoval={false}
                    moveToSearchResults={moveToSearchResults}
                    />
            })}
            
            {/*console.log(Track)*/}

            <p>'Add a track to the playlist!'</p>

            <button className="savePlaylist">Save to Spotify</button>
        </div>
    )
}

export default Playlist;