import React from "react";
import logo from "../../Assets/images/logo.png";

const Topbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <img src={logo} alt="" className="d-inline-block align-text-top" />
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
