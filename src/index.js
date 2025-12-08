import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './components/ThemeContext';
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
import ContentPage from "./pages/ContentPage";

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

    const skills = [
        {iconPath: "/assets/skills/html-5.svg", label: "HTML"},
        {iconPath: "/assets/skills/css-3.svg", label: "CSS"},
        {iconPath: "/assets/skills/javascript.svg", label: "JavaScript"},
        {iconPath: "/assets/skills/nodejs.svg", label: "Node.js"},
        {iconPath: "/assets/skills/mongodb.svg", label: "MongoDB"},
        {iconPath: "/assets/skills/mysql.svg", label: "mySQL"},
        {iconPath: "/assets/skills/postgresql.svg", label: "PostgreSQL"},
        {iconPath: "/assets/skills/full-stack.svg", label: "Web Stacks (MERN, LAMP)"},
        {iconPath: "/assets/skills/git-icon.svg", label: "Git"},
        {iconPath: "/assets/skills/docker-icon.svg", label: "Docker"},
        {iconPath: "/assets/skills/c.svg", label: "C"},
        {iconPath: "/assets/skills/c-plusplus.svg", label: "C++"},
        {iconPath: "/assets/skills/c-sharp.svg", label: "C#"},
        {iconPath: "/assets/skills/java.svg", label: "Java"},
        {iconPath: "/assets/skills/spring-boot.svg", label: "Spring Boot"},
        {iconPath: "/assets/skills/kotlin-icon.svg", label: "Kotlin"},
        {iconPath: "/assets/skills/android-icon.svg", label: "Android Studio"},
        {iconPath: "/assets/skills/compose-multiplatform.svg", label: "Jetpack Compose"},
        {iconPath: "/assets/skills/flutter.svg", label: "Flutter"},
        {iconPath: "/assets/skills/python-svgrepo-com.svg", label: "Python"},
    ];

    const pages = [
        {
            title: "Tridens d.o.o",
            subtitle: "Software Developer",
            note: "March 24 2025 - Present",
            image: "/assets/pages/Tridens.png",
            content: `Developing and maintaining scalable backend microservices and APIs. I use Java Spring Boot, Hibernate, and PostgreSQL, alongside other tools like Mockito/JUnit and Postman for testing, Docker for containerization, and Apache Pulsar for message queuing.`
        },
        {
            title: "Setronica d.o.o",
            subtitle: "Internship – QA Engineer",
            note: "August 1 2024 - June 1 2025",
            image: "/assets/pages/setronica_logo.png",
            content: `Ensured quality and performance of LLM models by rigorously evaluating outputs, labeling training datasets, and collaborating with international teams on AI refinement and solution optimization.`
        },
        {
            title: "Skylabs d.o.o",
            subtitle: "Internship – Software Engineer",
            note: "August 1 2023 - 31 September 2023",
            image: "/assets/pages/skylabs_logo.png",
            content: `Developed Python wrappers for C++ libraries, designed and built RESTful APIs, and managed contributions across the full software development lifecycle for high-tech solutions.`
        }
    ];

    const cards = [
        <AvatarCard title="Igor Polajžer" subtitle="SOFTWARE DEVELOPER" avatar="/assets/meta/ip-tridens-white.jpg"
                    content="I'm Igor Polajžer, a Software Engineer and Master’s candidate at FERI. My expertise cover scalable systems architecture, cross-platform application development, and AI/ML integration. Driven by a passion for lifelong learning, I focus on delivering robust, innovative solutions for complex engineering challenges across the full software stack."/>,
        <GridCard title="My Skills" subtitle="IF YOU WANT TO SEE MY SKILLS IN ACTION TAKE A LOOK AT MY PROJECTS"
                  skills={skills}/>,
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
            // Changed title to match "Mechatronics Technician" from CV
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
            // Changed end date to align with CV (August 2023 - October 2023)
            date: "August 2023 - October 2023",
            title: "Software developer intern - Skylabs d.o.o",
            location: "Maribor - Slovenia",
            iconPath: "../assets/timeline_icons/skylabs_logo.png",
        },
        {
            // Simplified end date to align with CV (August 2024 - June 2025)
            date: "August 2024 - June 2025",
            title: "Programmer - Setronica d.o.o",
            location: "Ljubljana (remote) - Slovenia",
            iconPath: "../assets/timeline_icons/setronica_logo.png",
        },
        {
            // Simplified start date to align with CV (March 2025 - Present)
            date: "March 2025 - Present",
            title: "Backend Developer - Tridens d.o.o",
            location: "Maribor - Slovenia",
            iconPath: "../assets/timeline_icons/Tridens.png",
        },
        {
            // Simplified title and date to align with CV (Master of Computer Science, in-progress)
            date: "October 2025 - Present [Expected graduation: 2027]",
            title: "Master of Computer Science - FERI",
            location: "Maribor - Slovenia",
            iconPath: "../assets/timeline_icons/university.svg",
        },
    ];

    const projects = [
        {
            image: "/assets/morph_project/morph_project_thumbnail.jpg",
            route: "/projects/morph_project",
            title: "Morph – AI-powered Personal Growth App",
            status: "In progress",
            description: `
**Morph** is a cross-platform mobile app I created for my [diploma thesis](https://dk.um.si/IzpisGradiva.php?id=94126&lang=slv), a project where I challenged myself to blend **AI**, **gamification**, and intuitive design into a truly motivating self-improvement experience.

With just a short description of your goals, Morph uses a large language model to generate **personalized growth plans** filled with meaningful tasks and helpful habits across **physical**, **mental**, and **general** categories. As you progress, your in-app **tree avatar grows with you**, turning consistency into something visual, rewarding, and fun.

Built from the ground up with **Flutter** and **Firebase**, Morph features real-time syncing, authentication, a customizable calendar, and smooth progress-tracking—all crafted while pushing myself to learn new tools, solve real challenges, and expand my full-stack skill set.

Morph is still growing (just like its users), with a public release on the **Google Play Store** and Apple **App Store** planned for **early 2026**.  
I’m excited to keep evolving it and turning it into something people can genuinely benefit from.`,
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
        }
    ];

    const qualifications = [
        {
            title: "Curriculum Vitae",
            description: "My complete professional CV showcasing experience, skills, and education.",
            file: "/assets/qualifications/Igor_Polajzer_CV_ENG.pdf"
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
      serviceId: process.env.REACT_APP_EMAIL_JS_SERVICE_ID ,templateId: process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID ,publicKey: process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY ,successText: "Thank you for contacting me — I'll respond soon!" ,failureText: "Oops, something went wrong"
    }

    const routes = [
        {
            path: "/",
            label: "Home",
            navbar: "true",
            element: <AboutPage skills={skills} pages={pages} cards={cards} timelineItems={timelineItems}/>
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
    <ThemeProvider themeProp={'light'}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();