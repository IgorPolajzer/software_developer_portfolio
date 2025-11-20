import AvatarCard from "../components/AvatarCard";
import Timeline from "../components/Timeline";
import Skills from "../components/Skills";
import PaginatedCard from "../components/PaginatedCard";
import AnimationWrapper from "../components/AnimationWrapper";

function AboutPage() {
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
            company: "Tridens d.o.o",
            role: "Software Developer",
            timeframe: "March 24 2025 - Current",
            image: "/assets/pages/Tridens.png",
            content: `At Tridens d.o.o, I have been working as a Java developer, contributing to backend systems and microservices development.`
        },
        {
            company: "Setronica d.o.o",
            role: "Internship – QA Engineer",
            timeframe: "August 1 2024 - June 1 2025",
            image: "/assets/pages/setronica_logo.png",
            content: `Responsible for QA of LLM models, reviewing output, labeling accuracy, and providing feedback to improve performance.`
        },
        {
            company: "Skylabs d.o.o",
            role: "Internship – Software Engineer",
            timeframe: "August 1 2023 - 31 September 2023",
            image: "/assets/pages/skylabs_logo.png",
            content: `Transformed C++ libraries to Python modules, developed RESTful APIs, and handled full development lifecycle.`
        }
    ];

    const cards = [
        <AvatarCard title="Igor Polajžer" subtitle="SOFTWARE DEVELOPER" avatar="/assets/meta/ip-tridens-white.jpg"
                    content="I'm Igor Polajžer, a 22-year-old software developer with a Bachelor’s degree
                    in Computer Science from FERI in Maribor. I recently started my Master’s in Computer Science
                    at FERI, focusing on software engineering, problem-solving, and modern technologies.
                    Passionate about building solutions and constantly improving, I enjoy taking on new challenges."/>,
        <Skills title="My Skills" subtitle="IF YOU WANT TO SEE MY SKILLS IN ACTION TAKE A LOOK AT MY PROJECTS"
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
            date: "September 1 2009 - 24 June 2018",
            title: "Primary School Cirkulane-Zavrč",
            location: "Cirkulane - Slovenia",
            iconPath: "../assets/timeline_icons/os-cirkulane-zavrc-icon.svg",
        },
        {
            date: "September 1 2018 - 24 June 2022",
            title: "Technic of mechatronics - Electrical and Computer School Ptuj",
            location: "Ptuj - Slovenia",
            iconPath: "../assets/timeline_icons/scptuj-icon.svg",
        },
        {
            date: "August 1 2023 - 31 September 2023",
            title: "Software engineer (Internship) Skylabs d.o.o",
            location: "Maribor - Slovenia",
            iconPath: "../assets/timeline_icons/skylabs_logo.png",
        },
        {
            date: "August 1 2024 - June 1 2025",
            title: "Programmer (Internship) Setronica d.o.o",
            location: "Ljubljana (remote) - Slovenia",
            iconPath: "../assets/timeline_icons/setronica_logo.png",
        },
        {
            date: "March 24 2025 - Ongoing",
            title: "Software developer Tridens d.o.o",
            location: "Maribor - Slovenia",
            iconPath: "../assets/timeline_icons/Tridens.png",
        },
        {
            date: "October 1 2022 - August 28 2025",
            title: "BSc of Computer Science and IT Engineering - FERI",
            location: "Maribor - Slovenia",
            iconPath: "../assets/timeline_icons/university.svg",
        },
        {
            date: "October 1 2025 - Ongoing",
            title: "MSc of Computer Science and IT Engineering - FERI",
            location: "Maribor - Slovenia",
            iconPath: "../assets/timeline_icons/university.svg",
        },
    ];

    return (
        <div className="flex flex-col items-center w-full pt-10 pb-20">
            {cards.map((card, index) => (
                <AnimationWrapper key={index} card={card}/>
            ))}
            {timelineItems && <Timeline items={timelineItems}/>}
        </div>
    );
}

export default AboutPage;
