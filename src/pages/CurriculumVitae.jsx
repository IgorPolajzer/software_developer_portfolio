import React from 'react';
import './../App.css';
import './../css/CurriculumVitae.css'
import CV from './../assets/Igor_Polajzer_CV_English.pdf';

function CurriculumVitae() {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    return (
        <div className="cv-section">
            {isMobile ? (
                <a href={CV} download className="pdf-download-link">
                    Download CV
                </a>
            ) : (
                <object data={CV} type="application/pdf" className="pdf">
                    <p>PDF failed to load</p>
                </object>
            )}
        </div>
    );
}

export default CurriculumVitae;
