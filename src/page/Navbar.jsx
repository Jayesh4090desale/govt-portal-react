import React, { useState } from "react";
import { Link } from "react-router-dom";   // ✅ REQUIRED
import logo from "../assets/logo1.gif";
import sj from "../assets/sj.png";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#ffffff" : "#f2f2f2";
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-white border-bottom py-1 px-5">
        <div className="container-fluid d-flex align-items-center small">

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
          </div>

          <div className="ms-auto d-flex align-items-center gap-2">
            <button
              className="btn btn-outline-dark btn-sm"
              onClick={toggleTheme}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>

            <button className="btn btn-outline-dark btn-sm">Login</button>
            <button className="btn btn-dark btn-sm">Register</button>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="px-5" style={{ backgroundColor: "#fd7e14" }}>
        <div className="container py-3">
          <div className="row align-items-center">

            <div className="col-md-1 text-center">
              <img src={logo} alt="Logo" className="img-fluid" />
            </div>

            <div className="col-md-7">
              <h3 className="fw-bold mb-1">
                Directorate of Technical Education, Maharashtra State
              </h3>
              <h5 className="mb-0">तंत्रशिक्षण संचालनालय, महाराष्ट्र राज्य</h5>
            </div>

            <div className="col-md-4 text-center">
              <img src={sj} alt="Gov Logo" className="img-fluid" />
            </div>
          </div>
        </div>

        {/* NAV MENU */}
        <div className="container border-top">
          <ul className="nav py-2 fw-semibold">

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">Home</Link>
            </li>

            {/* ABOUT US */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#"
                data-bs-toggle="dropdown"
              >
                About Us
              </a>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/about/vision-mission">
                    Vision & Mission
                  </Link>
                </li>
                <li><Link className="dropdown-item" to="/about/desks-at-dte">Desks at DTE</Link></li>
                <li><Link className="dropdown-item" to="/about/regional-offices">Regional Offices</Link></li>
                <li><Link className="dropdown-item" to="/about/citizen-charter">Citizen Charter</Link></li>
                <li><Link className="dropdown-item" to="/about/rti">RTI</Link></li>
                <li><Link className="dropdown-item" to="/about/org-structure">Organizational Structure</Link></li>
                <li><Link className="dropdown-item" to="/about/whos-who">Who’s Who</Link></li>
              </ul>
            </li>

            {/* QUALITY ASSURANCE */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">
                Quality Assurance
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/quality/about-nep">About NEP</Link></li>
                <li><Link className="dropdown-item" to="/quality/nep-gr">NEP Government Resolution</Link></li>
              </ul>
            </li>

            {/* ADMISSION */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">
                Admission Section
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/admission/dte-search">DTE Search Institute</Link></li>
                <li><Link className="dropdown-item" to="/admission/post-ssc-2025">Post SSC Diploma 2025</Link></li>
                <li><Link className="dropdown-item" to="/admission/direct-second-year-2025">Direct Second Year Diploma 2025</Link></li>
              </ul>
            </li>

            {/* SCHOLARSHIP */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">
                Scholarship Section
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/scholarship/rajshri">Rajshri Shahu Maharaj</Link></li>
                <li><Link className="dropdown-item" to="/scholarship/merit-means">Merit-cum-Means</Link></li>
                <li><Link className="dropdown-item" to="/scholarship/nsp">National Scholarship</Link></li>
              </ul>
            </li>

            {/* RTS */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">
                RTS Services
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/rts/introduction">RTS Introduction</Link></li>
                <li><Link className="dropdown-item" to="/rts/citizen-login">Citizen Login</Link></li>
              </ul>
            </li>

            {/* DOWNLOADS */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">
                Downloads
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/downloads/circulars">Circulars</Link></li>
                <li><Link className="dropdown-item" to="/downloads/tenders">Tenders</Link></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
