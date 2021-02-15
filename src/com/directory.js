import React, { useState } from "react";
import Item from "./item";

const DirectoryData = [
  {
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    id: 1,
    linkUrl: "hats",
  },
  {
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    id: 2,
    linkUrl: "jackets",
  },
  {
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    id: 3,
    linkUrl: "sneakers",
  },
  {
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: "large",
    id: 4,
    linkUrl: "womens",
  }
];

const HomeDirectory = () => {
  const [data, setData] = useState(DirectoryData);

  return (
    <div className="directory-menu">
      {data.map((item) => {
        return <Item key={item.id} title={item.title} linkUrl={item.linkUrl}/>;
      })}
    </div>
  );
};

export default HomeDirectory;
