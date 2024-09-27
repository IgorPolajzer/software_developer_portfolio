import './App.css';
import Topic from './components/Topic';
import NavBar from "./components/NavBar";
import ProfileImg from "./assets/profile_picture_placeholder.png"
import HtmlBrackets from "./assets/html_brackets_logo.png"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
function App() {
  return (
    <div className="App">
        <NavBar/>
        <br></br>
        <Topic title={"Igor Polajžer"} subtitle={"SOFTWARE DEVELOPER"} text={'"The art of programming is the art of organizing complexity, of mastering multitude and avoiding its bastard chaos as effectively as possible." - Edsger Dijkstra'} image={ProfileImg}/>
        <Topic title={"About me"} subtitle={"LIFE AND EDUCATION"} text={"I'm Igor Polajžer, a passionate 21-year-old Computer Science student at the Faculty of Electrical Engineering and Computer Science (FERI) in Maribor. Now in the final year of my studies, I am deeply committed to expanding my knowledge and honing my skills in the tech industry. With a strong work ethic and an eagerness to embrace new challenges, I am driven to continuously grow as a developer and problem-solver."} image={HtmlBrackets}/>
        <Topic custom={<Skills/>}/>
        <Topic custom={<Experience/>}/>
    </div>
  );
}

export default App;
