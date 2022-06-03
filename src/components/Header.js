import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import discord_big_outline from "../assets/icon/discord_big_outline.svg";
import twitter_big_outline from "../assets/icon/twitter_big_outline.svg";
import instagram_big_outline from "../assets/icon/instagram_big_outline.svg";
import { discordInviteCode, twitterHandle, instagramName } from "../constant";
import { primaryColor } from "../constant";
export default function Header() {
    return (
        <AppBar position="static" >
            <Toolbar>

                {/* The Typography component applies 
           default font weights and sizes */}


                <Typography variant="h6"
                    component="div" sx={{ flexGrow: 1 }}>
                    
                </Typography>
                {discordInviteCode !== "" &&
                    <Button href={`https://discord.com/invite/${discordInviteCode}`}
                        target="_blank" rel="noopener noreferrer"
                        color="inherit">
                        <img src={discord_big_outline} alt="join discord server" />
                    </Button>}
                    
                {twitterHandle !== "" &&
                    <Button href={`https://twitter.com/${twitterHandle}`}
                        target="_blank" rel="noopener noreferrer"
                        color="inherit">
                        <img src={twitter_big_outline} alt="open twitter Page" />
                    </Button>}

                {instagramName !== "" && 
                <Button href={`https://www.instagram.com/${instagramName}`} 
                        target="_blank" rel="noopener noreferrer"
                        color="inherit">
                            <img src={instagram_big_outline} alt="open instagram page" />
                </Button>}
            </Toolbar>
        </AppBar>
    );
} 