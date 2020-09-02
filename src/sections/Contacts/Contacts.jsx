import React, { Component } from 'react';
import './Contacts.css';

class Contact extends Component {
  render() {
    return (
      <div className='contact-section' id='contact'>
        <div className='contactInfo'>
          <h4 className='status'>Get in touch </h4>

          <p className='sub-details'>
            I'm currently available for a full time role and to take on new
            projects. <br /> Kindly reach out to me if there are job
            opportunities you'd like me to know about.
          </p>
          <div className='mailLink '>
            <a href='mailto:jamiuazeez49@gmail.com' target='blank'>
              Hit Me
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
