import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HTML } from './../assets/icons/html-5.svg';
import { ReactComponent as CSS } from './../assets/icons/css-3.svg';
import { ReactComponent as Javascript } from './../assets/icons/javascript.svg';
import { ReactComponent as Node } from './../assets/icons/nodejs.svg';
import { ReactComponent as MongoDB } from './../assets/icons/mongodb.svg';
import { ReactComponent as MySql } from './../assets/icons/mysql.svg';
import { ReactComponent as PostgrqSql } from './../assets/icons/postgresql.svg';
import { ReactComponent as FullStack } from './../assets/icons/full-stack.svg';
import { ReactComponent as Git } from './../assets/icons/git-icon.svg';
import { ReactComponent as Docker } from './../assets/icons/docker-icon.svg';
import { ReactComponent as C } from './../assets/icons/c.svg';
import { ReactComponent as CPlusPlus } from './../assets/icons/c-plusplus.svg';
import { ReactComponent as CSharp } from './../assets/icons/c-sharp.svg';
import { ReactComponent as Java } from './../assets/icons/java.svg';
import { ReactComponent as Kotlin } from './../assets/icons/kotlin-icon.svg';
import { ReactComponent as Android } from './../assets/icons/android-icon.svg';
import { ReactComponent as JetPackCompose} from "./../assets/icons/compose-multiplatform.svg";
import { ReactComponent as Flutter } from './../assets/icons/flutter.svg';
import { ReactComponent as SpringBoot } from './../assets/icons/spring-boot.svg';

const skills = [
  { icon: HTML, label: "HTML" },
  { icon: CSS, label: "CSS" },
  { icon: Javascript, label: "JavaScript" },
  { icon: Node, label: "Node.js" },
  { icon: MongoDB, label: "MongoDB" },
  { icon: MySql, label: "mySQL" },
  { icon: PostgrqSql, label: "PostgreSQL" },
  { icon: FullStack, label: "Web Stacks (MERN, LAMP)" },
  { icon: Git, label: "Git" },
  { icon: Docker, label: "Docker" },
  { icon: C, label: "C" },
  { icon: CPlusPlus, label: "C++" },
  { icon: CSharp, label: "C#" },
  { icon: Java, label: "Java" },
  { icon: SpringBoot, label: "Spring Boot" },
  { icon: Kotlin, label: "Kotlin" },
  { icon: Android, label: "Android Studio" },
  { icon: JetPackCompose, label: "Jetpack Compose" },
  { icon: Flutter, label: "Flutter" },
];

function Skills() {
  return (
    <div className="flex flex-col items-center w-full px-4 md:px-20">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">My Skills</h1>
        <h2 className="text-blue-200">
          IF YOU WANT TO SEE MY SKILL'S IN ACTION TAKE A LOOK AT{" "}
          <Link to="/projects" className="underline hover:text-blue-400">
            MY PROJECTS
          </Link>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-lg shadow hover:scale-105 transform transition"
          >
            <skill.icon className="w-12 h-12 mb-2" />
            <p className="text-white font-semibold text-center text-sm">{skill.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
