import React from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import { SearchBar, VideoDetail, VideoList } from "./components"; // DRY code

class App extends React.Component {
  state= {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount(){
    this.handleSubmit('best web frameworks of 2020')  // implented lifecycle method so that screen is never blanke and always something is running
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 6,
        key: "AIzaSyC5S-TRIfN9oPjTkXolln8c-qtN6qx43mA",
        q: searchTerm,
      }
    });
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    
  };

  render() {
    const {selectedVideo, videos}= this.state; //deconstructor
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
               < VideoList videos={videos} onVideoSelect= {this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
