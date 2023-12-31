import React from "react";
const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="logo">
          <h2 className="header-logo">Arun</h2>
        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
