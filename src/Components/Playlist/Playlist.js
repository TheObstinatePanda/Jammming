import React from "react";
import Tracklist from '../Tracklist/Tracklist'
import "./Playlist.css"

const Playlist = () => {
    return (
        <div className="Playlist">
            <input defaultValue="New Playlist"/>
            <Tracklist isRemoval={true}/>
            <button className="savePlaylist">Save to Spotify</button>
        </div>
    )
}

export default Playlist;