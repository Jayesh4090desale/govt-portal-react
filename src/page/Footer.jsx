import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f44336", color: "#000" }}>
      <div className="container py-4">

        {/* Top Links */}
        <div style={{ fontSize: "15px", lineHeight: "28px" }}>
          Sitemap | Help | Terms And Conditions | Disclaimer | RTI | Copyright Policy |
          CMAP policy | CAP Policy | CRP Policy | Contingency Management Plan |
          Security Policy | Website Monitoring Plan | Broken Links Policy |
          Privacy Policy | Hyperlinking policy | Contact Us | Feedback |
          Web Information Manager
        </div>

        <hr style={{ borderColor: "#ddd", margin: "25px 0" }} />

        {/* Bottom Section */}
        <div className="row align-items-center">

          {/* Left */}
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="mb-2">
              © 2026 Content Owned by Directorate Of Technical Education,
              Maharashtra State, India. All Rights Reserved.
            </p>

            <div className="d-flex gap-2 flex-wrap">
              <span className="border bg-white px-2 py-1">AChecker WCAG 2-AA</span>
              <span className="border bg-white px-2 py-1">W3C WCAG 2.0</span>
              <span className="border bg-white px-2 py-1">W3C XHTML 1.0</span>
              <span className="border bg-white px-2 py-1">W3C CSS</span>
            </div>
          </div>

          {/* Right */}
          <div className="col-md-6 text-md-end">
            <p className="mb-1 fw-bold">Visitor Counter</p>

            <div className="d-inline-flex mb-2">
              {["4","1","5","7","8","6","8","6"].map((num, i) => (
                <span
                  key={i}
                  style={{
                    background: "#000",
                    color: "#fff",
                    padding: "4px 6px",
                    marginRight: "3px",
                    fontSize: "14px",
                  }}
                >
                  {num}
                </span>
              ))}
            </div>

            <p className="mb-1">
              <strong>Last Updated On:</strong><br />
              18/01/2026 &nbsp; 12:28 pm
            </p>

            <p className="mb-0 fw-bold">Powered by DTEMS MUMBAI</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
