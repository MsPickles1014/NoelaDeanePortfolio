import NavBar from "./components/NavBar";
import DummyData from "./components/DummyData";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <DummyData />
    </div>
  );
}

export default App;
