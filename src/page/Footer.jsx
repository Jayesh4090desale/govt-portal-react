import React from "react";
import { useAccessibility } from "../context/AccessibilityContext";

const Footer = () => {
  const { themeColor } = useAccessibility();
  const links = [
    "Sitemap", "Help", "Terms And Conditions", "Disclaimer", "RTI", "Copyright Policy",
    "CMAP policy", "CAP Policy", "CRP Policy", "Contingency Management Plan",
    "Security Policy", "Website Monitoring Plan", "Broken Links Policy",
    "Privacy Policy", "Hyperlinking policy", "Contact Us", "Feedback",
    "Web Information Manager"
  ];

  return (
    <footer className="mt-auto" style={{ backgroundColor: themeColor.footer, color: "#000", transition: "background-color 0.4s ease" }}>
      <div className="container py-4">

        {/* Top Links */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-3" style={{ fontSize: "14px", fontWeight: "500" }}>
          {links.map((link, i) => (
            <React.Fragment key={i}>
              <a href="#" className="text-decoration-none text-dark hover-white transition">{link}</a>
              {i < links.length - 1 && <span className="d-none d-md-inline text-dark opacity-50">|</span>}
            </React.Fragment>
          ))}
        </div>

        <hr style={{ borderColor: "rgba(0,0,0,0.1)", margin: "20px 0" }} />

        {/* Bottom Section */}
        <div className="row align-items-center g-4 text-center text-md-start">

          {/* Left */}
          <div className="col-md-6 order-2 order-md-1">
            <p className="mb-3 small fw-semibold">
              © 2026 Content Owned by Directorate Of Technical Education,<br className="d-none d-lg-block" />
              Maharashtra State, India. All Rights Reserved.
            </p>

            <div className="d-flex gap-2 flex-wrap justify-content-center justify-content-md-start">
              {["AChecker WCAG 2-AA", "W3C WCAG 2.0", "W3C XHTML 1.0", "W3C CSS"].map((tag, i) => (
                <span key={i} className="border border-dark bg-white px-2 py-1 small fw-bold" style={{ fontSize: "10px" }}>{tag}</span> 
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="col-md-6 text-md-end order-1 order-md-2">
            <div className="mb-3">
              <p className="mb-1 fw-bold small">Visitor Counter</p>
              <div className="d-inline-flex">
                {["4","1","5","7","8","6","8","6"].map((num, i) => (
                  <span
                    key={i}
                    className="shadow-sm"
                    style={{
                      background: "#000",
                      color: "#fff",
                      padding: "4px 8px",
                      marginRight: "2px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      borderRadius: "2px"
                    }}
                  >
                    {num}
                  </span>
                ))}
              </div>
            </div>

            <p className="mb-2 small">
              <strong>Last Updated On:</strong><br />
              18/01/2026 &nbsp; 12:28 pm
            </p>

            <p className="mb-0 fw-bold small text-uppercase" style={{ letterSpacing: "0.5px" }}>Powered by DTEMS MUMBAI</p>
          </div>

        </div>
      </div>
      <style>
        {`
          .hover-white:hover { color: white !important; }
          .transition { transition: all 0.2s; }
        `}
      </style>
    </footer>
  );
};

export default Footer;
