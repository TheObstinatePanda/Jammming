import React from "react";
import "./Track.css";

const Track = (props) => {
   
    const addTrack = () => {
        props.onAdd(props.track);
    }

    const removeTrack = () => {
        props.onRemove(props.track);
    }

    function takeAction() {
        if (props.onRemove){
            return <button className="takeAction">-</button>
        } else {
            return <button className="takeAction">+</button>
        }
    }

    return (
       <div className="Track">
            <div className="Trackinfo">
                <h3>{props.trackObject.trackName}</h3>
                <p>Artist: {props.trackObject.trackArtist}</p>
                <p className="from">Album: {props.trackObject.trackAlbum}</p>
            </div>
            {takeAction}
       </div> 
    )
}

export default Track;