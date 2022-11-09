import React from "react";

const NavBar = props =>
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="this">
        {" "}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              style={{ color: "gainsboro" }}
              className="nav-link"
              aria-current="page"
              href="https://ljaimess.github.io/"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              style={{ color: "gainsboro" }}
              className="nav-link"
              href="https://ljaimess.github.io/projects"
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              style={{ color: "gainsboro" }}
              className="nav-link"
              href="https://ljaimess.github.io/about"
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              style={{ color: "gainsboro" }}
              className="nav-link"
              href="https://ljaimess.github.io/contact"
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              style={{ color: "gainsboro" }}
              className="nav-link"
              href="https://ljaimess.github.io/links"
            >
              Links
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>;

export default NavBar;
