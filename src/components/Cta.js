import React from 'react'
import Title from './Title'

const formUrl = 'https://typeform.com'

function Cta() {
  return (
    <section className="cta-block ssection-block pv-80">
      <Title
        type="section__title white"
        text="Submit your RFP"
      />
      <div className="container text-center">
        <div className="cta">
          <p className="subtitle__text white">We provide a proposal for 15 days after submission.</p>
          <a className="button-white" href={formUrl}>Submit</a>
        </div>
      </div>
    </section>
  );
}

export default Cta