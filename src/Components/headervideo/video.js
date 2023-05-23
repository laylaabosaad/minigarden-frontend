
import "./video.css";
import video from "../images/video.mp4"
import { useState } from "react";
import audio from "../images/audio.wav"

const Headervideo = () => {

    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
      setIsPlaying(!isPlaying);
    };
  return (
    <div className="landingpage">
      <video src={video} autoPlay muted loop className="video-bg" />
      <div className="bg-overlay">
        <div className="audio">
          <h1>Bringing a Piece of Nature indoors</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lacinia ex id est semper, in efficitur nulla convallis. Duis
            euismod,
          </p>
          <audio
            className={`audio-style green-audio`}
            src={audio}
            onClick={togglePlay}
            controls
          >
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
};

export default Headervideo;
