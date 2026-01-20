import React from "react";
import directorImg from "../assets/Directer.png";

const DirectorDeskPage = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Director's Desk</h2>

      <div className="row">
        <div className="col-md-3 text-center">
          <img
            src={directorImg}
            className="img-fluid rounded mb-3"
            alt="Director"
          />
          <h5>Dr. Vinod M Mohitkar</h5>
          <p>Director, Technical Education</p>
        </div>

        <div className="col-md-9" style={{ lineHeight: "28px" }}>
          <p>
            In today’s global and digital world, the Education Especially
            Technical Education plays vital role...
          </p>

          <p>
            National Education Policy (NEP 2020) aims to transform the present
            educational scenario...
          </p>

          <p>
            As the Director, I look forward to continue to embrace cooperation,
            coordination, collaboration and corroboration...
          </p>

          <br />
          <strong>Dr Vinod M Mohitkar</strong><br />
          Director,<br />
          Technical Education,<br />
          Maharashtra State, Mumbai
        </div>
      </div>
    </div>
  );
};

export default DirectorDeskPage;
