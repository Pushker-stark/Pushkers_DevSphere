import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WorkExperience from "./components/WorkExperience";
import ExtraCurricular from "./components/ExtraCurricular";
import Navbar from "./components/Navbar";






function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/extra-curricular" element={<ExtraCurricular />} />
          <Route path="/experience" element={<WorkExperience />} />
        </Routes>
        <img className="rounded-full" src="/dp1.png" alt="" />
        <h1 className="text-red-500 text-5xl">Pushker's DevSphere!</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click me!
        </button>
      </BrowserRouter>
    </div>
  )
}


export default App
