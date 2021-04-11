import React from "react";
import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";
import CategoryItem from "../com/categoryItem";

const CategoryPage = () => {
  const { shopId } = useParams();
  const categoyState = useSelector((state) => state.shop);

  const categoryItems = categoyState
    .filter((item) => item.routeName === shopId)
    .map((item) => item.items);


  return (
    <div className="caterogy-wrapper">
      {categoryItems[0]?categoryItems[0].map((item) => {
       return(
           <CategoryItem key={item.id} data={item} />
       )
      }):<h1>Category Not Found</h1>}
    </div>
  );
};

export default CategoryPage;
