import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    message: ''
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <form
        className="form"
        id="contact-form"
        method="POST"
        action="https://formspree.io/anan.daraghmeh@yahoo.com"
      >
        <h4 className="form_title">
          <FontAwesomeIcon icon={faEnvelope} /> SEND ME A MESSAGE:
        </h4>
        <div className="form_group">
          <input
            onChange={this.onInputChange}
            value={name}
            type="text"
            placeholder="Your Name"
            name="name"
          />
        </div>
        <div className="form_group">
          <input
            onChange={this.onInputChange}
            value={email}
            type="email"
            placeholder="Your Email"
            name="email"
          />
        </div>
        <div className="form_group">
          <textarea
            onChange={this.onInputChange}
            value={message}
            name="message"
            placeholder="Your message..."
          />
        </div>
        <button className="btn btn-green" type="submit">
          Send
        </button>
      </form>
    );
  }
}

export default ContactForm;
