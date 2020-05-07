import React from "react";
import { Link } from "gatsby";

export default function Footer(props) {
  return (
    <footer>
      <ul className="socialLinks">
        <li>
          <Link>Instagram</Link>
        </li>
        <li>
          <Link>twitter</Link>
        </li>
        <li>
          <Link>wikipedia</Link>
        </li>
      </ul>
      <div className="developInfo">
        Developed by
        <Link to="#">Pradheep</Link>
      </div>
    </footer>
  );
}
