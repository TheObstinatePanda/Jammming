import React, { useState } from "react";
import "./Track.css";

const Track = ({ moveTrackToPlayList, trackObject, key }) => {
  function takeAction() {
    if (trackObject.list !== "tracklist") {
      return <button className="takeAction">-</button>;
    } else {
      return (
        <button
          className="takeAction"
          onClick={() => {
            console.log(trackObject);

            moveTrackToPlayList(trackObject);
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
  );
};

export default Track;
