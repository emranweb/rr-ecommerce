import React from "react";
import MenuItem from "./MenuItem";
import Grid from "@material-ui/core/Grid";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      section: [
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
          linkUrl: "",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "",
        },
        {
          title: "winter",
          imageUrl: "https://i.ibb.co/R70vBrQ/winter.png",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-container">
        <Grid container spacing={2}>
          {this.state.section.map((item) => (
            <Grid item xs={4} key={item.title}>
              <MenuItem
                title={item.title}
                imageUrl={item.imageUrl}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Directory;