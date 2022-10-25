import React from "react";

import NavBar from "./components/Navbar";
import Tweet from "./components/Tweet";

import "./css/containers.css"

function App() {
  return (
    <div className="App">
      <NavBar />
        <div className="main-container">
          <div className="container">
            <p>Latest Tweets</p>
            <div className="tweets-container">
              <Tweet />
              <Tweet />
              <Tweet />
            </div>
          </div>

          <div className="container" id="songs-container">
            <p>Top Songs</p>  
          </div>

          <div className="container" id="concerts-container">
            <p>Upcoming Concerts</p>  
          </div>
        </div>

    </div>
  );
}

export default App;
