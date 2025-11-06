import NavBar from "./components/NavBar";
import AboutMe from "./pages/AboutMe"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MyProjects from "./pages/MyProjects";
import CurriculumVitae from "./pages/CurriculumVitae";
import ContactMe from "./pages/ContactMe";
import Stars from './components/Stars'
import './styles/global.css';

function App() {

    const routes = [
        {path: "/", label: "Home", element: <AboutMe/>},
        {path: "/projects", label: "My Projects", element: <MyProjects/>},
        {path: "/cv", label: "CV - Curriculum Vitae", element: <CurriculumVitae/>},
        {path: "/contact", label: "Contact Me", element: <ContactMe/>},
    ];

    return (
        <Router>
            <div className="pt-24">
                <NavBar title="Igor Polajžer" routes={routes}/>
                <Stars/>
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.path} path={route.path} element={route.element}/>
                    ))}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
