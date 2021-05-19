import React from 'react'
import Logo from "../images/winni-logo.png";

const Footer = () => {
    return (
      <div
        className="m-1 p-4 text-start"
        style={{ backgroundColor: "#262261" }}
      >
        <div className="row">
          <div className="col-6">
            <img src={Logo} alt="" width="25%" />
          </div>
          <div className="col-6">
            <p className="text-white">Conect With Us</p>
            <p className="text-white">
              <i className="fa fa-facebook pe-5"></i>
              <i className="fa fa-instagram pe-5"></i>
              <i className="fa fa-whatsapp pe-5"></i>
              <i className="fa fa-youtube pe-5"></i>
              <i className="fa fa-linkedin pe-5"></i>
              <i className="fa fa-twitter pe-5"></i>
              <i className="fa fa-pinterest-p pe-5"></i>
            </p>
          </div>
        </div>
        <div className="row px-2 py-3">
          <div className="col-3">
            <p className="footer-text">About us</p>
            <p className="footer-text">Career</p>
            <p className="footer-text">Corporate Order</p>
            <p className="footer-text">Franchise Enquiry</p>
          </div>
          <div className="col-3">
            <p className="footer-text">About us</p>
            <p className="footer-text">Career</p>
            <p className="footer-text">Corporate Order</p>
            <p className="footer-text">Franchise Enquiry</p>
          </div>
          <div className="col-3">
            <p className="footer-text">About us</p>
            <p className="footer-text">Career</p>
            <p className="footer-text">Corporate Order</p>
            <p className="footer-text">Franchise Enquiry</p>
          </div>
          <div className="col-3">
            <p className="footer-text">About us</p>
            <p className="footer-text">Career</p>
            <p className="footer-text">Corporate Order</p>
            <p className="footer-text">Franchise Enquiry</p>
          </div>
        </div>
        <div className="mt-3">
          <p className="footer-text">
            ©2021 Winni-demo All Rights Reserved
          </p>
        </div>
      </div>
    );
}

export default Footer
