import React from 'react';
import {Paper, Typography} from '@material-ui/core'

const VideoDetail = ({video}) => {
    if(!video) return <div>Loading..</div>
    console.log(video.id.videoId);
    const videosrc= `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <React.Fragment>
            <Paper elevation= {6} style={{height: '70%'}}>
                <iframe frameBorder='0' height= '100%' width='100%' title="video player" src={videosrc}/>
            </Paper>
            <Paper elevation = {6} style={{padding: '1rem'}}>

            </Paper>
        </React.Fragment>
    )
};

export default VideoDetail;