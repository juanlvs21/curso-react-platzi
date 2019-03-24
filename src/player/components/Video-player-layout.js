import React from 'react';
import './Video-player-layout.css';

function VideoPlayerLayout(props)  {
    return(
        <div className="VideoPlayer" ref={props.setRef}>
            {props.children}
        </div>
    ) 
}

export default VideoPlayerLayout;
