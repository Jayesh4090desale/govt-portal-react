import React from "react";
import visionImg from "../assets/VM1.png";
import missionImg from "../assets/VM2.png";

const VisionMission = () => {
  return (
    <div className="container my-5">

      {/* VISION SECTION */}
      <div className="row align-items-center mb-5">
        <div className="col-md-4 text-center">
          <img
            src={visionImg}
            alt="Vision"
            className="img-fluid"
            style={{ maxWidth: "220px" }}
          />
        </div>

        <div className="col-md-8">
          <h3 className="fw-bold text-success mb-3">Vision</h3>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "28px",
              textAlign: "justify",
            }}
          >
            To become a world class, globally competitive, flexible and learning
            higher education institution responsive to the individual,
            institutional and social developmental needs of the people from
            Maharashtra and India.
          </p>
        </div>
      </div>

      {/* MISSION SECTION */}
      <div className="row align-items-center">
        <div className="col-md-4 text-center">
          <img
            src={missionImg}
            alt="Mission"
            className="img-fluid"
            style={{ maxWidth: "220px" }}
          />
        </div>

        <div className="col-md-8">
          <h3 className="fw-bold text-warning mb-3">Mission</h3>
          <ul
            style={{
              fontSize: "16px",
              lineHeight: "28px",
            }}
          >
            <li>
              Enhance the quality of Technical Education Institutions, programs
              and systems towards achieving international standards.
            </li>
            <li>
              Efficiently and effectively manage the Technical Education System,
              ensuring transparency and integrity.
            </li>
            <li>
              Develop technical manpower to meet the needs of industry and
              growth of the economy.
            </li>
            <li>
              Elevating research levels in the Technical Education system.
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default VisionMission;
