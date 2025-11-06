import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ReactComponent as LinkedInLogo } from './../assets/linkedin-icon.svg';

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        form.current,
        { publicKey: process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-start py-6">
      <div className="w-full max-w-3xl bg-[var(--color-secondary)]/80 backdrop-blur-md rounded-xl shadow-lg p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="text-3xl font-bold mb-2 sm:mb-0 text-[var(--color-text-base)]">
            Contact me:
          </h1>
          <div className="flex items-center space-x-2">
            <span className="font-medium text-[var(--color-text-base)]">LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/igor-polaj%C5%BEer-872195293/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <LinkedInLogo className="w-6 h-6" />
            </a>
          </div>
        </div>

        <hr className="border-[var(--color-text-base)]/30 mb-6" />

        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-[var(--color-text-base)]">
              Your name:
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              placeholder="Your name"
              className="w-full p-3 rounded-md bg-[var(--color-bg-primary)] border border-[var(--color-text-base)]/30 text-[var(--color-text-base)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-[var(--color-text-base)]">
              Your email address:
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="name@example.com"
              className="w-full p-3 rounded-md bg-[var(--color-bg-primary)] border border-[var(--color-text-base)]/30 text-[var(--color-text-base)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium text-[var(--color-text-base)]">
              Your message:
            </label>
            <textarea
              name="message"
              id="message"
              rows="8"
              placeholder="Write your message here..."
              className="w-full p-3 rounded-md bg-[var(--color-bg-primary)] border border-[var(--color-text-base)]/30 text-[var(--color-text-base)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-[var(--color-primary)] text-[var(--color-text-base)] font-bold rounded-md hover:shadow-lg transition-all"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
