import {createSlice} from "@reduxjs/toolkit";


const directory = createSlice({
    name:"directory",
    initialState:[
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
          ]
    
})

export default directory.reducer;