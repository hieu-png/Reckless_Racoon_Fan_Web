import { useEffect, useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import React from 'react';
import "./ImageCard.css";
import { Link } from "react-router-dom";
import { glasstint } from "../assets/image";
const ITEM_WIDTH = 200
const CARD_HEIGHT = 300

export default function ImageCard(props) {






    /*
        {
            profile: "",
            nickname: "",
            title: "",
            description: "",
            twitterHandle: ""
        }
    */
    return (
        <div className="card-container" >
            <img src={props.profile} height={ITEM_WIDTH} width = {ITEM_WIDTH} style={{
                 borderRadius:'10%'
            }}/>
            {/* <img src={glasstint} height={ITEM_WIDTH} width={ITEM_WIDTH} style={{
                position: "absolute",
                borderRadius: '10%',
                top: ITEM_WIDTH,
            }} /> */}
            <Typography variant="h5"
                component="div" sx={{ flexGrow: 1 }}>
            {props.nickname}
            </Typography>
            <Typography variant="h6"
                component="div" sx={{ flexGrow: 1 }}>
                {props.title}
            </Typography>
        </div>
    );
}
