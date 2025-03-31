import './../css/Skills.css';
import './../css/Topic.css';
import './../App.css'
import React from "react";
import {Link} from "react-router-dom";
import { ReactComponent as CPlusPlus } from './../assets/icons/c-plusplus.svg'
import { ReactComponent as HTML } from './../assets/icons/html-5.svg'
import { ReactComponent as CSS } from './../assets/icons/css-3.svg'
import { ReactComponent as Javascript } from './../assets/icons/javascript.svg'
import { ReactComponent as Node } from './../assets/icons/nodejs.svg'
import { ReactComponent as MongoDB } from './../assets/icons/mongodb.svg'
import { ReactComponent as MySql } from './../assets/icons/mysql.svg'
import { ReactComponent as Git } from './../assets/icons/git-icon.svg'
import { ReactComponent as Docker } from './../assets/icons/docker-icon.svg'
import { ReactComponent as CSharp } from './../assets/icons/c-sharp.svg'
import { ReactComponent as Java } from './../assets/icons/java.svg'
import { ReactComponent as Kotlin } from './../assets/icons/kotlin-icon.svg'
import { ReactComponent as Android } from './../assets/icons/android-icon.svg'
import { ReactComponent as C } from './../assets/icons/c.svg'
import { ReactComponent as FullStack } from './../assets/icons/full-stack.svg'
import { ReactComponent as JetPackCompose} from "./../assets/icons/compose-multiplatform.svg";
import { ReactComponent as Flutter } from './../assets/icons/flutter.svg'

function Skills(props) {
    return (
        <div className="skills-section">
            <div className="topic-box-title">
                <h1 className="card-title">My Skills</h1>
                <div className="href-to-projects-box">
                    <h2 className="subtitle">IF YOU WANT TO SEE MY SKILL'S IN ACTION TAKE A LOOK AT</h2>
                    <h2 className="subtitle">
                        <Link to="/projects">MY PROJECTS</Link>
                    </h2>
                </div>
            </div>
            <div className="skills-grid">
                <div className="skill">
                    <div className="skill-icon">
                        <HTML/>
                    </div>
                    <p>HTML</p>
                </div>
                <div className="skill">
                    <div className="skill-icon">
                        <CSS/>
                    </div>
                    <p>CSS</p>
                </div>
                <div className="skill">
                    <div className="skill-icon">
                        <Javascript/>
                    </div>
                    <p>JavaScript</p>
                </div>
                <div className="skill">
                    <div className="skill-icon">
                        <Node/>
                    </div>
                    <p>Node.js</p>
                </div>
                <div className="skill">
                    <div className="skill-icon">
                        <MongoDB height={50}/>
                    </div>
                    <p>Mongo DB</p>
                </div>
                <div className="skill">
                    <div className="skill-icon">
                        <MySql/>
                    </div>
                    <p>mySql</p>
                </div>
                <div className="skill">
                    <div className="skill-icon">
                        <FullStack/>
                    </div>
                    <p>Web Stacks (MERN, LAMP)</p>
                </div>
                <div className="skill">
                    <div className="skill-icon">
                        <Git/>
                    </div>
                    <p>git</p>
                </div>
                <div className="skill">
                    <div className="skill-icon">
                        <Docker/>
                    </div>
                    <p>docker</p>
                </div>
                <div className="skill">
                    <div className="skill-icon">
                        <C/>
                    </div>
                    <p>C</p>
                </div>
                <div className="skill">
                    <div className="skill-icon">
                        <CPlusPlus height={60}/>
                    </div>
                    <p>C++</p>
                </div>
                <div className="skill">
                    <div className="skill-icon">
                        <CSharp/>
                    </div>
                    <p>C#</p>
                </div>
                <div className="skill">
                    <div className="skill-icon">
                        <Java height={50}/>
                    </div>
                    <p>Java</p>
                </div>
                <div className="skill">
                    <div className="skill-icon">
                        <Kotlin height={50}/>
                    </div>
                    <p>Kotlin</p>
                </div>
                <div className="skill">
                    <div className="skill-icon">
                        <Android/>
                    </div>
                    <p>Android Studio</p>
                </div>
                <div className="skill">
                    <div className="skill-icon">
                        <JetPackCompose/>
                    </div>
                    <p>Jetpack Compose</p>
                </div>
                <div className="skill">
                    <div className="skill-icon">
                        <Flutter/>
                    </div>
                    <p>Flutter</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;
