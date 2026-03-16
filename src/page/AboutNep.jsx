import React from "react";

const AboutNep = () => {
    return (
        <div style={{ minHeight: "60vh" }}>

            {/* Page Banner */}
            <div
                className="text-center py-3 fw-bold"
                style={{ backgroundColor: "#f5ede0", fontSize: "1.2rem", color: "#222" }}
            >
                About NEP
            </div>

            {/* Content Area */}
            <div className="container my-4">

                {/* Section Title */}
                <h5
                    className="fw-bold text-center mb-4"
                    style={{ color: "#1a1aab", fontSize: "1.1rem" }}
                >
                    NEP 2020: Reforms in Education System Document
                </h5>

                {/* Description */}
                <p style={{ textAlign: "justify", fontSize: "15px", lineHeight: "28px" }}>
                    The National Education Policy (NEP) 2020 was approved by the Union Cabinet
                    of India on 29 July 2020. It outlines the vision of India's new education
                    system. The new policy replaces the previous National Policy on Education,
                    1986. The policy is a comprehensive framework for elementary education to
                    higher education as well as vocational training in both rural and urban India.
                </p>

                <p style={{ textAlign: "justify", fontSize: "15px", lineHeight: "28px" }}>
                    NEP 2020 aims to transform India into a vibrant knowledge society and global
                    knowledge superpower by making both school and college education more holistic,
                    flexible, multidisciplinary, suited to 21st century needs, and aimed at
                    bringing out the unique capabilities of each student.
                </p>

                {/* Key Highlights */}
                <h6 className="fw-bold mt-4 mb-3" style={{ color: "#fd7e14" }}>
                    Key Highlights of NEP 2020:
                </h6>
                <ul style={{ fontSize: "15px", lineHeight: "30px" }}>
                    <li>Universal access to school education from pre-school to Grade 12.</li>
                    <li>New 5+3+3+4 curricular structure replacing the old 10+2 system.</li>
                    <li>Emphasis on foundational literacy and numeracy.</li>
                    <li>Flexible multidisciplinary higher education.</li>
                    <li>Multiple entry and exit options in degree programs.</li>
                    <li>Focus on vocational education from Grade 6 onwards.</li>
                    <li>Mother tongue / regional language as medium of instruction up to Grade 5.</li>
                    <li>Establishment of Academic Bank of Credits (ABC).</li>
                </ul>

            </div>
        </div>
    );
};

export default AboutNep;
