import "./video.css";
import video from "../images/video.mp4";
import { useState, useRef } from "react";
import audio from "../images/audio.wav";
import { MdHeadset } from "react-icons/md";

const Headervideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="landingpage">
      <video src={video} autoPlay muted loop className="video-bg" />
      <div className="bg-overlay">
        <div className="audio">
          <h1>Bringing a Piece of Nature indoors</h1>
          <p>
            Discover the enchanting world of miniature ecosystems and experience
            the mesmerizing beauty of nature. Click on the headset icon for an
            immersive experience.
          </p>
          <div className="audio-player">
            <MdHeadset
              className="headset"
              size={70}
              color={isPlaying ? "rgb(65, 102, 60)" : "white"}
              onClick={togglePlay}
            />
            <audio className="audio-style" src={audio} ref={audioRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headervideo;
