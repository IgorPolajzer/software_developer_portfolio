import './../App.css';
import '../css/MyProjects.css'
import Project from './../components/Project';
import Direct4Me from './../assets/direct4me_project.png';
import Portfolio from './../assets/portfolio_project.png'
import SyncFluencer from './../assets/syncfluencer-project.png'
import TankTitans from './../assets/tank_titans_project.png';
function MyProjects(){
    return(
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
                     status={"In progress"}
                     navigation={"personal-portfolio-project"}/>
            <Project image={SyncFluencer}
                     title={"SyncFluencer - social media tool"}
                     status={"In progress"}
                     navigation={"sync-fluencer-project"}/>
            <Project/>
            <Project/>
        </div>
    )
}

export default MyProjects;