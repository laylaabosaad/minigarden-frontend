import "../Home/Categoryhome.css";
import open from "../images/open.png";
import closed from "../images/closed.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Categoryhome() {
  let navigate=useNavigate()
    return (
      <div className="categoryhome-home-all">
        <h1 className="shopbyCategory">Shop By Category</h1>
        <div className="categoryhome-home">
          <div className="categoryhome-both">
            <div className="categoryhome-Open">
              <Link to="/Products/open">
                <h1>Open Terrarium</h1>
              </Link>
              <img className="categoryhome-Openimg" src={open}></img>
            </div>
            <div className="categoryhome-Open">
              <button
                onClick={() =>
                  navigate("/products", { state: { id: "solo id" } })
                }
              >
                <h1>Solo Products</h1>
              </button>
              <img className="categoryhome-Openimg" src={open}></img>
            </div>
          </div>
          <div className="categoryhome-Closed">
            <button
              onClick={() =>
                navigate("/products", { state: { id: "closed id" } })
              }
            >
              <h1>Closed Terrarium</h1>
            </button>

            <img className="categoryhome-Closedimg" src={closed}></img>
          </div>
        </div>
      </div>
    );
}

export default Categoryhome;
