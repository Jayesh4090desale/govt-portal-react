import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./page/Navbar";
import Main from "./page/Main";
import Footer from "./page/Footer";
import DirectorDeskPage from "./page/DirectorDeskPage";
import VisionMission from "./page/VisionMission";
import OrgStructure from "./page/OrgStructure";
import WhosWho from "./page/WhosWho";
import NepGovtResolution from "./page/NepGovtResolution";
import AboutNep from "./page/AboutNep";
import DteSearchInstitute from "./page/DteSearchInstitute";
import { AccessibilityProvider } from "./context/AccessibilityContext";
import AccessibilityToolbar from "./components/AccessibilityToolbar";

function App() {
  return (
    <AccessibilityProvider>
      <Router>
        {/* The toolbar is now cleanly integrated into Navbar.jsx! */}

        <Navbar />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/director-desk" element={<DirectorDeskPage />} />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/about/org-structure" element={<OrgStructure />} />
            <Route path="/about/whos-who" element={<WhosWho />} />
            <Route path="/quality/nep-gr" element={<NepGovtResolution />} />
            <Route path="/quality/about-nep" element={<AboutNep />} />
            <Route path="/admission/dte-search" element={<DteSearchInstitute />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </AccessibilityProvider>
  );
}

export default App;

