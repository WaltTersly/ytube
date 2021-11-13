import React from "react";


function VideoDetails(props) {
    
    const videosp = props.video;
    // checks if there is a selected video
    if (!videosp) {
        return(
            <div>Loadinmg</div>
        );
    }

    const vidsource = `https://www.youtube.com/embed/${videosp.id.videoId}`;


    return(

        <div>
            <div className="ui embed">
                <iframe src= {vidsource} title="videoplayer">

                </iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">
                    {videosp.snippet.title}
                </h4>
                <p>
                    {videosp.snippet.description}
                </p>
            </div>
        </div>
    );
}

export default VideoDetails;