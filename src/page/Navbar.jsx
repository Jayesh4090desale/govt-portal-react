import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <div className="bg-white border-bottom py-2">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
          <div className="d-flex align-items-center text-center text-md-start">
            <div className="pe-3">
              <div className="fw-bold mb-0" style={{ fontSize: "0.9rem" }}>महाराष्ट्र शासन</div>
              <div className="text-muted" style={{ fontSize: "0.75rem" }}>Government of Maharashtra</div>
            </div>
            <div className="vr d-none d-md-block mx-2"></div>
            <div className="ps-3 d-none d-md-block">
              <div className="fw-bold mb-0" style={{ fontSize: "0.9rem" }}>उच्च व तंत्रशिक्षण विभाग</div>
              <div className="text-muted" style={{ fontSize: "0.75rem" }}>Higher & Technical Education Department</div>
            </div>
          </div>

          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-outline-dark btn-sm px-2 py-1" onClick={toggleTheme} style={{ fontSize: "0.75rem" }}>
              {darkMode ? "Light" : "Dark"}
            </button>
            <button className="btn btn-outline-dark btn-sm px-2 py-1" style={{ fontSize: "0.75rem" }}>Login</button>
            <button className="btn btn-dark btn-sm px-2 py-1" style={{ fontSize: "0.75rem" }}>Register</button>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div style={{ backgroundColor: "#fd7e14" }}>
        <div className="container py-3">
          <div className="row align-items-center text-center text-md-start g-3">
            <div className="col-4 col-md-1 mx-auto mx-md-0">
              <img src={logo} alt="Logo" className="img-fluid" style={{ maxHeight: "70px" }} />
            </div>
            <div className="col-12 col-md-7 text-white">
              <h4 className="fw-bold mb-1" style={{ fontSize: "clamp(1.1rem, 4vw, 1.5rem)" }}>
                Directorate of Technical Education, Maharashtra State
              </h4>
              <h5 className="mb-0 opacity-90" style={{ fontSize: "clamp(0.9rem, 3vw, 1.1rem)" }}>तंत्रशिक्षण संचालनालय, महाराष्ट्र राज्य</h5>
            </div>
            <div className="col-md-4 d-none d-md-block text-end">
              <img src={sj} alt="Gov Logo" className="img-fluid ms-auto" style={{ maxHeight: "70px" }} />
            </div>
          </div>
        </div>

        {/* NAV MENU */}
        <nav className="navbar navbar-expand-lg navbar-dark border-top p-0">
          <div className="container">
            <button
              className="navbar-toggler my-2 ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
              aria-controls="mainNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ border: "1px solid rgba(255,255,255,0.3)", padding: "4px 8px" }}
            >
              <span className="navbar-toggler-icon" style={{ width: "1.2em", height: "1.2em" }}></span>
            </button>

            <div className="collapse navbar-collapse" id="mainNavbar">
              <ul className="navbar-nav w-100 fw-semibold py-2 py-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-white px-lg-3" to="/">Home</Link>
                </li>

                {/* ABOUT US */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white px-lg-3" href="#" data-bs-toggle="dropdown">
                    About Us
                  </a>
                  <ul className="dropdown-menu shadow">
                    <li><Link className="dropdown-item" to="/about/vision-mission">Vision & Mission</Link></li>
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
                  <a className="nav-link dropdown-toggle text-white px-lg-3" href="#" data-bs-toggle="dropdown">
                    Quality Assurance
                  </a>
                  <ul className="dropdown-menu shadow">
                    <li><Link className="dropdown-item" to="/quality/about-nep">About NEP</Link></li>
                    <li><Link className="dropdown-item" to="/quality/nep-gr">NEP Government Resolution</Link></li>
                  </ul>
                </li>

                {/* ADMISSION */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white px-lg-3" href="#" data-bs-toggle="dropdown">
                    Admission
                  </a>
                  <ul className="dropdown-menu shadow">
                    <li><Link className="dropdown-item" to="/admission/dte-search">DTE Search Institute</Link></li>
                    <li><Link className="dropdown-item" to="/admission/post-ssc-2025">Post SSC Diploma 2025</Link></li>
                    <li><Link className="dropdown-item" to="/admission/direct-second-year-2025">Direct Second Year Diploma 2025</Link></li>
                  </ul>
                </li>

                {/* SCHOLARSHIP */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white px-lg-3" href="#" data-bs-toggle="dropdown">
                    Scholarship
                  </a>
                  <ul className="dropdown-menu shadow">
                    <li><Link className="dropdown-item" to="/scholarship/rajshri">Rajshri Shahu Maharaj</Link></li>
                    <li><Link className="dropdown-item" to="/scholarship/merit-means">Merit-cum-Means</Link></li>
                    <li><Link className="dropdown-item" to="/scholarship/nsp">National Scholarship</Link></li>
                  </ul>
                </li>

                {/* RTS */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white px-lg-3" href="#" data-bs-toggle="dropdown">
                    RTS Services
                  </a>
                  <ul className="dropdown-menu shadow">
                    <li><Link className="dropdown-item" to="/rts/introduction">RTS Introduction</Link></li>
                    <li><Link className="dropdown-item" to="/rts/citizen-login">Citizen Login</Link></li>
                  </ul>
                </li>

                {/* DOWNLOADS */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white px-lg-3" href="#" data-bs-toggle="dropdown">
                    Downloads
                  </a>
                  <ul className="dropdown-menu shadow">
                    <li><Link className="dropdown-item" to="/downloads/circulars">Circulars</Link></li>
                    <li><Link className="dropdown-item" to="/downloads/tenders">Tenders</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
