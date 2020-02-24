import React from "react";
//import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import { SearchBar, VideoDetail, VideoList } from "./components"; // DRY code

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.handleSubmit("best web frameworks of 2020"); // implented lifecycle method so that screen is never blanke and always something is running
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async searchTerm => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 6,
        key: "AIzaSyC5S-TRIfN9oPjTkXolln8c-qtN6qx43mA",
        q: searchTerm
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  render() {
    const { selectedVideo, videos } = this.state; //deconstructor
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.handleSubmit} />
        <div className="ui stackable two column grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
