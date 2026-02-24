import React from "react";
import { Link } from "react-router-dom";
import directorImg from "../assets/Directer.png";

const Director = () => {
  return (
    <>
      <div className="container my-4">
        <div className="card director-card border-0">
          <div className="row g-0 align-items-stretch">

            <div className="col-md-3 border-end text-center p-4">
              <img
                src={directorImg}
                alt="Dr. Vinod Mohitkar"
                className="img-fluid mb-3 rounded"
                style={{ maxWidth: "160px" }}
              />
              <h6 className="fw-bold mb-1">Dr. Vinod Mohitkar</h6>
              <p className="small text-muted mb-0">Director, DTE</p>
            </div>

            <div className="col-md-9 p-4">
              <h5 className="fw-bold mb-3" style={{ color: "#000080" }}>
                Director&apos;s Desk
              </h5>

              <p className="mb-3">
                In today’s global and digital world, the Education Especially
                Technical Education plays vital role.
              </p>

              <p className="mb-4"> 
                The Directorate of Technical Education, Maharashtra State has
                been established to formulate policies and guidelines.
              </p>

              <Link
                to="/director-desk"
                className="btn px-4"
                style={{ backgroundColor: "#fd7e14", color: "#fff" }}
              >
                Read More
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Director;
