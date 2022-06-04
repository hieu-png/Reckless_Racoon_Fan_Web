import './App.css';
import React, { useEffect, useState } from 'react';
import { Header, TextInBox, ImageCard, Statistic, SectionTitle } from './components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Grid, AccordionDetails, AccordionSummary, Accordion, Typography, ImageList, ImageListItem } from '@mui/material';
import { themeAbout, collectionAbout, pagingElementHeight } from './constant';
import { aboutCollection, aboutTheme1, background } from './assets/image';
import { getNumberOfDiscordMember, getTwitterInfo, getWLStatus } from "./api";
import { sneakPeeksList, images, updateImage } from "./assets/sneakpeeks/"
import { discordInviteCode, twitterHandle, instagramName, teams, backgroundColor, textColor, faq, titleColor } from "./constant";
var callAPI = false;
function App() {
  const [twitterFollowersCount, setTwitterFollowerCount] = useState(241300)
  const [discordMemberCount, setDiscordMemberCount] = useState(111390)
  const [supply, setSupply] = useState(8888)
  const [whiteListCount, setWhiteListCount] = useState(5751)

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
          console.log(res.data[162]['whitelistSpotsTaken'])
        })
        .catch(err => {
          alert(err)
        })
    }
  }, []);

  return (
    <div className="App" style={{
      backgroundColor: backgroundColor,
      backgroundPosition: 'center',
    }}>
      <Header></Header>
      <div id="#disclaimer"
        style={{
          backgroundImage: `url(${aboutTheme1})`,
          height: '1000px',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'relative',

        }}
      >

      </div>
      <SectionTitle
        title='This is a fan-made website and not an official website'
        variant='h3'
        font='Franken'
      />
      <SectionTitle
        title='About'
      />
      <div id="#aboutTheme" className='Text-and-image Section'>
        <TextInBox
          width='40%'
          height={pagingElementHeight}
          paddingLeft='160px'
          paddingTop='50px'
          paddingRight='160px'
          fontSize='3vw'

          textContent={themeAbout}
        />


      </div>


      <div id="#aboutCollection" className='Text-and-image Section'>
        <img src={aboutCollection} height={pagingElementHeight} width="40%" className='About-image' />
        <Typography
          display="inline"
          sx={{
            flexGrow: 1,
            fontFamily: "Franken",
            color: titleColor,
            fontSize: '1.5vw',

          }}
        >{collectionAbout}
        </Typography>

      </div>
      <SectionTitle
        title='Sneak peeks'
      />
      <div id="sneakPeeks" className="Section">
        <ImageList variant="masonry" cols={3} gap={8}>
          {sneakPeeksList.map((image) => (
            <ImageListItem key={image}>
              <img
                src={`${image}?w=248&fit=crop&auto=format`}
                srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <SectionTitle
        title='Statistic'
      />
      <div id="stat" className='Section'>

        <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center"
          columnSpacing={{ xs: 3, sm: 3, md: 3 }}
          spacing={4}>
          <Grid item xs={6} sm={3} md={3} >
            <Statistic
              height='120'
              width='200'
              title='Discord'
              numericalString={discordMemberCount}
              flavorText='members'
            />
          </Grid>
          <Grid item xs={6} sm={3} md={3} >
            <Statistic
              height='120'
              width='200'
              title='Twitter'
              numericalString={twitterFollowersCount}
              flavorText='followers'

            />
          </Grid>
          <Grid item xs={6} sm={3} md={3} >
            <Statistic
              height='120'
              width='200'
              title='Supply'
              numericalString={supply}
              flavorText='racoons'

            />
          </Grid>
          <Grid item xs={6} sm={3} md={3} >
            <Statistic
              height='120'
              width='200'
              title='Whitelist'
              numericalString={whiteListCount}
              flavorText='whitelisted'

            />
          </Grid>
        </Grid>


      </div>
      <SectionTitle
        title='Teams'
      />
      <div id="aboutTeam" className='Team-list Section'>


        <Grid
          container
          spacing={2}
          columns={{ xs: 2, sm: 4, md: 12 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
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



      </div>
      <SectionTitle
        title='FAQ'
      />
      <div id="faq" className="Section Faq">
        {faq.map(item => {
          return (
            <Accordion sx={{
              
            }}>

              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  backgroundColor: `${backgroundColor}`
                }}
              >
                <Typography
                  sx={{
                    flexGrow: 1,
                    fontFamily: "Franken",
                    color: titleColor,
                    fontSize: '24px',
                    boxShadow: 0,
                    fontWeight: 'bold'

                  }}
                >{item.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  backgroundColor: `${backgroundColor}`
                }}
              >
                <Typography
                  sx={{
                    flexGrow: 1,
                    fontFamily: "Franken",
                    color: titleColor,
                    fontSize: '22px'

                  }}
                >{item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </div>
    </div >
  );
}

export default App;
