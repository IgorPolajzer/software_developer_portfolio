import './../App.css';
import './../css/ContactMe.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ReactComponent as LinkedInLogo } from './../assets/linkedin-icon.svg'
function CurriculumVitae(){
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };
    return(
        <div className="contactme-section">
            <div className="container mt-4">
                <div className="card">
                    <div className="card-body">
                        <div className="title-linkedin-container">
                            <h1 className="card-title">
                                Contact me:
                            </h1>
                            <div className="linked-in-caption-container">
                                <h5>LinkedIn: </h5>
                                <a href={"https://www.linkedin.com/in/igor-polaj%C5%BEer-872195293/"} target="_blank"
                                   rel="noopener noreferrer"
                                   className="linkedin-icon">
                                    <LinkedInLogo classname={"linkedin-icon-svg"}/>
                                </a>
                            </div>
                        </div>
                        <hr></hr>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Your email address: </label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Your message: </label>
                                <textarea className="form-control" id="exampleFormControlTextarea1"
                                          rows="19"></textarea>
                            </div>
                            <button type="send" className="btn btn-primary">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurriculumVitae;