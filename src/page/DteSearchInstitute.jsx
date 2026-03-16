import React from "react";

const DteSearchInstitute = () => {
    return (
        <div style={{ minHeight: "60vh" }}>

            {/* Page Banner */}
            <div
                className="text-center py-3 fw-bold"
                style={{ backgroundColor: "#f5ede0", fontSize: "1.3rem", color: "#222" }}
            >
                Search Institute
            </div>

            {/* Table */}
            <div className="container my-4">
                <div className="table-responsive">
                    <table className="table table-bordered align-middle">
                        <thead>
                            <tr style={{ backgroundColor: "#4a4a8a", color: "#fff" }}>
                                <th style={{ width: "120px" }}>sr No</th>
                                <th>website</th>
                                <th style={{ width: "130px" }}>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ backgroundColor: "#f9f9f9" }}>
                                <td>1</td>
                                <td style={{ color: "#4a5568", fontSize: "15px" }}>
                                    Search Diploma Institute 2025-26
                                </td>
                                <td>
                                    <a
                                        href="https://approval25.dtemaharashtra.gov.in/intake/home"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "#e05252", fontWeight: "500", textDecoration: "none" }}
                                    >
                                        Click Here
                                    </a>
                                </td>
                            </tr>

                            <tr style={{ backgroundColor: "#fff" }}>
                                <td>2</td>
                                <td style={{ color: "#4a5568", fontSize: "15px" }}>
                                    Search UG-PG Institutes 2025-26
                                </td>
                                <td>
                                    <a
                                        href="https://ugpg25.dtemaharashtra.gov.in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "#e05252", fontWeight: "500", textDecoration: "none" }}
                                    >
                                        Click Here
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default DteSearchInstitute;
