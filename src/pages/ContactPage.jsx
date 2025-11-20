import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

function ContactPage({platforms, showSocial}) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
                process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
                form.current,
                {publicKey: process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY}
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
                </div>

                <hr className="border-[var(--color-primary)] mb-6"/>

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
                            className="w-full p-3 rounded-md bg-[var(--color-bg-primary)] border border-[var(--color-text-base)]/30 text-[var(--color-text-base)] placeholder:text-[var(--color-text-base)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
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
                            className="w-full p-3 rounded-md bg-[var(--color-bg-primary)] border border-[var(--color-text-base)]/30 text-[var(--color-text-base)] placeholder:text-[var(--color-text-base)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
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
                            className="w-full p-3 rounded-md bg-[var(--color-bg-primary)] border border-[var(--color-text-base)]/30 text-[var(--color-text-base)] placeholder:text-[var(--color-text-base)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="px-6 py-3 bg-[var(--color-primary)] text-[var(--color-bg-primary)] font-bold rounded-md hover:shadow-[0_0_20px_var(--color-text-base)] transition-all"
                    >
                        Send
                    </button>
                </form>

                {showSocial && <>
                    <hr className="border-[var(--color-primary)] my-8"/>
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl font-semibold text-[var(--color-text-base)] mb-6">
                            Connect with me:
                        </h2>
                        <div className="flex gap-8 justify-center items-center">
                            {platforms.map((platform) => (
                                <a
                                    key={platform.name}
                                    href={platform.url}
                                    title={`Visit my ${platform.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-3 transition-all hover:text-[var(--color-primary)] group"
                                >
                                <span
                                    className="text-sm font-medium text-[var(--color-text-base)] group-hover:text-[var(--color-primary)] transition-colors">
                                  {platform.name}
                                </span>
                                    <img
                                        src={platform.logo}
                                        alt={platform.name}
                                        className="h-8 w-8 brightness-90 group-hover:brightness-110 group-hover:shadow-[0_0_10px_var(--color-primary)] transition-all"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </>}
            </div>
        </div>
    );
}

export default ContactPage