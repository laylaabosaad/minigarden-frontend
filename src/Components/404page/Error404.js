import { Link } from "react-router-dom";
import "../404page/error.css"

function Error404() {
  return (
    <div className="page404-container">
      <h1 className="page404-title">404 Page Not Found</h1>
      <p className="page404-description">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/">
      
        <button className="submit-btn">Home</button>
      </Link>
    </div>
  );
}

export default Error404