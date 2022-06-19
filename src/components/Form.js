import React, { Component } from 'react';

class Form extends Component {

  componentWillMount () {
    const script = document.createElement("script");

    script.src = "https://form.jotform.com/211813077678058";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {

    return (
      <>       
        <iframe
          id="JotFormIFrame-211813077678058"
          title="contact-form-heyboss"
          onload="window.parent.scrollTo(0,0)"
          allowtransparency="true"
          allowfullscreen="true"
          allow="geolocation; microphone; camera"
          src="https://form.jotform.com/211813077678058"
          frameborder="0"
          scrolling="no"
        >
        </iframe>
      </>
    );
  }
}

export default Form