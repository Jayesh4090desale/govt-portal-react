import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./page/Navbar";
import Main from "./page/Main";
import Footer from "./page/Footer";
import DirectorDeskPage from "./page/DirectorDeskPage";
import VisionMission from "./page/VisionMission";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/director-desk" element={<DirectorDeskPage />} />
        <Route path="/about/vision-mission" element={<VisionMission />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
