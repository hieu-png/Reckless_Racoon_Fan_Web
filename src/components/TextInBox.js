import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import textBox from "../assets/image/textBox.png"
import React from 'react';
import Typography from "@mui/material/Typography";
import { textColor } from "../constant";
export default function TextInBox(props) {


    return (
        <div
            style={{
                width: props.width,
                height: props.height,
                backgroundImage: `url(${textBox})`,
                backgroundSize: '100% 100%',
                flex: 1,
                alignItems:'center',
                alignContent:'center',
                margin:'auto'
            }}
        >
            <Typography variant="h8"
                component="div"
                sx={{
                    width: props.textWidth,
                    paddingLeft: props.paddingLeft,
                    paddingTop: props.paddingTop,
                    paddingRight: props.paddingRight,
                    fontFamily: "NormalText",
                    textAlign: 'center', 
                    margin:'auto',
                    fontSize: props.fontSize,
                    color: textColor,
                }}>

                {props.textContent}
            </Typography>
        </div>
    );
}
