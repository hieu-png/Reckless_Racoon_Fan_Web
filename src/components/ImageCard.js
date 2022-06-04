import { useEffect, useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import React from 'react';
import "./ImageCard.css";
import { Link } from "react-router-dom";
import { glasstint } from "../assets/image";
import { textAlign } from "@mui/system";
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
            <img src={props.profile} height={ITEM_WIDTH} width={ITEM_WIDTH} style={{
                borderRadius: '10%'
            }} />
            {/* <img src={glasstint} height={ITEM_WIDTH} width={ITEM_WIDTH} style={{
                position: "absolute",
                borderRadius: '10%',
                top: ITEM_WIDTH,
            }} /> */}
            <Typography variant="h5"
                component="div" sx={{
                    width: ITEM_WIDTH,
                    textAlign: 'center',
                    fontWeight: 'bold'
                }}>
                {props.nickname}
            </Typography>
            <Typography variant="h6"
                component="div" sx={{ width: ITEM_WIDTH, textAlign: 'center' }}>

                {props.title}
            </Typography>
        </div>
    );
}
