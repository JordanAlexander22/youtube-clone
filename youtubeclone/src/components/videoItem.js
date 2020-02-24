import React from "react";
import './videoItem.css';

//import { Grid, Paper, Typography} from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item-item">
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <h4 className="header">{video.snippet.title}</h4>
      </div>
    </div>
  );
};

export default VideoItem;
