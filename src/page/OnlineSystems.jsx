import React from "react";

const OnlineSystems = () => {
  const systems = [
    "BBA/BCA - Intake approval 2024-25",
    "Foreign Scholarships Portal",
    "Diploma Intake Approval 2025-26",
    "UG-PG Intake Approval 2025-26",
    "For Scholarship Related Queries - Helpdesk Ticket Link",
    "For Scholarship Helpline Numbers : 07969134440 & 07969134441"
  ];

  return (
    <div className="container my-5 px-3">
      <h4 className="text-center fw-bold mb-4 position-relative d-inline-block w-100 text-uppercase" style={{ color: "#333", letterSpacing: "1px" }}>
        Online Systems @ DTE
        <div style={{ width: "60px", height: "3px", backgroundColor: "#fd7e14", margin: "10px auto" }}></div>
      </h4>

      <div className="row g-3">
        {systems.map((text, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-4">
            <div className="h-100 d-flex align-items-center justify-content-center p-4 text-center fw-bold border border-success border-2 rounded shadow-sm bg-white hover-zoom transition" 
                 style={{ backgroundColor: "rgba(25, 135, 84, 0.05)", cursor: "pointer", fontSize: "0.95rem" }}>
              {text}
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
          .hover-zoom { transition: transform 0.2s; }
          .hover-zoom:hover { transform: scale(1.03); background-color: rgba(25, 135, 84, 0.1) !important; }
        `}
      </style>
    </div>
  );
};

export default OnlineSystems;
