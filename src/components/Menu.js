import React from 'react'
import logo from '../assets/svg/logo.svg'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <>
      <h1 className="hb-logo">
        <a className="hb-logo__link scroll" href="#site_content">
          <img src={logo} className="hb-logo__img" alt="IT Sprout" />
        </a>
      </h1>
      <div className="hb-menu">
        <Link to="/offer" className="hb-menu__link">Offer</Link>
        <Link to="/team" className="hb-menu__link">Team</Link>
        <Link to="/contact" className="hb-menu__link">Contact</Link>
      </div>
    </>
  );
}

export default Menu