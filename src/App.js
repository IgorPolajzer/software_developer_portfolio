import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import QualificationsPage from "./pages/QualificationsPage";
import ContactPage from "./pages/ContactPage";
import Stars from './components/Stars'
import './styles/global.css';
import ContentPage from "./pages/ContentPage";
import Footer from "./components/Footer";
function App() {

    const platforms = [
        { name: "Linkedin", url: "https://www.linkedin.com/in/igor-polajzer-developer", logo: "/Linkedin.svg"},
        { name: "Github", url: "https://github.com/IgorPolajzer", logo: "/Github.svg" }
    ]

    const stars = true;

    const routes = [
        {path: "/", label: "Home", element: <AboutPage/>},
        {path: "/projects", label: "My Projects", element: <ProjectsPage/>},
        {path: "/content", label: "My Page", element: <ContentPage/>},
        {path: "/cv", label: "Qualifications", element: <QualificationsPage/>},
        {path: "/contact", label: "Contact Me", element: <ContactPage platforms={platforms} showSocial={true}/>},
    ];

    return (
        <Router>
            <div className={`pt-24 ${stars ? "" : "bg-[var(--color-background)]"}`}>
                <NavBar name="Igor Polajžer" title="dipl. inž. rač. in inf. tehnol. (VS)" logo="/dev_icon.svg" type="inline" routes={routes}/>
                {stars && <Stars />}
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.path} path={route.path} element={route.element}/>
                    ))}
                </Routes>
                <Footer name="Igor Polajžer" mail="polajzerigor@gmail.com" platforms={platforms}/>
            </div>
        </Router>
    );
}

export default App;
