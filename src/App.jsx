import NavBar from "./components/NavBar";
import DummyData from "./components/DummyData";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <NavBar />
      <DummyData />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
