import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { category } from "../redux/shop";

const CategoryPage = () => {
  const { shopId } = useParams();
  const disptch = useDispatch();
  const categoyState = useSelector((state) => state.shop);

  const categoryItems = categoyState
    .filter((item) => item.routeName === shopId)
    .map((item) => item.items);


  return (
    <div>
      {categoryItems[0]?categoryItems[0].map((item) => {
       return(
           <div key={item.id}>
              <h1>{item.name}</h1>
           </div>
       )
      }):<h1>Category Not Found</h1>}
    </div>
  );
};

export default CategoryPage;
