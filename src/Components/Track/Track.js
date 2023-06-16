import React from "react";
import "./Track.css";

const Track = ({playlist, moveToPlaylist, moveToSearchResults, trackObject, key}) => {
   
    function takeAction() {
       // console.log(playlist)
        if (playlist.includes(trackObject)) {
            return <button 
                className="takeAction" 
                onClick={() => {
                    moveToSearchResults(trackObject)
                }}>-</button>
        } else {
            return (
                <button
                  className="takeAction"
                  onClick={() => {
                    //console.log(trackObject.id);
        
                    moveToPlaylist(trackObject);
                  }}
                >
                  +
                </button>
              );
            }
          }

    return (
       <div className="Track" key={trackObject.id}>
            <div className="Trackinfo" key={key}>
                <h3>{trackObject.trackName}</h3>
                <p>Artist: {trackObject.trackArtist}</p>
                <p className="from">Album: {trackObject.trackAlbum}</p>
            </div>
            {takeAction()}
       </div> 
    )
}

export default Track;