import React from 'react'
import Industries from './Industries'

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      position: '',
      value: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const position = target.position;

    this.setState({
      [name]: value,
      [position]: value
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
 

  render() {
    
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe4fnztupk8V5r6i7fuuDxTs0gP-PUac0VzuDTvewSimLLmWA/viewform?=' + this.state.name + '&amp;=' + this.state.position + '&amp;=' + this.state.value;

    return (

      <section id="survey_block">
        <h3 className="survey__title">Take a quick survey, share your remote work experience, help us to increase your productivity and make your work more comfortable.</h3>
        <div className="container text-center"> 
          <form className="survey__form" action={formUrl}>       
            <input 
              className="survey__input survey__input--user"
              name="entry.1054898899"
              type="text"
              value={this.state.Name}
              onChange={this.handleInputChange}
              placeholder="Name" 
              required 
            />
            <input 
              className="survey__input survey__input--position" 
              name="entry.1422271249"
              type="text"
              value={this.state.Position}
              onChange={this.handleInputChange}
              placeholder="Position" 
              required 
            />
            <select name="entry.334940232" className="survey__input survey__input--industry" value={this.state.value} onChange={this.handleChange}>
              <Industries />
            </select>
            <button type="submit" className="survey__submit">Take a survey</button>
          </form> 
        </div>
        <p className="survey__text">We guarantee the confidentiality of your data and will never transfer it to third parties. All information received will be used solely to improve the application.</p>
      </section>
    );
  }
}

export default Survey