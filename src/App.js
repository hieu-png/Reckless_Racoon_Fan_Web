import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function App() {
  const [twitterFollowersCount, setTwitterFollowrCount]=useState(0)
  const [discordMemberCount, setDiscordMemberCount] = useState(0)

  const [supply, setSupply] = useState(0)
  const [whiteListCount, setWhiteListCount] = useState(0)

  return ( 
    <div className="App">
      <Header></Header>
     {/*  <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header> */}

      <div
      id="about"
      ></div>
    </div>
  );
}
 
export default App;
