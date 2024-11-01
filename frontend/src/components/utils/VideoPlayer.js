import React from "react";

const VideoPlayer = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className={` video-container`}>
      <iframe
        width="500"
        height="280"
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
