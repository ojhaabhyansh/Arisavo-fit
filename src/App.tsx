import "./App.css";
import Hero from "./hero";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Nutrition from "./Nutrition";
import Life from "./Life";
import Workout from "./Workout";


 

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.25),_transparent_35%),linear-gradient(135deg,_#fff7ed_0%,_#fffaf0_40%,_#fef3c7_100%)] px-6 pt-28">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/life" element={<Life />} />
        <Route path="/workout" element={<Workout />} />
      </Routes>
    </div>
  );
}

export default App;
