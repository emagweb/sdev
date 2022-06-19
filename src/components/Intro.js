import React from 'react'
import flag from '../assets/img/flag.png'

const formUrl = 'https://typeform.com'

function Intro() {
  return (
    <div className="intro">
      <div className="container text-center">
        <div className="intro__content">
          <div className="pv-40"></div>
          <h3 className="intro__subtitle flag">We are building a digital world<img src={flag} alt="flag" /></h3>
          <h2 className="intro__title">We are a software team<br />from Ukraine</h2>
          <div className="pv-40"></div>
          <a className="button-white" href={formUrl}>Free Inquiry</a>
          <div className="pv-40"></div>
        </div>
      </div>
    </div>
  )
}

export default Intro