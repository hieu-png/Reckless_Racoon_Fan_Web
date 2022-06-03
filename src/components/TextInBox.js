import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import textBox from "../assets/image/textBox.png"
import React from 'react';

export default function TextInBox( props ) {


    return (
        <div
            style={{
                    width: props.width,
                    height: props.height,
                    backgroundImage: `url(${textBox})`,
                    backgroundSize: '100% 100%',
                    flex:1
                }}
        >
            <p style={{
                paddingLeft: props.paddingLeft,
                paddingTop: props.paddingTop,
                paddingRight: props.paddingRight,
                fontFamily: "Franken",
                fontSize: props.fontSize,
                color:'white',
                flex:1
            }}
            >
                {props.textContent}
            </p>
        </div>
    );
}
