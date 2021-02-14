import React from "react";
import HomeDirectory from './../com/directory';

const Home = (props) => {
  console.log(props)
  return (
    <div className="home-page">
    <HomeDirectory />
    </div>
  );
};

export default Home;
