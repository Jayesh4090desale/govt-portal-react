import React, { useEffect } from "react";

const WhosWho = () => {
    // Debug log to confirm this specific file is rendering
    useEffect(() => {
        console.log("Who's Who Page Loaded with Orange Theme");
    }, []);

    // Cleaned Data from Screenshots
    const headOffice = [
        { name: "Dr. Vinod M. Mohitkar", post: "Director", email: "director@dtemaharashtra.gov.in", tel: "46082018" },
        { name: "Dr. Sunil S. Bhamare", post: "Joint Director", email: "sunil.bhamare@dtemaharashtra.gov.in", tel: "45161001" },
        { name: "Dr. Dhanpal Kamble", post: "Joint Director", email: "dhanapal.kamble@dtemaharashtra.gov.in", tel: "68597464" },
        { name: "Usmani Mohammad Shahid Afzal Ahmad", post: "Deputy Director", email: "ms_usmani@dtemaharashtra.gov.in", tel: "68597465" },
        { name: "Shri. Manoj M. Andhare", post: "Deputy Director", email: "manoj.andhare@dtemaharashtra.gov.in", tel: "68597356" },
    ];

    const osdData = [
        { name: "Dr. Anil B. Nandgaonkar", post: "Officer on Special Duty (TEQIP-III)", email: "abnandgaonkar@dtemaharashtra.gov.in", tel: "68597449" },
        { name: "Shri. M. U. Dabhade", post: "Officer on Special Duty (IT Cell)", email: "mudabhade@dtemaharashtra.gov.in", tel: "68597468" },
        { name: "Shri. Sundar C. Bulani", post: "Officer on Special Duty (DBT Cell)", email: "sundar.bulani@dtemaharashtra.gov.in", tel: "68597487" },
        { name: "Smt. Sapna Birla", post: "Officer on Special Duty (scholarship)", email: "desk18@dtemaharashtra.gov.in", tel: "68597493" },
    ];

    const deskStaff = [
        { name: "Shri. Rajendra Raul", post: "Steno HG (Desk 1- Director Section)", email: "desk1@dtemaharashtra.gov.in", tel: "68597401" },
        { name: "Smt. Sangita Pawar", post: "Steno LG (Desk 1- Joint Director Section)", email: "desk1@dtemaharashtra.gov.in", tel: "68597402" },
        { name: "Smt. Sunanda Bhagat", post: "Steno LG (Desk 1- Director Section)", email: "desk1@dtemaharashtra.gov.in", tel: "68597460" },
        { name: "Shri Rajesh Budage", post: "Office Suptd. (Desk 2)", email: "desk2@dtemaharashtra.gov.in", tel: "68597442" },
        { name: "Smt. Anjali V. Deshpande", post: "Programmer (Desk 3)", email: "programmer2@dtemaharashtra.gov.in", tel: "68597423" },
        { name: "Shri. Mahendra R. Kirad", post: "Data Entry Operator (Desk 3)", email: "deo@dtemaharashtra.gov.in", tel: "68597467" },
        { name: "Shri. Surendra H. Ketkar", post: "Office Suptd.(Desk 4 A)", email: "desk4a@dtemaharashtra.gov.in", tel: "68597424" },
        { name: "Shri. Anant Mali", post: "Office Suptdt (Desk 5)", email: "desk5@dtemaharashtra.gov.in", tel: "68597405" },
        { name: "Smt. Sayali S. Sakpal", post: "Office Supdt. (Desk 6)", email: "desk6@dtemaharashtra.gov.in", tel: "68597406" },
        { name: "Shri. Kishore Naitam", post: "Office Supdt. (Desk 7)", email: "desk7@dtemaharashtra.gov.in", tel: "68597407" },
        { name: "Shri. Datta Bharati", post: "Head Clerk (Desk 10)", email: "desk10@dtemaharashtra.gov.in", tel: "68597422" },
    ];

    const TableSection = ({ title, data }) => (
        <div className="mb-5 px-1 px-md-0">
            <h5 className="fw-bold mb-3 px-2 border-start border-4 text-dark" style={{ borderLeftColor: "#fd7e14" }}>
                {title}
            </h5>
            <div className="table-responsive shadow-sm rounded border overflow-auto">
                <table className="table table-bordered table-hover mb-0 bg-white align-middle">
                    <thead style={{ backgroundColor: "#fd7e14", color: "#ffffff", borderBottom: "2px solid #e67e22" }}>
                        <tr style={{ backgroundColor: "#fd7e14" }}>
                            <th className="py-3 px-3 text-white" style={{ backgroundColor: "#fd7e14" }}>Sr.No.</th>
                            <th className="py-3 px-3 text-white" style={{ backgroundColor: "#fd7e14" }}>Officer Name</th>
                            <th className="py-3 px-3 text-white" style={{ backgroundColor: "#fd7e14" }}>Designation</th>
                            <th className="py-3 px-3 text-white" style={{ backgroundColor: "#fd7e14" }}>Email</th>
                            <th className="py-3 px-3 text-white" style={{ backgroundColor: "#fd7e14" }}>Telephone No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((officer, index) => (
                            <tr key={index}>
                                <td className="px-3 text-center small">{index + 1}.</td>
                                <td className="px-3 fw-bold text-dark">{officer.name}</td>
                                <td className="px-3 small opacity-75">{officer.post}</td>
                                <td className="px-3">
                                    <a href={`mailto:${officer.email}`} className="text-decoration-none small text-primary">
                                        {officer.email}
                                    </a>
                                </td>
                                <td className="px-3 font-monospace small">{officer.tel}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className="pb-5 min-vh-100 bg-light">
            {/* Banner with explicitly strong orange border-bottom */}
            <div className="py-4 mb-5 text-center shadow-sm" style={{
                backgroundColor: "#fff8f0",
                borderBottom: "4px solid #fd7e14"
            }}>
                <h2 className="fw-bold mb-0 text-dark" style={{ letterSpacing: "1px" }}>Who's Who</h2>
            </div>

            <div className="container">
                <TableSection title="Officers at the Directorate Head Office" data={headOffice} />
                <TableSection title="Officers on Special Duty at the Directorate" data={osdData} />
                <TableSection title="Desk Staff at the Directorate" data={deskStaff} />
            </div>

            <style>
                {`
                .table-hover tbody tr:hover {
                    background-color: #fff9f0 !important;
                }
                thead th {
                    background-color: #fd7e14 !important;
                    color: white !important;
                }
                `}
            </style>
        </div>
    );
};

export default WhosWho;
