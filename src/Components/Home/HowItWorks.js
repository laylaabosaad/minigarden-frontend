import "../Home/howItWorks.css";

import take from "../images/take.png"
import care from "../images/care.png"
import choose from "../images/choose.png"

function HowItWorks() {
  return (
    <div className="howitworksall">
      <div className="HowitWorks">
        <div>
          <h1 className="howitworks-title">How It Works</h1>
        </div>
        <div className="howitworks-stepsall">
          <div className="howitworks-steps">
            <img className="howitworksicon" src={choose} alt=""></img>
            <h2>desc</h2>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia
              ex id est semper, in efficitur nulla convallis. Duis euismod,
              mauris ac pharetra eleifend,
            </p>
          </div>
          <div className="howitworks-steps">
            <img className="howitworksicon" src={take} alt=""></img>
            <h2>desc</h2>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia
              ex id est semper, in efficitur nulla convallis. Duis euismod,
              mauris ac pharetra eleifend,
            </p>
          </div>
          <div className="howitworks-steps">
            <img className="howitworksicon" src={care} alt=""></img>
            <h2>desc</h2>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia
              ex id est semper, in efficitur nulla convallis. Duis euismod,
              mauris ac pharetra eleifend,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
