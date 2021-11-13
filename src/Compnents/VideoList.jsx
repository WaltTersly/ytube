import React from "react";
import VideoItem from "./VideoItem";


function VideoList(props) {
    // passing state as props
        // props.videos

    // mapping through each video indeividually

    const renderVideos = props.videos.map((video) => {
        return (
            <VideoItem key={video.id.videoId} onVideoSelect={props.onVideoSelect} video= {video}/>
        );
    });

    return(
        <div className= "ui relaxed divided list">
           {renderVideos}
        </div>
    );
}

export default VideoList;