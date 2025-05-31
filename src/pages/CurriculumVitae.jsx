import React from 'react';
import './../App.css';
import './../css/CurriculumVitae.css';
import CV from './../assets/Igor_Polajzer_CV.pdf';
import Courses from './../assets/Course_certificates.pdf';

function CurriculumVitae() {
    // Regular expression to check for Android or iOS mobile devices
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    return (
        <div className="cv-section">
            <div>
                <div className="card">
                    <div className="card-body" style={{color: "#000000"}}>
                        <h1 className="card-title">Curriculum Vitae</h1>
                        <hr/>
                        {isMobile ? (
                            <>
                                <p>
                                    Viewing the PDF is not available on mobile yet. Please download the PDF instead.
                                </p>
                                <a href={CV} download className="btn btn-primary">
                                    Download CV
                                </a>
                            </>
                        ) : (
                            <div className="embed-responsive embed-responsive-16by9">
                                <object
                                    data={CV}
                                    type="application/pdf"
                                    className="embed-responsive-item"
                                    width="100%"
                                    height="635px"
                                >
                                    <p>PDF failed to load. You can download it below.</p>
                                    <a href={CV} download className="btn btn-primary">
                                        Download CV
                                    </a>
                                </object>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <br></br>
            <div>
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">Courses</h1>
                        <hr/>
                        {isMobile ? (
                            <>
                                <p>
                                    Viewing the PDF is not available on mobile yet. Please download the PDF instead.
                                </p>
                                <a href={Courses} download className="btn btn-primary">
                                    Download CV
                                </a>
                            </>
                        ) : (
                            <div className="embed-responsive embed-responsive-16by9">
                                <object
                                    data={Courses}
                                    type="application/pdf"
                                    className="embed-responsive-item"
                                    width="100%"
                                    height="635px"
                                >
                                    <p>PDF failed to load. You can download it below.</p>
                                    <a href={Courses} download className="btn btn-primary">
                                        Download CV
                                    </a>
                                </object>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurriculumVitae;
