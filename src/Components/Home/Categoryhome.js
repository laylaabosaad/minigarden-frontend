import "../Home/Categoryhome.css";
import open from "../images/open.png";
import closed from "../images/closed.png";
import { Link } from "react-router-dom";
function Categoryhome() {
    return (
      <div className="categoryhome-home-all">
        <h1 className="shopbyCategory">Shop By Category</h1>
        <div className="categoryhome-home">
          <div className="categoryhome-Closed">
            <Link to="/Products">
              <h1>Closed Terrarium</h1>
            </Link>

            <img className="categoryhome-Closedimg" src={closed}></img>
          </div>
          <div className="categoryhome-both">
            <div className="categoryhome-Open">
              <h1>Open Terrarium</h1>
              <img className="categoryhome-Openimg" src={open}></img>
            </div>
            <div className="categoryhome-Open">
              <h1>Solo Products</h1>
              <img className="categoryhome-Openimg" src={open}></img>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Categoryhome;
