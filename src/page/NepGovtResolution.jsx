import React from "react";

const resolutions = [
  {
    id: 1,
    date: "03/07/2024",
    title: "NEP 2020 Implementation in affiliating colleges",
    size: "223.38 KB",
    pdf: "#",
  },
  {
    id: 2,
    date: "31/05/2024",
    title: "Professor of Practice GR Technical Education",
    size: "732.49 KB",
    pdf: "#",
  },
  {
    id: 3,
    date: "31/05/2024",
    title: "NEP 2020 GR BATU 3rd Aug 2023",
    size: "144.11 KB",
    pdf: "#",
  },
  {
    id: 4,
    date: "31/05/2024",
    title: "Cluster University guidelines",
    size: "469.78 KB",
    pdf: "#",
  },
  {
    id: 5,
    date: "31/05/2024",
    title: "Empowered Autonomy-Uniform Statues Maharashtra 2019",
    size: "136.16 KB",
    pdf: "#",
  },
  {
    id: 6,
    date: "21/07/2023",
    title:
      "राष्ट्रीय शैक्षणिक धोरण-2020 च्या राज्यातील अंगलबजावणीच्या अनुषंगाने अभियांत्रिकी पदवी अभ्यासक्रम आराखडा, श्रेयांक आराखडा याबावत मार्गदर्शक सूचना",
    size: "499.80 KB",
    pdf: "#",
  },
];

const NepGovtResolution = () => {
  return (
    <div className="container my-5" style={{ minHeight: "60vh" }}>
      {/* Page Title */}
      <h3
        className="text-center fw-bold mb-4"
        style={{ color: "#222", fontSize: "1.6rem" }}
      >
        Government Resolution
      </h3>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-bordered align-middle text-center">
          <thead>
            <tr style={{ backgroundColor: "#fd7e14", color: "#fff" }}>
              <th style={{ width: "70px" }}>Sr. No</th>
              <th style={{ width: "130px" }}>Publish Date</th>
              <th className="text-start">Government Resolution</th>
              <th style={{ width: "120px" }}>Download</th>
              <th style={{ width: "110px" }}>Size</th>
            </tr>
          </thead>
          <tbody>
            {resolutions.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.date}</td>
                <td className="text-start">{item.title}</td>
                <td>
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#d9534f", textDecoration: "none", fontWeight: "500" }}
                  >
                    (Pdf)
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"
                      alt="PDF"
                      style={{ width: "18px", marginLeft: "4px" }}
                    />
                  </a>
                </td>
                <td>{item.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NepGovtResolution;
