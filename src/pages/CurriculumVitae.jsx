import React from 'react';
import './../App.css';
import './../css/CurriculumVitae.css'
import CV from './../assets/Igor_Polajzer_CV_English.pdf';

function CurriculumVitae() {

    return (
        <div className="cv-section">
                <object data={CV} type="application/pdf" className="pdf">
                    <p>PDF failed to load</p>
                        <p>Looks like the pdf representation failed, try to change your browser/device or just </p>
                        <a href={CV} download className="pdf-download-link">
                            Download the CV
                        </a>
                </object>
            {/*)}*/}
        </div>
    );
}

export default CurriculumVitae;
