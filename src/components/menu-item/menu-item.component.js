import React from 'react';
import "./menu-item.style.scss";
import {withRouter} from "react-router-dom";


function MenuItem (props){
    return (
            <div className="menu-item" style={{backgroundImage:`url(${props.imageUrl})`}} onClick={()=>props.history.push(`${props.match.url}${props.title}`)}>
                <div className="content">
                   <h3 className="title">{props.title}</h3>
                   <span className="sub-title">SHOP NOW</span>
                </div>
            </div>
    )
}

export default withRouter(MenuItem);