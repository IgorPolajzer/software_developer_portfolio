import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './../css/NavBar.css';
import { ReactComponent as HamburgerIcon } from './../assets/hamburger_icon.svg'
import { ReactComponent as CloseIcon } from './../assets/close_icon.svg'

function NavBar() {
  const [menuOpened, setIsOpened] = useState(false); //Toggles if menu is opened or closed

  const handleMobileMenuToggle = () => {
    setIsOpened(!menuOpened);
  };

  return (
      <div className="nav-bar">
          <div className="logo">Igor Polajžer - Portfolio website</div>

          <ul className={menuOpened ? 'nav-links-mobile' : 'nav-links'}>
              <Link to="/">
                <li><a>About me</a></li>
              </Link>
              <Link to="/projects">
              <li><a>My projects</a></li>
              </Link>
              <li><a>CV - Curriculum Vitae</a></li>
              <li><a>Contact me</a></li>
          </ul>

          <div className="hamburger-icon" onClick={handleMobileMenuToggle}>
              {menuOpened ? (
                  <CloseIcon/>
              ) : (
                  <HamburgerIcon/>
              )}
          </div>
      </div>
  );
}

export default NavBar;
