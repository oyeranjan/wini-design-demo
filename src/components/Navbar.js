import React from "react";
import Logo from "../images/winni-logo.png"

const Navbar = () => {
  return (
    <div className="border-bottom">
      <nav className="navbar navbar-expand-lg navbar-light m-nav">
        <div className="container-fluid">
          <img
            src={Logo}
            alt="Logo"
            className="navbar-brand ps-2"
            width="180px"
            height="70px"
          />
          <form className="d-flex ps-5">
            <input
              className="form-control"
              type="search"
              placeholder="Search for gifts"
              aria-label="Search"
            />
            <button className="btn btn-secondary">
              <i className="fa fa-search"></i>
            </button>
          </form>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item px-3">
                <div className="row">
                  <i className="fa fa-clock-o fa-lg col-3 m-auto"></i>
                  <p
                    className="nav-text fw-bold col-9 m-auto"
                    aria-current="page"
                  >
                    Delivery In <br />
                    <span className="theme-color1 s-text">2 Hours</span>
                  </p>
                </div>
              </li>
              <li className="nav-item px-3">
                <div className="row">
                  <i className="fa fa-user fa-lg col-3 m-auto"></i>
                  <p className="nav-text col-9 m-auto" aria-current="page">
                    My <br />
                    <span className="theme-color1 s-text">Profile</span>
                  </p>
                </div>
              </li>
              <li className="nav-item px-3">
                <div className="row">
                  <i className="fa fa-map-marker fa-lg col-3 m-auto"></i>
                  <p className="nav-text col-9 m-auto" aria-current="page">
                    Delivery In
                    <br />
                    <span className="theme-color1 s-text">Choose City</span>
                  </p>
                </div>
              </li>
              <li className="nav-item px-3">
                <div className="row">
                  <i className="fa fa-shopping-cart fa-lg col-3 m-auto"></i>
                  <p className="nav-text col-9 m-auto" aria-current="page">
                    Cart
                    <br />
                    <span className="theme-color1 s-text">0 Items</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
