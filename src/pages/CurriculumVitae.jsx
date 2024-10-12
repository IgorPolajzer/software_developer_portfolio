import React from 'react';
import './../App.css';
import './../css/CurriculumVitae.css';
import CV from './../assets/Igor_Polajzer_CV_English.pdf';

function CurriculumVitae() {
    // Regular expression to check for Android or iOS mobile devices
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    return (
        <div className="cv-section">
            {isMobile ? (
                <>
                    <br></br>
                    <p>Viewing the PDF is not available on mobile yet, download the PDF instead.</p>
                    <a href={CV} download className="pdf-download-link">
                        Download CV
                    </a>
                </>
            ) : (
                <object data={CV} type="application/pdf" className="pdf">
                    <p>PDF failed to load</p>
                </object>
            )}
        </div>
    );
}

export default CurriculumVitae;
