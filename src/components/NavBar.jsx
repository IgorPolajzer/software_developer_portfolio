import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ logo, title, routes }) => {
  return (
    <nav className="fixed top-0 w-full z-[1000] bg-[var(--color-secondary)]/80 backdrop-blur-sm py-8 px-10 sm:px-10 transition-all duration-300">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo + Title */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {logo && <img src={logo} alt="Logo" className="h-8 w-auto" />}
          <span className="text-[var(--color-text-base)] font-bold text-xl sm:text-2xl whitespace-nowrap">
            {title}
          </span>
        </Link>

        {/* Hamburger button */}
        <div className="lg:hidden">
          <input type="checkbox" id="menu-toggle" className="hidden peer" />
          <label
            htmlFor="menu-toggle"
            className="flex items-center h-8 w-8 cursor-pointer text-[var(--color-text-base)]"
          >
            <svg
              className="peer-checked:hidden h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <svg
              className="hidden peer-checked:block h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </label>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-5">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className="text-[var(--color-text-base)] text-lg font-semibold hover:text-[var(--color-primary)] hover:shadow-[0_0_10px_var(--color-primary)] transition-all"
            >
              {route.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
