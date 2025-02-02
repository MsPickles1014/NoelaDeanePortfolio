import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HeroSection from "./pages/HeroSection";
import Portfolio from "./pages/Portfolio";
import DummyData from "./components/DummyData";
import Resume from './pages/Resume';

import "./index.css";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="contact" element={<Contact/>}/>

      </Routes>
      <DummyData />
    </div>
  );
}

export default App;
