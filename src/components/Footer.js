import React from "react";
import logo from "../assets/output-onlinepngtools.png";
import {
  NavbarBrand // this is where we can create our own logo 
} from "reactstrap";
const Footer = () => (
  <footer className="bg-light p-3 text-center">
    <NavbarBrand href="/"><img className="nav-logo" alt="logo" src={logo}></img></NavbarBrand>
    <p>
      THIS
    </p>
  </footer>
);
export default Footer;
