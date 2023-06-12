import React, { useState } from "react";
import "./Track.css";

const Track = (props) => {
   
    let [isRemoval, setIsRemoval] = useState(props.isRemoval);

    function takeAction() {
        if (!isRemoval){
            return <button className="takeAction" onClick={() => setIsRemoval(props.isRemoval)}>-</button>
        } else {
            return <button className="takeAction" onClick={() => setIsRemoval(props.isRemoval)}>+</button>
        }
    }

    return (
       <div className="Track" isremoval={toString(isRemoval)}>
            <div className="Trackinfo">
                <h3>{props.trackObject.trackName}</h3>
                <p>Artist: {props.trackObject.trackArtist}</p>
                <p className="from">Album: {props.trackObject.trackAlbum}</p>
            </div>
            {takeAction()}
       </div> 
    )
}

export default Track;