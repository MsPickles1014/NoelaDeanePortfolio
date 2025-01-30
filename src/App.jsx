// import { useEffect } from 'react' 
import DummyData from './components/DummyData'
import './App.css'
// import GlobalBackground from './assets/yellowFlowerField.jpg';
import { Outlet } from "react-router-dom";
import NavBar from './components/NavBar';
import './index.css';
import HeroSection from './pages/HeroSection';

function App() {
  return (
    <div >
      <NavBar />
      <DummyData />
      <HeroSection/>
      <Outlet />
      {/* <Footer/> */}
    </div>
  )
}

export default App
