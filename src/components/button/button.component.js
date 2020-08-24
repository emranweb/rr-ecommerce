import React from 'react';
import "./button.style.scss";


function Button (props){
    return(
    <button type={props.type} onClick={props.event} className="cutom-button">{props.children}</button>
    )
}

export default Button;