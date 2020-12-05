import React from "react";
import MenuItem from "./MenuItem";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import {selectDirecotry} from "../../redux/directoroySelect";

function Directory(props) {
  return (
    <div className="directory-container">
      <Grid container spacing={2}>
        {props.directory.map((item) => (
          <Grid item xs={4} key={item.title}>
            <MenuItem title={item.title} imageUrl={item.imageUrl} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

const mapsStateToProps = (state) => ({
  directory:  selectDirecotry(state),
});

export default connect(mapsStateToProps)(Directory);
