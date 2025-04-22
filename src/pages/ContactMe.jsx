import './../App.css';
import './../css/ContactMe.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ReactComponent as LinkedInLogo } from './../assets/linkedin-icon.svg'
function ContactMe(){
    const form = useRef();
    console.log(process.env.REACT_APP_ENV);
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_EMAIL_JS_SERVICE_ID, process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
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
                            <h1 className="topic-card-title">
                                Contact me:
                            </h1>
                            <div className="linked-in-caption-container">
                                <h5>LinkedIn: </h5>
                                <a href={"https://www.linkedin.com/in/igor-polaj%C5%BEer-872195293/"} target="_blank"
                                   rel="noopener noreferrer"
                                   className="linkedin-icon">
                                    <LinkedInLogo className={"linkedin-icon-svg"}/>
                                </a>
                            </div>
                        </div>
                        <hr></hr>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Your name: </label>
                                <input className="form-control" id="exampleFormControlInput1"
                                       placeholder="Your name" name="user_name"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label">Your email
                                    address: </label>
                                <input type="email" className="form-control" id="exampleFormControlInput2"
                                       placeholder="name@example.com" name="user_email"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Your
                                    message: </label>
                                <textarea className="form-control" id="exampleFormControlTextarea1"
                                          rows="15" name="message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;