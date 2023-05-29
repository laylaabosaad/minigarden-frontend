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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lacinia ex id est semper, in efficitur nulla convallis. Duis
            euismod,
          </p>
          <div className="audio-player">
            <MdHeadset
              size={100}
              color={isPlaying ? "green" : "gray"}
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
