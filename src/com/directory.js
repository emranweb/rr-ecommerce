import React from "react";
import Item from "./item";
import { useSelector } from "react-redux";


const HomeDirectory = () => {
  const directoryData = useSelector(state=>state.directory)
  return (
    <div className="directory-menu">
      {directoryData.map((item) => {
        return <Item key={item.id} title={item.title} linkUrl={item.linkUrl}/>;
      })}
    </div>
  );
};

export default HomeDirectory;
