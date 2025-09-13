import './../App.css';
import Topic from "../components/Topic";
import ProfileImg from "../assets/ip-tridens-white.jpg";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Timeline from "../components/Timeline";

function AboutMe(){
    return(
        <div className="aboutme-section">
            <Topic
              title={"Igor Polajžer"}
              subtitle={"SOFTWARE DEVELOPER"}
              text={
                "I'm Igor Polajžer, a 22-year-old software developer with a Bachelor’s degree in Computer Science from the Faculty of Electrical Engineering and Computer Science (FERI) in Maribor. I recently started my Master’s in Computer Science at FERI, where I’m focusing on advancing my skills in software engineering, problem-solving, and modern technologies. Passionate about building solutions and constantly improving, I enjoy taking on new challenges and growing both as a developer and as a person."
              }
              image={ProfileImg}
            />
            <Topic custom={<Skills/>}/>
            <Topic custom={<Experience/>}/>
            <Timeline/>
            {/*<Topic title={"About me"} subtitle={"LIFE AND EDUCATION"} text={"I'm Igor Polajžer, a passionate 21-year-old Computer Science student at the Faculty of Electrical Engineering and Computer Science (FERI) in Maribor. Now in the final year of my studies, I am deeply committed to expanding my knowledge and honing my skills in the tech industry. With a strong work ethic and an eagerness to embrace new challenges, I am driven to continuously grow as a developer and problem-solver."} image={HtmlBrackets}/>*/}
            <br></br>
        </div>
    );
}

export default AboutMe;