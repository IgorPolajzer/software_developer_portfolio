import './App.css';
import './css/stars.css'
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "./components/NavBar";
import AboutMe from "./pages/AboutMe"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyProjects from "./pages/MyProjects";
import CurriculumVitae from "./pages/CurriculumVitae";
import ContactMe from "./pages/ContactMe";
import ProjectView from "./pages/ProjectView";
import MobileAppVideo from "./assets/direct4me_project/R-AID_mobilna_aplikacija_video.mp4";
import Direct4MeAnimation from "./assets/direct4me_project/R-AID_projektni_video.mp4";
import ChessVideo from "./assets/chess_project/Igor_Polajzer_chess.mp4";
import TankTitansDemoVideo from "./assets/tanktitans_project/tank_titans_video.mp4";
import Stars from './components/Stars'

function App() {
  return (
    <Router>
        <div className="App">
            <Stars/>
            <NavBar/>
            <br></br>
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
                <Route path="/projects/sync-fluencer-project" element={
                    <ProjectView
                        title="SyncFluencer"
                        description="SyncFluencer is a powerful platform designed to streamline content creation for influencers and digital marketers. It enables users to effortlessly publish short-term content across multiple social media platforms simultaneously. By integrating the advanced capabilities of the OpenAI API, SyncFluencer goes beyond just posting—it generates optimized tags and tailored descriptions for each platform, ensuring maximum engagement and reach. Simply provide a brief description of your content, and let SyncFluencer do the rest, making social media management more efficient and impactful."
                        technologies={{
                            "Hosting": "AWS Amplify",
                            "User authentication": "AWS Cognito",
                            "Domain provider": "AWS Route 53",
                            "Front end": "React"
                        }}
                        url={"https://main.drrax851pials.amplifyapp.com/"}
                        completed={false}
                        githubUrl={"https://github.com/Autom8Software/SyncFluencer"}
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
                        "language": "Java",
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
            </Routes>
        </div>
    </Router>
  );
}

export default App;
