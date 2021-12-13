import React from 'react'

import Logo from '../assets/logo.svg'


function Footer() {
  return (
    <footer id="footer" className=" mt-auto py-3">
      <div className="containr">
        <div className="text-center">
          &copy; Copyright <strong>Micalli Dev</strong>
          <div className="center">
            
            <img src={Logo} className="logo"/>
          </div>
          <div>            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
