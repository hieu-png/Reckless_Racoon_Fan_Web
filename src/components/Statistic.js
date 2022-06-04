import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import React from 'react';
import Typography from "@mui/material/Typography";
import { textColor, primaryColor } from "../constant";
import { cardBox } from "../assets/image";
export default function Statistic(props) {

    const numberFormat = (number) => {
        var stringNum = "" + number
        if (stringNum.length >= 5) {
            stringNum = stringNum.slice(0, -3)
            stringNum += 'k'
        }
        return stringNum
    }
    return (
        <div
            style={{
                width: props.width,
                height: props.height,
                backgroundImage: `url(${cardBox})`,
                backgroundSize: '100% 100%',

                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography variant="h5"
                component="div" sx={{
                    flexGrow: 1,
                    fontFamily: "Franken",
                    fontSize: '2.1vw',
                    color: '#4E3D36',
                    textAlign: 'center'
                }}>
                {props.title}
            </Typography>
            <Typography variant="h6"
                component="div" sx={{
                    flexGrow: 1,
                    fontFamily: "Franken",
                    fontSize: '2vw',
                    color: '#242424',
                    textAlign: 'center'

                }}>
                {numberFormat(props.numericalString) + ' ' + props.flavorText}
            </Typography>
        </div>
    );
}
