import React from "react";
import "./Tracklist.css";
import { Tracks } from '../Tracks/Tracks'
import Track from '../Track/Track'

const Tracklist = (props) => {

    return (
        <div className="Tracklist">
            {Tracks.map(track => <Track key={track.id} trackObject={track} />)}              
        </div>
    )
}



export default Tracklist;