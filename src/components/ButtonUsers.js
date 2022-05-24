import React from "react";
import './ButtonUsers.css';

export const ButtonUsers = (props) => {
    return (
        <button className="btn" onClick={props.click}>{props.text}</button>
    )
}
