import "../Home/Categoryhome.css";
import open from "../images/open main.png";
import closed from "../images/closed.png";
import sol from "../images/sol.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Categoryhome() {
  let navigate = useNavigate();
  return (
    <div className="categoryhome-home-all">
      <h1 className="shopbyCategory">Shop By Category</h1>
      <div className="categoryhome-home">
        <div className="categoryhome-both">
          <div className="categoryhome-Open">
            <Link
              to="/Products"
              state={{ static_category: "64634d99b6db9bd04a4e1676" }}
            >
              <h1>Open Terrarium</h1>

              <img className="categoryhome-Openimg" src={open}></img>
            </Link>
          </div>
          <div className="categoryhome-Open">
            {/* <button
                onClick={() =>
                  navigate("/products", { state: { id: "solo id" } })
                }
              >
                <h1>Solo Products</h1>
              </button> */}
            <Link
              to="/Products"
              state={{ static_category: "64634da6b6db9bd04a4e1678" }}
            >
              <h1>Solo Products</h1>

              <img className="categoryhome-Soloimg" src={sol}></img>
            </Link>
          </div>
        </div>
        <div className="categoryhome-Closed">
          <Link
            to="/Products"
            state={{ static_category: "64634d90b6db9bd04a4e1674" }}
          >
            <h1>Closed Terrarium</h1>

            <img className="categoryhome-Closedimg" src={closed}></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categoryhome;
