import React from "react";
import './VideoItem.css';

function VideoItem(props) {
    
    const source = props.video.snippet.thumbnails.medium.url;
    const title = props.video.snippet.title;
    //this variable is used to indicate the specific video object from the list
    const video = props.video;

    return(
        <div onClick={()=> {props.onVideoSelect(video)}} className="video-item item">
            <img className="ui image" src = {source} alt="girls" />
            <div className="content">
                <div className="header">
                    {title}
                </div>
            </div>
        </div>
    );
}

export default VideoItem;