import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './../css/NavBar.css';
import './../App.css';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as HamburgerIcon } from './../assets/hamburger_icon.svg';
import { ReactComponent as CloseIcon } from './../assets/close_icon.svg';

function NavBar() {
  const [menuOpened, setIsOpened] = useState(false); // Toggles if menu is opened or closed

  const handleMobileMenuToggle = () => {
    setIsOpened(!menuOpened);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setIsOpened(false); // Close the menu if the screen width is above 1000px
      }
    };

    // Add the resize event listener
    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <Navbar expand="lg" className="nav-bar" fixed="top">

        <div className="title">Igor Polajžer - Software developer</div>

        <ul className={menuOpened ? 'nav-links-mobile' : 'nav-links'}>
          <Link to="/" className="nav-link">About me</Link>
          <Link to="/projects" className="nav-link">My projects</Link>
          <Link to="/cv" className="nav-link">CV - Curriculum Vitae</Link>
          <Link to="/contact" className="nav-link">Contact me</Link>
        </ul>

        <div className="hamburger-icon" onClick={handleMobileMenuToggle}>
          {menuOpened ? (
              <CloseIcon height={70} width={70}/>
          ) : (
              <HamburgerIcon/>
          )}
        </div>
      </Navbar>
  );
}

export default NavBar;
