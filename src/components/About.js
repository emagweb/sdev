import React from 'react'
import Title from './Title'
import icon001 from '../assets/icons/cpu.svg'
import icon002 from '../assets/icons/command.svg'
import icon003 from '../assets/icons/cluster.svg'
import icon004 from '../assets/icons/map.svg'

function About() {
  return (
    <section id="about_block" className="container text-center pv-80">
      <Title
        type="section__title flag"
        text="Who We Are?"
      />
      <div className="container">
        <div className="half text-left pv-80 ph-10">
          <img src={icon001} alt="icon" />
          <p className="about__text">
            We have in-depth experience in data science, data visualization, IoT, advanced mathematics, embedded systems, DSP and telecommunication. We are eager to face new challenges – just bring them on!</p>
          <div className="pv-20"></div>
          <img src={icon002} alt="icon" />
          <p className="about__text">
            Slash Devs was founded in 2012. Backed by a rich history and solid traditions, our sincere desire to innovate and help our clients’ businesses became our drivers for success. We have grown dynamically, constantly expanding the range, and raising the quality of our services.</p>
        </div>
        <div className="half text-left pv-80">
          <img src={icon003} alt="icon" />
          <p className="about__text">Slash Devs has extensive staff, with experts in different IT domains. A key point in our HR policy is the provision of exceptional opportunities for A+ growth and self-actualization.</p>
          <div className="pv-20"></div>
          <img src={icon004} alt="icon" />
          <p className="about__text">
            Our company’s success relies on collaboration with clients based on trust and mutual respect, Our systematic approach to any project activity is grounded in our rich experience and deep expertise in modern IT. We endeavor to work so that each client, regardless of their order size, becomes our long-term partner.</p>
        </div>
      </div>
    </section>
  )
}

export default About