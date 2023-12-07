import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  return (
    <div>
      <nav>
        <a href="/">Portfolio</a>
        <ul style={{ display: menu ? 'block' : 'none' }} onClick={handleMenu}>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Education">Education</a></li>
          <li><a href="#Content">Contact</a></li>
        </ul>
          <input id="checkbox" type="checkbox" checked={menu} onChange={handleMenu} />
          <label className="toggle" htmlFor="checkbox">
            <div id="bar1" className="bars"></div>
            <div id="bar2" className="bars"></div>
            <div id="bar3" className="bars"></div>
          </label>
      </nav>
    </div>
  );
}

export default Navbar;
