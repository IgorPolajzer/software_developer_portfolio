import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from './ThemeContext';

const NavBar = ({ logo, name, title, type, theme, routes }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme: currentTheme, toggleTheme } = useTheme();

    const getContent = (name, title) => {
        if (name && title) {
            return (
                <span className="flex flex-col leading-tight text-center">
                    <span className="text-xl sm:text-2xl font-bold">{name}</span>
                    <span className="text-sm sm:text-base font-normal">{title}</span>
                </span>
            );
        }
        if (name) return name;
        if (title) return title;
        return "";
    };

    const ThemeToggleButton = ({ className = "" }) => (
        <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg bg-[var(--color-secondary)] text-[var(--color-text-base)] hover:text-[var(--color-primary)] transition-all ${className}`}
            aria-label="Toggle theme"
            title={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {currentTheme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
            )}
        </button>
    );

    const getNavBar = (type) => {
        const filteredRoutes = routes.filter(route => route.navbar === "true");

        if (type === "inline") {
            return (
                <div className="mb-10">
                    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm py-4 px-6 sm:px-10">
                        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                            <Link to="/" className="flex items-center space-x-3">
                                {logo && <img src={logo} alt="Logo" className="h-8 w-auto"/>}
                                {(name || title) && (
                                    <span className="text-[var(--color-text-base)] font-bold text-xl sm:text-2xl whitespace-nowrap">
                                        {getContent(name, title)}
                                    </span>
                                )}
                            </Link>

                            <div className="flex items-center gap-3">
                                {/* Theme toggle - only visible if theme prop is true */}
                                {theme && <ThemeToggleButton className="hidden lg:block" />}

                                <div className="lg:hidden">
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="p-2 rounded bg-[var(--color-secondary)] text-[var(--color-text-base)] hover:text-[var(--color-primary)]"
                                    >
                                        {isOpen ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <line x1="18" y1="6" x2="6" y2="18"/>
                                                <line x1="6" y1="6" x2="18" y2="18"/>
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <line x1="3" y1="6" x2="21" y2="6"/>
                                                <line x1="3" y1="12" x2="21" y2="12"/>
                                                <line x1="3" y1="18" x2="21" y2="18"/>
                                            </svg>
                                        )}
                                    </button>

                                    {isOpen && (
                                        <div className="absolute top-full left-0 w-full shadow-lg flex flex-col py-2">
                                            {filteredRoutes.map((route) => (
                                                <Link
                                                    key={route.path}
                                                    to={route.path}
                                                    className="px-5 py-3 rounded-lg text-lg font-semibold text-[var(--color-text-base)] bg-[var(--color-bg-primary-opacity)] transition-all"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {route.label}
                                                </Link>
                                            ))}
                                            {/* Theme toggle in mobile menu - only if theme prop is true */}
                                            {theme && (
                                                <div className="px-5 py-3 flex items-center justify-between">
                                                    <span className="text-lg font-semibold text-[var(--color-text-base)]">Theme</span>
                                                    <ThemeToggleButton />
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <ul className="hidden lg:flex gap-6">
                                    {filteredRoutes.map((route) => (
                                        <Link
                                            key={route.path}
                                            to={route.path}
                                            className="text-[var(--color-text-base)] text-lg font-semibold hover:text-[var(--color-primary)] transition-all"
                                        >
                                            {route.label}
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            );
        }

        if (type === "sidebar") {
            return (
                <>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden fixed top-4 left-4 z-[1200] p-2 rounded-lg bg-[var(--color-secondary)] text-[var(--color-text-base)] hover:text-[var(--color-primary)] shadow-md"
                    >
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <line x1="3" y1="6" x2="21" y2="6"/>
                                <line x1="3" y1="12" x2="21" y2="12"/>
                                <line x1="3" y1="18" x2="21" y2="18"/>
                            </svg>
                        )}
                    </button>

                    <aside className={`fixed top-0 left-0 h-screen w-64 bg-[var(--color-secondary)]/90 shadow-xl z-[1100] flex flex-col items-center py-8 px-4 overflow-y-auto overflow-x-hidden transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
                        <Link to="/" onClick={() => setIsOpen(false)} className="flex flex-col items-center text-center mb-10 space-y-3">
                            {logo && <img src={logo} alt="Logo" className="h-14 w-auto"/>}
                            {(name || title) && (
                                <span className="text-[var(--color-text-base)] font-bold leading-tight">
                                    {getContent(name, title)}
                                </span>
                            )}
                        </Link>

                        <nav className="flex flex-col w-full space-y-2">
                            {filteredRoutes.map((route) => (
                                <Link
                                    key={route.path}
                                    to={route.path}
                                    onClick={() => setIsOpen(false)}
                                    className="px-5 py-3 rounded-lg text-lg font-semibold text-[var(--color-text-base)] hover:bg-[var(--color-bg-primary)]/20 hover:text-[var(--color-primary)] transition-all"
                                >
                                    {route.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Theme toggle at bottom of sidebar - only if theme prop is true */}
                        {theme && (
                            <div className="mt-auto pt-6 w-full">
                                <div className="flex items-center justify-between px-5">
                                    <span className="text-sm font-semibold text-[var(--color-text-base)]">Theme</span>
                                    <ThemeToggleButton />
                                </div>
                            </div>
                        )}
                    </aside>

                    {isOpen && (
                        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1000] lg:hidden" />
                    )}
                </>
            );
        }
    };

    return <>{getNavBar(type)}</>;
};

export default NavBar;