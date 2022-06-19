import React from 'react'
import Menu from './Menu'

function Header() {
  return (
    <section id="top_block">
      <div className="container">
        <div className="hb-burger">
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </div>
        <Menu></Menu>
      </div>
    </section>
  );
}

export default Header