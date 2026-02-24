import React from "react";
import directorImg from "../assets/Directer.png";

const DirectorDeskPage = () => {
  return (
    <div className="container my-5">
      {/* PAGE TITLE */}
      <h2 className="text-center fw-bold mb-4" style={{ color: "#000080" }}>
        Director&apos;s Desk
      </h2>

      <div className="row">
        {/* LEFT SECTION – IMAGE & NAME */}
        <div className="col-md-3 text-center mb-4">
          <img
            src={directorImg}
            className="img-fluid rounded mb-3"
            alt="Director"
            style={{ maxWidth: "180px" }}
          />
          <h5 className="fw-bold mb-1">Dr. Vinod M Mohitkar</h5>
          <p className="text-muted mb-0">Director, Technical Education</p>
          <p className="text-muted">Maharashtra State, Mumbai</p>
        </div>

        {/* RIGHT SECTION – CONTENT */}
        <div
          className="col-md-9"
          style={{ fontSize: "16px", lineHeight: "30px", textAlign: "justify" }}
        >
          <p>
            In today’s global and digital world, Education—especially Technical
            Education—plays a vital role. The Directorate of Technical Education
            offers various Technical Programmes and Courses at Diploma, Graduate,
            Post-Graduate and Research levels for building careers in various
            socio-economic sectors.
          </p>

          <p>
            The Directorate of Technical Education, Maharashtra State has been
            established to formulate policies, rules and guidelines in
            accordance with State and Central Government directives and execute
            them accordingly. Under the umbrella of the Directorate, there are
            around 1600 Technical Institutions spread across the State of
            Maharashtra. There are six regional Technical Education Offices viz.
            Amravati, Aurangabad, Mumbai, Nagpur, Nashik and Pune.
          </p>

          <p>
            The objective of the Directorate of Technical Education, Maharashtra
            is to uphold and enhance the quality of technical education by
            defining policies, developing infrastructure at government
            institutions, guiding private institutions, and enhancing
            interactions with industry, professional bodies and national-level
            institutions of repute. The Directorate has been instrumental in
            ensuring the successful implementation of various Government
            scholarship schemes for economically backward, minority and women
            students enrolled in different courses.
          </p>

          <p>
            Adding to its financial activities, the Directorate has credited
            itself by conducting industry-funded CSR programs. It has aptly
            handled, disbursed and monitored various projects like CIIILP and
            different phases of TEQIP, utilizing the finances for the
            betterment of technical education in the State of Maharashtra.
          </p>

          <p>
            To ensure quality in Technical Education, the Directorate has
            participated in various Central Government initiatives such as the
            Technical Education Quality Improvement Programme (TEQIP), granted
            autonomy to Government and Aided Institutions, formed the State
            Level Technical University—Dr. Babasaheb Ambedkar Technological
            University (DBATU)—as well as the Unitary Technical University (COEP
            Technological University). The Directorate also coordinates with
            other states, national departments and organizations, contributing
            to the coherent development of industry and society at large.
          </p>

          <p>
            The Directorate is continuously involved in providing quality
            technical education through Industry–Institute Interactions and
            MoUs signed with Infosys and NASSCOM. These initiatives provide
            industry-standard online training and courses in thrust areas for
            students across Maharashtra, enhancing their employability. The
            Directorate shall continue its quest to achieve excellence and work
            tirelessly to safeguard and guarantee the delivery of quality,
            career-oriented and job-focused technical education to the
            energetic youth of Maharashtra.
          </p>

          <p>
            The National Education Policy (NEP 2020) aims to transform the
            present educational scenario and mould students into capable
            citizens of the 21st century. The Directorate has aligned itself
            with apex regulatory bodies such as AICTE, UGC, PCA and COA, along
            with affiliating universities, to initiate this transformation.
            Our focus is on skill-intensive, flexible and student-centric,
            multi-disciplinary engineering education systems aided by the
            latest digital technologies.
          </p>

          <p>
            NEP 2020 also emphasizes human values, scientific temperament,
            Indian languages and the Indian Knowledge System, aiming towards
            holistic development of students. Equal attention will be given to
            sports, yoga, arts and music. Teachers are the most integral part
            of this ecosystem; hence, their capability development and regular
            training will be prioritized. Thus, the Directorate aims to play a
            key role in implementing NEP 2020 and transforming the technical
            education system in the State.
          </p>

          <p>
            As the Director, I look forward to continuing cooperation,
            coordination, collaboration and corroboration with all partners of
            technical education at both state and national levels to create
            capable technocrats for the future.
          </p>

          <br />

          <p className="fw-bold mb-0">Dr. Vinod M Mohitkar</p>
          <p className="mb-0">Director,</p>
          <p className="mb-0">Technical Education,</p>
          <p>Maharashtra State, Mumbai</p>
        </div>
      </div>
    </div>
  );
};

export default DirectorDeskPage;
