import React, { useRef } from "react";

import img1 from "../assets/a.jpg";
import img2 from "../assets/admin.jpg";
import img3 from "../assets/b.jpg";
import img4 from "../assets/c.jpg";
import img5 from "../assets/d.jpg";
import img6 from "../assets/e.png";

const ImportantLinks = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -420,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  };

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="container my-5">
      <h4 className="text-center fw-bold mb-4">
        Important Links
        <div
          style={{
            width: "80px",
            height: "3px",
            backgroundColor: "red",
            margin: "8px auto 0",
          }}
        />
      </h4>

      <div className="d-flex align-items-center justify-content-center gap-3">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="btn btn-light shadow"
          style={{ borderRadius: "50%" }}
        >
          ◀
        </button>

        {/* Scrollable Area */}
        <div
          ref={scrollRef}
          className="important-links-wrapper"
          style={{
            display: "flex",
            gap: "20px",
            overflowX: "auto",
            scrollBehavior: "smooth",
            width: "100%",
            maxWidth: "600px",
            padding: "10px"
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                minWidth: "140px",
                height: "140px",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                borderRadius: "6px",
              }}
            >
              <img
                src={img}
                alt="important-link"
                style={{
                  maxWidth: "100px",
                  maxHeight: "100px",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="btn btn-light shadow"
          style={{ borderRadius: "50%" }}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default ImportantLinks;
