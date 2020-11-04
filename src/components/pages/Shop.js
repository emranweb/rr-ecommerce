import React from "react";
import ShopData from "../api/Data";
import CollectionPreview from "../helper/CollectionPreview";

class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      collection: ShopData,
    };
  }

  render() {
    return (
      <div>
        {this.state.collection.map((item) => (
          <CollectionPreview
            key={item.id}
            title={item.title}
            items={item.items}
          />
        ))}
      </div>
    );
  }
}

export default Shop;
