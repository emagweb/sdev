import React from 'react'
import google from '../assets/img/google-play.png'
import apple from '../assets/img/app-store.png'
import windows from '../assets/img/windows-store.png'
import shareFacebook from '../assets/img/icons/share/facebook.svg'
import shareGoogle from '../assets/img/icons/share/google.svg'
import shareInstagram from '../assets/img/icons/share/instagram.svg'
import shareLinkedin from '../assets/img/icons/share/linkedin.svg'
import shareMedium from '../assets/img/icons/share/medium.svg'
import shareTwitter from '../assets/img/icons/share/twitter.svg'
import Title from './Title'

const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScIAD7R5fvJsB8aNNVHF0zfi9rEPrlzQyhC4Si9ehfJzxJcFw/viewform?usp=pp_url'

const Android = formUrl + '&entry.1004065685=Android'
const iPhone = formUrl + '&entry.1004065685=iPhone'


function Download() {
  return (
    <section id="download_block">
      <Title
        type="section-title__blue"
        text="Free Download HeyBoss Now"
      />
      <div className="container text-center">
        <div className="download">
          <a className="download__link" href={iPhone}>
            <img src={apple} className="download__img" alt="Download on the App Store" />
          </a>
          <a className="download__link" href={Android}>
            <img src={google} className="download__img" alt="Get it on Google Play" />
          </a>
          <a className="download__link" href={formUrl}>
            <img src={windows} className="download__img" alt="Download from Windows Store" />
          </a>
        </div>
        <h4 className="share__title">Share App with your Friends & Teams</h4>
        <div className="share">
          <span className="share__link">
            <img src={shareFacebook} className="share__image" alt="Facebook" />
          </span>
          <span className="share__link">
            <img src={shareGoogle} className="share__image" alt="Google" />
          </span>
          <span className="share__link">
            <img src={shareInstagram} className="share__image" alt="Instagram" />
          </span>
          <span className="share__link">
            <img src={shareLinkedin} className="share__image" alt="Linkedin" />
          </span>
          <span className="share__link">
            <img src={shareMedium} className="share__image" alt="Medium" />
          </span>
          <span className="share__link">
            <img src={shareTwitter} className="share__image" alt="Twitter" />
          </span>
          {/* <a className="share__link" href="/">
            <img src={shareFacebook} className="share__image" alt="Facebook" />
          </a>
          <a className="share__link" href="/">
            <img src={shareGoogle} className="share__image" alt="Google" />
          </a>
          <a className="share__link" href="/">
            <img src={shareInstagram} className="share__image" alt="Instagram" />
          </a>
          <a className="share__link" href="/">
            <img src={shareLinkedin} className="share__image" alt="Linkedin" />
          </a>
          <a className="share__link" href="/">
            <img src={shareMedium} className="share__image" alt="Medium" />
          </a>
          <a className="share__link" href="/">
            <img src={shareTwitter} className="share__image" alt="Twitter" />
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default Download