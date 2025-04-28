import './../App.css';
import '../css/MyProjects.css'
import Project from './../components/Project';
import Direct4Me from './../assets/direct4me_project.png';
import Portfolio from './../assets/portfolio_project.png'
import SyncFluencer from './../assets/syncfluencer-project.png'
import TankTitans from '../assets/tanktitans_project/tank_titans_project.png';
import Chess from '../assets/chess_project/Chess.png'
import PatrikPivkoWebsite from '../assets/patrik_pivko_website/patrik_pivko_website.png'

function MyProjects() {
    return (
        <div className="myprojects-section">
            <Project image={Direct4Me}
                     title={"Direct4Me manager website and mobile app"}
                     status={"Completed"}
                     navigation={"direct-4-me-project"}/>
            <Project image={TankTitans}
                     title={"Tank Titans"}
                     status={"Completed"}
                     navigation={"tank-titans"}/>
            <Project image={Portfolio}
                     title={"Personal portfolio website"}
                     status={"Completed"}
                     navigation={"personal-portfolio-project"}/>
            <Project image={Chess}
                     title={"Chess"}
                     status={"Completed"}
                     navigation={"chess-project"}/>
            <Project image={PatrikPivkoWebsite}
                     title={"Patrik Pivko s.p. - spletna stran"}
                     status={"Completed"}
                     navigation={"patrik-pivko-website"}/>
            <Project image={SyncFluencer}
                     title={"SyncFluencer - social media tool"}
                     status={"In progress"}
                     navigation={"sync-fluencer-project"}/>
        </div>
    )
}

export default MyProjects;