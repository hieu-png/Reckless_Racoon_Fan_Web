import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import React from 'react';
import Typography from "@mui/material/Typography";
import { textColor, primaryColor } from "../constant";
export default function Statistic(props) {


    return (
        <div
            style={{
                width: props.width,
                height: props.height,
                backgroundColor: primaryColor,
                backgroundSize: '100% 100%',
                flex: 1
            }}
        >

            <Typography variant="h5"
                component="div" sx={{
                    flexGrow: 1,
                    fontFamily: "Franken",
                    fontSize: '2vw',
                    color: textColor,
                }}>
                {props.title}
            </Typography>
            <Typography variant="h6"
                component="div" sx={{
                    flexGrow: 1,
                    fontFamily: "Franken",
                    fontSize: '1.2vw',
                    color: textColor,
                }}>
                {props.numericalString}
            </Typography>
        </div>
    );
}
