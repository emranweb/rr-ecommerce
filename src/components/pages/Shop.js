import React from "react";
import CollectionPreview from "../helper/CollectionPreview";
import { connect } from "react-redux";
import selectShop from "./../../redux/shopSelect";

function Shop(props) {
  return (
    <div>
      {props.shop.map((item) => (
        <CollectionPreview
          key={item.id}
          title={item.title}
          items={item.items}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  shop: selectShop(state),
});

export default connect(mapStateToProps)(Shop);
