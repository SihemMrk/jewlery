import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <div className="link">
          <Link className="links" to="/">
            HomePage
          </Link>
          <Link className="links" to="/bijoux">
            Bijoux
          </Link>
          <Link className="links" to="/sacs">
            Sacs
          </Link>
          <Link className="links" to="/chales">
            Châles
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
