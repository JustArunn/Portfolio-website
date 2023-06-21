import React from "react";

const Footer = () => {

  let d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="footer">
      <p className="text-copy">Copyright &copy;  {year} JustArun</p>
      <p className="text-mark">
        Made with <span className="heart">❤</span> by Arun
      </p>
    </footer>
  );
};

export default Footer;
