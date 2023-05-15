
import "./video.css";
import video from "../images/video.mp4"
import { useState } from "react";

const Headervideo = () => {

    // const [isPlaying, setIsPlaying] = useState(false);

    // const togglePlay = () => {
    //   setIsPlaying(!isPlaying);
    // };
  return (
    <div className="landingpage">
      <video src={video} autoPlay muted loop class="video-bg" />
      <div className="bg-overlay">
        {/* <div className="audio">
          <audio src="/path/to/audio/file.mp3" onClick={togglePlay} controls />
        </div> */}
      </div>
    </div>
  );
};

export default Headervideo;
