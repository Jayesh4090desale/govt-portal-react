import React from "react";
import { Link } from "react-router-dom";
import directorImg from "../assets/Directer.png";

const Director = () => {
  return (
    <div className="container my-4">
      <div className="card shadow-sm border-0">
        <div className="row g-0 align-items-center">
          <div className="col-md-3 col-lg-2 text-center p-4 border-bottom border-md-bottom-0 border-md-end bg-light rounded-start">
            <div className="mx-auto mb-3" style={{ width: "150px", height: "150px" }}>
              <img
                src={directorImg}
                alt="Dr. Vinod Mohitkar"
                className="img-fluid rounded shadow-sm w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
            <h6 className="fw-bold mb-1">Dr. Vinod Mohitkar</h6>
            <p className="small text-muted mb-0">Director, DTE</p>
          </div>

          <div className="col-md-9 col-lg-10 p-4">
            <h5 className="fw-bold mb-3" style={{ color: "#000080" }}>
              Director's Desk
            </h5>

            <p className="mb-3" style={{ textAlign: "justify" }}>
              In today’s global and digital world, the Education Especially
              Technical Education plays vital role in the development of the nation.
              The Directorate of Technical Education, Maharashtra State has
              been established to formulate policies and guidelines for technical 
              institutions across the state.
            </p>

            <Link
              to="/director-desk"
              className="btn px-4 fw-semibold"
              style={{ backgroundColor: "#fd7e14", color: "#fff" }}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
      <style>
        {`
          @media (min-width: 768px) {
            .border-md-end { border-right: 1px solid #dee2e6 !important; }
            .border-md-bottom-0 { border-bottom: 0 !important; }
          }
        `}
      </style>
    </div>
  );
};

export default Director;
