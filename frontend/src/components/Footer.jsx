import React from "react";

function Footer({ className }) {
  return (
    <footer className={className}>
      <p className="footer__copy">
        Criado e desenvolvido por Pehoffmann &copy; | {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
