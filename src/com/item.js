import React from "react";
import {withRouter} from "react-router-dom";

const Item = ({ title, linkUrl, history, match }) => {

  return (
    <div className="item" onClick={()=>history.push(`${match.url}${linkUrl}`)}>
      <h1 className="item-title">{title}</h1>
      <h4>Shop Now</h4>
    </div>
  );
};

export default withRouter(Item);
