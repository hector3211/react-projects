import React from "react";
import "./MainNavigation.css";
import { Link } from "react-router-dom";
export default function MainNavigation() {
  return (
    <header className="header">
      <div className="header-brand">React Cards</div>
      <nav>
        <ul className="header-links">
          <li className="header-link">
            <Link to="/">All Cards</Link>
          </li>
          <li className="header-link">
            <Link to="/Favorites">Favorites</Link>
          </li>
          <li className="header-link">
            <Link to="/NewCard">New Cards</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
