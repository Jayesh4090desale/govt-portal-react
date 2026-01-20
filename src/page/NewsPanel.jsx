import React, { useRef, useEffect } from "react";
import articleImg from "../assets/article.jpeg";

const NewsPanel = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (container) {
        scrollAmount += 1;
        if (scrollAmount >= container.scrollHeight - container.clientHeight) {
          scrollAmount = 0;
        }
        container.scrollTop = scrollAmount;
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const newsItems = [
    "Shikshan Vedh 2025– 2nd Issue",
    "Shikshan Vedh 2025 – 1st Issue",
    "शैक्षणिक वर्ष 2025-26 पासून नवीन संस्था सुरु करणे, विद्यमान संस्थेत नवीन अभ्यासक्रम सुरु करणे...",
    "शैक्षणिक वर्ष 2025-26 मधील संचालकालयांतर्गत असलेल्या पदविका अभ्यासक्रमात प्रवेशीत विद्यार्थ्याची ऑनलाइन प्रवेश पडताळणी...",
    "शैक्षणिक वर्ष 2025-26 मध्ये अभियांत्रिकी, औषधनिर्माणशास्त्र / फार्म डी, वास्तुकला...",
    "Admissions for various programs of MTech and M. Planning at COEP Technological University commenced from July 20, 2025",
    "शैक्षणिक वर्ष 2025-26 मध्ये अभियांत्रिकी, वास्तुकला, औषधनिर्माणशास्त्र इ. पदविका...",
    "विकसित महाराष्ट्र – 2047: नागरिक सर्वेक्षण अभियाना सहभागी व्हा!",
    "विकसित महाराष्ट्र- 2047 च्या दिनांमध्ये नागरिकांचे मत, अपेक्षा, आकांक्षा व प्राधान्यक्रम जाणून घेणाऱ्या...",
    "शैक्षणिक वर्ष 2025-26 मधील पदविका अभ्यासक्रमांच्या केंद्रित (CAP) प्रवेशासाठी संस्थांची माहिती...",
    "Advertisement to Participate Graduate Candidates for CET (27-07-2025)...",
    "User Manual- NSP Web Portal for Students for filling the Application form for –2024-25",
    "Notification-NSP 2024-25 – Regarding OTR for Filling the application form...",
    "CORRIGENDUM OF RECRUITMENT OF AGNIVEERVAYU (MEN & WOMEN) INTAKE 02/2025",
    "Girls Scholarship Awareness Webinar",
    "LINK for Result: Exam result of all candidates in recruitment for class 3 posts",
    "Call letter link for various vacancies of Group C",
    "Selection of Candidates for Foreign Scholarship Scheme Maharashtra State A. Y. 2023-24",
    "Regarding Merit-cum-Means Scholarship GOI-Submission of Reasons for pending Bio-Authentication..."
  ];

  return (
    <div className="container my-5">
      <div className="row g-4">

        {/* COLUMN 1 : LATEST NEWS */}
        <div className="col-md-4">
          <div className="border rounded h-100">
            <div className="bg-danger text-white fw-bold p-2 d-flex justify-content-between">
              Latest News
              <span>⏸</span>
            </div>

            <div
              className="p-3"
              style={{ height: "250px", overflowY: "hidden" }}
              ref={scrollRef}
            >
              {newsItems.map((item, index) => (
                <p key={index}>
                  {index + 1}. {item}
                </p>
              ))}
            </div>
          </div>
        </div>

       {/* COLUMN 3 : NEWS ARTICLE */}
        <div className="col-md-4">
          <div className="border rounded h-100 text-center">
            <div className="bg-danger text-white fw-bold p-2">
              Latest Vedio 
            </div>

            <img
              src={articleImg}
              alt="News Article"
              className="img-fluid p-3"
            />
          </div>
        </div>

        {/* COLUMN 3 : NEWS ARTICLE */}
        <div className="col-md-4">
          <div className="border rounded h-100 text-center">
            <div className="bg-danger text-white fw-bold p-2">
              News Article
            </div>

            <img
              src={articleImg}
              alt="News Article"
              className="img-fluid p-3"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewsPanel;
