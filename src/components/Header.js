import React from 'react'

const Header = () => {
    return (
      <div className="header-nav">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <p className="nav-link">
              <i className="fa fa-phone fa-rotate-90 p-1"></i>+91-9876543210
            </p>
          </li>
          <li className="nav-item">
            <p className="nav-link">Help</p>
          </li>
          <li className="nav-item">
            <p className="nav-link">Offers</p>
          </li>
          <li className="nav-item">
            <p className="nav-link">Visit Store</p>
          </li>
          <li className="nav-item">
            <p className="nav-link">
              Partner With Us<i className="fa fa-angle-down p-1"></i>
            </p>
          </li>
          <li className="nav-item">
            <p className="nav-link">
              Currency <span style={{ fontWeight: "bold" }}>INR</span>
              <i className="fa fa-angle-down p-1"></i>
            </p>
          </li>
          <li className="nav-item">
            <p className="nav-link">Track Order</p>
          </li>
        </ul>
      </div>
    );
}

export default Header
