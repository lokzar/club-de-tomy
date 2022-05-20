import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import loadingGif from "./logo.gif"

const Navbar = (props) => {
return (
<nav>
  <div>
    {(props.user?.profile==="member") ?(
    <div className=" nav  nav__authLinks">
      <Link to={PATHS.LANDINGPAGE}>
      <img className="logo" src={loadingGif} alt="tomylogo" />
      </Link>
      <Link to={PATHS.TOMYBANCO} className="authLink">
      Banco Tomy
      </Link>
      <Link to={PATHS.TIENDITA} className="authLink">
      Tiendita
      </Link>
      <Link to={PATHS.CARRITO} className="authLink">
      Carrito
      </Link>
      <Link to={PATHS.LANDINGPAGE} className="authLink">
      {props.user?.username}
      <img className="profile" src={props.user?.avatar}></img>
      </Link>
      <button className="nav-logoutbtn" onClick={props.handleLogout}>
        Salir
      </button>
    </div>
    ): (props.user?.profile==="doctor") ?(
      <div className=" nav  nav__authLinks">
        <Link to={PATHS.LANDINGPAGE}>
        <img className="logo" src={loadingGif} alt="tomylogo" />
        </Link>
        <Link to={PATHS.LANDINGPAGE} className="authLink">
        {props.user?.username}
        <img className="profile" src={props.user?.avatar}></img>
        </Link>
  
        <button className="nav-logoutbtn" onClick={props.handleLogout}>
          Salir
        </button>
      </div>
      )  
    : (
    <div className=" nav  nav__authLinks" >
        <Link to={PATHS.HOMEPAGE}>
  <img className="logo" src={loadingGif} alt="tomylogo" />
  </Link>
      <Link to={PATHS.SIGNUPPAGE} className="authLink">
      Registrate!
      </Link>
      <Link to={PATHS.LOGINPAGE} className="authLink">
      Entra
      </Link>
    </div>
    )}
  </div>
</nav>
);
};

export default Navbar;