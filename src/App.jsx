// import { useEffect } from 'react' 
import DummyData from './components/DummyData'
import './App.css'
// import GlobalBackground from './assets/yellowFlowerField.jpg';
import { Outlet } from "react-router-dom";
import NavBar from './components/NavBar';
import './index.css';

function App() {
  return (
    <div >
      <NavBar />
      <DummyData />
      <Outlet />
      {/* <Footer/> */}
    </div>
  )
}

export default App
