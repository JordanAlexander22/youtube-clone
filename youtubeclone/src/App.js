import React from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import { SearchBar, VideoDetail } from "./components"; // DRY code

class App extends React.Component {
  state= {
    video: [],
    selectedVideo: null,
  }
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 7,
        key: "AIzaSyC5S-TRIfN9oPjTkXolln8c-qtN6qx43mA",
        q: searchTerm,
      }
    });
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    
  };

  render() {
    const {selectedVideo}= this.state; //deconstructor
    return (
      <Grid style={{ justify: "center" }} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              {/* VIDEO LIST */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
