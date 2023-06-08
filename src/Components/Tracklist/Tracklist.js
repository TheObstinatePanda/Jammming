import React from "react";
import "./Tracklist.css";
import { Tracks } from '../Tracks/Tracks'
import Track from '../Track/Track'

const Tracklist = (props) => {
  
    return (
        <div className="Tracklist">
            {Tracks.map(track => <Track trackObject={track} onAdd={props.addTrack} onRemove={props.removeTrack}/>)}              
        </div>
    )
}

export default Tracklist;