import React from "react";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

export default function Slider() {
  return (
    <div className="container my-4">
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner slider-height">

          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100 slider-img" alt="Slide 1" />
          </div>

          <div className="carousel-item">
            <img src={slider2} className="d-block w-100 slider-img" alt="Slide 2" />
          </div>

          <div className="carousel-item">
            <img src={slider3} className="d-block w-100 slider-img" alt="Slide 3" />
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>

      {/* Slider Styles */}
      <style>{`
        .slider-height {
          height: 380px;
        }

        .slider-img {
          height: 380px;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
}
