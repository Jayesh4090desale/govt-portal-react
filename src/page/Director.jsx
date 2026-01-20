import React from "react";
import directorImg from "../assets/Directer.png"; // change image path if needed

const Director = () => {
  return (
    <>
      <div className="container my-4">
        <div className="card director-card border-0">
          <div className="row g-0 align-items-stretch">

            {/* LEFT IMAGE SECTION */}
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

            {/* RIGHT CONTENT SECTION */}
            <div className="col-md-9 p-4">
              <h5 className="fw-bold mb-3 " style={{ color: "#000080" }}>
                Director&apos;s Desk
              </h5>

              <p className="mb-3">
                In today’s global and digital world, the Education Especially
                Technical Education plays vital role. Directorate of Technical
                Education offers various Technical Programmes and Courses at
                Diploma, Graduate, Post-Graduate and Research level for building
                careers in various socio-economic sectors.
              </p>

              <p className="mb-4">
                The Directorate of Technical Education, Maharashtra State has
                been established to formulate the policies, rules, guidelines in
                accordance with State and Central Governments directives and
                execute it accordingly. Under the umbrella of the Directorate,
                there are around 1600 Technical Institutions spread across the
                State of Maharashtra. There are six regional Technical Education
                Offices viz. Amravati, Aurangabad, Mumbai, Nagpur, Nashik and Pune.
              </p>

              <button className=" px-4" style={{ backgroundColor: "#fd7e14" }}>
                Read More
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>
        {`
          .director-card {
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
            border-radius: 4px;
          }
        `}
      </style>
    </>
  );
};

export default Director;
