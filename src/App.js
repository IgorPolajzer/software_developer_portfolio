import './App.css';
import NavBar from "./components/NavBar";
import AboutMe from "./pages/AboutMe"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyProjects from "./pages/MyProjects";
import CurriculumVitae from "./pages/CurriculumVitae";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
  <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/cv" element={<CurriculumVitae />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
    // <div className="App">
    //     <NavBar/>
    //     <AboutMe/>
    // </div>
  );
}

export default App;
