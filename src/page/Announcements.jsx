import React from "react";
import df from "../assets/df.png";
import es from "../assets/es.jpeg";
import ap from "../assets/Pawerjpg.jpg";
import cp from "../assets/cp.jpeg";
import ins from "../assets/in.png";
import vr from "../assets/vr.png";

const Announcements = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="border bg-white overflow-hidden">
          <div className="row g-0 flex-nowrap align-items-center">
            <div
              className="col-auto px-3 py-1 fw-bold text-white text-center d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#fd7e14",
                minWidth: "120px",
                zIndex: 2,
                fontSize: "0.85rem"
              }}
            >
              Announcements
            </div>

            <div className="col announcement-wrapper flex-grow-1">
              <div className="announcement-text py-1">
                UPSC 2025–26 साठी यशदा प्रशिक्षणासाठी पात्र उमेदवारांनी अर्ज करावा
                | परदेशी शिष्यवृत्तीसाठी गुणवंत विद्यार्थ्यांकडून अर्ज मागविण्यात
                येत आहेत | प्रवेश प्रक्रिया संदर्भातील महत्त्वाच्या सूचना
              </div>
            </div>
          </div>
        </div>

        <div className="my-4">
          <div className="row justify-content-center g-3">
            <div className="col-12 col-sm-6 col-md-4">
              <LeaderCard
                img={df}
                name="Shri. Devendra Fadnavis"
                post="Hon. Chief Minister"
              />
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <LeaderCard
                img={es}
                name="Shri. Eknath Shinde"
                post="Hon. Dy. Chief Minister"
              />
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <LeaderCard
                img={ap}
                name="Shrimati Sunetra Ajit Pawar"
                post="Hon. Dy. Chief Minister"
              />
            </div>
          
            <div className="col-12 col-sm-6 col-md-4">
              <LeaderCard
                img={cp}
                name="Shri. Chandrakant Patil"
                post="Hon. Higher & Technical Education Minister"
              />
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <LeaderCard
                img={ins}
                name="Shri. Indranil Naik"
                post="Hon’ble Minister of State, Higher & Technical Education"
              />
            </div>

            <div className="col-12 col-sm-6 col-md-4">
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
          position: relative;
        }

        .announcement-text {
          display: inline-block;
          padding-left: 100%;
          animation: scroll-left 25s linear infinite;
          font-weight: 500;
          font-size: 0.9rem;
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
  <div className="card text-center shadow-sm h-100 border-0 bg-light">
    <div className="card-body p-4">
      <div className="mb-3 mx-auto" style={{ width: "100px", height: "100px" }}>
        <img
          src={img}
          alt={name}
          className="rounded-circle w-100 h-100 shadow-sm"
          style={{ objectFit: "cover", border: "3px solid white" }}
        />
      </div>
      <h6 className="fw-bold mb-1" style={{ fontSize: "1rem" }}>{name}</h6>
      <p className="text-muted mb-0" style={{ fontSize: "0.8rem" }}>{post}</p>
    </div>
  </div>
);

export default Announcements;
