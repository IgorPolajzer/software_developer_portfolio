import './../css/Project.css';
import './../App.css'
import React from "react";
import {Link} from "react-router-dom";
function Project(props) {

    if (props.title) {
        return (
            <Link to={props.navigation}>
                <div className="project-box">
                    <img className="project-img" src={props.image}/>
                    <div className="project-data-box">
                        <h1 className={"project-title"}>{props.title}</h1>
                        <h1 className={props.status == "Completed" ? "status-completed" : "status-in-progress"}>
                            {props.status}
                        </h1>
                    </div>
                </div>
            </Link>
        );
    } else {
        return (
            <div className="project-box">
                <div className="coming-soon-box">
                    <h1>Coming soon</h1>
                </div>
            </div>
        );
    }
}

export default Project;
