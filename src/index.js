import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from './components/ThemeContext';
import AvatarCard from "./components/AvatarCard";
import GridCard from "./components/GridCard";
import PaginatedCard from "./components/PaginatedCard";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import QualificationsPage from "./pages/QualificationsPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import NavBar from "./components/NavBar";
import Stars from "./components/Stars";
import ProjectPage from "./pages/ProjectPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './styles/global.css';

function App() {
    const stars = true;
    const themeToggle = true;

    const platforms = [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/igor-polajzer-developer",
            logo: "/assets/social/Linkedin.svg"
        },
        {name: "Github", url: "https://github.com/IgorPolajzer", logo: "/assets/social/Github.svg"}
    ]

    const gridElements = [
        // Backend
        {iconPath: "/assets/skills/spring-boot.svg", label: "Spring Boot"},
        {iconPath: "/assets/skills/nodejs.svg", label: "Node.js"},
        {iconPath: "/assets/skills/expressjs-icon.svg", label: "Express.js"},

        // Databases
        {iconPath: "/assets/skills/postgresql.svg", label: "PostgreSQL"},
        {iconPath: "/assets/skills/mysql.svg", label: "mySQL"},
        {iconPath: "/assets/skills/mongodb.svg", label: "MongoDB"},

        // Third party backend services
        {iconPath: "/assets/skills/Logo_of_Keycloak.svg", label: "Keycloak"},
        {iconPath: "/assets/skills/Apache-pulsar-logo.svg", label: "Apache Pulsar"},
        {iconPath: "/assets/technologies/icons8-firebase-24.png", label: "Firebase"},
        {iconPath: "/assets/technologies/Amazon_Web_Services-Logo.wine.svg", label: "AWS"},

        // DevOps
        {iconPath: "/assets/skills/git-icon.svg", label: "Git"},
        {iconPath: "/assets/skills/docker-icon.svg", label: "Docker"},

        // Machine learning
        {iconPath: "/assets/skills/Scikit_learn_logo_small.svg", label: "Scikit-learn"},
        {iconPath: "/assets/skills/PyTorch_logo_black.svg", label: "PyTorch"},

        // Programming languages
        {iconPath: "/assets/skills/java.svg", label: "Java"},
        {iconPath: "/assets/skills/python-svgrepo-com.svg", label: "Python"},
        {iconPath: "/assets/skills/c-plusplus.svg", label: "C++"},
        {iconPath: "/assets/skills/kotlin-icon.svg", label: "Kotlin"},

        // Mobile development
        {iconPath: "/assets/skills/compose-multiplatform.svg", label: "Jetpack Compose"},
        {iconPath: "/assets/skills/flutter.svg", label: "Flutter"},

        // Frontent
        {iconPath: "/assets/skills/html-5.svg", label: "HTML"},
        {iconPath: "/assets/skills/react.svg", label: "React"},
        {iconPath: "/assets/skills/css-3.svg", label: "CSS"},
        {iconPath: "/assets/technologies/tailwind-svgrepo-com.svg", label: "Tailwind CSS"},

        {iconPath: "/assets/technologies/loading-2-svgrepo-com.svg", label: "Always learning."},

    ];

    const pages = [
        {
            title: "Tridens d.o.o - Software Developer",
            subtitle: "March 24 2025 - Present",
            image: "/assets/pages/Tridens.png",
            content: `Developing and maintaining distributed backend microservices and APIs. I use Java Spring Boot, Hibernate, PostgreSQL, and Keylcoak, alongside other tools like Mockito/JUnit and Postman for testing, Docker for containerization, and Apache Pulsar for message queuing.`
        },
        {
            title: "Setronica d.o.o - QA Engineer",
            subtitle: "August 1 2024 - June 1 2025",
            image: "/assets/pages/setronica_logo.png",
            content: `Ensured quality and performance of LLM models by evaluating outputs, labeling training datasets, and collaborating with international teams on AI refinement.`
        },
        {
            title: "Skylabs d.o.o - Software Engineer",
            subtitle: "August 1 2023 - 31 September 2023",
            image: "/assets/pages/skylabs_logo.png",
            content: `Developed Python wrappers for C++ libraries and exposed them through a RESTful API with Flask.`
        }
    ];

    const cards = [
        <AvatarCard title="Igor Polajžer" subtitle="SOFTWARE ENGINEER" avatar="/assets/meta/Profesional_portrait.jpg"
                    content="I'm Igor Polajžer, a **Software Engineer** and Master’s candidate at FERI.

                    My interests cover ***backend and distributed systems, mobile application development, machine learning**, and **digital signal processing***.

                    Driven by curiosity and a constant push to **improve.**"/>,
        <GridCard title="Tech Stack" subtitle="IF YOU WANT TO SEE IT IN ACTION, TAKE A LOOK AT MY PROJECTS"
                  gridElements={gridElements}/>,
        <PaginatedCard title="Work Experience" subtitle="COMPANIES I WORKED AT" pages={pages}/>,
    ];

    const timelineItems = [
        {
            date: "July 22 2003",
            title: "Birth",
            location: "Maribor - Slovenia",
            iconPath: "../assets/timeline_icons/birthday-icon.svg",
        },
        {
            date: "September 1 2009 - June 24 2018",
            title: "Primary School Cirkulane-Zavrč",
            location: "Cirkulane - Slovenia",
            iconPath: "../assets/timeline_icons/os-cirkulane-zavrc-icon.svg",
        },
        {
            date: "September 1 2018 - June 2022",
            title: "Mechatronics Technician - Electrical and Computer School Ptuj",
            location: "Ptuj - Slovenia",
            iconPath: "../assets/timeline_icons/scptuj-icon.svg",
        },
        {
            date: "October 1 2022 - August 2025",
            title: "Bachelor of Computer Science - FERI",
            location: "Maribor - Slovenia",
            iconPath: "../assets/timeline_icons/university.svg",
        },
        {
            date: "August 2023 - October 2023",
            title: "Software developer intern - Skylabs d.o.o",
            location: "Maribor - Slovenia",
            iconPath: "../assets/timeline_icons/skylabs_logo.png",
        },
        {
            date: "August 2024 - June 2025",
            title: "Programmer - Setronica d.o.o",
            location: "Ljubljana (remote) - Slovenia",
            iconPath: "../assets/timeline_icons/setronica_logo.png",
        },
        {
            date: "March 2025 - Present",
            title: "Backend Developer - Tridens d.o.o",
            location: "Maribor - Slovenia",
            iconPath: "../assets/timeline_icons/Tridens.png",
        },
        {
            date: "October 2025 - Present [Expected graduation: 2027]",
            title: "Master of Computer Science - FERI",
            location: "Maribor - Slovenia",
            iconPath: "../assets/timeline_icons/university.svg",
        },
    ];

    const projects = [
        {
            image: "/assets/daq_platform/daq_platform.png",
            route: "/projects/real-time-daq-platform",
            title: "Real-Time DAQ & Signal Analysis Platform",
            status: "Completed",
            description: `
A modular real-time data acquisition and signal analysis platform, built out of curiosity about **digital signal processing** and a wish to get hands-on with **embedded systems**.

The application resembles a simplified engineering measurement tool. Its central idea is a strict separation between **data acquisition** and **signal processing**: the pipeline is **source-agnostic**, running identically whether the samples come from a microphone, an Arduino, or a WAV file.`,
            pdfs: [
                {title: "Project presentation", file: "/assets/daq_platform/dewesoft_presentation.pdf"},
            ],
            videos: [
                "/assets/daq_platform/daq_platform_demo.webm"
            ],
            technologies: [
                {name: "Python", purpose: "Language", logo: "/assets/skills/python-svgrepo-com.svg"},
                {name: "NumPy", purpose: "Signal Processing", logo: "/assets/technologies/NumPy_logo_2020.svg"},
                {name: "ScyPy", purpose: "Signal Processing", logo: "/assets/technologies/SCIPY_2.svg"},
                {name: "Arduino Nano", purpose: "ADC / Sensor Acquisition", logo: "/assets/technologies/Arduino_Nano_v3_0.svg"},
                {name: "PyQt6", purpose: "UI Framework", logo: "/assets/technologies/Qt_logo_2016.svg"},
                {name: "sounddevice", purpose: "Audio Acquisition", logo: "/assets/technologies/pypi-seeklogo.svg"},
                {name: "soundfile", purpose: "WAV I/O", logo: "/assets/technologies/pypi-seeklogo.svg"},
                {name: "pyserial", purpose: "Serial Acquisition", logo: "/assets/technologies/pypi-seeklogo.svg"}
            ]
        },
        {
            image: "/assets/morph_project/morph_project_thumbnail.jpg",
            route: "/projects/morph_project",
            title: "Morph – AI-powered Personal Growth App (Computer Science Diploma Thesis)",
            status: "Completed",
            description: `
**Morph** is a cross-platform mobile app I created for my [diploma thesis](https://dk.um.si/IzpisGradiva.php?id=94126&lang=slv), a project where I challenged myself to blend **AI**, **gamification**, and intuitive design into a truly motivating self-improvement experience.

With just a short description of your goals, Morph uses a large language model to generate **personalized growth plans** filled with meaningful tasks and helpful habits across **physical**, **mental**, and **general** categories. As you progress, your in-app **tree avatar grows with you**, turning consistency into something visual, rewarding, and fun.

Built from the ground up with **Flutter** and **Firebase**, Morph features real-time syncing, authentication, a customizable calendar, and smooth progress-tracking—all crafted while pushing myself to learn new tools, solve real challenges, and expand my full-stack skill set.

Morph is still growing (just like its users), with a public release on the **Google Play Store** and Apple **App Store** planned in **2026**.  
I’m excited to keep evolving it and turning it into something people can genuinely benefit from.`,
            github: "https://github.com/IgorPolajzer/Morph",
            videos: [
                "/assets/morph_project/Demonstracija_Morph.mov"
            ],
            pdfs: [
                {title: "Diploma Thesis presentation", file: "/assets/morph_project/Igor_Polajzer_predstavitev_diplomske_naloge.pdf"},
                {title: "Diploma Thesis - Development of the mobile application Morph", file: "/assets/morph_project/VS_Polajzer_Igor_2025.pdf"}
            ],
            technologies: [
                {name: "Flutter", purpose: "Frontend / Mobile", logo: "/assets/skills/flutter.svg"},
                {name: "Firebase", purpose: "Backend / Cloud", logo: "/assets/technologies/icons8-firebase-24.png"},
                {
                    name: "Firebase AI Logic",
                    purpose: "AI / Machine Learning",
                    logo: "/assets/technologies/ai-svgrepo-com.svg"
                },
                {
                    name: "Provider / Riverpod",
                    purpose: "State Management",
                    logo: "/assets/technologies/flutter-package-svgrepo-com.svg"
                },
                {name: "Figma", purpose: "Design / UI", logo: "/assets/technologies/Figma-logo.svg"},
            ]
        },
        {
            image: "/assets/portfolio_project/portfolio_project.png",
            route: "/projects/personal-portfolio-project",
            title: "Personal portfolio website & Portfolio DSL",
            status: "In progress",
            description: `
Welcome to the **portfolio you're browsing right now** — a dynamic and ever-evolving site built with React and hosted on AWS Amplify!

## What you can do here
- Explore my journey as a software developer  
- Dive into my **skills, background, and work experience**
- View (or download!) my CV  
- Check out detailed project pages with videos, tech stacks, and writeups  
- Reach out to me directly through the contact form  
- Find quick links to my **LinkedIn** and **GitHub**  

**Coming Soon: Build Your Own Portfolio**  
I'm currently working on a custom **domain-specific language (DSL)** for portfolio creation.  
Soon, **you** will be able to generate your own portfolio website using a simple, expressive DSL notation — right here.

Have fun exploring!
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
            image: "/assets/direct4me_project/direct4me_project.png",
            route: "/projects/direct-4-me-project",
            title: "Direct4Me manager website and mobile app",
            description: `
Direct4Me is an **innovative delivery management platform** developed as a **university project** by the **Team R-AID**. The core team consisted of **Igor Polajžer** (me), **Dejan Rojko**, and **Anej Predovnik**. The platform empowers users to seamlessly create profiles and integrate **Direct4Me smart delivery boxes**.

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

**Find out more about the project and R-AID team here:** [R-AID Direct4Me presentation](https://onedrive.live.com/personal/64f8d6f5c33b9908/_layouts/15/Doc.aspx?sourcedoc=%7B23bf8bd6-9145-4bc1-8dbd-5b6fbb68cd08%7D&action=default&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3AvYy82NGY4ZDZmNWMzM2I5OTA4L0VkYUx2eU5Ga2NGTGpiMWJiN3RvelFnQjE1bFBtaVN0LU1HdHFkZVJTUnA1MWc_ZT1yTkxNQmM&slrid=aa3bdca1-b013-0000-9a6a-730ca904f173&originalPath=aHR0cHM6Ly8xZHJ2Lm1zL3AvYy82NGY4ZDZmNWMzM2I5OTA4L0lRRFdpNzhqUlpIQlM0MjlXMi03YU0wSUFkZVpUNW9rcmZqQnJhblhrVWthZWRZP3J0aW1lPWNqeGdxcTBxM2tn&CID=fb659215-c44d-49c2-948c-34d7fed37f05&_SRM=0%3AG%3A51&file=Kon%C4%8DnaPredstavitev_R-AID.pptx)
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
                {
                    name: "Davinci Resolve",
                    purpose: "Post Production",
                    logo: "/assets/technologies/DaVinci_Resolve_17_logo.svg"
                },
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
            image: "/assets/chess_project/Chess.png",
            route: "/projects/chess-project",
            title: "Chess",
            status: "Completed",
            description: `
A **classic two-player game** of chess built from the ground up using **Java and the LibGDX framework**. This project served as a rigorous exercise in **algorithmic thinking**, **complex state management**, and **object-oriented design**. It required implementing key algorithms for movement, board validation, and game state detection (checkmate, stalemate), fundamentally strengthening my problem-solving skills.        `,
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
This project, my **first freelance commission**, provided invaluable, real-world experience in delivering a complete digital solution from client brief to deployment.

**Key Achievements & Skills Demonstrated:**

- **Client Solution Architecture:** Successfully researched client needs and determined the **most cost-effective and sustainable solution**, balancing business requirements with long-term hosting and maintenance budgets.
- **Cloud Deployment:** Gained hands-on expertise managing the full setup, configuration, and maintenance of the site on **AWS**, ensuring a reliable and optimized cloud presence.
- **End-to-End Delivery:** Managed the complete lifecycle, translating the client's business goals into a functional **WordPress** platform ready for immediate use.

## Platform & Services

The website, **masaze-pivko.com**, serves as the digital hub for a massage and wellness studio in Stojnci, Slovenia. It highlights various services (Cupping therapy, Sports massage, etc.) and provides clear scheduling channels:

- **Phone:** +386 31 238 053
- **Email:** masaze.patrikpivko@gmail.com`,
            access_url: "https://masaze-pivko.com/",
            technologies: [
                {name: "WordPress", purpose: "CMS", logo: "/assets/technologies/Wordpress-Logo.svg"},
                {name: "AWS Lightsail", purpose: "Hosting", logo: "/assets/technologies/amazon-lightsail.svg"},
                {name: "AWS Route 53", purpose: "Domain Provider", logo: "/assets/technologies/Route 53.svg"},
            ]
        },
        {
            image: "/assets/maturitetna_naloga/slika.jpg",
            route: "/projects/coin-counting-machine",
            title: "Coin counting machine (Mechatronics Matura Thesis)",
            status: "Completed",
            description: `This project was the start of my engineering journey, my final **matura project** to complete my education as a **Mechatronics Technician** at the Electrical and Computer School Ptuj. Looking back, it's where I first fell in love with building things that combine hardware, logic, and code.

## The Build
The device mechanically sorts Euro coins by size into separate compartments, where they trigger switches made from copper contacts and springs. An **Arduino Nano** reads these signals, counts and sums the coins, and displays the result on a 4x20 LCD screen.

## Challenges & Lessons
With zero prior programming experience, I had to learn Arduino's C-based language from scratch, debugging, iterating, and leaning on my mentor for guidance along the way. Beyond the code itself, I designed the sorting matrix and electrical schematics in **Splan**, wired the circuit in **Fritzing**, and modeled the housing in **Fusion 360**, with plenty of trial and error spent getting the mechanical tolerances right so coins would sort reliably every time.

This project planted the seed for everything that followed. It's where I first experienced the full loop of designing, building, debugging, and refining an engineering solution, a process I still apply every day as a software developer.`,
            pdfs: [
                {title: "Matura Thesis presentation", file: "/assets/maturitetna_naloga/Igor_Polajzer_maturitetna_naloga_predstavitev.pdf"},
                {title: "Matura Thesis - Coin counting machine", file: "/assets/maturitetna_naloga/Igor_Polajzer_maturitetna_naloga.pdf"}
            ],
            technologies: [
                {name: "Arduino Nano", purpose: "Microcontroller", logo: "/assets/technologies/Arduino_Nano_v3_0.svg"},
                {name: "AZ-Delivery 4x20 LCD + I2C Adapter", purpose: "Display Output", logo: "/assets/technologies/i2c-bus.svg"},
                {name: "Arduino IDE", purpose: "Programming Environment", logo: "/assets/technologies/Arduino_IDE_logo.svg"},
                {name: "Splan", purpose: "Electrical Schematic Design", logo: "/assets/technologies/splan-sPlan70.svg"},
                {name: "Fusion 360", purpose: "3D Modeling", logo: "/assets/technologies/Fusion360_Logo.svg"},
            ]
        }
    ];

    const qualifications = [
        {
            title: "Curriculum Vitae",
            description: "My complete professional CV showcasing experience, skills, and education.",
            file: "/assets/qualifications/Igor_Polajzer_CV_ENG.pdf"
        },
        {
            title: "BSc –  Computer Science and Information Technology Engineering (FERI)",
            description: "Bachelor of Science in Computer Science and Information Technology Engineering from FERI, University of Maribor, granting the professional title dipl. inž. rač. in inf. tehnol. (VS).",
            file: "/assets/qualifications/Igor_Polajzer_FERI_RIT_diploma.pdf"
        },
        {
            title: "The Complete Flutter\n" +
                "Development Bootcamp\n" +
                "with Dart",
            file: "/assets/qualifications/Flutter_course.pdf"
        },
        {
            title: "Fundamentals of Deep Learning - Nvidia",
            file: "/assets/qualifications/Fundamentals_of_deep_learning _ NVIDIA.pdf"
        }
    ];


    const contactMeInfo = {
        serviceId: process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        templateId: process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        publicKey: process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY,
        successText: "Thank you for contacting me — I'll respond soon!",
        failureText: "Oops, something went wrong"
    }

    const routes = [
        {
            path: "/",
            label: "Home",
            navbar: "true",
            element: <AboutPage cards={cards} timelineItems={timelineItems}/>
        },
        {path: "/projects", navbar: "true", label: "My Projects", element: <ProjectsPage projects={projects}/>},
        {
            path: "/qualifications",
            navbar: "true",
            label: "Qualifications",
            element: <QualificationsPage qualifications={qualifications}/>
        },
        {
            path: "/contact",
            navbar: "true",
            label: "Contact Me",
            element: <ContactPage platforms={platforms} showSocial={true} contactMeInfo={contactMeInfo}/>
        },
    ];

    return (
        <Router>
            <div className={`pt-24 ${stars ? "" : "bg-[var(--color-bg-primary)]"}`}>
                <NavBar name="Igor Polajžer" title="dipl. inž. rač. in inf. tehnol. (VS)"
                        logo="/assets/meta/dev_icon.svg"
                        type="inline" themeToggle={themeToggle} routes={routes}/>
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
                                    pdfs={project.pdfs}
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider themeProp={'dark'}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
);

reportWebVitals();