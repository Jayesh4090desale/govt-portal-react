import React from "react";
// Import the image you saved in assets
import orgChartImg from "../assets/imgpsh_fullsize_anim-5.png";

const OrgStructure = () => {
    return (
        <div className="pb-5">
            {/* 1. Header Bar (Matches your screenshot) */}
            <div
                className="py-3 mb-4 text-center shadow-sm"
                style={{ backgroundColor: "#e3f2fd", borderBottom: "1px solid #dee2e6" }}
            >
                <h3 className="fw-bold mb-0" style={{ color: "#333" }}>
                    Organizational Structure
                </h3>
            </div>

            {/* 2. Content Area */}
            <div className="container">
                <div className="card shadow-sm border-0 p-2 p-md-4">
                    <div className="text-center overflow-auto">
                        {/* The Image */}
                        <img
                            src={orgChartImg}
                            alt="DTE Organizational Structure"
                            className="img-fluid"
                            style={{ minWidth: "800px" }} // Ensures clarity on small screens with scroll
                        />
                    </div>
                </div>

                {/* 3. Footer/Notes area (Optional) */}
                <div className="mt-4 p-3 bg-light rounded border">
                    <p className="small text-muted mb-0">
                        <strong>Note:</strong> This chart represents the official hierarchy of the Directorate of Technical Education, Maharashtra State.
                        Scroll horizontally if you are viewing on a mobile device.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OrgStructure;
