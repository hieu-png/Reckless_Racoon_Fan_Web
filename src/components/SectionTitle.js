import React from 'react';
import Typography from "@mui/material/Typography";
import { titleColor, primaryColor } from "../constant";
export default function SectionTitle(props) {

    return (
        <Typography
            variant={props.variant != undefined ? props.variant : "h1"}
            component="div"
            sx={{
                flexGrow: 1,
                fontFamily:  props.font != undefined ? props.font : "TitleText" ,
                color: props.fontColor != undefined ? props.fontColor :  titleColor ,
                textAlign: 'center', 
                /* position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)', */
            }}>
            {props.title}
        </Typography>
    );
}
