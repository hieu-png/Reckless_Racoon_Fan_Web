import './App.css';
import React, { Component, useEffect } from 'react';
import { Header, TextInBox, ImageCard, Statistic } from './components';
import Typography from "@mui/material/Typography";

import { Grid } from '@mui/material';
import { useState } from 'react';
import { themeAbout, collectionAbout, pagingElementHeight } from './constant';
import { aboutCollection, aboutTheme, background } from './assets/image';
import { getNumberOfDiscordMember, getTwitterInfo, getWLStatus } from "./api";
import { discordInviteCode, twitterHandle, instagramName, teams, backgroundColor, textColor } from "./constant";
import { json } from 'react-router-dom';
var callAPI = false;
function App() {
  const [twitterFollowersCount, setTwitterFollowerCount] = useState(0)
  const [discordMemberCount, setDiscordMemberCount] = useState(0)
  const [supply, setSupply] = useState(0)
  const [whiteListCount, setWhiteListCount] = useState(0)

  //approximate_member_count
  useEffect(() => {
    if (callAPI) {
      getNumberOfDiscordMember(discordInviteCode)
        .then(res => {
          //console.log(res.data["approximate_member_count"])
          setDiscordMemberCount(res.data["approximate_member_count"])
        })
        .catch(err => {
          alert(err)
        })
      getWLStatus()
        .then(res => {

        })
        .catch(err => {
          alert(err)
        })



    }
  }, []);
  return (
    <div className="App" style={{
      //backgroundImage: `url(${background})`,
      backgroundColor: backgroundColor,
      backgroundPosition: 'center',
    }}>
      <Header></Header>

      <div style={{ height: "500px" }}>


      </div>
      <div id="#disclaimer">

      </div>

      <div id="#aboutTheme" className='Text-and-image'>
        <TextInBox
          width='40%'
          height={pagingElementHeight}
          paddingLeft='80px'
          paddingTop='40px'
          paddingRight='80px'
          fontSize='1.2vw'
          textContent={themeAbout}
        />

        <img src={aboutTheme} height={pagingElementHeight} m width="40%" className='About-image' />

      </div>


      <div id="#aboutCollection" className='Text-and-image'>
        <img src={aboutCollection} height={pagingElementHeight} width="40%" className='About-image' />

        <TextInBox
          width='40%'
          height={pagingElementHeight}
          paddingLeft='80px'
          paddingTop='70px'
          paddingRight='80px'
          fontSize='1.5vw'
          textContent={collectionAbout}
        />
      </div>
      <div id="stat">
        <Statistic
          height='100'
          width='200'
          title='Number of discord member'
          numericalString={discordMemberCount}
        />

      </div>
      <div id="sneakPeeks">

      </div>
      <div id="aboutTeam">

      </div>
      <div id="otherInfo" className='Team-list'>
        {
          <Grid container spacing={3} columns={{ xs: 2, sm: 4, md: 12 }}>
            {Array.from(teams).map((member, index) => (
              <Grid item xs={1} sm={3} md={3} key={index}>
                <ImageCard
                  profile={member.profile}
                  nickname={member.nickname}
                  title={member.title}
                />
              </Grid>
            ))}
          </Grid>
        }


      </div>
    </div>
  );
}

export default App;
