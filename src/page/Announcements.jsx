import React from "react";
import df from "../assets/df.png";
import es from "../assets/es.jpeg";
import ap from "../assets/ap.png";
import cp from "../assets/cp.jpeg";
import ins from "../assets/in.png";
import vr from "../assets/vr.png";

const Announcements = () => {
  return (
    <>
    <div className="container">
      <div className="container-fluid  border mt-3">
        <div className="d-flex align-items-center bg-white">
          <div
            className="px-3 fw-bold text-dark"
            style={{
              backgroundColor: "#fd7e14",
              minWidth: "140px",
              textAlign: "center",
            }}
          >
            Announcements
          </div>

          <div className="announcement-wrapper flex-grow-1">
            <div className="announcement-text">
              UPSC 2025–26 साठी यशदा प्रशिक्षणासाठी पात्र उमेदवारांनी अर्ज करावा
              | परदेशी शिष्यवृत्तीसाठी गुणवंत विद्यार्थ्यांकडून अर्ज मागविण्यात
              येत आहेत | प्रवेश प्रक्रिया संदर्भातील महत्त्वाच्या सूचना
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 mt-0">
        <div className="row justify-content-center g-0">
          <div className="col-md-4">
            <LeaderCard
              img={df}
              name="Shri. Devendra Fadnavis"
              post="Hon. Chief Minister"
            />
          </div>

          <div className="col-md-4">
            <LeaderCard
              img={es}
              name="Shri. Eknath Shinde"
              post="Hon. Dy. Chief Minister"
            />
          </div>

          <div className="col-md-4">
            <LeaderCard
              img={ap}
              name="Shri. Ajit Pawar"
              post="Hon. Dy. Chief Minister"
            />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="row justify-content-center g-0">
          <div className="col-md-4">
            <LeaderCard
              img={cp}
              name="Shri. Chandrakant Patil"
              post="Hon. Higher & Technical Education Minister"
            />
          </div>

          <div className="col-md-4">
            <LeaderCard
              img={ins}
              name="Shri. Indranil Naik"
              post="Hon’ble Minister of State, Higher & Technical Education"
            />
          </div>

          <div className="col-md-4">
            <LeaderCard
              img={vr}
              name="Shri. B. Venugopal Reddy, IAS"
              post="Addl. Chief Secretary, Higher & Technical Education"
            />
          </div>
        </div>
      </div>
      </div>

      {/* STYLES */}
      <style>
        {`
        .announcement-wrapper {
          overflow: hidden;
          white-space: nowrap;
        }

        .announcement-text {
          display: inline-block;
          padding-left: 100%;
          animation: scroll-left 18s linear infinite;
          font-weight: 600;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        `}
      </style>
    </>
  );
};

/* REUSABLE CARD COMPONENT */
const LeaderCard = ({ img, name, post }) => (
  <div className="card text-center shadow-sm h-100">
    <div className="card-body">
      <img
        src={img}
        alt={name}
        className="rounded-circle mb-3"
        style={{ width: "120px", height: "120px", objectFit: "cover" }}
      />
      <h6 className="fw-bold">{name}</h6>
      <p className="small mb-0">{post}</p>
    </div>
  </div>
);

export default Announcements;
