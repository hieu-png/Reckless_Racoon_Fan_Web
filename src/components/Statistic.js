import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import React from 'react';
import Typography from "@mui/material/Typography";
import { textColor, primaryColor } from "../constant";
import { cardBox } from "../assets/image";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

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
                backgroundSize: '100% 101%',

                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto'
            }}
        >
            <Typography variant="h5"
                component="div" sx={{
                    flexGrow: 1,
                    fontFamily: "NormalText",
                    fontSize: '2.1vw',
                    color: '#4E3D36',
                    textAlign: 'center'
                }}>
                {props.title}
            </Typography>
           {/*  */}
           <div style={{
               flexDirection: 'row'
           }}>
                
                <Typography variant="h6"
                    component="div" sx={{
                        flexGrow: 1,
                        fontFamily: "NormalText",
                        fontSize: '2vw',
                        color: '#242424',
                        textAlign: 'center'

                    }}>
                    <VisibilitySensor partialVisibility >
                        {({ isVisible }) => (
                            <div style={{ height: 100 }}>
                                {isVisible ? <CountUp end={props.numericalString} /> : null}{' '+props.flavorText}
                            </div>
                        )}
                    </VisibilitySensor>
                </Typography>
               </div>

        </div>
    );
}
