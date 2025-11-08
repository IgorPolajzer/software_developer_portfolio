import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ logo, name, title, type, routes }) => {
  const [isOpen, setIsOpen] = useState(false);

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

  const getNavBar = (type) => {
    // Inline navbar
    if (type === "inline") {
      return (
        <div className="mb-10">
          <nav className="fixed top-0 w-full z-50 bg-[var(--color-secondary)]/80 backdrop-blur-sm py-4 px-6 sm:px-10">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
              {/* Logo + Title */}
              <Link to="/" className="flex items-center space-x-3">
                {logo && <img src={logo} alt="Logo" className="h-8 w-auto" />}
                {(name || title) && (
                  <span className="text-[var(--color-text-base)] font-bold text-xl sm:text-2xl whitespace-nowrap">
                    {getContent(name, title)}
                  </span>
                )}
              </Link>

              {/* Hamburger for small screens */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded bg-[var(--color-secondary)] text-[var(--color-text-base)] hover:text-[var(--color-primary)]"
                >
                  {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                  )}
                </button>

                {/* Mobile dropdown */}
                {isOpen && (
                  <div className="absolute top-full left-0 w-full shadow-lg flex flex-col py-2">
                    {routes.map((route) => (
                      <Link
                        key={route.path}
                        to={route.path}
                        className="px-6 py-3 text-[var(--color-text-base)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-primary)]/30 transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        {route.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Desktop links */}
              <ul className="hidden lg:flex gap-6">
                {routes.map((route) => (
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
          </nav>
        </div>
      );
    }

    // Sidebar
    if (type === "sidebar") {
      return (
          <>
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="fixed top-4 left-4 z-[1100] p-4 rounded-xl text-[var(--color-text-base)] hover:text-[var(--color-primary)] transition-all lg:hidden"
              >
                  {isOpen ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor">
                          <line x1="18" y1="6" x2="6" y2="18"/>
                          <line x1="6" y1="6" x2="18" y2="18"/>
                      </svg>
                  ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor">
                          <line x1="3" y1="6" x2="21" y2="6"/>
                          <line x1="3" y1="12" x2="21" y2="12"/>
                          <line x1="3" y1="18" x2="21" y2="18"/>
                      </svg>
                  )}
              </button>

              {/* Sidebar */}
              <aside
                  className={`
                    fixed top-0 left-0 h-full w-64 z-50 flex flex-col items-center py-8 px-4 shadow-lg transition-transform duration-300
                    ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                    lg:translate-x-0 lg:static lg:flex
                  `}
              >
                  <Link
                      to="/"
                      className="flex flex-col items-center space-y-3 mb-8"
                      onClick={() => setIsOpen(false)}
                  >
                      {logo && <img src={logo} alt="Logo" className="h-12 w-auto"/>}
                      {(name || title) && (
                          <span className="text-[var(--color-text-base)] font-bold text-center">
                  {getContent(name, title, logo)}
                </span>
                      )}
                  </Link>

                  <nav className="flex flex-col w-full">
                      {routes.map((route) => (
                          <Link
                              key={route.path}
                              to={route.path}
                              className="text-[var(--color-text-base)] text-lg font-semibold px-6 py-3 rounded-lg hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-primary)]/30 transition-all text-left"
                              onClick={() => setIsOpen(false)}
                          >
                              {route.label}
                          </Link>
                      ))}
                  </nav>
              </aside>

              {/* Dim background (only on small screens when open) */}
              {isOpen && (
                  <div
                      className="fixed inset-0 bg-black/40 z-[900] lg:hidden"
                      onClick={() => setIsOpen(false)}
                  ></div>
              )}
          </>
      );
    }
  };

    return <>{getNavBar(type)}</>;
};

export default NavBar;
