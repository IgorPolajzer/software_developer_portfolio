import './App.css';
import './css/stars.css'
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "./components/NavBar";
import AboutMe from "./pages/AboutMe"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MyProjects from "./pages/MyProjects";
import CurriculumVitae from "./pages/CurriculumVitae";
import ContactMe from "./pages/ContactMe";
import ProjectView from "./pages/ProjectView";
import MobileAppVideo from "./assets/direct4me_project/R-AID_mobilna_aplikacija_video.mp4";
import Direct4MeAnimation from "./assets/direct4me_project/R-AID_projektni_video.mp4";
import ChessVideo from "./assets/chess_project/Igor_Polajzer_chess.mp4";
import TankTitansDemoVideo from "./assets/tanktitans_project/tank_titans_video.mp4";
import MorphDemo from "./assets/morph/Demonstracija_Morph.mov"
import Stars from './components/Stars'

function App() {
    return (
        <Router>
            <NavBar/>
            <Stars/>
            <div className="App">
                <Routes>
                    <Route path="/" element={<AboutMe/>}/>
                    <Route path="/projects" element={<MyProjects/>}/>
                    <Route path="/cv" element={<CurriculumVitae/>}/>
                    <Route path="/contact" element={<ContactMe/>}/>
                    <Route path="/project" element={<MyProjects/>}/>
                    <Route path="/projects/direct-4-me-project" element={<ProjectView
                        title={"Direct4Me manager website and mobile app"}
                        description={"Direct4Me is an innovative delivery management platform that empowers users to seamlessly create profiles and integrate Direct4Me smart delivery boxes. Through the user-friendly website, manage your delivery boxes, track access logs, monitor box status, and receive real-time delivery notifications.\n" +
                            "\n" +
                            "The accompanying mobile app supports both courier and client experiences, featuring secure Face ID login and two-factor authentication. Couriers can easily collect and deliver parcels, while clients can manage their deliveries effortlessly. With a unique QR code scanning mechanism to unlock boxes, Direct4Me ensures a secure and efficient delivery experience.\n" +
                            "\n"}
                        technologies={{
                            "Frontend": "React, Google MUI",
                            "Backend": "Express, NodeJs, MongoDB",
                            "Mobile App": "JetpackCompose",
                            "Hosting": "Self hosted",
                            "Animation": "Blender",
                            "Post production": "Davinci Resolve"
                        }}
                        url={"https://frontend.predovnik.dev"}
                        completed={true}
                        custom={
                            <div>
                                <h3 className="subtitle">Animation:</h3>
                                <video width={"100%"} height={"100%"} controls>
                                    <source src={Direct4MeAnimation} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                                <hr/>
                                <h3 className="subtitle">Project demo:</h3>
                                <video width={"100%"} height={"100%"} controls>
                                    <source src={MobileAppVideo} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        }
                        githubUrl={"https://github.com/orgs/R-AID-Github/repositories"}
                    />
                    }/>
                    <Route path="/projects/personal-portfolio-project" element={<ProjectView
                        title={"My personal portfolio website"}
                        description={"This project is a dynamic portfolio website built with React and hosted on AWS Amplify, showcasing my journey as a software developer. It features information about my background, skills, and work experience, along with a preview and downloadable CV. Visitors can explore detailed descriptions of my projects and easily contact me through a form that sends emails directly to my inbox. Additionally, links to my LinkedIn and GitHub profiles are available for further connection and exploration of my work."}
                        technologies={{
                            "Frontend": "React, Bootstrap, CSS, Framer Motion",
                            "Email service": "EmailJs",
                            "Hosting": "AWS Amplify",
                            "Domain provider": "AWS Route 53",
                        }}
                        completed={false}
                        githubUrl={"https://github.com/IgorPolajzer/software_developer_portfolio"}
                    />}/>
                    <Route path="/projects/morph" element={
                        <ProjectView
                            title="Morph"
                            description="Morph is a cross-platform mobile application I developed as my final diploma thesis for my Bachelor’s degree in Computer Science and Information Technology Engineering (FERI, University of Maribor). The app leverages large language models (LLMs) and gamification to generate personalized self-improvement plans across three habit categories: physical, mental, and general.

                            Built with Flutter and Firebase, Morph includes user authentication, real-time cloud data synchronization, and a dynamic progress-tracking system that rewards consistency. The application features AI-driven plan generation, a customizable calendar, and visually engaging growth metaphors (such as a tree avatar that grows as users progress).

                            Morph is still in active development, with plans to release it on both the Google Play Store and Apple App Store. This project demonstrates not only my skills in mobile development and AI integration but also my ability to deliver a complete full-stack solution – from concept and design to implementation, testing, and future deployment."
                            technologies={{
                                "Frontend / Mobile App": "Flutter, Dart",
                                "Backend / Cloud": "Firebase (Authentication, Firestore, Cloud Functions)",
                                "AI / Machine Learning": "Awan LLM",
                                "State Management": "Provider / Riverpod",
                                "UI / UX": "Figma",
                                "Deployment": "Planned for Google Play Store and Apple App Store",
                                "Version Control": "Git, GitHub"
                            }}
                            custom={
                                <div>
                                    <h3 className="subtitle">Project demo:</h3>
                                    <video width={"100%"} height={"100%"} controls>
                                        <source src={MorphDemo} type="video/mp4"/>
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            }
                            completed={false}
                            githubUrl={"https://github.com/IgorPolajzer/Morph"}
                        />
                    }/>
                    <Route path="/projects/tank-titans" element={
                        <ProjectView
                            title="Tank Titans"
                            description="Tank Titans is a fast-paced, two-player arcade game built in Python using Pygame. Players navigate tanks through a challenging maze, each starting with 10 lives. The objective? Outmaneuver and outshoot your opponent to be the last tank standing! With classic top-down visuals and strategic gameplay inspired by Tank Trouble, Tank Titans delivers a nostalgic yet exciting battle experience."
                            technologies={{
                                "Language": "Python",
                                "Library": "PyGame"
                            }}
                            completed={true}
                            custom={
                                <div>
                                    <h3 className="subtitle">Project demo:</h3>
                                    <video width={"100%"} height={"100%"} controls>
                                        <source src={TankTitansDemoVideo} type="video/mp4"/>
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            }
                            githubUrl={"https://github.com/R-AID-Github/RAZVOJ-PROGRAMSKIH-SISTEMOV"}
                        />
                    }/>
                    <Route path="/projects/chess-project" element={<ProjectView
                        title={"Chess"}
                        description={"Chess is a simple game built in Java with LibGDX, allowing two players to play on a single computer. It features a clean design and smooth gameplay, bringing the classic game of chess to life."}
                        technologies={{
                            "Language": "Java",
                            "Framework": "LibGdx"
                        }}
                        completed={true}
                        custom={
                            <div>
                                <h3 className="subtitle">Project demo:</h3>
                                <video width={"100%"} height={"100%"} controls>
                                    <source src={ChessVideo} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        }
                        githubUrl={"https://github.com/3-letnik-VS-2024-2025/urri-board-game-IgorPolajzer.git"}
                    />
                    }/>
                    <Route path="/projects/patrik-pivko-website" element={<ProjectView
                        title={"Spletna stran - Studio za masažo in dobro počutje - Patrik Pivko s.p."}
                        description={"​The website masaze-pivko.com presents Patrik Pivko s.p., a massage and wellness studio located in Stojnci, Slovenia. The studio offers a variety of therapeutic services, including:​\n" +
                            "\n" +
                            "Cupping therapy: A technique aimed at revitalizing the body and promoting regeneration.\n" +
                            "\n" +
                            "Classic massage: Designed to relax the body and soothe the mind.\n" +
                            "\n" +
                            "Sports massage: Focused on muscle recovery and enhancing physical performance.\n" +
                            "\n" +
                            "Kinesiotaping: A method to support muscles and joints, aiding in faster recovery.​\n" +
                            "\n" +
                            "The studio emphasizes creating a harmonious balance between body and spirit, encouraging clients to invest in their well-being. Appointments can be scheduled through the website or by contacting them directly at +386 31 238 053 or via email at masaze.patrikpivko@gmail.com."}
                        technologies={{
                            "Content Management System": "Wordpress",
                            "Hosting": "AWS Lightsail",
                            "Domain provider": "AWS Route 53",
                        }}
                        completed={true}
                        url={"https://masaze-pivko.com/"}
                    />
                    }/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
