import React, { useState, useRef } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        loop
        onClick={handleVideoPress}
        ref={videoRef}
        className="video_player"
        src="http://techslides.com/demos/sample-videos/small.ogv"
      ></video>
      <VideoFooter />
      <VideoSidebar />
    </div>
  );
}

export default Video;
