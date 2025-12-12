const Footer = ({name, mail, platforms}) => {
    const getMailto = (mail) => {
        return "mailto:" + mail;
    }

    return (
        <footer className="relative w-full py-20 px-10 transition-all duration-300">
            <div className="w-full px-8 mx-auto max-w-7xl">
                <div
                    className="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-[var(--color-text-base)] font-semiboldfont-semibold md:flex-row md:justify-between">
                    <p className="block mb-4 text-sm text-center text-slate-500 md:mb-0">
                        Copyright © 2025 {name}. All Rights Reserved.
                    </p>
                    <div className="flex gap-4 text-[var(--color-text-base)] sm:justify-center">
                        <a href={getMailto(mail)}
                           className="hover:text-[var(--color-primary)] transition-colors">{mail}</a>
                        {platforms && platforms.map((platform) => (
                            <a href={platform.url} title={`Visit my ${platform.name}`} target="_blank"
                               rel="noopener noreferrer"
                               className="block transition-all hover:text-[var(--color-primary)] hover:shadow-[0_0_10px_var(--color-primary)]">
                                {
                                    <img src={platform.logo} alt="LinkedIn" className="h-6 w-6"/>
                                }
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;