import React from "react";
import { Link } from "react-router";

export function Navbar() {
  return (
    <nav className="nav nav-pills nav-fill bg-dark">
      <Link to="/home">Home |</Link>
      <Link to="/about">About | </Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
