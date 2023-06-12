import React/*, { useState }*/ from  "react";
import SearchBar from  "../SearchBar/SearchBar"
import SearchResults from "../SearchResults/SearchResults"
import Playlist from "../Playlist/Playlist"
import logo from "./jammingpanda.png"


import "./App.css";

const App =()=>{    

      return (
        <div className="Jamming">
            <h1>Jammming with The Obstinate Panda!</h1>
            <img src={logo} alt='panda logo' className="logo" />
            
            <div className="App">    
                    <SearchBar/>
            </div>

            <div className="tracks">
                <div className="SearchResults">
                    <SearchResults />
                </div>    
                <div className="Playlist">    
                    <Playlist />
                </div>
            </div>
        </div>
        )   
    }


export default App;