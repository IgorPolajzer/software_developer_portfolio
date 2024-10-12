import React from 'react';
import './../App.css';
import './../css/CurriculumVitae.css';
import CV from './../assets/Igor_Polajzer_CV_English.pdf';

function CurriculumVitae() {
    return (
        <div className="cv-section">
            <iframe
                src={CV}
                title="Curriculum Vitae"
                className="pdf"
            >
                <p>
                    It appears that the PDF cannot be displayed. You can
                    <a href={CV} download className="pdf-download-link">
                        download the CV
                    </a>.
                </p>
            </iframe>
        </div>
    );
}

export default CurriculumVitae;
