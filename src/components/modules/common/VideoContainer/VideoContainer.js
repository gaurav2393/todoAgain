import React from 'react';

var VideoContainer = (props) => {
    return (
        <video width="452" height="346" controls>
            <source src="/videos/introduction.mp4" type="video/mp4" />
            Your browser does not support video.
        </video>
    )
}

export default VideoContainer;
