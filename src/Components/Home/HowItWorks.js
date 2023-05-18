import "../Home/howItWorks.css";
import heart from "../images/icon.png"

function HowItWorks() {
  return (
    <div className="howitworksall">
      <div className="HowitWorks">
        <div>
          <h1 className="howitworks-title">How It Works</h1>
        </div>
        <div className="howitworks-stepsall">
          <div className="howitworks-steps">
            <img className="howitworksicon" src={heart} alt=""></img>
            <h2>desc</h2>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia
              ex id est semper, in efficitur nulla convallis. Duis euismod,
              mauris ac pharetra eleifend,
            </p>
          </div>
          <div className="howitworks-steps">
            <img className="howitworksicon" src={heart} alt=""></img>
            <h2>desc</h2>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia
              ex id est semper, in efficitur nulla convallis. Duis euismod,
              mauris ac pharetra eleifend,
            </p>
          </div>
          <div className="howitworks-steps">
            <img className="howitworksicon" src={heart} alt=""></img>
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
