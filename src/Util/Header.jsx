import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  console.log(props.invisible);
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-ul">
          <li className="header-li">
            <NavLink
              to="/home"
              className="header-link"
              activeClassName="active-link"
            >
              HOME PAGE
            </NavLink>
          </li>
          <li className="header-li">
            <NavLink
              to="/adddata"
              className="header-link"
              activeClassName="active-link"
            >
              ADD DATA
            </NavLink>
          </li>
          {props.invisible && (
            <li className="header-li">
              <NavLink
                to="/searchresult"
                className="header-link"
                activeClassName="active-link"
              >
                SEARCH RESULTS
              </NavLink>
            </li>
          )}
          <li className="header-li">
            <NavLink
              to="/analyticsView"
              className="header-link"
              activeClassName="active-link"
            >
              ANALYTICS VIEW
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
