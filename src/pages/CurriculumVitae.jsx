import React from 'react';
import './../App.css';
import './../css/CurriculumVitae.css'
import CV from './../assets/Igor_Polajzer_CV_English.pdf';

function CurriculumVitae() {
    return (
        <div className="cv-section">
            <object data={CV} type="application/pdf" className="pdf">
                <p>PDF failed to load</p>
            </object>
        </div>
    );
}

export default CurriculumVitae;
