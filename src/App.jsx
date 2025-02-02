import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HeroSection from "./pages/HeroSection";
import Portfolio from "./pages/Portfolio";
import DummyData from "./components/DummyData";
import "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <DummyData />
    </div>
  );
}

export default App;
