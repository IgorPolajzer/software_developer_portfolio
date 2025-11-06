import React from "react";
import Topic from "../components/Topic";
import Timeline from "../components/Timeline";
import ProfileImg from "../assets/ip-tridens-white.jpg";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

function AboutMe() {
  const topicsData = [
    {
      title: "Igor Polajžer",
      subtitle: "SOFTWARE DEVELOPER",
      text: `I'm Igor Polajžer, a 22-year-old software developer with a Bachelor’s degree 
             in Computer Science from FERI in Maribor. I recently started my Master’s in Computer Science 
             at FERI, focusing on software engineering, problem-solving, and modern technologies. 
             Passionate about building solutions and constantly improving, I enjoy taking on new challenges.`,
      image: ProfileImg,
    },
    {
      custom: <Skills />,
    },
    {
      custom: <Experience />,
    },
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
      {topicsData.map((topic, index) => (
        <Topic
          key={index}
          title={topic.title}
          subtitle={topic.subtitle}
          text={topic.text}
          image={topic.image}
          custom={topic.custom}
        />
      ))}

      {timelineItems && <Timeline items={timelineItems} />}
    </div>
  );
}

export default AboutMe;
