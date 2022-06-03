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

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                {/*Inside the IconButton, we  
           can render various icons*/}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu" 
                    sx={{ mr: 2 }}
                >
                </IconButton>
                {/* The Typography component applies 
           default font weights and sizes */}


                <Typography variant="h6"
                    component="div" sx={{ flexGrow: 1 }}>
                    
                </Typography>
                <Button color="inherit"><img src={discord_big_outline} className="Go to discord" alt="logo"/></Button>
                
                {instagramName !== "" && <Button color="inherit"><img src={instagram_big_outline} className="Go to install" alt="logo" /></Button>}
            </Toolbar> s
        </AppBar>
    );
} 