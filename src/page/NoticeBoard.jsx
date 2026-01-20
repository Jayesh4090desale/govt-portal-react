import React from "react";

const NoticeBoard = () => {
  const notices = [
    { id: 1, date: "18/12/2025", news: "डिप्लोमा-2026 मध्ये सहभाग घेण्याबाबत.", size: "3.31 MB" },
    { id: 2, date: "13/12/2025", news: "सुवेध सहा विरुद्ध आंध्र प्रदेश राज्य आणि इतर-reg...", size: "1.01 MB" },
    { id: 3, date: "25/11/2025", news: "Online admission verification and admission approval process for Diploma Pharmacy AY 2025-26", size: "1.32 MB" },
    { id: 4, date: "19/11/2025", news: "शैक्षणिक वर्ष 2025-26 पासून नवीन संस्था सुरु करणे...", size: "811.27 KB" },
    { id: 5, date: "14/11/2025", news: "शैक्षणिक वेळापत्रक वर्ष 2025-26 मधील हिवाळी सुट्टीबाबत.", size: "356.96 KB" },
    { id: 6, date: "10/11/2025", news: "प्रवेश नियामक प्राधिकरण मुंबई – Office Assistant पदासाठी अर्ज...", size: "188.07 KB" },
    { id: 7, date: "07/11/2025", news: "शैक्षणिक वर्ष 2025-26 मध्ये संचलनालयांतर्गत पदविका अभ्यासक्रम प्रवेश प्रक्रिया.", size: "913.10 KB" },
    { id: 8, date: "20/10/2025", news: "डॉ. जे. पी. नाईक आदर्श राज्य शिक्षक पुरस्कार...", size: "1.35 MB" },
    { id: 9, date: "26/09/2025", news: "फार्मसी कौन्सिल ऑफ इंडिया निर्णयानुसार प्रवेश प्रक्रिया...", size: "1.11 MB" },
    { id: 10, date: "19/09/2025", news: "Pharmacy Intake Approval Circular for AY 2025-26", size: "387.46 KB" },
    { id: 11, date: "26/08/2025", news: "औषधनिर्माणशास्त्र पदविका संस्थांना आवश्यक निकष...", size: "830.94 KB" },
    { id: 12, date: "26/08/2025", news: "औषधनिर्माणशास्त्र पदविका संस्थांना सूचना...", size: "521.24 KB" },
    { id: 13, date: "18/08/2025", news: "Result of SRT-2025", size: "1.56 MB" },
    { id: 14, date: "13/08/2025", news: "विद्यार्थी बाबत शुल्क परतावा दि.11.08.2025", size: "151.38 KB" },
    { id: 15, date: "06/08/2025", news: "राज्य सामायिक प्रवेश परीक्षा केंद्रिय प्रक्रिया...", size: "145.54 KB" },
    { id: 16, date: "24/07/2025", news: "Final Seniority LIST for Class III Posts", size: "1.61 MB" },
    { id: 17, date: "23/07/2025", news: "Final Seniority LIST for Office Superintendent", size: "508.84 KB" },
    { id: 18, date: "23/07/2025", news: "NSP-2025-26 Notification Regarding KYC", size: "1.25 MB" },
    { id: 19, date: "23/07/2025", news: "NSP-2025-26 Notification Regarding Filling Application Form", size: "968.52 KB" },
    { id: 20, date: "07/07/2025", news: "घरबांधणी अनुदान अर्ज प्रक्रिया सन 2023", size: "385.43 KB" }
  ];

  return (
    <div className="container my-5">
      <div className="border">

        {/* Tabs */}
        <div className="d-flex bg-danger text-white fw-bold">
          <div className="px-3 py-2 border-end">Circular/Office Order</div>
          <div className="px-3 py-2 border-end">Seminar/Conference/Workshop</div>
          <div className="px-3 py-2 border-end">Trainings</div>
          <div className="px-3 py-2 border-end">Government Resolutions</div>
          <div className="px-3 py-2 border-end">Important Act</div>
          <div className="px-3 py-2">Tenders</div>
        </div>

        {/* Scrollable Table */}
        <div style={{ maxHeight: "420px", overflowY: "auto" }}>
          <table className="table table-bordered mb-0">
            <thead className="table-danger sticky-top">
              <tr>
                <th style={{ width: "70px" }}>Sr. No</th>
                <th style={{ width: "140px" }}>Publish Date</th>
                <th>News</th>
                <th style={{ width: "110px" }}>Download</th>
                <th style={{ width: "100px" }}>Size</th>
              </tr>
            </thead>

            <tbody>
              {notices.map((n) => (
                <tr key={n.id}>
                  <td>{n.id}</td>
                  <td>{n.date}</td>
                  <td>{n.news}</td>
                  <td>
                    <a href="#" className="text-primary text-decoration-none">
                      (Pdf) 📄
                    </a>
                  </td>
                  <td>{n.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-2 fw-bold">Read All</div>
      </div>
    </div>
  );
};

export default NoticeBoard;
