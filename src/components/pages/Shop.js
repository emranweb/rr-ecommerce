import React from "react";
import CollectionPreview from "../helper/CollectionPreview";
import { connect } from "react-redux";
import selectShop from "./../../redux/shopSelect";
import {Router} from "react-router-dom";

function Shop(props) {
  console.log(props)
  return (
    <div>
      {props.shop.map((item) => (
         <Router  component={()=>   <CollectionPreview key={item.id} title={item.title} items={item.items}/> } />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  shop: selectShop(state),
});

export default connect(mapStateToProps)(Shop);
