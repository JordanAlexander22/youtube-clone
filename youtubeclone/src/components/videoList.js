import React from "react";
//import { Grid } from "@material-ui/core";
import VideoItem from "./videoItem";


//mapping through array of videos 
const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect= {onVideoSelect} key={id} video={video} />);
  return (
    <div className='ui relaxed divided list' style={{cursor: "pointer"}}>
    <strong>{listOfVideos}</strong>
    </div>
  )
};

export default VideoList;
