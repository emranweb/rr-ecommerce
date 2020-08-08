import React from 'react';
import "./menu-item.style.scss";


function MenuItem (props){
    return (
            <div className="menu-item" style={{backgroundImage:`url(${props.imageUrl})`}}>
                <div className="content">
                <h3 className="title">{props.title}</h3>
                <span className="sub-title">SHOP NOW</span>
                </div>
            </div>
    )
}

export default MenuItem;