import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import TextInBox from './components/TextInBox';

import { useState } from 'react';
import { themeAbout, collectionAbout, pagingElementHeight } from './constant';
import {aboutCollection, aboutTheme, background} from './assets/image'
function App() {
  const [twitterFollowersCount, setTwitterFollowrCount]=useState(0)
  const [discordMemberCount, setDiscordMemberCount] = useState(0)

  const [supply, setSupply] = useState(0)
  const [whiteListCount, setWhiteListCount] = useState(0)

  return ( 
    <div className="App" style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
   }}>
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
      <div style={{height:"500px"}}>


      </div>
      <div id="#disclaimer">

      </div>

      <div id="#aboutTheme" className='Text-and-image'>
        <TextInBox
         width='40%'
          height={pagingElementHeight}
         paddingLeft='80px'
         paddingTop='40px'
         paddingRight='8  0px'
         fontSize='25px'
         textContent={themeAbout}
        />

        <img src={aboutTheme} height={pagingElementHeight} width="40%" className='About-image'/>

      </div>


      <div id="#aboutCollection" className='Text-and-image'>
        <img src={aboutCollection} height={pagingElementHeight} width="40%" className='About-image'/>

        <TextInBox
          width='40%'
          height={pagingElementHeight}
          paddingLeft='80px'
          paddingTop='70px'
          paddingRight='80px'
          fontSize='28px'
          textContent={collectionAbout}
        />
      </div>


    </div>
  );
}
 
export default App;
