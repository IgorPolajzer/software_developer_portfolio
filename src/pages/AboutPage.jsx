import AvatarCard from "../components/AvatarCard";
import Timeline from "../components/Timeline";
import Skills from "../components/Skills";
import PaginatedCard from "../components/PaginatedCard";
import AnimationWrapper from "../components/AnimationWrapper";

function AboutPage() {
    const skills = [
        {iconPath: "/icons/html-5.svg", label: "HTML"},
        {iconPath: "/icons/css-3.svg", label: "CSS"},
        {iconPath: "/icons/javascript.svg", label: "JavaScript"},
        {iconPath: "/icons/nodejs.svg", label: "Node.js"},
        {iconPath: "/icons/mongodb.svg", label: "MongoDB"},
        {iconPath: "/icons/mysql.svg", label: "mySQL"},
        {iconPath: "/icons/postgresql.svg", label: "PostgreSQL"},
        {iconPath: "/icons/full-stack.svg", label: "Web Stacks (MERN, LAMP)"},
        {iconPath: "/icons/git-icon.svg", label: "Git"},
        {iconPath: "/icons/docker-icon.svg", label: "Docker"},
        {iconPath: "/icons/c.svg", label: "C"},
        {iconPath: "/icons/c-plusplus.svg", label: "C++"},
        {iconPath: "/icons/c-sharp.svg", label: "C#"},
        {iconPath: "/icons/java.svg", label: "Java"},
        {iconPath: "/icons/spring-boot.svg", label: "Spring Boot"},
        {iconPath: "/icons/kotlin-icon.svg", label: "Kotlin"},
        {iconPath: "/icons/android-icon.svg", label: "Android Studio"},
        {iconPath: "/icons/compose-multiplatform.svg", label: "Jetpack Compose"},
        {iconPath: "/icons/flutter.svg", label: "Flutter"},
    ];

    const pages = [
        {
            company: "Tridens d.o.o",
            role: "Software Developer",
            timeframe: "March 24 2025 - Current",
            image: "/assets/Tridens.png",
            content: `At Tridens d.o.o, I have been working as a Java developer, contributing to backend systems and microservices development.`
        },
        {
            company: "Setronica d.o.o",
            role: "Internship – QA Engineer",
            timeframe: "August 1 2024 - June 1 2025",
            image: "/assets/setronica_logo.png",
            content: `Responsible for QA of LLM models, reviewing output, labeling accuracy, and providing feedback to improve performance.`
        },
        {
            company: "Skylabs d.o.o",
            role: "Internship – Software Engineer",
            timeframe: "August 1 2023 - 31 September 2023",
            image: "/assets/skylabs_logo.png",
            content: `Transformed C++ libraries to Python modules, developed RESTful APIs, and handled full development lifecycle.`
        }
    ];

    const cards = [
        <AvatarCard title="Igor Polajžer" subtitle="SOFTWARE DEVELOPER" avatar="/assets/ip-tridens-white.jpg"
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
            iconPath: "../assets/icons/birthday-icon.svg",
        },
        {
            date: "September 1 2009 - 24 June 2018",
            title: "Primary School Cirkulane-Zavrč",
            location: "Cirkulane - Slovenia",
            iconPath: "../assets/icons/os-cirkulane-zavrc-icon.svg",
        },
        {
            date: "September 1 2018 - 24 June 2022",
            title: "Technic of mechatronics - Electrical and Computer School Ptuj",
            location: "Ptuj - Slovenia",
            iconPath: "../assets/icons/scptuj-icon.svg",
        },
        {
            date: "August 1 2023 - 31 September 2023",
            title: "Software engineer (Internship) Skylabs d.o.o",
            location: "Maribor - Slovenia",
            iconPath: "../assets/skylabs_logo.png",
        },
        {
            date: "August 1 2024 - June 1 2025",
            title: "Programmer (Internship) Setronica d.o.o",
            location: "Ljubljana (remote) - Slovenia",
            iconPath: "../assets/setronica_logo.png",
        },
        {
            date: "March 24 2025 - Ongoing",
            title: "Software developer Tridens d.o.o",
            location: "Maribor - Slovenia",
            iconPath: "../assets/Tridens.png",
        },
        {
            date: "October 1 2022 - August 28 2025",
            title: "BSc of Computer Science and IT Engineering - FERI",
            location: "Maribor - Slovenia",
            iconPath: "../assets/icons/university.svg",
        },
        {
            date: "October 1 2025 - Ongoing",
            title: "MSc of Computer Science and IT Engineering - FERI",
            location: "Maribor - Slovenia",
            iconPath: "../assets/icons/university.svg",
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
