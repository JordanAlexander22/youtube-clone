import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./videoItem";


//mapping through array of videos 
const VideoList = ({ videos }) => {
  const listOfVideos = videos.map((video, id) => <VideoItem key={id} video={video} />);
  return listOfVideos;
};

export default VideoList;
