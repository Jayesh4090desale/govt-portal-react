import React from "react";
import logo from "../assets/logo1.gif";
import sj from "../assets/sj.png";

const Navbar = () => {
  return (
    <>
      {/* TOP BAR */}
      <div className="bg-white border-bottom py-1 px-5">
        <div className="container-fluid d-flex align-items-center small">

          {/* LEFT CONTENT */}
          <div className="d-flex align-items-center">

            <div className="px-3 text-start">
              <div>महाराष्ट्र शासन</div>
              <div>Government of Maharashtra</div>
            </div>

            <div className="vr"></div>

            <div className="px-3 text-start">
              <div>उच्च व तंत्रशिक्षण विभाग</div>
              <div>Higher & Technical Education Department</div>
            </div>

            <div className="vr"></div>

            <div className="px-3">
              <a
                href="#skip"
                className="fw-bold text-dark text-decoration-none"
              >
                Skip to main content
              </a>
            </div>

            <div className="vr"></div>

            <div className="px-3 d-flex align-items-center gap-2">
              <span role="button">🔊</span>
              <span role="button">A-</span>
              <span role="button">A</span>
              <span role="button">A+</span>
            </div>
          </div>

          {/* RIGHT LOGIN / REGISTER */}
          <div className="ms-auto d-flex align-items-center gap-2">
            <button className="btn btn-outline-dark btn-sm">
              Login
            </button>
            <button className="btn btn-dark btn-sm">
              Register
            </button>
          </div>

        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="px-5 pt-0" style={{ backgroundColor: "#fd7e14" }}>
        <div className="container py-3">
          <div className="row align-items-center">

            {/* LEFT LOGO */}
            <div className="col-md-1 text-center">
              <img
                src={logo}
                alt="DTE Logo"
                className="img-fluid"
                style={{ maxHeight: "80px" }}
              />
            </div>

            {/* CENTER TITLE */}
            <div className="col-md-7">
              <h3 className="mb-1 fw-bold">
                Directorate of Technical Education, <br />
                Maharashtra State
              </h3>
              <h5 className="mb-0">
                तंत्रशिक्षण संचालनालय, महाराष्ट्र राज्य
              </h5>
            </div>

            {/* RIGHT LOGO + SEARCH */}
            <div className="col-md-4">
              <div className="d-flex align-items-center justify-content-center gap-3">

                <img
                  src={sj}
                  alt="Gov Logo"
                  className="img-fluid"
                  style={{ maxHeight: "90px" }}
                />

                <div className="input-group" style={{ width: "260px" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <button className="btn btn-dark">🔍</button>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="container border-top">
          <ul className="nav py-2 px-1 fw-semibold">

            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Home
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#"
                data-bs-toggle="dropdown"
              >
                About Us
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Organization</a></li>
                <li><a className="dropdown-item" href="#">Officials</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">
                Quality Assurance
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Accreditation</a></li>
                <li><a className="dropdown-item" href="#">Audit Reports</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">
                Admission Section
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">CAP Process</a></li>
                <li><a className="dropdown-item" href="#">Seat Matrix</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">
                Scholarship Section
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Schemes</a></li>
                <li><a className="dropdown-item" href="#">Status Check</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">
                RTS Services
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Online Services</a></li>
                <li><a className="dropdown-item" href="#">Track Application</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">
                E-Governance
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">MIS Reports</a></li>
                <li><a className="dropdown-item" href="#">Portal Login</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">
                Downloads
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Forms</a></li>
                <li><a className="dropdown-item" href="#">Circulars</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">
                Important Links
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Government Portals</a></li>
                <li><a className="dropdown-item" href="#">Universities</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">
                Media Corner
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Press Releases</a></li>
                <li><a className="dropdown-item" href="#">Gallery</a></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
