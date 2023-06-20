import React from "react";
import "./Track.css";

const Track = ({isRemoval, setIsRemoval, moveToPlaylist, moveToSearchResults, trackObject, key}) => {
   
    function takeAction() {
       // console.log(playlist)
        if (!isRemoval) {
            return <button 
                className="takeAction" 
                onClick={() => {
                    moveToSearchResults(trackObject)
                    trackObject.setIsRemoval=!isRemoval
                }}>-</button>
        } else {
            return (
                <button
                  className="takeAction"
                  onClick={() => {
                    //console.log(trackObject.id);
        
                    moveToPlaylist(trackObject);
                    trackObject.setIsRemoval = !isRemoval
                  }}
                >
                  +
                </button>
              );
            }
          }

    return (
       <div className="Track" key={trackObject.name}>
        <img src={trackObject.images[2].url} alt="album art" id="albumart"/>
            <div className="Trackinfo" key={key}>
              
              <p id="artist">{trackObject.artists[0].name}</p>
              <p className="from">Album: {trackObject.name}</p>
            </div>
            {takeAction()}
            {/*console.log("trackobject " + trackObject.name)*/}
       </div> 
    )
}

export default Track;