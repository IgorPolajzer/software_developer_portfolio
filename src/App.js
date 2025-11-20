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
import ProjectPage from "./pages/ProjectPage";

function App() {
    const stars = true;

    const platforms = [
        {name: "Linkedin", url: "https://www.linkedin.com/in/igor-polajzer-developer", logo: "/assets/social/Linkedin.svg"},
        {name: "Github", url: "https://github.com/IgorPolajzer", logo: "/assets/social/Github.svg"}
    ]

    const projects = [
        {
            image: "/assets/direct4me_project/direct4me_project.png",
            route: "/projects/direct-4-me-project",
            title: "Direct4Me manager website and mobile app",
            description: `
Direct4Me is an **innovative delivery management platform** that empowers users to seamlessly create profiles and integrate **Direct4Me smart delivery boxes**.

## Website Features
- Manage delivery boxes
- Track access logs
- Monitor box status
- Receive real-time delivery notifications

## Mobile App Features
- Supports both **courier and client experiences**
- Secure Face ID login & two-factor authentication
- Couriers can collect and deliver parcels efficiently
- Clients can manage deliveries effortlessly
- Unique **QR code scanning mechanism** to unlock boxes

Direct4Me ensures a **secure and efficient delivery experience** for all users.
        `,
            status: "Completed",
            github: "https://github.com/orgs/R-AID-Github/repositories",
            access_url: "https://frontend.predovnik.dev",
            videos: [
                "/assets/direct4me_project/R-AID_mobilna_aplikacija_video.mp4",
                "/assets/direct4me_project/R-AID_projektni_video.mp4",
                "/assets/direct4me_project/spletna_aplikacija_2FA.mp4"
            ],
            technologies: [
                {name: "React", purpose: "Frontend", logo: "/assets/skills/react.svg"},
                {name: "Node.js", purpose: "Backend", logo: "/assets/skills/nodejs.svg"},
                {name: "MongoDB", purpose: "Database", logo: "/assets/skills/mongodb.svg"},
                {name: "Jetpack Compose", purpose: "Mobile App", logo: "/assets/skills/compose-multiplatform.svg"},
                {name: "Blender", purpose: "Animation", logo: "/assets/technologies/blender-svgrepo-com.svg"},
                {name: "Davinci Resolve", purpose: "Post Production", logo: "/assets/technologies/DaVinci_Resolve_17_logo.svg"},
            ]
        },
        {
            image: "/assets/tanktitans_project/tank_titans_project.png",
            route: "/projects/tank-titans",
            title: "Tank Titans",
            status: "Completed",
            description: `
Tank Titans is a **fast-paced, two-player arcade game** built in Python using Pygame.

## Gameplay
- Navigate tanks through a challenging maze
- Each player starts with **10 lives**
- Objective: outmaneuver and outshoot your opponent to be the **last tank standing**

With **classic top-down visuals** and strategic gameplay inspired by Tank Trouble, Tank Titans delivers a nostalgic yet exciting battle experience.
        `,
            github: "https://github.com/R-AID-Github/RAZVOJ-PROGRAMSKIH-SISTEMOV",
            videos: [
                "/assets/tanktitans_project/tank_titans_video.mp4"
            ],
            technologies: [
                {name: "Python", purpose: "Language", logo: "/assets/skills/python-svgrepo-com.svg"},
                {name: "PyGame", purpose: "Library", logo: "/assets/technologies/Pygame_logo.svg"},
            ]
        },
        {
            image: "/assets/portfolio_project/portfolio_project.png",
            route: "/projects/personal-portfolio-project",
            title: "Personal portfolio website",
            status: "Completed",
            description: `
A **dynamic portfolio website** built with React and hosted on AWS Amplify.

## Features
- Showcases my journey as a software developer
- Information about **background, skills, and work experience**
- Preview and downloadable CV
- Explore detailed descriptions of projects
- Contact form that sends emails directly
- Links to **LinkedIn** and **GitHub** profiles
        `,
            github: "https://github.com/IgorPolajzer/software_developer_portfolio",
            technologies: [
                {name: "React", purpose: "Frontend", logo: "/assets/skills/react.svg"},
                {name: "Tailwind", purpose: "Styling", logo: "/assets/technologies/tailwind-svgrepo-com.svg"},
                {name: "Framer Motion", purpose: "Animation", logo: "/assets/technologies/framer-svgrepo-com.svg"},
                {name: "AWS Amplify", purpose: "Hosting", logo: "/assets/technologies/aws-amplify-seeklogo.svg"},
                {name: "EmailJS", purpose: "Email Service", logo: "/assets/technologies/emailjs.svg"},
            ]
        },
        {
            image: "/assets/chess_project/Chess.png",
            route: "/projects/chess-project",
            title: "Chess",
            status: "Completed",
            description: `
Chess is a **classic two-player game** built in Java using LibGDX.

## Features
- Play on a single computer
- Clean design with smooth gameplay
- Brings the **classic game of chess to life**
        `,
            github: "https://github.com/3-letnik-VS-2024-2025/urri-board-game-IgorPolajzer.git",
            videos: [
                "/assets/chess_project/Igor_Polajzer_chess.mp4"
            ],
            technologies: [
                {name: "Java", purpose: "Language", logo: "/assets/skills/java.svg"},
                {name: "LibGDX", purpose: "Framework", logo: "/assets/technologies/LibGDX_logo.svg"},
            ]
        },
        {
            image: "/assets/patrik_pivko_website/patrik_pivko_website.png",
            route: "/projects/patrik-pivko-website",
            title: "Studio Patrik Pivko s.p. – Website",
            status: "Completed",
            description: `
Website for **masaze-pivko.com**, a massage and wellness studio in Stojnci, Slovenia.

## Services
- **Cupping therapy**: revitalizes the body and promotes regeneration
- **Classic massage**: relaxes the body and soothes the mind
- **Sports massage**: enhances muscle recovery and performance
- **Kinesiotaping**: supports muscles and joints for fater recovery

The studio emphasizes **harmonious balance** between body and spirit.  
Appointments can be scheduled via website or by contacting them directly:  
**Phone:** +386 31 238 053  
**Email:** masaze.patrikpivko@gmail.com
        `,
            access_url: "https://masaze-pivko.com/",
            technologies: [
                {name: "WordPress", purpose: "CMS", logo: "/assets/technologies/Wordpress-Logo.svg"},
                {name: "AWS Lightsail", purpose: "Hosting", logo: "/assets/technologies/amazon-lightsail.svg"},
                {name: "AWS Route 53", purpose: "Domain Provider", logo: "/assets/technologies/Route 53.svg"},
            ]
        },
        {
            image: "/assets/morph_project/morph_project_thumbnail.jpg",
            route: "/projects/morph_project",
            title: "Morph – AI-powered Personal Growth App",
            status: "In progress",
            description: `
A **cross-platform mobile application** developed as my final diploma thesis.

## Features
- Personalized self-improvement plans using **AI and gamification**
- Habit categories: **physical, mental, general**
- **Flutter & Firebase** for real-time data and authentication
- Dynamic progress-tracking with rewarding system
- AI-driven plan generation and customizable calendar
- Growth metaphors: tree avatar that grows with progress

Morph is still in active development with plans to release on **Google Play Store** and **Apple App Store**.  
This project demonstrates full-stack capabilities from concept to deployment.
        `,
            github: "https://github.com/IgorPolajzer/Morph",
            videos: [
                "/assets/morph_project/Demonstracija_Morph.mov"
            ],
            technologies: [
                {name: "Flutter", purpose: "Frontend / Mobile", logo: "/assets/skills/flutter.svg"},
                {name: "Firebase", purpose: "Backend / Cloud", logo: "/assets/technologies/icons8-firebase-24.png"},
                {name: "Firebase AI Logic", purpose: "AI / Machine Learning", logo: "/assets/technologies/ai-svgrepo-com.svg"},
                {name: "Provider / Riverpod", purpose: "State Management", logo: "/assets/technologies/flutter-package-svgrepo-com.svg"},
                {name: "Figma", purpose: "Design / UI", logo: "/assets/technologies/Figma-logo.svg"},
            ]
        }
    ];

    const qualifications = [
        {
            title: "Curriculum Vitae",
            description: "My complete professional CV showcasing experience, skills, and education.",
            file: "/assets/qualifications/Igor_Polajzer_CV.pdf"
        },
        {
            title: "Course Certificates",
            description: "Certificates for courses and training I have completed in software development.",
            file: "/assets/qualifications/Course_certificates.pdf"
        }
    ];


    const routes = [
        {path: "/", label: "Home", navbar: "true", element: <AboutPage/>},
        {path: "/projects", navbar: "true", label: "My Projects", element: <ProjectsPage projects={projects}/>},
        {
            path: "/content",
            navbar: "true",
            label: "My Page",
            element: <ContentPage
                title="Title"
                content={`# Hello!

**I'm Igor Polajžer**, a software developer.

- React & Flutter developer
- Python & Java projects
- Passionate about AI & gamification

[Check my portfolio](https://igorpolajzer.com)
`}
            />
        },
        {path: "/qualifications", navbar: "true", label: "Qualifications", element: <QualificationsPage qualifications={qualifications}/>},
        {
            path: "/contact",
            navbar: "true",
            label: "Contact Me",
            element: <ContactPage platforms={platforms} showSocial={true}/>
        },
    ];

    return (
        <Router>
            <div className={`pt-24 ${stars ? "" : "bg-[var(--color-bg-primary)]"}`}>
                <NavBar name="Igor Polajžer" title="dipl. inž. rač. in inf. tehnol. (VS)" logo="/assets/meta/dev_icon.svg"
                        type="inline" theme={true} routes={routes}/>
                {stars && <Stars/>}
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.path} path={route.path} element={route.element}/>
                    ))}
                    {projects.map((project) => (
                        <Route
                            key={project.route}
                            path={project.route}
                            element={
                                <ProjectPage
                                    title={project.title}
                                    status={project.status}
                                    description={project.description}
                                    githubUrl={project.github}
                                    url={project.access_url}
                                    videos={project.videos}
                                    technologies={project.technologies}
                                    custom={project.custom}
                                />
                            }
                        />
                    ))}
                </Routes>
                <Footer name="Igor Polajžer" mail="polajzerigor@gmail.com" platforms={platforms}/>
            </div>
        </Router>
    );
}

export default App;
