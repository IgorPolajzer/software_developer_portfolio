import './../App.css';
import '../css/ProjectView.css';
import { ReactComponent as GithubLogo } from './../assets/icons/github-mark.svg';

function ProjectView(props) {
    return (
        <div className="in-progress-project-section">
            <div className="container mt-4">
                <div className="card">
                    <div className="card-body">
                        {/* Flex container for title and GitHub icon */}
                        <div className="title-github-container">
                            <h1 className="card-title">
                                {props.completed ? props.title : `${props.title} - In progress`}
                            </h1>
                            {props.githubUrl && (
                                <a href={props.githubUrl} target="_blank" rel="noopener noreferrer"
                                   className="github-icon">
                                    <GithubLogo className="github-icon-svg"/>
                                </a>
                            )}
                        </div>

                        <p className="card-text">{props.description}</p>
                        {props.custom && <div>{props.custom}</div>}
                    </div>
                    <ul className="list-group list-group-flush">
                        {props.url && (
                            <li className="list-group-item">
                                <span className="me-2"><strong>Website:</strong></span>
                                <a href={props.url} className="text-primary">{props.url}</a>
                            </li>
                        )}
                        <li className="list-group-item">
                            <h2>Technologies used:</h2>
                            <div className="row">
                                {Object.entries(props.technologies).map(([key, value]) => (
                                    <div className="col-md-4 mb-3" key={key}>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">{key}</h5>
                                                <p className="card-text">{value}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProjectView;
