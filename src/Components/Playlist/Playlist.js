import React from "react";
//import Tracklist from '../Tracklist/Tracklist';
//import {Tracks} from '../Tracks/Tracks';
import Track from '../Track/Track';
import "./Playlist.css"

const Playlist = (
     {setSearchResults, setPlaylist, playlist, isRemoval, setIsRemoval}) => {
    
    function moveToSearchResults(trackObject) {
        setPlaylist(() =>
            playlist.filter((track) => track.id !== trackObject.id)
        );
        setSearchResults((prevState) => [...prevState, trackObject])
    }

    // function removeTrack (id) {
    //     setPlaylist(currentTrack => {
    //         return currentTrack.filter(track => track.id !== id)
    //     })
    // }

    return (
        <div className="Playlist">
            <input defaultValue="New Playlist"/>
            {playlist.map((track) => {
                return (
                    <Track 
                        key={track.id}
                        trackObject={track} 
                        moveToSearchResults={moveToSearchResults}
                        isRemoval={false}
                        setIsRemoval={setIsRemoval}
                    />)
                    
            })}
            {/*console.log("setPlaylist :" + setPlaylist)*/}
            {/*console.log(Track)*/}

            <p>'Add a track to the playlist!'</p>

            <button className="savePlaylist">Save to Spotify</button>
        </div>
    )
}

export default Playlist;