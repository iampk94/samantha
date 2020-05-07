import React from "react";
import { Link } from "gatsby";
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className="menuHeader">
        <Link to="/" className="menuLogo">
          <img src="/assest/logo.svg" alt="logo" title="Main-Logo" />
        </Link>
        <nav className="navLink">
          <button className="navBtnToggle">toggle bar button</button>
          <ul className="navLinkList">
            <li>
              <Link to="/about" className="navLink" activeClassName="active">
                About
              </Link>
            </li>

            <li>
              <Link to="/movies" className="navLink" activeClassName="active">
                Movies
              </Link>
            </li>

            <li>
              <Link to="/awards" className="navLink" activeClassName="active">
                Awards
              </Link>
            </li>

            <li>
              <Link to="/gallery" className="navLink" activeClassName="active">
                Gallery
              </Link>
            </li>

            <li>
              <Link to="about-me" className="navLink" activeClassName="active">
                Developer Info
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
