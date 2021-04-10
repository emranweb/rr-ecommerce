import React from "react";
import Container from "@material-ui/core/Container";
import ShopWrapper from './../com/shopwrapper';
import { Route, Switch, useRouteMatch} from "react-router-dom";
import CategoryPage from "./categorypage";



const Shop = () => {
  const {path, url} = useRouteMatch();

  return (
    <div className="shop-page">
      <Container maxWidth="lg">
         <Switch>
           <Route exact  path={path} component={ShopWrapper} />
           <Route  path={`${path}/:shopId`} component={CategoryPage} /> 
         </Switch>
         
      </Container>
    </div>
  );
};

export default Shop;
