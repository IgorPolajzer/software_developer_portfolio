import React from "react";
import './../css/Experience.css';
import './../css/Topic.css';
import './../App.css';
import SkyLabsLogo from './../assets/skylabs_logo.png';
import SetronicaLogo from './../assets/setronica_logo.png';

function Experience() {
    return (
        <div className="experience-section">
            <div className="topic-box-title">
                <h1 className="title">Work Experience</h1>
                <h2 className="subtitle">COMPANIES I WORKED AT</h2>
            </div>
            <div className="company-grid">
                <div className="company">
                    <h1 className="text">Skylabs d.o.o - Internship – Software Engineer</h1>
                    <hr />
                    <img className="company-logo" src={SkyLabsLogo} alt="Skylabs Logo" />
                    <p className="text">
                        At Skylabs d.o.o, I was responsible for transforming C++ libraries into Python-compatible modules by creating wrappers. Additionally, I developed a RESTful API to provide easy access to these libraries. My role involved the entire development lifecycle, from concept to deployment. Through this experience, I enhanced my skills in C++, Python, web development, and project management, gaining valuable expertise in software integration and API design.
                    </p>
                </div>
                <div className="separator"></div>
                <div className="company">
                    <h1 className="text">Setronica d.o.o - Internship - QA Engineer</h1>
                    <hr />
                    <img className="company-logo" src={SetronicaLogo} alt="Setronica Logo" />
                    <p className="text">
                        At Setronica, I was responsible for the quality assurance of LLM models. My role involved thoroughly reviewing the output material generated by these models, assessing the accuracy of their solutions, and labeling them as either acceptable or in need of improvement. In addition to grading the outputs, I provided detailed comments that highlighted specific inaccuracies and offered constructive feedback to help improve the model’s performance.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Experience;
