import React from "react";

import Collection from "../com/collection";
import Container from "@material-ui/core/Container";
import {useSelector} from "react-redux";

const Shop = () => {
 const shop_data = useSelector(state=>state.shop);
 
  return (
    <div className="shop-page">
      <Container maxWidth="lg">
        {shop_data.map((item) => {
          return <Collection key={item.id} {...item} />;
        })}
      </Container>
    </div>
  );
};

export default Shop;
