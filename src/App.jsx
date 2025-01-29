import DummyData from './components/DummyData'
import './App.css'
import GlobalBackground from "./assets/yellowFlowerField.jpg";
import Header from './components/Header';

function App() {
    return (
 <div 
 style={{
  backgroundImage: `url(${GlobalBackground})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
}}
 >
  <DummyData/>
  <Header/>
 </div>
  )
}

export default App
