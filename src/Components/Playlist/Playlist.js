import React from "react";
//import Tracklist from '../Tracklist/Tracklist';
import {Tracks} from '../Tracks/Tracks';
import Track from '../Track/Track';
import "./Playlist.css"

const Playlist = () => {
    return (
        <div className="Playlist">
            <input defaultValue="New Playlist"/>
            {Tracks.map((track) => {
                if (!!Track.isRemoval) {
                    return <Track key={track.id} trackObject={track} />
                }
            })}
                {console.log(Track)}
            <p>'Add a track to the playlist!'</p>

            <button className="savePlaylist">Save to Spotify</button>
        </div>
    )
}

export default Playlist;