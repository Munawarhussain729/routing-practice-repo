import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div class="topbar">
        <div class="top1stbox">
          <Link to="/">Home</Link>
        </div>
        <div class="top1stbox">
          <Link to="/about">About</Link>
        </div>
        <div class="top1stbox">
          <Link to="/contact">Contact</Link>
        </div>
        <div class="maintitle">
          <img
            class="logo-desk"
            src="https://assets.spitfirehomes.co.uk/app/uploads/2021/01/19084810/spitfire-logo.svg"
            alt="Spitfire Homes Logo"
          />
        </div>
      </div>
    </div>
  );
};
